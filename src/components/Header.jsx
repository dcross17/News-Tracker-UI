import React from 'react';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

function Header({ setLoggedIn, loggedIn, setUser, user }) {

    const logOut = () => {
        localStorage.removeItem("token");
        sessionStorage.removeItem("user");
        setLoggedIn(false);
        setUser({});
        navigate("/");
    }

    return (
        <header className="p-2 flex justify-between items-center">
            <h1 className="text-2xl">News Tracker</h1>
            <nav>
                <ul className="flex space-x-4">
                    {loggedIn ? (
                    
                        <li>
                            <button className='p-2'><a href="/" className="hover:underline" onClick={logOut}>Logout</a></button>
                        </li>
                   
                    ) : (
                    <>
                        <li>
                            <button className='p-2'><a href="/login" className="hover:underline">Log In</a></button>
                        </li>
                        <li>
                            <button className='rounded bg-blue-700 p-2 m1-1'><a href="/signup" className="text-white hover:underline">Sign Up</a></button>
                        </li>
                     </>
                    )}
                </ul>
            </nav>
        </header>
    );
}

export default Header;