import { useState, useEffect } from 'react'
import styles from './App.module.scss'


export default function App(){
    const [users, setUsers] = useState([])
    const [newUser, setNewUser] = useState({
        title: '',
        completed: false
    })

    //createUsers
    const createUser = async () => {
        const body = {...newUser}
        try {
            const response = await fetch('/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })
            const createdUser = await response.json()
            const usersCopy = [createdUser,...users]
            setUsers(usersCopy)
            setNewUser({
                title: '',
                completed: false
            })
        } catch (error) {   
            console.error(error)
        }
    }
    //deleteUsers
    const deleteUser = async (id) => {
        try {
            const index = completedUsers.findIndex((user) => user._id === id)
            const completedUsersCopy = [...completedUsers]
            const response = await fetch(`/api/users/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            await response.json()
            completedUsersCopy.splice(index, 1)
            setCompletedUsers(completedUsersCopy)
        } catch (error) {
            console.error(error)
        }
    }
    //moveToCompleted
    const moveToCompleted = async (id) => {
        try {
            const index = users.findIndex((user) => user._id === id)
            const usersCopy = [...users]
            const subject = usersCopy[index]
            subject.completed = true 
            const response = await fetch(`/api/users/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(subject)
            })
            const updatedUser = await response.json()
            const completedTDsCopy = [updatedUser, ...completedUsers]
            setCompletedUsers(completedTDsCopy)
            usersCopy.splice(index, 1)
            setUsers(usersCopy)
        } catch (error) {
            console.error(error)
        }
    }
    //getUsers
    const getUsers = async () => {
        try{
            const response = await fetch('/api/users')
            const foundUsers = await response.json()
            setUsers(foundUsers.reverse())
            console.log('hey')
            const responseTwo = await fetch('/api/users/completed')
            const foundCompletedUsers = await responseTwo.json()
            setCompletedUsers(foundCompletedUsers.reverse())
        } catch(error){
            console.error(error)
        }
    }
    useEffect(() => {
        getUsers()
    }, [])
    return(
        <>
            <h1>Hello world</h1>
        </>
    )
}