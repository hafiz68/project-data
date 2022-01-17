import React from "react";
import { Carousel } from "react-bootstrap";
import Render3 from "../Assests/renders/render 3.png";
import Render6 from "../Assests/renders/render 6.png";

import Render9 from "../Assests/renders/render 9.png";
import Render11 from "../Assests/renders/render 11.png";
import "./reactCarousel.css";

const ReactCarousel = () => {
  return (
    <div>
      <h1 className="slider-carousel-heading"> SLIDER</h1>
      <div className="container carousel-style">
        <div className="bg-color ">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block image-height  w-100"
                src={Render11}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block image-height   w-100"
                src={Render6}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block image-height  w-100"
                src={Render3}
                alt="Third slide"
              />
            </Carousel.Item>

            <Carousel.Item className="carousel-image">
              <img
                className="d-block image-height   w-100"
                src={Render9}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ReactCarousel;
