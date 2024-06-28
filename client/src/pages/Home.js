import NavBar from "../components/NavBar";
import ImageCarousel from "../components/ImageCarousel";
import bundt_cake from '../images/bundt_cake.jpg';

function Home() {
    return (
        <div>
            <NavBar />
            <header>
                <ImageCarousel />
            </header>
            <main>
                <article className="entry" aria-label="Bundt Cake">
                    <header className="entry-header">
                        <h2 className="entry-title">
                            <a className="entry-title-link" rel="bookmark" href="/recipes">Bundt Cake</a>
                        </h2>
                    </header>
                    <div className="entry-content">
                        <p className="entry-meta">
                            <time className="entry-time">June 26, 2024</time>
                            <br></br>
                            <span className="entry-comments-link">
                                <a href="/recipes/:id/#comments">Comments</a></span>
                        </p>
                        <p>
                            <img src={bundt_cake} alt="Bundt Cake" width="400" height="500" />
                        </p>
                        <p>I think it’s the most appetizing<em>-looking</em>
                            <a href="">cake</a>
                        </p>
                        <p><strong></strong></p>
                        <p> <a href={bundt_cake} className="more-link">Continue to the recipe »</a></p>
                    </div>
                </article>
                <aside
                    className="sidebar sidebar-primary widget-area"
                    role="complementary"
                    aria-label="Primary Sidebar"
                    id="genesis-sidebar-primary"
                    style={{ minHeight: "1941.95px" }}
                >
                    <h2 className="genesis-sidebar-title screen-reader-text">Primary Sidebar</h2>
                    <div className="intro-links"><a href="">Contact</a></div>
                    <p>This is the side bar area</p>
                </aside>
            </main>
        </div >
    )
}
export default Home;