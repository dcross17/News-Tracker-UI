import React, { useState, useEffect } from "react";
import apiData from "../public/apiData";
import Article from "../components/Article";
import axios from "axios";

function News() {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => { 
        /*axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=39415c8b1d3f435d8ac0df3c0f5365a9")
        .then((response) => {
            console.log(response.data.articles);
            setNews(response.data.articles);
            setLoading(false);
        })
        .catch((error) => {
            setError(error);
            setLoading(false);
        });*/
        console.log(apiData);
        setNews(apiData);
        setLoading(false);

    }, [])
    // API Key: 39415c8b1d3f435d8ac0df3c0f5365a9
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;



  return ( 
    <>
        <h1>Your news</h1>
        <div>
        <ul className = "grid grid-cols-4 gap-4">
        {news.slice(0,20).map((article, index) => (
            (article.content !== null && article.content !== undefined && article.content !== "[Removed]") ? (
                <Article key = {index} article = {article} />
            ) : null
        ))}

        </ul>
        </div>
    </>

  );
}

export default News;