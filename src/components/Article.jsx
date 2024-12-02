import React, { useState, useEffect } from 'react';

function Article({ article, setUser, user }) {
    const [favorites, setFavorites] = useState(user.favorites || []); // Initial favorites
    const [isFavorite, setIsFavorite] = useState(false); // Tracks if the current article is favorited

    // Check if the current article is in favorites
    const checkFavorite = () => {
        setIsFavorite(favorites.includes(article.url));
    };

    // Runs whenever favorites or article changes
    useEffect(() => {
        checkFavorite();
    }, [favorites, article]);

    // Debugging favorites state
    useEffect(() => {
        console.log('Favorites updated:', favorites);
    }, [favorites]);

    const handleFavorite = () => {
        setFavorites((prevFavorites) => {
            if (prevFavorites.includes(article.url)) {
                console.log(`Removing article: ${article.url}`);
                return prevFavorites.filter((fav) => fav !== article.url);
            } else {
                console.log(favorites)
                console.log(`Adding article: ${article.url}`);
                return [...prevFavorites, article.url];
            }
        });
    };

    return (
        <li className="article-item__article">
            <div className="h-full bg-white rounded-lg shadow-lg p-4">
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
