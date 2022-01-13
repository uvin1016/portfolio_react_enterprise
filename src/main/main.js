import { useEffect, useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import Swiper core and required modules
import SwiperCore, {
    Pagination,Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination,Navigation]);


function Main(){
    const baseURL = process.env.PUBLIC_URL;
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
                    <figure>
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

                    <Swiper slidesPerView={'auto'} spaceBetween={50} loop={true} loopedSlides={2} centeredSlides={true}  navigation={true} breakpoints={
                        {320: {slidesPerView: 1, spaceBetween: 0}},
                        {760: {slidesPerView: 'auto'}}
                        } className="mySwiper">
                        <SwiperSlide>
                            <div className="pic">
                                <img src={`${baseURL}/img/project.jpg`} alt="프로젝트이미지1" />
                            </div>
                            <div className="text">
                                <h2>artist</h2>
                                <p>Lorem ipsum dolor sit amet<br/> consectetur adipisicing elit.</p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="pic">
                                <img src={`${baseURL}/img/project2.jpg`} alt="프로젝트이미지2" />
                            </div>
                            <div className="text">
                                <h2>artist</h2>
                                <p>Lorem ipsum dolor sit amet<br/> consectetur adipisicing elit.</p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="pic">
                                <img src={`${baseURL}/img/project3.jpg`} alt="프로젝트이미지3" />
                            </div>
                            <div className="text">
                                <h2>artist</h2>
                                <p>Lorem ipsum dolor sit amet<br/> consectetur adipisicing elit.</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className="music">
                    <h1>music</h1>

                    <div className="container">
                        {
                            album.map((music,index)=>{
                                return (
                                    <article key={index}>
                                        <div className="pic">
                                            <img src={`${baseURL}/img/${music}.jpg`} alt={`${music}이미지`} />
                                        </div>
                                        <div className="txt">
                                            <h2>{music}</h2>
                                            <h3>Artist</h3>
                                            <p>music jenre</p>
                                            <p>music jenre</p>
                                            <div className="btn" onClick={e=>{
                                                playAlbum(e);
                                            }}><button></button></div>
                                            <audio src={`${baseURL}/music/${music}.mp3`}></audio>
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
        const frame = document.querySelector('.visual figure');
        const scrollValue = window.scrollY || window.pageYOffset;
        
        if(scrollValue > 0){
            frame.classList.add("on");
        }else{
            frame.classList.remove("on");
        }
    }

    function playAlbum(e){
        let isActivePic = e.currentTarget.closest('article').querySelector('.pic').classList.contains('play');
        let isActiveBtn = e.currentTarget.closest('article').querySelector('.btn').classList.contains('play');

        if(isActiveBtn && isActivePic) {
            e.currentTarget.closest('article').querySelector('.pic').classList.remove('play');
            e.currentTarget.closest('article').querySelector('.btn').classList.remove('play');
            e.currentTarget.closest('article').querySelector('audio').pause();
        }else{
            initMusic();
            e.currentTarget.closest('article').querySelector('.pic').classList.add('play');
            e.currentTarget.closest('article').querySelector('.btn').classList.add('play');
            e.currentTarget.closest('article').querySelector('audio').play();
        }
    }
    

    function initMusic(){
        let playBtns = document.querySelectorAll(".music .container article .txt .btn");

        for(let playBtn of playBtns){
            playBtn.closest('.txt').querySelector('audio').pause();
            playBtn.closest('.txt').querySelector('audio').load();
            playBtn.closest('article').querySelector('.pic').classList.remove("play");
            playBtn.classList.remove("play");
        }
    }


}

export default Main;