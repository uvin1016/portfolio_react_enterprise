import { useEffect, useRef} from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import Swiper core and required modules
import SwiperCore, {
    Autoplay,Pagination,Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([Autoplay,Pagination,Navigation]);


function Main(){
    const baseURL = process.env.PUBLIC_URL;
    const album = ['Black','Earth','Forest','Future','Shoshanim','Snowy'];
    const newsPrev = useRef(null);
    const newsNext = useRef(null);
    const frame = useRef(null);

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
        <main className="content main">
            <div className="inner">
                <section className="visual">
                    <h1>Investment<br />Group <span>CHRISTY<br />MONRAY</span></h1>
                    <figure ref={frame}>
                        <video src={`${baseURL}/vid/alena.mp4`} autoPlay muted loop></video>
                    </figure>
                </section>

                <section className="about">
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
                </section>

                <section className="project">
                    <h1>Project</h1>

                    <Swiper slidesPerView={'auto'} spaceBetween={0} loop={true} loopedSlides={2} centeredSlides={true}  navigation={true} breakpoints={
                        {"320": {"slidesPerView": 1, "spaceBetween": 0},
                        "760": {"slidesPerView": 'auto'}}
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
                </section>

                <section className="music">
                    <h1>Music</h1>

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
                </section>

                <section className="news">
                    <h1>News</h1>

                    <Swiper 
                        slidesPerView={4} 
                        spaceBetween={30} 
                        loop={true} 
                        navigation={true} 
                        breakpoints={{
                            "320": {
                                "slidesPerView": 1
                            },
                            "640": {
                                "slidesPerView": 2
                            },
                            "768": {
                                "slidesPerView": 3
                            },
                            "1200": {
                                "slidesPerView": 4
                            }
                        }}
                        autoplay={{"delay": 2500,"disableOnInteraction": false}} 
                        onInit={(swiper) => {swiper.params.navigation.prevEl = newsPrev.current; swiper.params.navigation.nextEl = newsNext.current; swiper.navigation.init(); swiper.navigation.update();}} className="mySwiper">
                        <SwiperSlide>
                            <div className="pic">
                                <img src={`${baseURL}/img/news1.jpg`} alt="뉴스이미지1" />
                            </div>
                            <div className="text">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ea dolorum distinctio fugit quibusdam nam.</p>
                                <span>22.01.17</span>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                        <div className="pic">
                                <img src={`${baseURL}/img/news2.jpg`} alt="뉴스이미지2" />
                            </div>
                            <div className="text">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ea dolorum distinctio fugit quibusdam nam.</p>
                                <span>22.01.16</span>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="pic">
                                <img src={`${baseURL}/img/news3.jpg`} alt="뉴스이미지3" />
                            </div>
                            <div className="text">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ea dolorum distinctio fugit quibusdam nam.</p>
                                <span>22.01.15</span>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="pic">
                                <img src={`${baseURL}/img/news4.jpg`} alt="뉴스이미지4" />
                            </div>
                            <div className="text">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ea dolorum distinctio fugit quibusdam nam.</p>
                                <span>22.01.14</span>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="pic">
                                <img src={`${baseURL}/img/news5.jpg`} alt="뉴스이미지5" />
                            </div>
                            <div className="text">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ea dolorum distinctio fugit quibusdam nam.</p>
                                <span>22.01.13</span>
                            </div>
                        </SwiperSlide>
                        <div className="newsBtns">
                            <button className="newsPrev" ref={newsPrev}><i className="las la-long-arrow-alt-left"></i></button>
                            <button className="newsNext" ref={newsNext}><i className="las la-long-arrow-alt-right"></i></button>
                        </div>
                    </Swiper>
                </section>
                
            </div>
        </main>
    )

    function vidMove (){
        const scrollValue = window.scrollY || window.pageYOffset;
        
        if(scrollValue > 0){
            frame.current.classList.add("on");
        }else{
            frame.current.classList.remove("on");
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