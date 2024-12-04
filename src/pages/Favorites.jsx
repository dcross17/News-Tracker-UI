import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Article from '../components/Article';
import Header from '../components/Header';
import apiData from '../public/apiData';

function Favorites({ loggedIn, user, setUser }) {
    const [favorites, setFavorites] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [category, setCategory] = useState(user.preferences.length > 0 ? user.preferences[0] : categories[0]);
    const [activeTab, setActiveTab] = useState(category);

    useEffect(() => {
        setLoading(true);
        console.log(user);
        //setFavorites(apiData);
        //setLoading(false);
        const favoriteUrls = user.favorites.join(',');
        console.log(favoriteUrls);
        axios.get(`http://localhost:3001/articles?favorites=${favoriteUrls}`)
            .then((response) => {
                console.log(response);
                setFavorites(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <>
            <Header loggedIn={loggedIn} user={user} setUser={setUser} />
            <h1 className="mb-4 text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">{user.name}'s News Feed</h1>
            <div>
                <ul className="grid grid-cols-4 gap-4">
                    {favorites && favorites.slice(0, 20).map((article, index) => (
                        (article.content !== null && article.content !== undefined && article.content !== "[Removed]") ? (
                            <Article key={index} article={article} setUser = {setUser} user = {user} />
                        ) : null
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Favorites;