import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Masonry from "react-masonry-component";

const masonryOptions = {
    fitWidth: false,
    gutter: 0,
    itemSelector: ".items"
}
const body = document.querySelector("body");

function Gallery(){
    let [imgs,setImgs] = useState([]);
    let [enableClick, setEnableClick] = useState(true);
    let [interest, setInterest] = useState(true);
    let [architecture, setArchitecture] = useState(true);
    let [landscape, setLandscape] = useState(true);
    let [isPop, setIsPop] = useState(false);
    let [index, setIndex] = useState(0);
    let [loading, setLoading] = useState(false);
    let tags = useRef(null);
    let list = useRef(null);

    useEffect(()=>{
        setInterest(true);
        setArchitecture(false);
        setLandscape(false);
        getFlickr({
            type: "interest",
            count: 12
        });
    },[]);



    return (
        <section className="content gallery">
            <div className="inner">
                <h1>Gallery</h1>

                {/* 카테고리 버튼 */}
                <div className="btns">
                    <button className="on" onClick={e=>{
                        if(enableClick && !interest){
                            list.current.classList.remove("on");
                            setEnableClick(false);
                            setLoading(true);
                            setInterest(true);
                            setArchitecture(false);
                            setLandscape(false);
                            btnActive(e.target);
                            getFlickr({
                                type: "interest",
                                count: 12
                            });
                        }
                    }}>Interest</button>

                    <button onClick={e=>{
                        if(enableClick && !architecture){
                            list.current.classList.remove("on");
                            setEnableClick(false);
                            setLoading(true);
                            setInterest(false);
                            setArchitecture(true);
                            setLandscape(false);
                            btnActive(e.target);
                            getFlickr({
                                type: "architecture",
                                count: 12
                            });
                        }
                    }}>Architecture</button>

                    <button onClick={e=>{
                        if(enableClick && !landscape){
                            list.current.classList.remove("on");
                            setEnableClick(false);
                            setLoading(true);
                            setInterest(false);
                            setArchitecture(false);
                            setLandscape(true);
                            btnActive(e.target);
                            getFlickr({
                                type: "landscape",
                                count: 12
                            });
                        }
                    }}>Landscape</button>
                </div>

                {/* 검색창 */}
                <div className="searchBox">
                    <input type="text" ref={tags} onKeyPress={e=>{
                        if(e.key !== "Enter") return;
                        if(enableClick){
                            list.current.classList.remove("on");
                            let tagsValue = tags.current.value;
                            tags.current.value = "";
                            setEnableClick(false);
                            setLoading(true);
                            setInterest(false);
                            setArchitecture(false);
                            setLandscape(false);
                            getFlickr({
                                type: "search",
                                count: 12,
                                tags: `${tagsValue}`
                            });
                        }
                    }} />
                    <button onClick={()=>{
                        if(enableClick){
                            list.current.classList.remove("on");
                            let tagsValue = tags.current.value;
                            tags.current.value = "";
                            setEnableClick(false);
                            setLoading(true);
                            setInterest(false);
                            setArchitecture(false);
                            setLandscape(false);
                            getFlickr({
                                type: "search",
                                count: 12,
                                tags: `${tagsValue}`
                            });
                        }
                    }}>Search</button>
                </div>

                {/* 로딩 */}
                { loading ? <Loading /> : "" }

                {/* 컨텐츠 */}
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
                                        <a href="#" onClick={e=>{
                                            e.preventDefault();
                                            setIndex(index);
                                            setIsPop(true);
                                        }}>
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
            { isPop ? <Pop /> : "" }
        </section>
    )

    async function getFlickr(opt){
        let url = "";
        const baseURL = "https://www.flickr.com/services/rest/?";
        const key = "04c5ace5347f338643f5a46006aa1910";
        const userId = "194310676@N02";
        const method1 = "flickr.interestingness.getList";
        const method2 = "flickr.people.getPhotos";
        const method3 = "flickr.favorites.getList";
        const method4 = "flickr.photos.search";
        

        if(opt.type === "interest"){
            url = `${baseURL}method=${method1}&api_key=${key}&per_page=${opt.count}&format=json&nojsoncallback=1`;
        }else if(opt.type === "architecture"){
            url = `${baseURL}method=${method2}&api_key=${key}&user_id=${userId}&per_page=${opt.count}&format=json&nojsoncallback=1`;
        }else if(opt.type === "landscape"){
            url = `${baseURL}method=${method3}&api_key=${key}&user_id=${userId}&per_page=${opt.count}&format=json&nojsoncallback=1`;
        }else if(opt.type === "search"){
            url = `${baseURL}method=${method4}&api_key=${key}&per_page=${opt.count}&format=json&nojsoncallback=1&tags=${opt.tags}`;
        }else{
            console.error("opt.type을 interest/architecture/landscape/search로 변경하세요.");
        }

        

        await axios.get(url).then(json=>{
            setImgs(json.data.photos.photo);
        });

        setTimeout(()=>{
            list.current.classList.add("on");
            setLoading(false);

            setTimeout(()=>{
                setEnableClick(true);
            },3000);
        },3000);
    }

    function btnActive(btn){
        const galleryBtn = document.querySelectorAll(".gallery .inner .btns button");
        
        for(let btn of galleryBtn){
            btn.classList.remove("on");
        }
        btn.classList.add("on");
    }

    function Loading(){
        return (
            <div className="loadLine"></div>
        )
    }

    function Pop(){
        let imgSrc = `https://live.staticflickr.com/${imgs[index].server}/${imgs[index].id}_${imgs[index].secret}_b.jpg`;

        useEffect(()=>{
            body.style.overflow = "hidden";
    
            return ()=>{
                body.style.overflow = "auto";
            }
        },[]);

        return (
            <aside className="pop">
                <div className="pic">
                    <img src={imgSrc} />
                </div>
                <span className="close" onClick={()=>{
                    setIsPop(false);
                }}>Close</span>
            </aside>
        )
    }
}

export default Gallery;
