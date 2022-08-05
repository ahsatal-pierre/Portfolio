import React, { useState } from "react";
import "./Home.css";
import Carousel from "better-react-carousel";
import apside1 from "../photos/apside1.png";
import apside2 from "../photos/apside2.png";
import apside3 from "../photos/apside3.png";
import CAL1 from "../photos/CAL1.png";
import CG1 from "../photos/CG1.png";
import CG2 from "../photos/CG2.png";
import CODE1 from "../photos/CODE1.png";
import CODE2 from "../photos/CODE2.png";
import CODE3 from "../photos/CODE3.png";
import CODE4 from "../photos/CODE4.png";
import NT1 from "../photos/NT1.png";
import NT6 from "../photos/NT6.png";
import NT2 from "../photos/NT2.png";
import NT3 from "../photos/NT3.png";
import NT4 from "../photos/NT4.png";
import NT5 from "../photos/NT5.png";
import GOT1 from "../photos/GOT1.png";
import GOT2 from "../photos/GOT2.png";
import GOT3 from "../photos/GOT3.png";
import GOT4 from "../photos/GOT4.png";
import DRA1 from "../photos/DRA1.png";
import DH1 from "../photos/DH1.png";
import DH2 from "../photos/DH2.png";
import DH3 from "../photos/DH3.png";

function Gallery() {
  const [isShown, setIsShown] = useState(false);
  const handleClick = (event) => {
    event.preventDefault();
    setIsShown(!isShown);
  };

  return (
    <>
      <button type="button" onClick={handleClick} id="photoButton">
        Gallery
      </button>
      {isShown && (
        <Carousel
          cols={2}
          rows={1}
          gap={1}
          loop
          autoplay={900}
          hideArrow="true"
        >
          <Carousel.Item>
            <img width="100%" src={apside1} alt="apside1" id="img" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src={apside2} alt="apside2" id="img" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src={apside3} alt="apside3" id="img" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src={CAL1} alt="CAL1" id="img" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src={CG1} alt="CG1" id="img" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src={CG2} alt="CG2" id="img" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src={CODE1} alt="CODE1" id="img" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src={GOT3} alt="GOT3" id="img" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src={NT4} alt="NT4" id="img" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src={CODE4} alt="CODE4" id="img" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src={DH2} alt="DH2" id="img" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src={CODE3} alt="CODE3" id="img" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src={DRA1} alt="DRA1" id="img" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src={GOT1} alt="GOT1" id="img" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src={NT3} alt="NT3" id="img" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src={DH3} alt="DH3" id="img" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src={NT6} alt="NT6" id="img" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src={DH1} alt="DH1" id="img" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src={NT5} alt="NT5" id="img" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src={NT4} alt="NT4" id="img" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src={CODE2} alt="CODE2" id="img" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src={GOT2} alt="GOT2" id="img" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src={NT1} alt="NT1" id="img" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src={GOT4} alt="GOT4" id="img" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src={NT2} alt="NT2" id="img" />
          </Carousel.Item>
        </Carousel>
      )}
    </>
  );
}

export default Gallery;
