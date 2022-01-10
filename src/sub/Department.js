import axios from "axios";
import { useEffect, useState } from "react";

function Department(){
    const [members, setMembers] = useState([]);
    const baseURL = process.env.PUBLIC_URL;

    useEffect(()=>{
        axios.get(`${baseURL}/dbs/members.json`).then((data)=>{
            setMembers(data.data.data);
        })
    },[])

    return (
        <section className="content department">
            <div className="inner">
                <h1>
                    <p>Who</p>
                    <p>Are We</p>
                </h1>

                <div className="awards">
                    <h2>awards</h2>
                    <ul>
                        <li><h3>Be true to thyself</h3> <span>2022 winner</span></li>
                        <li><h3>Attitude is everything</h3> <span>2021 winner</span></li>
                        <li><h3>Love conquers all</h3> <span>2020 nominee</span></li>
                        <li><h3>Be gentle first with yourself</h3> <span>2019 nominee</span></li>
                        <li><h3>It’s never too late</h3> <span>2018 winner</span></li>
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
                                        </div>
                                        <div className="txt">
                                            <span>{member.position}</span>
                                            <p>{member.name}</p>
                                        </div>
                                    </article>
                                )
                            })
                        }
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Department;