import { useRef} from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import SwiperCore, {
    Autoplay,Pagination,Navigation
} from 'swiper';

SwiperCore.use([Autoplay,Pagination,Navigation]);

function News (){
    const baseURL = process.env.PUBLIC_URL;
    const newsPrev = useRef(null);
    const newsNext = useRef(null);
    
    return (
        <section id="news">
            <h2>News</h2>

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
    )
}

export default News;