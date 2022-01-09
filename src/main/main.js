import { useEffect , useRef, useState} from "react";

function Main(){
    const baseURL = process.env.PUBLIC_URL;
    const frame = useRef(null);
    const list = useRef(null);
    const album = ['Black','Earth','Forest','Future','Shoshanim','Snowy'];
    
    

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            vidMove();
        })

        return ()=>{
            window.removeEventListener("scroll",()=>{
                vidMove();
            })
        }
    },[]);

    return (
        <section className="content main">
            <div className="inner">
                <div className="visual">
                    <h1>Investment<br />Group <span>CHRISTY<br />MONRAY</span></h1>
                    <figure ref={frame}>
                        <video src={`${baseURL}/vid/Waves.mp4`} autoPlay muted loop></video>
                    </figure>
                </div>

                <div className="about">
                    <h1>About Us</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, facilis voluptate. Voluptates vitae veniam voluptatibus dicta corrupti, totam quaerat illo.</p>

                    <div className="imgWrap">
                        <div className="pic">
                            <img src={`${baseURL}/img/about.jpg`} alt="아트이미지1" />

                            <div className="text">
                                <h2>Be true to thyself</h2>
                                <span>Kylen</span>
                            </div>
                        </div>

                        <div className="pic">
                            <img src={`${baseURL}/img/about2.jpg`} alt="아트이미지2" />

                            <div className="text">
                                <h2>Love conquers all</h2>
                                <span>Rhoads</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="project">
                    <h1>Project</h1>

                    <div className="btns">
                        <button className="prev"><i className="las la-arrow-left"></i></button>
                        <button className="next"><i className="las la-arrow-right"></i></button>
                    </div>

                    <div className="container">
                        <article>
                            <div className="pic">
                                <img src={`${baseURL}/img/project.jpg`} alt="프로젝트이미지1" />
                            </div>
                            <div className="text">
                                <h2>artist</h2>
                                <p>Lorem ipsum dolor sit amet<br/> consectetur adipisicing elit.</p>
                            </div>
                        </article>

                        <article className="on">
                            <div className="pic">
                                <img src={`${baseURL}/img/project2.jpg`} alt="프로젝트이미지2" />
                            </div>
                            <div className="text">
                                <h2>artist</h2>
                                <p>Lorem ipsum dolor sit amet<br/> consectetur adipisicing elit.</p>
                            </div>
                        </article>

                        <article>
                            <div className="pic">
                                <img src={`${baseURL}/img/project3.jpg`} alt="프로젝트이미지3" />
                            </div>
                            <div className="text">
                                <h2>artist</h2>
                                <p>Lorem ipsum dolor sit amet<br/> consectetur adipisicing elit.</p>
                            </div>
                        </article>
                    </div>
                </div>

                <div className="music">
                    <h1>music</h1>

                    <div className="container">
                        {
                            album.map((music,index)=>{
                                return (
                                    <article key={index} ref={list}>
                                        <div className="pic">
                                            <img src={`${baseURL}/img/${music}.jpg`} alt={`${music}이미지`} />
                                        </div>
                                        <div className="txt">
                                            <h2>{music}</h2>
                                            <h3>Artist</h3>
                                            <p>music jenre</p>
                                            <p>music jenre</p>
                                            <div className="btn" onClick={e=>{
                                                picPlay(e);
                                                btnPlay(e);
                                            }}><button><audio src={`${baseURL}/music/${music}.mp3`}></audio></button></div>
                                        </div>
                                    </article>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )

    function vidMove (){
        const scrollValue = window.scrollY || window.pageYOffset;
        if(scrollValue > 0){
            frame.current.classList.add("on");
        }else{
            frame.current.classList.remove("on");
        }
    }

    function picPlay(e){
        const pictures = document.querySelectorAll(".music .container article .pic");

        for(let item of pictures){
            item.classList.remove("play");
        }
        e.currentTarget.closest("article").querySelector(".pic").classList.add("play");
    }

    function btnPlay(e){
        const btns = document.querySelectorAll(".music .container article .txt .btn");

        for(let item of btns){
            item.classList.remove("play");
        }
        e.currentTarget.closest("article").querySelector(".btn").classList.add("play");
    }


}

export default Main;