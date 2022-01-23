import { useEffect, useState } from "react";

function Notice(){
    const getLocalItems = () => {
        let data = localStorage.getItem('posts');

        if (data) {
            let result = JSON.parse(data);
            return result;
        } else {
            return [
                {title: 'Hello', content: 'Here comes description in detail.'},
                {title: 'Hello', content: 'Here comes description in detail.'},  
                {title: 'Hello', content: 'Here comes description in detail.'},  
                {title: 'Hello', content: 'Here comes description in detail.'},
                {title: 'Hello', content: 'Here comes description in detail.'},
                {title: 'Hello', content: 'Here comes description in detail.'}
            ];
        }
    }

    const [posts] = useState(getLocalItems);

    useEffect(() => {
        localStorage.setItem('posts', JSON.stringify(posts));
    }, [posts])

    return (
        <section id="notice">
            <h2>Notice</h2>

            <div className="noticeList">
                {            
                    posts.map((post,index)=>{    
                        if(index < 6){
                            return (
                                <article key={index}>
                                    <h3>{post.title}</h3>
                                    <p>{post.content}</p>
                                </article>
                            )                                
                        }              
                    })
                }
            </div>
        </section>
    )
}

export default Notice;