import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Masonry from "react-masonry-component";

const masonryOptions = {
    fitWidth: false,
    gutter: 0,
    itemSelector: ".items"
}

function Gallery(){
    const baseURL = "https://www.flickr.com/services/rest/?";
    const key = "04c5ace5347f338643f5a46006aa1910";
    const userId = "194310676@N02";
    const method1 = "flickr.interestingness.getList";
    const method2 = "flickr.people.getPhotos";
    const method3 = "flickr.favorites.getList";
    const count = 12;
    

    const url = `${baseURL}method=${method1}&api_key=${key}&per_page=${count}&format=json&nojsoncallback=1`;
    const url2 = `${baseURL}method=${method2}&api_key=${key}&user_id=${userId}&per_page=${count}&format=json&nojsoncallback=1`;
    const url3 = `${baseURL}method=${method3}&api_key=${key}&user_id=${userId}&per_page=${count}&format=json&nojsoncallback=1`;

    let [imgs,setImgs] = useState([]);
    let list = useRef(null);

    useEffect(()=>{
        getFlickr(url);
    },[]);



    return (
        <section className="content gallery">
            <div className="inner">
                <h1>Gallery</h1>

                <div className="btns">
                    <button className="on" onClick={(e)=>{
                        list.current.classList.remove("on");
                        btnActive(e.target);
                        getFlickr(url);
                    }}>Interest</button>

                    <button onClick={(e)=>{
                        list.current.classList.remove("on");
                        btnActive(e.target);
                        getFlickr(url2);
                    }}>Architecture</button>

                    <button onClick={(e)=>{
                        list.current.classList.remove("on");
                        btnActive(e.target);
                        getFlickr(url3);
                    }}>Landscape</button>
                </div>

                <div className="imgWrap" ref={list}>
                    <Masonry
                        className={"frame"}
                        elementType={"ul"}
                        disableImagesLoaded={false}
                        updateOnEachImageLoad={false}
                        options={masonryOptions}
                    >
                        {
                            imgs.map((img,index)=>{
                                let imgSrc = `https://live.staticflickr.com/${img.server}/${img.id}_${img.secret}_b.jpg`;

                                return(
                                    <li key={index} className="items">
                                        <a href={imgSrc} >
                                            <img src={imgSrc} />

                                            <div className="txtBox">
                                                <h2>{img.title}</h2>
                                                <p>{img.owner}</p>
                                            </div>
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </Masonry>
                </div>
            </div>
        </section>
    )

    async function getFlickr(url){
        await axios.get(url).then(json=>{
            setImgs(json.data.photos.photo);
        },1000);

        setTimeout(()=>{
            list.current.classList.add("on");
        },500);
    }

    function btnActive(btn){
        const galleryBtn = document.querySelectorAll(".gallery .inner .btns button");
        
        for(let btn of galleryBtn){
            btn.classList.remove("on");
        }
        btn.classList.add("on");
    }
}

export default Gallery;
