import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
    const [identifier, setIdentifier] = useState(''); // Updated variable name
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    async function submit(e) {
        e.preventDefault();

        try {
            const response = await axios.get(`http://localhost:3000/user/${identifier}/${password}`, 
                { identifier, password },
                { headers: { 'Content-Type': 'application/json' } }
            );
            
            setMessage(response.data.message);
            if (response.status === 200) {
                const {token} = response.data;
                localStorage.setItem('token', token);
                navigate('/'); // Redirect to homepage on successful login
            }
        } catch (err) {
            console.log(err);
            setMessage('Login failed. Please check your credentials.');
        }
    }

    return (
        <div className='login'>
            <h1>Login Page</h1>

            <form action='POST'>
                <input 
                    type="text" 
                    onChange={(e) => setIdentifier(e.target.value)} 
                    placeholder="Username or Email" 
                />
                <input 
                    type="password" 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Password" 
                />
                <input type="submit" value="Login" onClick={submit} />
            </form>

            {message && <p>{message}</p>}
        </div>
    );
}
