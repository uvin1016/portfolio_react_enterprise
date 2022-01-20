import Visual from "./Visual";
import About from "./About";
import Project from "./Project";
import Music from "./Music";
import News from "./News";

function Main(){
    return (
        <main className="content main">
            <div className="inner">
                <Visual />
                <About />
                <Project />
                <Music />
                <News />
            </div>
        </main>
    )
}

export default Main;