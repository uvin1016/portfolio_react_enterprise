function About (){
    const baseURL = process.env.PUBLIC_URL;

    return(
        <section id="about">
            <h1>About Us</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, facilis voluptate. Voluptates vitae veniam voluptatibus dicta corrupti, totam quaerat illo.</p>

            <div className="imgWrap">
                <div className="pic">
                    <img src={`${baseURL}/img/about.jpg`} alt="아트이미지1" />

                    <div className="text">
                        <h2>Be true to thyself</h2>
                        <span>Kylen</span>
                    </div>
                </div>

                <div className="pic">
                    <img src={`${baseURL}/img/about2.jpg`} alt="아트이미지2" />

                    <div className="text">
                        <h2>Love conquers all</h2>
                        <span>Rhoads</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;