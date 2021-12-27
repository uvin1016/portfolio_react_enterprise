import axios from "axios";
import { useEffect, useRef, useState } from "react";

function Gallery(){
    const baseURL = "https://www.flickr.com/services/rest/?";
    const key = "04c5ace5347f338643f5a46006aa1910";
    const userId = "194310676@N02";
    const method1 = "flickr.interestingness.getList";
    const method2 = "flickr.people.getPhotos";
    const count = 12;

    const url = `${baseURL}method=${method2}&api_key=${key}&user_id=${userId}&per_page=${count}&format=json&nojsoncallback=1`;

    let [imgs,setImgs] = useState([]);
    let frame = useRef(null);

    useEffect(()=>{
        getFlickr();
    },[]);

    async function getFlickr(){
        await axios.get(url).then(json=>{
            setImgs(json.data.photos.photo);
        },1000);

        frame.current.classList.add("on");
    }


    return (
        <section className="content gallery">
            <div className="inner">
                <h1>Gallery</h1>

                <div className="imgWrap" ref={frame}>
                    {
                        imgs.map((img,index)=>{
                            let imgSrcBig = `https://live.staticflickr.com/${img.server}/${img.id}_${img.secret}_b.jpg`;
                            let imgSrc = `https://live.staticflickr.com/${img.server}/${img.id}_${img.secret}_m.jpg`;

                            return(
                                <article key={index}>
                                    <a href={imgSrcBig}>
                                        <img src={imgSrc} />

                                        <div className="txtBox">
                                            <h2>{img.title}</h2>
                                            <p>{img.owner}</p>
                                        </div>
                                    </a>
                                </article>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Gallery;
