import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';

import Navbar from './components/Navbar.js';
import Searchbar from './components/Searchbar';

function App() {

  const [Data, setData] = useState([]);
  
  const getData = () => {
    Axios.get("http://localhost:4000/users")
    .then((res) => {console.log(res);
      setData(res.data)
    }
    )
    .catch(console.error);
  }

  useEffect(getData, []);
  console.log(Data);
  return (
    <div className="App">
      <div><Navbar/></div>
      <div><Searchbar/></div>
    </div>
  );
}

export default App;
