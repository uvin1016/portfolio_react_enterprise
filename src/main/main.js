import Visual from "./Visual";
import About from "./About";
import Project from "./Project";
import Music from "./Music";
import News from "./News";
import Btns from "./Btns";
import Anime from "../class/anime";
import { useEffect, useRef, useState } from "react";

function Main(){
    const main = useRef(null);
    let pos = useRef([]);
    const [index, setIndex] = useState(0);

    const getIndex = index=>{
        setIndex(index);
    }

    const handleResize = ()=>{
        const secs = main.current.querySelectorAll('section');
        let arr = [];
        for (let sec of secs) arr.push(sec.offsetTop);
        pos.current = arr;
    }

    const handleScroll = ()=>{
        let scroll = window.scrollY;
        const btns = main.current.querySelectorAll('#btns li');

        pos.current.map((pos, index)=>{
            if(scroll >= pos){
                for(const btn of btns) btn.classList.remove('on');
                btns[index].classList.add('on');
            }
        })
    }

    useEffect(()=>{
        handleResize();
        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        new Anime(window, {
            prop: 'scroll',
            value: pos.current[index],
            duration: 500
        })

        return ()=>{
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        }
    },[index])

    return (
        <main className="content main" ref={main}>
            <div className="inner">
                <Visual />
                <About />
                <Project />
                <Music />
                <News />
            </div>
            <Btns getIndex={getIndex} />
        </main>
    )
}

export default Main;