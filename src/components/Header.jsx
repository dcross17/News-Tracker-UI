import React from 'react';
import { useState, useEffect } from 'react';
import { FaInfoCircle, FaSearch } from 'react-icons/fa';
import {Link} from 'react-router-dom';
import { Tooltip } from 'react-tooltip'
import Preferences from '../pages/Preferences';

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
                <ul className="flex space-x-4 items-center">
                    {loggedIn ? (
                        <>
                            <li>
                                <div className='relative'>
                                    {/* Search input */}
                                    <input
                                    type="search"
                                    placeholder="Search for articles..."
                                    className="w-full py-2 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                    {/* Search button */}
                                    <button
                                    type="submit"
                                    className="absolute right-2 top-2.5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                    <FaSearch />
                                    </button>

                                </div>
                                
                            </li>
                            <li>
                                <button className='p-2'><a href="/" className="hover:underline" onClick={logOut}>Logout</a></button>
                            </li>
                            <li>
                                    <Link to="/preferences" className="hover:underline">Preferences</Link>
                            </li>
                        </>
                   
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
                    <li>
                        <FaInfoCircle data-tooltip-id = "infoTooltip" data-tooltip-content = "Change news categories" className="text-xl cursor-pointer" />
                        <Tooltip id="infoTooltip" place="bottom" effect="solid">
                            This is the News Tracker application. You can log in or sign up to get personalized news.
                        </Tooltip>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;