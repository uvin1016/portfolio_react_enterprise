function Music (){
    const baseURL = process.env.PUBLIC_URL;
    const album = ['Black','Earth','Forest','Future','Shoshanim','Snowy'];

    return (
        <section id="music">
            <h2>Music</h2>

            <div className="container">
                {
                    album.map((music,index)=>{
                        return (
                            <article key={index}>
                                <div className="pic">
                                    <img src={`${baseURL}/img/${music}.jpg`} alt={`${music}이미지`} />
                                </div>
                                <div className="txt">
                                    <h3>{music}</h3>
                                    <h4>Artist</h4>
                                    <p>music jenre</p>
                                    <p>music jenre</p>
                                    <div className="btn" onClick={e=>{
                                        playAlbum(e);
                                    }}><button></button></div>
                                    <audio src={`${baseURL}/music/${music}.mp3`}></audio>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )

    function playAlbum(e){
        let isActivePic = e.currentTarget.closest('article').querySelector('.pic').classList.contains('play');
        let isActiveBtn = e.currentTarget.closest('article').querySelector('.btn').classList.contains('play');

        if(isActiveBtn && isActivePic) {
            e.currentTarget.closest('article').querySelector('.pic').classList.remove('play');
            e.currentTarget.closest('article').querySelector('.btn').classList.remove('play');
            e.currentTarget.closest('article').querySelector('audio').pause();
        }else{
            initMusic();
            e.currentTarget.closest('article').querySelector('.pic').classList.add('play');
            e.currentTarget.closest('article').querySelector('.btn').classList.add('play');
            e.currentTarget.closest('article').querySelector('audio').play();
        }
    }
    

    function initMusic(){
        let playBtns = document.querySelectorAll(".music .container article .txt .btn");

        for(let playBtn of playBtns){
            playBtn.closest('.txt').querySelector('audio').pause();
            playBtn.closest('.txt').querySelector('audio').load();
            playBtn.closest('article').querySelector('.pic').classList.remove("play");
            playBtn.classList.remove("play");
        }
    }
}

export default Music;