import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

function Slider({ start }) {
  return (
    <>
      <Carousel fade>
        {start.map((items, index) => {
          return (
            <Carousel.Item>
              <img className="d-block w-100" key={items.index} src={items} alt={items.index} />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
}

export default Slider;
