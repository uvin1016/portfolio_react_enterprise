import axios from "axios";
import { useEffect, useState } from "react";

function Department(){
    const [awards, setAwards] = useState([]);
    const [position, setPosition] = useState({x:0,y:0});
    const [members, setMembers] = useState([]);
    const baseURL = process.env.PUBLIC_URL;

    useEffect(()=>{
        axios.get(`${baseURL}/dbs/awards.json`).then((data)=>{
            setAwards(data.data.data);
        });
    },[])

    useEffect(()=>{
        axios.get(`${baseURL}/dbs/members.json`).then((data)=>{
            setMembers(data.data.data);
        })
    },[])

    return (
        <main className="content department">
            <div className="inner">
                <h1>
                    <p>Who</p>
                    <p>Are We</p>
                </h1>

                <div className="awards">
                    <h2>awards</h2>
                    <ul>
                        {
                            awards.map((award,index)=>{
                                let scrollY = document.documentElement.scrollTop;
                                return (
                                    <li key={index} onMouseMove={(e)=>{
                                        setPosition({x: e.clientX, y: e.clientY+scrollY});
                                    }}>
                                        <h3>{award.title}</h3>
                                        <span>{award.year}</span>
                                        <img src={`${baseURL}`+award.img} style={{left:`${position.x}px`, top:`${position.y}px`}}/>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

                <div className="members">
                    <h2>members</h2>
                    <div className="inner">
                        {
                            members.map((member,index)=>{
                                return (
                                    <article key={index}>
                                        <div className="pic">
                                            <img src={`${baseURL}`+member.img} />
                                            <div className="txt">
                                                <span>{member.position}</span>
                                                <p>{member.name}</p>
                                                <div className="sns">
                                                    <a href="#"><i className="lab la-facebook"></i></a>
                                                    <a href="#"><i className="lab la-instagram"></i></a>
                                                    <a href="#"><i className="lab la-twitter"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </main>
    )
    

}

export default Department;