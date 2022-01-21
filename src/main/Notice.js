import { useEffect, useState } from "react";

function Notice(){
    const basic = [
        {title: 'Hello', content: 'Here comes description in detail.'},
        {title: 'Hello', content: 'Here comes description in detail.'},  
        {title: 'Hello', content: 'Here comes description in detail.'},  
        {title: 'Hello', content: 'Here comes description in detail.'},
        {title: 'Hello', content: 'Here comes description in detail.'},
        {title: 'Hello', content: 'Here comes description in detail.'}
    ]

    const getLocalItems = ()=>{
        let data = localStorage.getItem('posts');

        if(data){
            return JSON.parse(data);
        }else{
            return basic;
        }
    }

    const [posts] = useState(getLocalItems);

    useEffect(()=>{
        localStorage.setItem('posts', JSON.stringify('posts'));
    },[posts]);

    return (
        <section id="notice">
            <h2>Notice</h2>

            <ul className="noticeList">
                {
                    posts.map((post, index)=>{
                        if(index < 6){
                            return (
                                <li key={index}>
                                    <h3>{post.title}</h3>
                                    <p>{post.content}</p>
                                </li>
                            )
                        }
                    })
                }
            </ul>
        </section>
    )
}

export default Notice;