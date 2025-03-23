import React from "react";
import Container from "./Container";
import Marquee from "react-fast-marquee";
import Title from "./Title";
import img1 from "../assets/brand/1.webp";
import img2 from "../assets/brand/2.webp";
import img3 from "../assets/brand/3.webp";
import img4 from "../assets/brand/4.webp";
import img5 from "../assets/brand/5.webp";
import img6 from "../assets/brand/6.webp";
import img7 from "../assets/brand/7.webp";
import img8 from "../assets/brand/8.webp";

const Brand = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];

  return (
    <Container className="mt-10">
      <Title title="Shop By Brands" />
      <div className="mt-5">
        <Marquee speed={50} gradient={false}>
          {images.map((img, index) => (
            <div
              key={index}
              className="flex items-center justify-center mx-4 p-4  rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            >
              <img
                className="h-20 w-auto object-contain"
                src={img}
                alt={`Brand ${index + 1}`}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </Container>
  );
};

export default Brand;
