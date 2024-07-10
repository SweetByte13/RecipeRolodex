import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ImageCarousel from "../components/ImageCarousel";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import cauli_salad from "../images/cauli_salad.png";
import peaches from "../images/peaches.jpg";
import smothered_fries from "../images/smothered_fries.jpg";
import curry from "../images/curry.png";
import cherry_cake from "../images/cherry_cake.png";

function Home() {
    return (
        <div>
            <NavBar />
            <header>
                <ImageCarousel />
            </header>
            <main>
                <div className="home-background-banner">
                    <Container>
                        <Row>
                            <Col style={{ paddingLeft: '300px', paddingRight: '150px' }} className="left-p-on-home">
                                <h2 className="title-on-home">What is Recipe Rolodex?</h2>
                                Welcome to our innovative recipe app, a platform designed to revolutionize your cooking experience.
                                This app is not just a collection of recipes, but a comprehensive culinary companion that caters to your personal preferences and dietary needs.
                                Once you sign up and log in, you gain access to a vast library of recipes from around the world. But that’s not all - you can also contribute your own unique recipes, adding to our diverse and ever-growing collection.
                                This interactive feature sets us apart from other recipe sites, fostering a community of food lovers who share and celebrate their culinary creations.
                            </Col>
                            <Col>
                                <img className="home-images" src={cauli_salad} />
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Container>
                    <Row>
                        <Col style={{ paddingLeft: '300px' }} >
                            <img className="home-images" src={peaches} />
                        </Col>
                        <Col style={{ paddingRight: '200px' }} className="right-p-on-home">
                            <h2 className="title-on-home">What makes us different?</h2>
                            Our app is designed with user convenience in mind.
                            We understand that not all recipes come in a digital format, so we’ve incorporated a feature that allows you to upload recipe files.
                            Our app then converts these files into an editable digital format, making it easy for you to tweak the recipe to your liking.
                            This unique feature is a game-changer, making our app a one-stop solution for all your recipe needs.
                        </Col>
                    </Row>
                </Container>
                <div className="home-background-banner">
                    <Container>
                        <Row>
                            <Col style={{ paddingLeft: '300px', paddingRight: '150px' }} className="left-p-on-home">
                                <h2 className="title-on-home"> We DO think everything revolves around you!</h2>
                                Personalization is at the heart of our app.
                                We know that everyone’s pantry is different, so we’ve included a feature that allows you to filter recipes based on the ingredients you have on hand.
                                No more scrolling through irrelevant recipes - our app brings you only the ones you can whip up with your available ingredients.
                                Additionally, you can set dietary restrictions, and our app will remember these preferences, using them to filter recipes.
                                This level of customization makes our app a cut above the rest, ensuring that you have a seamless and enjoyable cooking experience.
                            </Col>
                            <Col>
                                <img className="home-images" src={curry} />
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Container>
                    <Row>
                        <Col style={{ paddingLeft: '300px' }}>
                            <img className="home-images" src={smothered_fries} />
                        </Col>
                        <Col style={{ paddingRight: '200px' }} className="right-p-on-home">
                            <h2 className="title-on-home">We believe that cooking should be stress-free and budget-friendly</h2>
                            That’s why our app includes a feature that shows you the cost of groceries for a recipe based on your location.
                            This unique feature helps you plan your meals better, keeping your grocery bills in check.
                            Unlike other recipe sites, we go the extra mile to ensure that you can enjoy delicious meals without breaking the bank.
                        </Col>
                    </Row>
                </Container>
                <div className="home-background-banner">
                    <Container>
                        <Row>
                            <Col style={{ paddingLeft: '300px', paddingRight: '150px' }} className="left-p-on-home">
                                <h2 className="title-on-home">Health is wealth, and our app embodies this philosophy</h2>
                                Each recipe on our app comes with detailed nutritional values, helping you make informed food choices.
                                Whether you’re counting calories, watching your sodium intake, or trying to get more fiber in your diet, our app has got you covered.
                                This commitment to promoting healthy eating habits sets us apart from other recipe sites.
                            </Col>
                            <Col>
                                <img className="home-images" src={cauli_salad} />
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Container>
                    <Row>
                        <Col style={{ paddingLeft: '300px' }}>
                            <img className="home-images" src={cherry_cake} />
                        </Col>
                        <Col style={{ paddingRight: '200px' }} className="right-p-on-home">
                            <h2 className="title-on-home">We are all about flexibility and adaptability</h2>
                            We understand that recipes come in different units of measurement, and portion sizes can vary.
                            That’s why our app allows you to convert recipes between metric and imperial units and adjust the portion sizes to fit different size families.
                            This feature ensures that no matter where you are in the world, or how big your family is, our app is your perfect cooking companion.
                            This level of adaptability is what makes our app stand out from other recipe sites, making it a truly global platform for all food lovers.
                        </Col>
                    </Row>
                </Container>
                <Footer/>
            </main >
        </div >
    )
}
export default Home;