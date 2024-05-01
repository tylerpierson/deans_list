import * as usersAPI  from './users-api';
const BASE_URL = '/api/users';

export async function getToken() {
    const token = localStorage.getItem('token');
    // getItem will return null if no key
    if (!token) return null;
    const payload = JSON.parse(atob(token.split('.')[1]));
    // A JWT's expiration is expressed in seconds, not miliseconds
    if (payload.exp < Date.now() / 1000) {
        // Token has expired
        localStorage.removeItem('token');
        return null;
    }
    return token;
}

export async function getUser() {
    const token = await getToken();
    if (!token) return null; // Return null if token is missing
    try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        return payload.user; // Return user object from token payload
    } catch (error) {
        console.error("Error parsing user from token:", error);
        return null; // Return null if there's an error parsing the token
    }
}

export function logOut() {
    localStorage.removeItem('token');
  }

  export async function indexUsers() {
    try {
      const foundUsers = await usersAPI.index()
      return foundUsers
    } catch (error) {
      console.error("Error finding users", error)
    }
  }