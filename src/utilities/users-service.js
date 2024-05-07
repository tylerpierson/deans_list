import * as usersAPI  from './users-api';
const BASE_URL = '/api/users';

export async function initialSignUp(userData) {
  const token = await usersAPI.initialSignUp(userData);
  localStorage.setItem('token', token);
  return getUser();
}

export async function signUp(userData) {
  const token = await usersAPI.signUp(userData);
  return getUser();
}

export async function login(credentials, rememberMe, navigate) {
  try {
    // Pass credentials and rememberMe option to the API call
    const token = await usersAPI.login({ ...credentials, rememberMe });
    localStorage.setItem('token', token);
    const user = getUser();
    console.log("User:", user);
    
    // Redirect to homepage upon successful login
    navigate('/');  // Replace '/' with the path of your homepage

    return user;
  } catch (error) {
    console.error("Login Error:", error);
    throw error;
  }
}

export function getToken() {
  const token = localStorage.getItem('token');
  if (!token) return null;
  const payload = JSON.parse(atob(token.split('.')[1]));
  if (payload.exp < Date.now() / 1000) {
    localStorage.removeItem('token');
    return null;
  }
  return token;
}

export function getUser() {
  const token = getToken();
  if (!token) return null; // Return null if token is missing
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.user; // Return user object from token payload
  } catch (error) {
    console.error("Error parsing user from token:", error);
    return null; // Return null if there's an error parsing the token
  }
}

export async function getProfileUser(userId) {
  try {
    const foundUser = await usersAPI.findUser(userId)
    return foundUser
  } catch (error) {
    console.error("Error finding users", error)
  }
}

export async function indexUsers() {
  console.log('indexing users')
  try {
    const foundUsers = await usersAPI.index()
    return foundUsers
  } catch (error) {
    console.error("Error finding users", error)
  }
}

export function logOut() {
  localStorage.removeItem('token');
}

// Password reset functions
export async function resetPassword(emailData) {
  try {
    await usersAPI.resetPassword(emailData);
    return true;
  } catch (error) {
    console.error("Password Reset Error:", error);
    throw new Error("Failed to reset password.");
  }
}

export async function updatePasswordWithToken(token, passwordData) {
  try {
    const response = await fetch(`/api/users/reset-password/${token}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(passwordData),
    });

    if (!response.ok) {
      throw new Error('Failed to update password');
    }

    return true; // Password update successful
  } catch (error) {
    console.error('Password Update Error:', error);
    throw new Error('Failed to update password.');
  }
}

// New function for support ticket request
export async function customerSupportRequest(formData) {
  try {
    // Log FormData entries
    for (const entry of formData.entries()) {
      console.log(entry);
    }
    
    // Make POST request for support ticket using FormData
    const response = await fetch(`${BASE_URL}/support`, {
      method: 'POST',
      body: formData, // Pass formData directly as the body
    });

    if (response.ok) {
      return true; // Support ticket request successful
    } else {
      throw new Error('Failed to submit support ticket');
    }
  } catch (error) {
    console.error('Support Ticket Request Error:', error);
    throw new Error('Failed to submit support ticket.');
  }
}