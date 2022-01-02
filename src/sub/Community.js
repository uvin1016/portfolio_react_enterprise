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
                <h1>Community</h1>
                {
                    posts.slice(0).reverse().map((post,index)=>{
                        return (
                            <article key={index}>
                                <p className="num">{len - index}</p>
                                <div className="wrap">
                                    <h2>{post.title}</h2>
                                    <div className="txtWrap">
                                        <span>{post.writer}</span>
                                        <span>{post.date}</span>
                                        <span>{post.like}</span>
                                    </div>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Community;