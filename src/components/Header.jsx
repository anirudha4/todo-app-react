import React, { useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext';

export default function Header({text, showIntro}) {
    const {user, setIsLoggedIn} = useContext(TodoContext)
    return (
        <div className="header">
            {showIntro && (
                <>
                    <small className="date">{getDate()}</small>
                    <br />
                    <small className="name">Welcome {user},</small>
                </>
            )}
            <h2>{text}</h2>
            {showIntro && (
                <div  className="logout" onClick={e => setIsLoggedIn({
                    status: false, as: ''
                })}><span className="fas fa-sign-out-alt"></span></div>
            )}
            <hr/>
        </div>
    )
}

function getDate() {
    const months = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = today.getMonth()
    var yyyy = today.getFullYear();
    today = `${dd}th ${months[mm]}, ${yyyy}`
    return today;
}