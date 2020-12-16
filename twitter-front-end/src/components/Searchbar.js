import React, { useState } from 'react'
import './Searchbar.css';

import magnifier from '../img/magnifier.png';

const Searchbar = () => {

const [input, setInput] = useState("");

    return (
        <div className="search-container">
           <img className="search-icon" src={magnifier} alt="search-icon"/>
           <input type="text" value="Search Twitter" />
        </div>
    )
}

export default Searchbar;
