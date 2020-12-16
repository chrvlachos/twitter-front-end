import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import './Navbar.css';

import logo from '../img/Twitter-Logo.png';
import home from '../img/home.png';
import email from '../img/email.png';
import bell from '../img/bell.png';
import bookmark from '../img/bookmark.png';
import files from '../img/files.png';
import hashtag from '../img/hashtag.png';
import user from '../img/user.png';
import more from '../img/more.png';

const Navbar = () => {
    return (
        <div className="container">
            <img className="twitter-logo" src={logo} alt="logo"/>
            <div className="navigation">
                <div className="nav-item">
                  <img className="nav-icon" src={home} alt="icon-1"/>
                  <li>Home</li>
                </div>
                <div className="nav-item">
                  <img className="nav-icon" src={hashtag} alt="icon-1"/>
                  <li>Explore</li>
                </div>
                <div className="nav-item">
                  <img className="nav-icon" src={bell} alt="icon-1"/>
                  <li>Notifications</li>
                </div>
                <div className="nav-item">
                  <img className="nav-icon" src={email} alt="icon-1"/>
                  <li>Messages</li>
                </div>
                <div className="nav-item">
                  <img className="nav-icon" src={bookmark} alt="icon-1"/>
                  <li>Bookmarks</li>
                </div>
                <div className="nav-item">
                  <img className="nav-icon" src={files} alt="icon-1"/>
                  <li>Lists</li>
                </div><div className="nav-item">
                  <img className="nav-icon" src={user} alt="icon-1"/>
                  <li>Profile</li>
                </div><div className="nav-item">
                  <img className="nav-icon" src={more} alt="icon-1"/>
                  <li>More</li>
                </div>
            </div>
            <button className="lrg-blue-tweet">Tweet</button>
        </div>
    )
}

export default Navbar;
