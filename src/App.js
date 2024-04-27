import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import styles from './App.module.scss'

import NavBar from './components/NavBar/NavBar'
import HomePage from './pages/HomePage/HomePage'
import AuthPage from './pages/AuthPage/AuthPage'
import DataPage from './pages/DataPage/DataPage'
import AdminPage from './pages/AdminPage/AdminPage'
import TeacherPage from './pages/TeacherPage/TeacherPage'
import StudentPage from './pages/StudentPage/StudentPage'
import ParentPage from './pages/ParentPage/ParentPage'


export default function App(){
    const [users, setUsers] = useState([])

    //getUsers
    const getUsers = async () => {
        try{
            const response = await fetch('/api/users')
            const foundUsers = await response.json()
            setUsers(foundUsers.reverse())
        } catch(error){
            console.error(error)
        }
    }
    useEffect(() => {
        getUsers()
    }, [])
    return(
        <>
        <NavBar />
        <div className={styles.App}>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/auth' element={<AuthPage />} />
                <Route path='/data' element={<DataPage />} />
                <Route path='/admin' element={<AdminPage />} />
                <Route path='/teacher' element={<TeacherPage />} />
                <Route path='/student' element={<StudentPage />} />
                <Route path='/parent' element={<ParentPage />} />
            </Routes>
        </div>
        </>
    )
}