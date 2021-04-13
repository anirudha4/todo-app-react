import React, { useContext, useEffect, useState } from 'react'
import { TodoContext } from '../contexts/TodoContext'
import logo from '../logo.svg'

export default function Welcome({isLoggedIn, setIsLoggedIn}) {
    const [username, setUsername] = useState('');
    const {setUser, setTodos} = useContext(TodoContext)
    const activeSession = JSON.parse(localStorage.getItem('activeSession')) || []
    useEffect(() => {
        localStorage.removeItem("")
    })
    function handleClick() {
        if(username === ''){
            return
        }
        else{
            if(!activeSession.includes(username)){
                localStorage.setItem('activeSession', JSON.stringify([...activeSession, username]))
                localStorage.setItem(username, JSON.stringify([]))
                setTodos(JSON.parse(localStorage.getItem(username)) || [])
            }
            else{
                const temp = JSON.parse(localStorage.getItem(username) || [])
                setTodos(temp)
            }
            setUser(username)
            setIsLoggedIn({
                status: true,
                as: username
            })
        }
    }
    function setActiveSession(e) {
        const temp = JSON.parse(localStorage.getItem(e.target.textContent)) || []
        setTodos(temp)
        setUser(e.target.textContent)
        setIsLoggedIn({
            status: true,
            as: e.target.textContent
        })
    }
    return (
        <div className="welcome-container">
            <img className="logo-landing" src={logo} alt=""/>
            <div className="welcome">
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                <button className="btn-next" onClick={handleClick}><span className="fas fa-arrow-right"></span></button>
            </div>
            {/* <p className="info">If you have already started session as one user please enter the same username</p> */}
            <div className="active-session">
                <>
                    <p className="title">Choose Session</p>
                    <>
                    {activeSession.length ? (
                        <>
                            {activeSession.map(user => (
                                <div className="user" onClick={setActiveSession} key={user}>{user}</div>
                            ))}
                        </>
                    ) : (
                        <p className="user">No Sessions</p>
                    ) }
                    </>
                </>
            </div>
        </div>
    )
}
