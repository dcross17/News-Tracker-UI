import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Favorites from './pages/Favorites';
import Preferences from './pages/Preferences';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(() =>{
    const savedUser = sessionStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : '';
  });


  useEffect(() => {
    if (localStorage.getItem("token")) {
      console.log("User is logged in", user.name);
      setLoggedIn(true);
    }
  }, []);

  return (
    <>
        <Router>
        <Routes>
          <Route path="/" element={<Home loggedIn={loggedIn} setLoggedIn={setLoggedIn} user={user} setUser={setUser} />} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setUser={setUser} />} />
          <Route path="/signup" element={<Signup setLoggedIn={setLoggedIn} setUser={setUser} />} />
          <Route path="/favorites" element={<Favorites loggedIn={loggedIn} user={user}  setUser={setUser} />} />
          <Route path="/preferences" element={<Preferences loggedIn={loggedIn} user={user}  setUser={setUser} />} />
        </Routes>
       </Router> 
    </>
  )
}