import React from 'react';
import './Navbar.css';

export default function Navbar() {
    return (
        <div className="container">
            <nav className="navigation">
                <li>Home</li>
                <li>Explore</li>
                <li>Notifications</li>
                <li>Messages</li>
                <li>Bookmarks</li>
                <li>Lists</li>
                <li>Profile</li>
                <li>More</li>
            </nav>
            <button className="lrg-blue-tweet">Tweet</button>
        </div>
    )
}
