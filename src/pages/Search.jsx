import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import Article from '../components/Article';
import Header from '../components/Header';
import apiData from '../public/apiData';

function Search({loggedIn, user, setUser }) {
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [keyword, setKeyword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const handleTabClick = (category) => {
        setCategory(category);
        setActiveTab(category);
    };

    const handleFavoritesClick = (article) => {
        navigate('/favorites'); // Redirect to the favorites page
    };

    useEffect(() => {
        const keyword = new URLSearchParams(location.search).get('keyword');
        console.log(keyword);
        setKeyword(keyword);
        if(keyword !== null && keyword !== undefined) {
            setLoading(true);
            
            //setNews(apiData);
            //setLoading(false);
            axios.get(`http://localhost:3003/search?keyword=${keyword}`)
                .then((response) => {
                    setSearchResults(response.data.articles);
                    setLoading(false);
                })
                .catch((error) => {
                    setError(error);
                    setLoading(false);
                });
        }
    }, [location.search]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <>
            <Header loggedIn={loggedIn} user={user} setUser={setUser} />
            <h1 className="mb-4 text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Search Results</h1>
            <div>
                <ul className="grid grid-cols-4 gap-4">
                    {searchResults.length === 0 ? (
                        <div className="col-span-4 text-center text-gray-700">No results were found</div>
                    ) : (
                    searchResults.slice(0, 20).map((article, index) => (
                        (article.content !== null && article.content !== undefined && article.content !== "[Removed]") ? (
                            <Article key={index} article={article} setUser = {setUser} user = {user} />
                        ) : null
                     ))
                    )}
                </ul>
            </div>
        </>
    );
}

export default Search;