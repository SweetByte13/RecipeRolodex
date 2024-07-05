import NavBar from "../components/NavBar";
import ImageCarousel from "../components/ImageCarousel";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import cauli_salad from "../images/cauli_salad.png";
import roasted_plums from "../images/roasted_plums.png";
import smothered_fries from "../images/smothered_fries.jpg";
import curry from "../images/curry.png";
import cherry_cake from "../images/cherry_cake.png";
import { bifacebook } from 'react-bootstrap-icons';


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
                            <img className="home-images" src={roasted_plums} />
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
                <div className="copywrite">
                    <Container>
                        <Row>
                            <Col>
                                <Stack gap={3}>
                                    <div className="p-2">About Us</div>
                                    <div className="p-2">Privacy Policy</div>
                                    <div className="p-2">Terms of Service</div>
                                    <div className="p-2">Your Privacy Choices&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shield-check" viewBox="0 0 16 16">
                                        <path d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56" />
                                        <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0" />
                                    </svg></div>
                                    <div className="RR"><strong><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-c-circle" viewBox="0 0 16 16">
                                        <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512" />
                                    </svg> 2024 RecipeRolodex</strong></div>
                                </Stack>
                            </Col>
                            <Col>
                                <Stack gap={3}>
                                  
                                    <br></br>
                                    <br></br>
                                    <div className="socials">FOLLOW US ON SOCIAL MEDIA</div>
                                    <div>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                                        </svg>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                                        </svg>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                                            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                                        </svg>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pinterest" viewBox="0 0 16 16">
                                            <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0" />
                                        </svg>
                                    </div>

                                </Stack>
                            </Col>
                            <Col>
                                <Stack gap={3}>
                                    <div>Contact Us</div>
                                    <a href="mailto:Info@RecipeRolodex.org">Info@RecipeRolodex.org</a>
                                    (123) 456-7890
                                    <br></br>
                                    <br></br>
                                    Recipe Rolodex <br></br> 123 Culinary Lane <br></br> Foodie City, FL 33128
                                </Stack>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </main >
        </div >
    )
}
export default Home;