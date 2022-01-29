import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import SwiperCore, {
    Autoplay,Pagination,Navigation
} from 'swiper';

SwiperCore.use([Autoplay,Pagination,Navigation]);

function Project (){
    const baseURL = process.env.PUBLIC_URL;
    
    return (
        <section id="project">
            <h2>Project</h2>

            <Swiper slidesPerView={'auto'} spaceBetween={0} loop={true} loopedSlides={2} centeredSlides={true}  navigation={true} breakpoints={
                {"320": {"slidesPerView": 1, "spaceBetween": 0},
                "760": {"slidesPerView": 'auto'}}
                } className="mySwiper">
                <SwiperSlide>
                    <div className="pic">
                        <img src={`${baseURL}/img/project.jpg`} alt="프로젝트이미지1" />
                    </div>
                    <div className="text">
                        <h3>artist</h3>
                        <p>Lorem ipsum dolor sit amet<br/> consectetur adipisicing elit.</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="pic">
                        <img src={`${baseURL}/img/project2.jpg`} alt="프로젝트이미지2" />
                    </div>
                    <div className="text">
                        <h3>artist</h3>
                        <p>Lorem ipsum dolor sit amet<br/> consectetur adipisicing elit.</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="pic">
                        <img src={`${baseURL}/img/project3.jpg`} alt="프로젝트이미지3" />
                    </div>
                    <div className="text">
                        <h3>artist</h3>
                        <p>Lorem ipsum dolor sit amet<br/> consectetur adipisicing elit.</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default Project;