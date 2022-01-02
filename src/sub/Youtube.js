import axios from "axios";
import { useEffect, useRef, useState } from "react";

const body = document.querySelector("body");

function Youtube(){
    const key = "AIzaSyCRti1Hev4P1VLwTGimHcEE9oVkw1FXnuY";
    const playListId = "PLyH7cHtJQfID-30WGfJosDP-z2ynkgBso";
    const num = 12;
    const url =`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playListId}&maxResults=${num}`;

    let [vids,setVids] = useState([]);
    let [isPop,setIsPop] = useState(false);
    let [index,setIndex] = useState(0);
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
                                    <p className="num">{(index < 9) ? '0' + (index + 1) + '.' : (index + 1) + '.'}</p>
                                    <div className="pic" onClick={()=>{
                                        setIsPop(true);
                                        setIndex(index);
                                    }}>
                                        <div className="inner">
                                            <img src={vid.snippet.thumbnails.high.url} />
                                        </div>
                                    </div>
                                    <div className="con">
                                        <h2>{(tit_len > 30) ? title = title.substr(0,30)+"..." : title}</h2>
                                        <p>{(con_len > 150) ? con = con.substr(0,150)+"..." : con}</p>
                                        <button onClick={()=>{
                                            setIsPop(true);
                                            setIndex(index);
                                        }}>Play</button>
                                    </div>
                                </article>
                            )
                        })
                    }
                </div>
            </div>

            {isPop ? <Pop /> : null}
        </section>
    )

    function Pop(){
        useEffect(()=>{
            body.style.overflow = "hidden";

            return ()=>{
                body.style.overflow = "auto";
            }
        })
        
        return(
            <aside className="pop">
                <div className="inner">
                    <iframe src={"https://www.youtube.com/embed/"+vids[index].snippet.resourceId.videoId} allowFullScreen></iframe>
                </div>
                <span className="close" onClick={()=>{
                    setIsPop(false);
                }}>Close</span>
            </aside>
        )
    }
}

export default Youtube;