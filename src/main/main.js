import { useEffect } from "react";
import { useRef } from "react/cjs/react.development";

function Main(){
    const baseURL = process.env.PUBLIC_URL;
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
        <section className="content main">
            <div className="inner">
                <div className="visual">
                    <h1>Investment<br />Group <span>CHRISTY<br />MONRAY</span></h1>
                    <figure ref={frame}>
                        <video src={`${baseURL}/vid/Waves.mp4`} autoPlay muted loop></video>
                    </figure>
                </div>
            </div>
        </section>
    )

    function vidMove (){
        const scrollValue = window.scrollY || window.pageYOffset;
        if(scrollValue > 0) frame.current.classList.add("on");
    }
}

export default Main;