import { useEffect, useRef, useState } from "react";
import { init, send } from "emailjs-com";

function Location(){
    const {kakao} = window;
    const mapContainer = useRef(null)
    const branch = useRef(null);
    const [map, setMap] = useState(null);
    const [index, setIndex] = useState(0);
    const [toggle, setToggle] = useState(false);
    const info = [
        {
            title : "수원점",
            latlng : new kakao.maps.LatLng(37.311811175647534,126.95238411366488),
            imgSrc : process.env.PUBLIC_URL+"/img/map-pin-solid.svg",
            imgSize : new kakao.maps.Size(24, 40),
            imgPos : {offset: new kakao.maps.Point(12, 40)}
        },
        {
            title : "서울점",
            latlng : new kakao.maps.LatLng(37.54800340424008,127.01453001405987),
            imgSrc : process.env.PUBLIC_URL+"/img/map-pin-solid.svg",
            imgSize : new kakao.maps.Size(24, 40),
            imgPos : {offset: new kakao.maps.Point(12, 40)}
        },
        {
            title : "대전점",
            latlng : new kakao.maps.LatLng(36.34888419698584,127.37524618214194),
            imgSrc : process.env.PUBLIC_URL+"/img/map-pin-solid.svg",
            imgSize : new kakao.maps.Size(24, 40),
            imgPos : {offset: new kakao.maps.Point(12, 40)}
        }
    ]
    const [mapInfo] = useState(info);
    const onSubmitForm = e => {
        send('service_f9eg1s9', 'template_9nbf24m', '#contactForm')
    }

    useEffect(()=>{
        mapContainer.current.innerHTML = "";
        const mapOption = { 
            center: mapInfo[0].latlng,
            level: 3
        };
        const map = new kakao.maps.Map(mapContainer.current, mapOption);
        setMap(map);

        new kakao.maps.Marker({
            map: map,
            title: mapInfo[index].title,
            position: mapInfo[index].latlng,
            image : new kakao.maps.MarkerImage(mapInfo[index].imgSrc, mapInfo[index].imgSize, mapInfo[index].imgPos)
        });
        map.setCenter(mapInfo[index].latlng);

        for(let btn of branch.current.children) btn.classList.remove('on');
        branch.current.children[index].classList.add('on');

        init("user_1pwSWMQVajjnRc7m8XrUh");

        const mapSet = ()=> map.setCenter(mapInfo[index].latlng);
        window.addEventListener('resize',mapSet);
        return ()=> {
            window.removeEventListener('resize',mapSet);
        }
    },[index])

    return (
        <main className="content location">
            <div className="inner">
                <h1>
                    <p>Way</p>
                    <p>To Come</p>
                </h1>

                <div className="mapWrap">
                    <h2>map</h2>
                    <div className="inner">
                        
                        <ul className="traffic">
                            <li>traffic</li>
                            {
                                toggle ? 
                                <li onClick={()=>{
                                    map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
                                    mapContainer.current.classList.remove('on');
                                    setToggle(!toggle);
                                }}><button>Off</button></li>
                                :
                                <li onClick={()=>{
                                    map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
                                    mapContainer.current.classList.add('on');
                                    setToggle(!toggle);
                                }}><button>On</button></li>
                            }
                        </ul>

                        <div id="map" ref={mapContainer}></div>

                        <ul className="branch" ref={branch}>
                            {
                                mapInfo.map((data,index)=>{
                                    return(
                                        <li key={index} onClick={()=>setIndex(index)}>
                                            <h3>{data.title}</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                                            <p>+8210.1234.5678</p>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>

                <div className="contactWrap">
                    <h2>contact us</h2>
                    <div className="inner">
                        <h3>Would you like to work with us?</h3>
                        <form id="contactForm">
                            <div className="left">
                                <input type="hidden" name="contact_number" />
                                <input type="text" required name="to_name" placeholder="성함을 입력하세요." />
                                <input type="text" required name="contact" placeholder="연락처를 입력하세요." />
                                <input type="email" required name="from_email" placeholder="이메일을 입력하세요." />
                            </div>
                            <div className="right">
                                <textarea required name="message_email" placeholder="문의내용을 입력하세요." />
                            </div>
                            <input type="submit" value="문의하기" />
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Location;