import {NavLink} from 'react-router-dom';

function Header(){
    const active = {color: "white"};

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
                <button className="menu"></button>
            </div>
        </header>
    )
}

export default Header;