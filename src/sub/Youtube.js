import axios from "axios";
import { useEffect, useRef, useState } from "react";

function Youtube(){
    const key = "AIzaSyCRti1Hev4P1VLwTGimHcEE9oVkw1FXnuY";
    const playListId = "PLyH7cHtJQfIAMTzgscSaZd-5rJzUC0uUH";
    const num = 12;
    const url =`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playListId}&maxResults=${num}`;

    let [vids,setVids] = useState([]);
    let vidList = useRef(null);

    useEffect(()=>{
        axios.get(url).then((json)=>{
            console.log(json.data.items);
            setVids(json.data.items);
        });
    },[]);

    return (
        <section className="content youtube">
            <div className="inner">
                <h1>Youtube</h1>
                <div className="vidList" ref={vidList}>
                    {
                        vids.map((vid,index)=>{
                            let title = vid.snippet.title;
                            let tit_len = title.length;
                            let con = vid.snippet.description;
                            let con_len = con.length;

                            return (
                                <article key={index}>
                                    <a href={vid.snippet.resourceId.videoId} className="pic">
                                        <img src={vid.snippet.thumbnails.high.url} />
                                    </a>
                                    <div className="con">
                                        <h2>{(tit_len > 40) ? title = title.substr(0,40)+"..." : title}</h2>
                                        <p>{(con_len > 140) ? con = con.substr(0,140)+"..." : con}</p>
                                    </div>
                                </article>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Youtube;