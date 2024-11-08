import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

export default function Login({ setLoggedIn, setUser }) {
    const [identifier, setIdentifier] = useState(''); // Updated variable name
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    async function submit(e) {
        e.preventDefault();

        try {
            const response = await axios.get(`http://localhost:3000/users/${identifier}/${password}`, 
                { identifier, password },
                { headers: { 'Content-Type': 'application/json' } }
            );
            
            setMessage(response.data.message);
            if (response.status === 200) {
                const {token, user} = response.data;
                localStorage.setItem('token', token);
                sessionStorage.setItem('user', JSON.stringify(user));
                setLoggedIn(true);
                setUser(user);
                navigate('/'); // Redirect to homepage on successful login
            }
        } catch (err) {
            console.log(err);
            setMessage('Login failed. Please check your credentials.');
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
                <h1 className="text-2xl font-bold text-center">Login Page</h1>
                <form className="space-y-4" onSubmit={submit}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Username or Email</label>
                        <input 
                            type="text" 
                            onChange={(e) => setIdentifier(e.target.value)} 
                            placeholder="Username or Email" 
                            className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input 
                            type="password" 
                            onChange={(e) => setPassword(e.target.value)} 
                            placeholder="Password" 
                            className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                        />
                    </div>
                    <div>
                        <input 
                            type="submit" 
                            value="Login" 
                            className="w-full px-4 py-2 font-bold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200"
                        />
                    </div>
                </form>
                {message && <p className="mt-4 text-center text-red-500">{message}</p>}
            </div>
        </div>
    );
}
