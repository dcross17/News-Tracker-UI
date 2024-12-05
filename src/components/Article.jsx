import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Article({ article, setUser, user }) {
    const [favorites, setFavorites] = useState(user.favorites || []); // Initial favorites
    const [isFavorite, setIsFavorite] = useState(false); // Tracks if the current article is favorited
    const [sentiment, setSentiment] = useState('neutral'); // Tracks the sentiment of the article

    // Check if the current article is in favorites
    useEffect(() => {
        // Ensure favorites state is up-to-date with the user prop
        setFavorites(user.favorites || []);
    }, [user]); // Re-run whenever the user state changes

    useEffect(() => {
        // Update the isFavorite state based on the current article
        setIsFavorite(favorites.includes(article.url));
    }, [favorites, article]); // Re-run whenever favorites or article changes

    useEffect(() => {

        getArticleSentiment(article).then((sentiment) => {
            setSentiment(sentiment);
        });
    });

    const getSentimentColor = () => {
        switch (sentiment) {
            case 'positive':
                return 'bg-green-100';
            case 'negative':
                return 'bg-red-100';
            default:
                return 'bg-gray-100';
        }
    }

    const handleFavorite = () => {
        const updatedFavorites = favorites.includes(article.url)
            ? favorites.filter(fav => fav !== article.url) // Remove article if already favorited
            : [...favorites, article.url]; // Add article to favorites

        // Update parent state (user) with new favorites list
        const newUser = { ...user, favorites: updatedFavorites };
        setUser(newUser); // This should update the user state in the parent

        // Update the user's favorites on the backend
        updateFavorites(updatedFavorites);

        storeArticle(article);

        // Update local state
        setFavorites(updatedFavorites); // Ensure the favorites list is updated locally as well
    };

    const getArticleSentiment = async (article) => {
        // make a request to Sentiment Anaylsis microservice to get the sentiment of the article
        try {
            const response = await axios.post(`http://localhost:3002/analyze`, 
                { text: article.content || article.description || article.title },
                { headers: { 'Content-Type': 'application/json' } }
            );
            return response.data.sentiment;
        }
        catch (error) {
            console.error("Error getting sentiment:", error);
            return 'neutral';
        }
    }

    const storeArticle = async (article) => {
        // make a request to article_db to store the article
        // we only want to store articles that have been faovrited or read later by users
        // we have limited storage so we can't store all articles
        console.log("Storing article in database:", article);

        try {
            const response = await axios.post(`http://localhost:3001/articles`, 
                article ,
                { headers: { 'Content-Type': 'application/json' } }
            );
            console.log("Article stored in database:", response);
        } catch (error) {
            console.error("Error storing article:", error);
        }
    }

    const updateFavorites = async (updatedFavorites) => {
        // make a request to the server to add the article to the user's favorites
        // Make an API call to update the user's favorites on the backend
        try {
            const response = await axios.put(`http://localhost:3000/users/${user._id}`, 
                { favorites: updatedFavorites },
                { headers: { 'Content-Type': 'application/json' } }
            );
            setUser(response.data.user); // Ensure the parent state is updated with the new user data
            sessionStorage.setItem('user', JSON.stringify(response.data.user)); // Update session storage
        } catch (error) {
            console.error("Error updating favorites:", error);
        }
    }

    return (
        <li className="article-item__article">
            <div className={`h-full rounded-lg shadow-lg p-4 ${getSentimentColor()}`}>
                <article className="article-card">
                    <h2 className="text-xl font-bold">{article.title}</h2>
                    <img
                        src={article.urlToImage}
                        alt={article.title}
                        className="w-full object-cover mt-2"
                    />
                    <div className="flex justify-between items-center mt-4">
                        <time className="text-gray-600">{new Date(article.publishedAt).toDateString()}</time>
                    </div>

                    <p className="text-gray-700">{article.description}</p>
                    <a
                        href={article.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                        Read more
                    </a>
                    <button onClick={handleFavorite}>
                        {isFavorite ? '⭐' : '☆'}
                    </button>
                </article>
            </div>
        </li>
    );
}

export default Article;
