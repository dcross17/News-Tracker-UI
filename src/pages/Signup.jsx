import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup({setLoggedIn, setUser}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    async function submit(e) {
        e.preventDefault();
        if (!name || !email || !password) {
            setMessage('Please fill out all fields');
            return;
        }
        await axios.post('http://localhost:3000/users', 
            { name: name, email: email, password: password, preferences: [], saved: [], favorites: [] },
            {headers: {'Content-Type': 'application/json'}}
        ).then((response) => {
            console.log(response.data.message);
            setMessage(response.data.message);
            redirectPage();
        }).catch((err) => {
            console.log(err);
            setMessage('User already exists');
        });
    }

    function redirectPage() {
        setTimeout(() => {
            navigate('/');
        }, 2000);
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
                <h1 className="text-2xl font-bold text-center">Sign Up Page</h1>
                <form className="space-y-4" onSubmit={submit}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input 
                            type="text" 
                            onChange={(e) => setName(e.target.value)} 
                            placeholder="Name" 
                            className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input 
                            type="email" 
                            onChange={(e) => setEmail(e.target.value)} 
                            placeholder="Email" 
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
                            value="Sign Up" 
                            className="w-full px-4 py-2 font-bold text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-200"
                        />
                    </div>
                </form>
                {message && <p className="mt-4 text-center text-red-500">{message}</p>}
            </div>
        </div>
    );
}

export default Signup;