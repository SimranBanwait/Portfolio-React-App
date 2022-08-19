
import axios from "axios";
import React, { useState,useEffect } from "react";
import "./News.css";
import newsIcon from '../../Photos/ICONS/news.png'


const News = () => {

    const [news, setNews] = useState([]);
    const [category,setCategory] = useState("india");

    
    let url = (`https://newsapi.org/v2/everything?q=${category}&sortBy=relevancy&apiKey=ba14a6ce3c2f449f9e6484e1ad6015ea`);
    
    const fetchNews = async () => {
        await axios.get(url)
            .then((res) => {
            // console.log(res);
            setNews(res.data.articles);
        })    
    }

    // use effect hook so that intial page can render
    useEffect(() => {
        fetchNews();
    }, []);

    // user inpt taken and sent to api url with the help of useState hook
    const userInput=(e)=>{
        setCategory(e.target.value);
        console.log(e.target.value); 
    }

    const enterKeyPress=(e)=>{
        if (e.key === "Enter") {
            fetchNews();
        }
    }

    





    const searchNews=()=>{
        setCategory("news");
        fetchNews();    
    }
    const searchCovid = () => {
        setCategory("covid");
        fetchNews();
    }
    const searchBitcoin = () => {
        setCategory("bitcoin");
        fetchNews();
    }
    const searchApple = () => {
        setCategory("apple");
        fetchNews();
    }
    const searchGaming = () => {
        setCategory("gaming");
        fetchNews();
    }


    return (
        <>

        <section className="news">


            {/* =========================================
            top section of logo inputs button and heading
            ========================================== */}
            <div className="news-top">

                <div className="news-header">
                    <div className="news-left">
                        <img src={newsIcon} alt="newsIcon" />
                        <h1>News Daily</h1>
                    </div>

                    <div action="" className="news-right">
                        <input
                            type="search"
                            className="user-input"
                            placeholder="Search Anything..."
                            onChange={userInput}
                            onKeyPress={enterKeyPress}
                        />
                        <button type="reset" className="search-button" onClick={fetchNews}>Search</button>
                    </div>
                </div>
    
                    <div className="news-bottom">

                        <div action="" className="form-2">
                            <button className="search-topic" onClick={searchNews}>News</button>
                            <button className="search-topic" onClick={searchCovid}>Covid-19</button>
                            <button className="search-topic" onClick={searchBitcoin}>Bitcoin</button>
                            <button className="search-topic" onClick={searchApple}>Apple</button>
                            <button className="search-topic" onClick={searchGaming}>Gaming</button>
                        </div>
                    </div>

            </div>


            {/* =========================================
            cards section of cards and card body exists here
            ========================================== */}
            <div className="news-cards-body">

                {
                    news.map((val,index)=>{
                        return(
                            <>
                                <div className="news-card" key={index}>
                                    <img src={val.urlToImage} alt="news-Icon" className="card-image" />
                                    <h3 className="card-title">{val.title}</h3>
                                    <p className="card-text">{val.content}</p>
                                    <div className="card-bottom">
                                        <a className="card-button" href={val.url} target="_blank" rel="noreferrer">Read More</a>
                                        <a className="card-source" href={val.url}>Source : {val.source.name}</a>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }

            </div>




        </section>
            
        </>
    );

}


export default News;