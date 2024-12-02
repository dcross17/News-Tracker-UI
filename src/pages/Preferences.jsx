import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import axios from "axios";

const categories = ["business", "entertainment", "general", "health", "science", "sports", "technology"];

function Preferences({loggedIn, user, setUser }) {



    const [preferences, setPreferences] = useState(user.preferences || []);
    const [initialPreferences, setInitialPreferences] = useState(user.preferences || []);
    const [message, setMessage] = useState("");

    const togglePreference = (category) => {
        if (preferences.includes(category)) {
            setPreferences(preferences.filter((pref) => pref !== category));
        } else {
            setPreferences([...preferences, category]);
        }
    };


    useEffect(() => {  
        console.log("User: ", user);

    }, []);

    const saveChanges = async () => {
        try {
            console.log("User ID: ", user._id);
            const response = await axios.put(`http://localhost:3000/users/${user._id}`, 
                { preferences },
                { headers: { 'Content-Type': 'application/json' } }
            );
            console.log(response.data.user);
            setUser(response.data.user);
            sessionStorage.setItem('user', JSON.stringify(response.data.user));
            setInitialPreferences(response.data.user.preferences);
            setMessage("Preferences updated successfully!");
        } catch (error) {
            console.error(error);
            setMessage("Failed to update preferences.");
        }
    };

    const addedCategories = preferences.filter(category => !initialPreferences.includes(category)).length;
    const removedCategories = initialPreferences.filter(category => !preferences.includes(category)).length;

    return (
        <>
        <Header loggedIn={loggedIn} user={user} setUser={setUser} />
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
                <h1 className="text-2xl font-bold text-center">Preferences</h1>
                <h4 className="text-center text-gray-700">Take a few moments to select your preferred categories</h4>
                <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => togglePreference(category)}
                                className={`p-2 rounded ${preferences.includes(category) ? 'bg-blue-500 text-white' : 'bg-gray-200'} ${preferences.includes(category) ? 'hover:bg-red-500' : 'hover:bg-blue-300'}`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                    <p className="text-center text-gray-700">
                        {addedCategories > 0 && `Adding ${addedCategories} categor${addedCategories == 1 ? 'y' : 'ies'}. `}
                        {removedCategories > 0 && `Removing ${removedCategories} categor${removedCategories == 1 ? 'y' : 'ies'}.`}
                    </p>
                    <button
                        onClick={saveChanges}
                        className="w-full px-4 py-2 font-bold text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-200"
                    >
                        Save Changes
                    </button>
                    {message && <p className="mt-4 text-center text-red-500">{message}</p>}
                </div>
            </div>
        </div>
        </>
    );
}

export default Preferences;