import { React } from "react";
import { Carousel } from "react-bootstrap";

export const Slider = ({ images }) => (
  <Carousel>
    {images.map((image) => (
      <Carousel.Item key={Math.random()}>
        <img
          className="d-block h-40 w-100"
          src={"http://hipstagram.asmer.fs.a-level.com.ua/" + image.url}
        />
      </Carousel.Item>
    ))}
  </Carousel>
);
