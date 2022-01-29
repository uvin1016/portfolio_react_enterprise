import { useState, useEffect } from 'react';
import {NavLink} from 'react-router-dom';

const body = document.querySelector("body");

function Header(){
    const active = {color: "white"};
    const [gnbMb, setGnbMb] = useState(false);

    return (
        <header>
            <div className="inner">
                <h1><NavLink exact to="/">UFOLIO</NavLink></h1>
                <ul id="gnb">
                    <li><NavLink activeStyle={active} to="/department">DEPARTMENT</NavLink></li>
                    <li><NavLink activeStyle={active} to="/gallery">GALLERY</NavLink></li>
                    <li><NavLink activeStyle={active} to="/community">COMMUNITY</NavLink></li>
                    <li><NavLink activeStyle={active} to="/youtube">YOUTUBE</NavLink></li>
                    <li><NavLink activeStyle={active} to="/location">LOCATION</NavLink></li>
                    <li><NavLink activeStyle={active} exact to="/join">JOIN</NavLink></li>
                </ul>
                <ul id="util">
                    <li><a href="#">Search</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
                <button className="menu" onClick={()=>{
                    setGnbMb(true);
                }}></button>
            </div>
            {gnbMb ? <PopNav /> : ""}
        </header>
    )

    function PopNav(){
        useEffect(()=>{
            body.style.overflow = "hidden";
    
            return ()=>{
                body.style.overflow = "auto";
            }
        },[]);

        return (
            <aside className='pop'>
                <h1><NavLink exact to="/">UFOLIO</NavLink></h1>
                <ul id="gnb">
                    <li onClick={()=>setGnbMb(false)}><NavLink to="/department">DEPARTMENT</NavLink></li>
                    <li onClick={()=>setGnbMb(false)}><NavLink to="/gallery">GALLERY</NavLink></li>
                    <li onClick={()=>setGnbMb(false)}><NavLink to="/community">COMMUNITY</NavLink></li>
                    <li onClick={()=>setGnbMb(false)}><NavLink to="/youtube">YOUTUBE</NavLink></li>
                    <li onClick={()=>setGnbMb(false)}><NavLink to="/location">LOCATION</NavLink></li>
                    <li onClick={()=>setGnbMb(false)}><NavLink exact to="/join">JOIN</NavLink></li>
                </ul>
                <ul id="util">
                    <li><a href="#">Search</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
                <button className="close" onClick={()=>{
                    setGnbMb(false);
                }}>close</button>
            </aside>
        )
    }
}

export default Header;