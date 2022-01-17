import {NavLink} from 'react-router-dom';

function Footer(){
    return (
        <footer>
            <div className="top">
                <div className="inner">
                    <ul id="footerUtil">
                        <li><i className="lab la-facebook-square"></i></li>
                        <li><i className="lab la-twitter"></i></li>
                        <li><i className="lab la-instagram"></i></li>
                    </ul>
                    <h1><NavLink exact to="/">UFOLIO</NavLink></h1>
                    <button className="subscribe">SUBSCRIBE <i className="las la-long-arrow-alt-right"></i></button>
                </div>
            </div>
            <ul id='footerGnb'>
                <li><NavLink to="/department">DEPARTMENT</NavLink></li>
                <li><NavLink to="/gallery">GALLERY</NavLink></li>
                <li><NavLink to="/community">COMMUNITY</NavLink></li>
                <li><NavLink to="/youtube">YOUTUBE</NavLink></li>
                <li><NavLink to="/location">LOCATION</NavLink></li>
                <li><NavLink to="/join">JOIN</NavLink></li>
            </ul>
            <p>2022 UFOLIO &copy; ALL RIGHTS RESERVED.</p>
        </footer>
    )
}

export default Footer;