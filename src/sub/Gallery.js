import axios from "axios";
import { useEffect, useRef, useState } from "react";

function Gallery(){
    const baseURL = "https://www.flickr.com/services/rest/?";
    const key = "04c5ace5347f338643f5a46006aa1910";
    const method1 = "flickr.interestingness.getList";
    const count = 12;

    const url = `${baseURL}method=${method1}&api_key=${key}&per_page=${count}&format=json&nojsoncallback=1`;

    let [imgs,setImgs] = useState([]);
    let frame = useRef(null);

    useEffect(getFlickr,[]);

    async function getFlickr(){
        await axios
        .get(url)
        .then(json=>{
            setImgs(json.data.photos.photo);
            console.log(json.data.photos.photo);
        });

        setTimeout(()=>{
            frame.current.classList.add("on");
        },500)
    };

    return (
        <section className="content gallery">
            <div className="inner">
                <h1>Gallery</h1>
                <div className="imgWrap" ref={frame}>
                    {
                        imgs.map((img,index)=>{
                            const imgSrc = `https://live.staticflickr.com/${img.server}/${img.id}_${img.secret}_m.jpg`;
                            const imgSrcBig = `https://live.staticflickr.com/${img.server}/${img.id}_${img.secret}_b.jpg`;

                            return (
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
