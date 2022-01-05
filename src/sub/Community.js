import axios from "axios";
import { useEffect, useState } from "react";

function Community(){
    let [posts,setPosts] = useState([]);
    let len = posts.length;

    const baseURL = process.env.PUBLIC_URL;

    useEffect(()=>{
        axios
        .get(`${baseURL}/dbs/board.json`)
        .then((data)=>{
            setPosts(data.data.data);
        });
    });

    return (
        <section className="content community">
            <div className="inner">
                <h1>
                    <p>Notice</p>
                    <p>And Question</p>
                </h1>

                <div className="faqWrap">
                    <article>
                        <h3>Q1</h3>
                        <p>Lorem dolor sit amet<br /> consectetur</p>
                    </article>
                    <article>
                        <h3>Q2</h3>
                        <p>Lorem ipsum amet<br /> consectetur adipisicing</p>
                    </article>
                    <article>
                        <img src={`${baseURL}/img/faq1.jpg`} alt="faq이미지1" />
                    </article>
                    <article>
                        <img src={`${baseURL}/img/faq2.jpg`} alt="faq이미지2" />
                    </article>
                    <article>
                        <h3>Q3</h3>
                        <p>Lorem ipsum dolor sit amet<br /> adipisicing</p>
                    </article>
                    <article>
                        <h3>Q4</h3>
                        <p>Dolor sit amet<br /> consectetur adipisicing</p>
                    </article>
                </div>

                <div className="boardWrap">
                    <div className="btns">
                        <button className="on">Notice</button>
                        <button>Q&#38;A</button>
                    </div>

                    <div className="searchBox">
                        <input type="text" />
                        <button>Search</button>
                    </div>

                    <div className="notice">
                        {
                            posts.slice(0).reverse().map((post,index)=>{
                                return (
                                    <article key={index}>
                                        <p className="num">{((len - index) < 10) ? '0' + (len - index) + '.' : (len - index) + '.'}</p>
                                        <div className="wrap">
                                            <h2>{post.title}</h2>
                                            <div className="txtWrap">
                                                <span>{post.writer}</span>
                                                <span>{post.date}</span>
                                            </div>
                                        </div>
                                    </article>
                                )
                            })
                        }
                    </div>

                    <div className="pagination">
                        <a href="#" className="prev" onClick={e=>{
                            e.preventDefault();
                        }}><i className="las la-angle-double-left"></i></a>
                        <p className="num">
                            <a href="#" className="on" onClick={e=>{
                                e.preventDefault();
                            }}>1</a>
                            <a href="#" onClick={e=>{
                                e.preventDefault();
                            }}>2</a>
                            <a href="#" onClick={e=>{
                                e.preventDefault();
                            }}>3</a>
                            <a href="#" onClick={e=>{
                                e.preventDefault();
                            }}>4</a>
                            <a href="#" onClick={e=>{
                                e.preventDefault();
                            }}>5</a>
                        </p>
                        <a href="#" className="next" onClick={e=>{
                            e.preventDefault();
                        }}><i className="las la-angle-double-right"></i></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Community;