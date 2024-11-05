import React from 'react';

function Article({ article }) {


    function convertDate(date) {
        const newDate = new Date(date);
        return newDate.toDateString(); 
    }

    return (
        <li className='article-item__article'>
            <div className="h-full bg-white rounded-lg shadow-lg p-4">
             <article className = "article-card">
                <h2 className="text-xl font-bold">{article.title}</h2>
                <img src = {article.urlToImage} alt = {article.title} className = "w-full object-cover mt-2" />
                <div className = "flex justify-between items-center mt-4">
                    <time className="text-gray-600">{convertDate(article.publishedAt)}</time>
                </div>
                <p className="text-gray-700">{article.description}</p>
                
                <a href={article.url} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">Read more</a>
             </article>
            </div>
        </li>
    );
}

export default Article;