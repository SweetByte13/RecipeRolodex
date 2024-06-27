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
                <article class="entry" aria-label="Bundt Cake">
                    <header class="entry-header">
                        <h2 class="entry-title">
                            <a class="entry-title-link" rel="bookmark" href="/recipes">Bundt Cake</a>
                        </h2>
                    </header>
                    <div class="entry-content">
                        <p class="entry-meta">
                            <time class="entry-time">June 26, 2024</time>
                            <br></br>
                            <span class="entry-comments-link">
                                <a href="/recipes/:id/#comments">Comments</a></span>
                        </p>
                        <p>
                            <img src={bundt_cake} alt="Bundt Cake" width="400" height="500" />
                        </p>
                        <p>I think it’s the most appetizing<em>-looking</em>
                            <a href="">cake</a>
                        </p>
                        <p><strong></strong></p>
                        <p> <a href={bundt_cake} class="more-link">Continue to the recipe »</a></p>
                    </div>
                </article>
                <aside
                    class="sidebar sidebar-primary widget-area"
                    role="complementary"
                    aria-label="Primary Sidebar"
                    id="genesis-sidebar-primary"
                    style={{ minHeight: "1941.95px" }}
                >
                    <h2 class="genesis-sidebar-title screen-reader-text">Primary Sidebar</h2>
                    <div class="intro-links"><a href="https://cookieandkate.com/contact/">Contact</a></div>
                    <p>This is the side bar area</p>
                </aside>
            </main>
        </div >
    )
}
export default Home;