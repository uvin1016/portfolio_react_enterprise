import { useEffect, useRef} from "react";

function Visual (){
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
        <section id="visual">
            <h1>Investment<br />Group <span>CHRISTY<br />MONRAY</span></h1>
            <figure ref={frame}>
                <video src={`${baseURL}/vid/alena.mp4`} autoPlay muted loop></video>
            </figure>
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
}

export default Visual;