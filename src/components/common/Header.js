import { useState, useEffect, useRef } from 'react';
import {NavLink} from 'react-router-dom';

function Header(){
    let nav = useRef(null);
    const [isOn, setIsOn] = useState(false);
    const toggleNav = () => setIsOn(!isOn);
    const closeNav = () => window.innerWidth > 1200 && setIsOn(false);

    useEffect(()=>{
        window.addEventListener('resize',closeNav);
        return ()=> window.removeEventListener('resize',closeNav);
    },[])

    return (
        <>
            <header>
                <div className="inner">
                    <h1><NavLink exact to="/" onClick={toggleNav}>UFOLIO</NavLink></h1>
                    <Gnb />
                    <button className="menu" onClick={toggleNav}></button>
                </div>
            </header>
            <nav ref={nav} className={isOn ? 'on' : null} >
                <Gnb toggleNav={toggleNav} />
            </nav>
        </>
    )
}

function Gnb(props){
    const active = {color: "white"};

    return (
        <>
            <ul id="gnb" onClick={props.toggleNav}>
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
        </>
    )
}

export default Header;