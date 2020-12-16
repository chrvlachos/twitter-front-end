import React from 'react';
import './Navbar.css';
import {AiOutlineTwitter} from 'react-icons/ai';
import {BiHomeCircle} from 'react-icons/bi';

export default function Navbar() {
    return (
        <div className="Sidebar_Area">
          <div className="Twitter">
          <AiOutlineTwitter color='#1DA1F2' fontSize="2.3rem" />
          </div>
          <div className="Icons">
            <BiHomeCircle color="#1DA1F2" fontSize="2.3rem" />
          </div>
        </div>
    )
}
