import React from 'react';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

function LandingPage({ setLoggedIn, setUser, user, loggedIn }) {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div>
                <h1 className="text-3xl font-bold text-center">Your News, Your Way</h1>
                <p className="text-center text-gray-700">Personalized news feed just for you</p>
                <h4 className="text-center text-gray-700">Take a few moments to sign up</h4>
                <div className="mt-4 text-center">
                    <p className="text-gray-700">
                        Already have an account? <Link to="/login" className="text-indigo-600 hover:underline">Login</Link>
                    </p>
                    <p className="text-gray-700">
                        New here? <Link to="/signup" className="text-green-600 hover:underline">Sign up today</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;