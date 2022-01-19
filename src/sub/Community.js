import { useRef, useState } from "react";

function Community(){
    const baseURL = process.env.PUBLIC_URL;
    const input = useRef(null);
    const textarea = useRef(null);
    const updateInput = useRef(null);
    const updateTextarea = useRef(null);
    const showBox = useRef(null);
    const [posts, setPosts] = useState([
        {title: 'Hello0', content: 'Here comes description in detail.'},
        {title: 'Hello1', content: 'Here comes description in detail.'},  
        {title: 'Hello2', content: 'Here comes description in detail.'},  
        {title: 'Hello3', content: 'Here comes description in detail.'}    
    ]);
    const len = posts.length;

    const createPost = ()=>{
        setPosts([
            {title : input.current.value, content: textarea.current.value},...posts
        ]);
        input.current.value = '';
        textarea.current.value = '';
    }

    const deletePost= index=>{
        setPosts(
            posts.filter((_, postIndex)=> postIndex !== index)
        )  
    }

    const enableUpdate= index=>{
        setPosts(
            posts.map((post, postIndex)=>{
                if(postIndex === index) post.enableUpdate = true;
                return post;
            })
        )
        console.log(posts);
    }

    const disableUpdate=index=>{
        setPosts(
            posts.map((post, postIndex)=>{
                if(postIndex === index) post.enableUpdate = false;
                return post;
            })
        )
        console.log(posts);
    }

    const updatePost=index=>{
        if(!updateInput.current.value || !updateTextarea.current.value){
            alert('수정할 제목과 본문을 모두 입력하세요.');
            return;
        }
        
        setPosts(
            posts.map((post, postIndex)=>{
                if(postIndex === index){       
                    post.title = updateInput.current.value;
                    post.content = updateTextarea.current.value;
                    post.enableUpdate = false;
                }
                return post;
            })
        )
    }
    


    return (
        <main className="content community">
            <div className="inner">
                <h1>
                    <p>Notice</p>
                    <p>And Question</p>
                </h1>

                <div className="faqWrap">
                    <h2>FaQ</h2>
                    <div className="inner">
                        <article>
                            <h3>Q1</h3>
                            <p>Lorem dolor sit amet<br /> consectetur</p>
                        </article>
                        <article>
                            <h3>Q2</h3>
                            <p>Lorem ipsum amet<br /> consectetur adipisicing</p>
                        </article>
                        <article>
                            <img src={`${baseURL}/img/faq1.jpg`} alt="faq이미지1" />
                        </article>
                        <article>
                            <img src={`${baseURL}/img/faq2.jpg`} alt="faq이미지2" />
                        </article>
                        <article>
                            <h3>Q3</h3>
                            <p>Lorem ipsum dolor sit amet<br /> adipisicing</p>
                        </article>
                        <article>
                            <h3>Q4</h3>
                            <p>Dolor sit amet<br /> consectetur adipisicing</p>
                        </article>
                    </div>
                </div>

                <div className="boardWrap">
                    <h2>Notice</h2>

                    <div className="notice">
                        <section className="inputBox">
                            <input type="text" placeholder="제목을 입력하세요." ref={input} />
                            <textarea placeholder="본문을 입력하세요." ref={textarea}></textarea>

                            <ul className="btns">
                                <li><button onClick={createPost}>생성</button></li>
                                <li><button onClick={()=>{
                                    input.current.value = '';
                                    textarea.current.value = '';
                                }}>취소</button></li>
                            </ul>
                        </section>
                        <section className="showBox" ref={showBox}>
                            {
                                posts.map((post, index)=>{
                                    return (
                                        <article key={index}>
                                            <p className="num">{((len - index) < 10) ? '0' + (len - index) + '.' : (len - index) + '.'}</p>
                                            {
                                                post.enableUpdate
                                                ?
                                                <>
                                                    <div className="post">
                                                        <input type="text" placeholder="제목을 입력하세요" defaultValue={post.title} ref={updateInput} />
                                                        <textarea placeholder="본문을 입력하세요." defaultValue={post.content} ref={updateTextarea}></textarea>
                                                    </div> 

                                                    <ul className="btnsUpdate">
                                                        <li onClick={()=>updatePost(index)}>입력</li>
                                                        <li onClick={()=>disableUpdate(index)}>취소</li>
                                                    </ul>
                                                </>
                                                :
                                                <>
                                                    <div className="post">
                                                        <h3>{post.title}</h3>
                                                        <p>{post.content}</p>
                                                    </div> 

                                                    <ul className="btnsUpdate">
                                                        <li onClick={()=>enableUpdate(index)}>수정</li>
                                                        <li onClick={()=>deletePost(index)}>삭제</li>
                                                    </ul>
                                                </>
                                            }
                                        </article>
                                    )
                                })
                            }
                        </section>
                    </div>

                    <div className="pagination">
                        <a href="#" className="prev" onClick={e=>e.preventDefault()}><i className="las la-angle-double-left"></i></a>
                        <p className="num">
                            <a href="#" className="on" onClick={e=>e.preventDefault()}>1</a>
                            <a href="#" onClick={e=>e.preventDefault()}>2</a>
                            <a href="#" onClick={e=>e.preventDefault()}>3</a>
                            <a href="#" onClick={e=>e.preventDefault()}>4</a>
                            <a href="#" onClick={e=>e.preventDefault()}>5</a>
                        </p>
                        <a href="#" className="next" onClick={e=>e.preventDefault()}><i className="las la-angle-double-right"></i></a>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Community;