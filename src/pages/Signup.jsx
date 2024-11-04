import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

export default function Signup() {
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
        <div className='signup'>
            <h1>Sign up Page</h1>

            <form>
                <input type="name" onChange={(e) => setName(e.target.value)} placeholder="Username" />
                <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <input type="submit" value="Sign Up" onClick={submit} />
            </form>

            {message && <p>{message}</p>}
        </div>
    );
}