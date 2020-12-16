import React from 'react'
import './Userbar.css';


const Userbar = () => {
    return (
        <div className="userbar-container">
            <div className="user-info">
                <img className="profile-pic" src="" alt="user pic"/>
                <h2 className="user-name"></h2>
                <h4 className="user-handle"></h4>
            </div>
            <div className="general-info">
                <p className="user-description"></p>
            </div>
        </div>
    )
}

export default Userbar;
