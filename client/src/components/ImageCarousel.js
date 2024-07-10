import React from "react";
import { useNavigate } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import bundt_cake from '../images/bundt_cake.jpg';
import chicken_sandwich from '../images/chicken_sandwich.jpg';
import fondue_board from '../images/fondue_board.jpg';
import Sourdough from '../images/Sourdough.jpg';
import stuffed_avo from '../images/stuffed_avo.jpg';
import white_fish from '../images/white_fish.jpg';


function ImageCarousel() {
    return (
        <Carousel fade className="carousel-container">
            <Carousel.Item>
                <img width={1600} height={500} alt="1600x500"
                    className="carousel-image"
                    src={chicken_sandwich}
                />
                <Carousel.Caption>
                    <h3>Chicken and Provolone Sandwich</h3>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img width={1600} height={500} alt="1600x500"
                    className="carousel-image"
                    src={bundt_cake}
                />
                <Carousel.Caption>
                    <h3>Bundt Cake</h3>
                    <p>Light and Fluffy Bundt Cake Dusted with Confectioners' Sugar</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img width={1600} height={500} alt="1600x500"
                    className="carousel-image"
                    src={fondue_board}
                />
                <Carousel.Caption>
                    <h3>Fondue Board</h3>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img width={1600} height={500} alt="1600x500"
                    className="carousel-image"
                    src={Sourdough}
                />
                <Carousel.Caption>
                    <h3>Sourdough Loaf</h3>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img width={1600} height={500} alt="1600x500"
                    className="carousel-image"
                    src={stuffed_avo}
                />
                <Carousel.Caption>
                    <h3>Vegetarian Stuffed Avacado</h3>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img width={1600} height={500} alt="1600x500"
                    className="carousel-image"
                    src={white_fish}
                />
                <Carousel.Caption>
                    <h3>White Fish and Avacado Ceviche</h3>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}
export default ImageCarousel;