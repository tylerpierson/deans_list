import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import styles from './App.module.scss'
import { indexUsers, getUser, getToken } from './utilities/users-service'

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
    const [token, setToken] = useState(getToken())
    const [showAdminCreateForm, setShowAdminCreateForm] = useState(false);
    const [showTeacherCreateForm, setShowTeacherCreateForm] = useState(false);
    const [showParentCreateForm, setShowParentCreateForm] = useState(false);
    const [showStudentCreateForm, setShowStudentCreateForm] = useState(false);
      
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
                    token={token}
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