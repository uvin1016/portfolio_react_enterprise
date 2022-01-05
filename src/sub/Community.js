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

                <div className="btns">
                    <button className="on">Notice</button>
                    <button>FAQ</button>
                </div>

                <div className="searchBox">
                    <input type="text" />
                    <button>Search</button>
                </div>

                <div className="noticeWrap">
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
        </section>
    )
}

export default Community;