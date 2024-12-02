import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Article from '../components/Article';
import apiData from '../public/apiData';

function News({ user, setUser }) {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const categories = ["business", "entertainment", "general", "health", "science", "sports", "technology"];
    const [category, setCategory] = useState(user.preferences.length > 0 ? user.preferences[0] : categories[0]);
    const [activeTab, setActiveTab] = useState(category);
    const [userPreferences, setUserPreferences] = useState(user.preferences.length > 0 ? user.preferences : ['General']);

    const handleTabClick = (category) => {
        setCategory(category);
        setActiveTab(category);
    };

    const handleReadLater = (article) => {
        setReadLater([...readLater, article]);
    };

    const handleFavorite = (article) => {
        setFavorites([...favorites, article]);
    };

    useEffect(() => {
        setLoading(true);
        console.log(user);
        setNews(apiData);
        setLoading(false);
        /*axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=39415c8b1d3f435d8ac0df3c0f5365a9`)
            .then((response) => {
                console.log(response.data.articles);
                setNews(response.data.articles);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });*/
    }, [category]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <>
            <h1 className="mb-4 text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">{user.name}'s News Feed</h1>
            <div>
                <ul className="tabs">
                    {userPreferences.map((pref, index) => (
                        <li
                            key={index}
                            className={`tab ${activeTab === pref ? 'active' : ''}`}
                            onClick={() => handleTabClick(pref)}
                        >
                            {pref}
                        </li>
                    ))}
                </ul>
                <ul className="grid grid-cols-4 gap-4">
                    {news.slice(0, 20).map((article, index) => (
                        (article.content !== null && article.content !== undefined && article.content !== "[Removed]") ? (
                            <Article key={index} article={article} setUser = {setUser} user = {user} />
                        ) : null
                    ))}
                </ul>
            </div>
        </>
    );
}

export default News;