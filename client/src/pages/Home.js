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
                <section className="home-section-banner">
                    <div className="first-title-on-home">
                        <h2>
                            What is Recipe Rolodex?
                        </h2>
                    </div>
                    <div className="first-p-on-home">
                        <p>
                            Welcome to our innovative recipe app, a platform designed to revolutionize your cooking experience.
                            This app is not just a collection of recipes, but a comprehensive culinary companion that caters to your personal preferences and dietary needs.
                            Once you sign up and log in, you gain access to a vast library of recipes from around the world. But that’s not all - you can also contribute your own unique recipes, adding to our diverse and ever-growing collection.
                            This interactive feature sets us apart from other recipe sites, fostering a community of food lovers who share and celebrate their culinary creations.
                        </p>
                    </div>
                </section>
                <div className="spacing">
                    <br></br>
                </div>
                <section className="home-section-banner">
                    <div className="second-title-on-home">
                        <h2> What makes us different?</h2>
                    </div>
                    <div className="second-p-on-home">
                        <p>
                            Our app is designed with user convenience in mind.
                            We understand that not all recipes come in a digital format, so we’ve incorporated a feature that allows you to upload recipe files.
                            Our app then converts these files into an editable digital format, making it easy for you to tweak the recipe to your liking.
                            This unique feature is a game-changer, making our app a one-stop solution for all your recipe needs.
                        </p>
                    </div>
                </section>
                <div>
                    <br></br>
                </div>
                <section className="home-section-banner">
                    <div className="third-title-on-home">
                        <h2>We DO think everything revolves around you!</h2>
                    </div>
                    <div className="third-p-on-home">
                        <p>
                            Personalization is at the heart of our app.
                            We know that everyone’s pantry is different, so we’ve included a feature that allows you to filter recipes based on the ingredients you have on hand.
                            No more scrolling through irrelevant recipes - our app brings you only the ones you can whip up with your available ingredients.
                            Additionally, you can set dietary restrictions, and our app will remember these preferences, using them to filter recipes.
                            This level of customization makes our app a cut above the rest, ensuring that you have a seamless and enjoyable cooking experience.
                        </p>
                    </div>
                </section>
                <div>
                    <br></br>
                </div>
                <section className="home-section-banner">
                    <div className="four-title-on-home">
                        <h2>We believe that cooking should be stress-free and budget-friendly</h2>
                    </div>
                    <div className="four-p-on-home">
                        <p>
                            That’s why our app includes a feature that shows you the cost of groceries for a recipe based on your location.
                            This unique feature helps you plan your meals better, keeping your grocery bills in check.
                            Unlike other recipe sites, we go the extra mile to ensure that you can enjoy delicious meals without breaking the bank.
                        </p>
                    </div>
                </section>
                <div>
                    <br></br>
                </div>
                <section className="home-section-banner">
                    <div className="five-title-on-home">
                        <h2>Health is wealth, and our app embodies this philosophy</h2>
                    </div>
                    <div className="five-p-on-home">
                        <p>
                            Each recipe on our app comes with detailed nutritional values, helping you make informed food choices.
                            Whether you’re counting calories, watching your sodium intake, or trying to get more fiber in your diet, our app has got you covered.
                            This commitment to promoting healthy eating habits sets us apart from other recipe sites.
                        </p>
                    </div>
                </section>
                <div>
                    <br></br>
                </div>
                <section className="home-section-banner">
                    <div className="six-title-on-home">
                        <h2>We are all about flexibility and adaptability</h2>
                    </div>
                    <div className="six-p-on-home">
                        <p>
                            We understand that recipes come in different units of measurement, and portion sizes can vary.
                            That’s why our app allows you to convert recipes between metric and imperial units and adjust the portion sizes to fit different size families.
                            This feature ensures that no matter where you are in the world, or how big your family is, our app is your perfect cooking companion.
                            This level of adaptability is what makes our app stand out from other recipe sites, making it a truly global platform for all food lovers.
                        </p>
                    </div>
                </section>
                <div>
                    <br></br>
                </div>
                <section>
                    This is where the copyright area would be
                </section>
                {/* <article className="entry" aria-label="Bundt Cake">
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
                </article>  */}
                {/* <aside
                    className="sidebar sidebar-primary widget-area"
                    role="complementary"
                    aria-label="Primary Sidebar"
                    id="genesis-sidebar-primary"
                    style={{ minHeight: "1941.95px" }}
                >
                    <h2 className="genesis-sidebar-title screen-reader-text">Primary Sidebar</h2>
                    <div className="intro-links"><a href="">Contact</a></div>
                    <p>This is the side bar area</p>
                </aside> */}
            </main>
        </div >
    )
}
export default Home;