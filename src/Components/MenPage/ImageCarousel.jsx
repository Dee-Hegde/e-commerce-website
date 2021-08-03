import React from "react";
import { Carousel } from "react-responsive-carousel";
import images1 from "./Images/Carousel1.webp";
import images2 from "./Images/Carousel2.webp";
import images3 from "./Images/Carousel3.webp";
import images4 from "./Images/Carousel4.jpg";
import images5 from "./Images/Carousel5.webp";
import images6 from "./Images/carouselImageAdd.jpg";

const ImageCarousel = () => (
  <Carousel autoPlay showIndicators={false} showThumbs={false} >

    <div>
      <img
        alt=""
        src={images6} />
      {/* <p className="legend">Legend 1</p> */}
    </div>
    <div>
      <img
        alt=""
        src={images1} />
      {/* <p className="legend">Legend 1</p> */}
    </div>
    <div>
      <img
        alt=""
        src={images4} />
      {/* <p className="legend">Legend 2</p> */}
    </div>
    <div>
      <img
        alt=""
        src={images3} />
      {/* <p className="legend">Legend 3</p> */}
    </div>
    <div>
      <img
        alt=""
        src={images2} />
    </div>
    <div>
      <img
        alt=""
        src={images5} />
    </div>
    
  </Carousel>
)

export default ImageCarousel;



