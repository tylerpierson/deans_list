import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import styles from './App.module.scss'
import { indexUsers, getUser } from './utilities/users-service'

import NavBar from './components/NavBar/NavBar'
import HomePage from './pages/HomePage/HomePage'
import AuthPage from './pages/AuthPage/AuthPage'
import DataPage from './pages/DataPage/DataPage'
import AdminPage from './pages/AdminPage/AdminPage'
import TeacherPage from './pages/TeacherPage/TeacherPage'
import StudentPage from './pages/StudentPage/StudentPage'
import ParentPage from './pages/ParentPage/ParentPage'


export default function App(){
    const [user, setUser] = useState(getUser());
    const [users, setUsers] = useState([]);
    const [showAdminCreateForm, setShowAdminCreateForm] = useState(false);
    const [showTeacherCreateForm, setShowTeacherCreateForm] = useState(false);
    const [showParentCreateForm, setShowParentCreateForm] = useState(false);
    const [showStudentCreateForm, setShowStudentCreateForm] = useState(false);

    const updateUser = async (userData) => {
        const userId = user._id; // Assuming you have the user's ID in your state
        const token = localStorage.getItem('token'); // Retrieve the token from local storage or your state management
        try {
            const response = await fetch(`/api/users/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` // Include the authorization token in the request
                },
                body: JSON.stringify(userData)
            });
            if (!response.ok) {
                const error = await response.text();
                throw new Error(error || 'Profile update failed');
            }
            const updatedUser = await response.json();
            setUser(updatedUser); // Update user state with the updated data
            return updatedUser;
        } catch (error) {
            console.error('Update failed:', error);
            return null;
        }
    };
      
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const fetchedUser = await getUser();
                setUser(fetchedUser);
            } catch (error) {
                console.error('Failed to fetch user:', error);
                setUser(null);
            }
        };
    
        fetchUser();
    }, []); // Removed 'user' from the dependency array because it was running an endless loop which was breaking the page
    

    return(
        <>
    <NavBar 
            setUser={setUser}
            user={user}
            users={users}
        />
        <div className={styles.App}>
            <Routes>
                <Route path='/' element={<HomePage user={user} setUser={setUser} users={users} setUsers={setUsers}/>} />
                <Route path='/auth' element={<AuthPage user={user} setUser={setUser}/>} />
                <Route path='/data' element={<DataPage />} />
                <Route path='/admin' element={<AdminPage 
                    user={user} 
                    showAdminCreateForm={showAdminCreateForm}
                    setShowAdminCreateForm={setShowAdminCreateForm}
                    showParentCreateForm={showParentCreateForm}
                    setShowParentCreateForm={setShowParentCreateForm}
                    showStudentCreateForm={showStudentCreateForm}
                    setShowStudentCreateForm={setShowStudentCreateForm}
                    showTeacherCreateForm={showTeacherCreateForm}
                    setShowTeacherCreateForm={setShowTeacherCreateForm}
                    />} />
                <Route path='/teacher' element={<TeacherPage 
                    user={user} 
                    setShowParentCreateForm={setShowParentCreateForm}
                    showParentCreateForm={showParentCreateForm}
                    setShowStudentCreateForm={setShowStudentCreateForm}
                    showStudentCreateForm={showStudentCreateForm}
                    />} />
                <Route path='/student' element={<StudentPage user={user} />} />
                <Route path='/parent' element={<ParentPage user={user} />} />
            </Routes>
        </div>
        </>
    )
}