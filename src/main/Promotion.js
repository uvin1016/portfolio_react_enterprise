import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setYoutube } from "../redux/actions";

const body = document.querySelector("body");

function Promotion (){
    const youtube = useSelector(state=>state);
    const dispatch = useDispatch();
    const vidData = youtube.youtubeReducer.youtube;
    let [isPop,setIsPop] = useState(false);
    let [index,setIndex] = useState(0);

    const key = "AIzaSyCRti1Hev4P1VLwTGimHcEE9oVkw1FXnuY";
    const playListId = "PLyH7cHtJQfID-30WGfJosDP-z2ynkgBso";
    const num = 12;
    const url =`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playListId}&maxResults=${num}`;

    const fetchYoutube = async ()=>{
        const response = await axios.get(url).catch(err=>console.log(err));
        dispatch(setYoutube(response.data.items));
    } 

    useEffect(()=>{
        fetchYoutube();
    },[]);

    return (
        <section id="promotion">
            <div className="inner">
                <h2>Promotion</h2>

                <div className="vidList">
                    {
                        vidData.map((vid, index)=>{
                            let title = vid.snippet.title;
                            let tit_len = title.length;
                            let con = vid.snippet.description;
                            let con_len = con.length;

                            if(index < 3) {
                                return (
                                    <article key={index} onClick={()=>{
                                        setIsPop(true);
                                        setIndex(index);
                                    }}>
                                        <div className="pic">
                                            <img src={vid.snippet.thumbnails.medium.url} />
                                        </div>
                                        <h3>{(tit_len > 20) ? title = title.substr(0,20)+"..." : title}</h3>
                                        <p>{(con_len > 100) ? con = con.substr(0,100)+"..." : con}</p>
                                    </article>
                                )
                            }
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
                    <iframe src={"https://www.youtube.com/embed/"+vidData[index].snippet.resourceId.videoId} allowFullScreen></iframe>
                </div>
                <span className="close" onClick={()=>{
                    setIsPop(false);
                }}><i className="las la-times"></i></span>
            </aside>
        )
    }
}

export default Promotion;