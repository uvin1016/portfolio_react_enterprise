import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const body = document.querySelector("body");

function Youtube(){
    let [isPop,setIsPop] = useState(false);
    let [index,setIndex] = useState(0);
    let vidList = useRef(null);
    const youtube = useSelector(state=>state);
    const vidData = youtube.youtubeReducer.youtube;

    return (
        <main className="content youtube">
            <div className="inner">
                <h1>
                    <p>Creatures</p>
                    <p>Of Interest</p>
                </h1>
                <div className="vidList" ref={vidList}>
                    {
                        vidData.map((vid,index)=>{
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
        </main>
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
                    <iframe src={"https://www.youtube.com/embed/"+vidData[index].snippet.resourceId.videoId} allowFullScreen></iframe>
                </div>
                <span className="close" onClick={()=>{
                    setIsPop(false);
                }}><i className="las la-times"></i></span>
            </aside>
        )
    }
}

export default Youtube;