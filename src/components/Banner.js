import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
function Banner({ banner }) {
  return (
    <>
      <Carousel fade>
        {banner.end.map((items, index) => {
          return (
            <Carousel.Item
              id="banner"
              interval={1000}
              keybaord={true}
              key={items.image}
            >
              <img
                className="d-block w-100"
                src={items.image}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>{items.name}</h3>
                <p>{items.description}</p>
                <p>Source:{items.source}</p>
                <u>Read more</u>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
}

export default Banner;
