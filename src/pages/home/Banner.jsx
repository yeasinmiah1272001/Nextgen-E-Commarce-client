import React, { useRef } from "react";
import banner1 from "../../assets/banner/banner1.png";
import banner2 from "../../assets/banner/banner2.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import Container from "../../components/Container";

const Banner = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const previous = () => sliderRef.current.slickPrev();
  const next = () => sliderRef.current.slickNext();

  return (
    <div className="overflow-hidden">
      <div>
        <div className="slider-container relative">
          {/* Navigation Buttons */}
          <div className="absolute lg:top-96 top-64 left-4 md:left-10 z-10 flex gap-4 transform -translate-y-1/2 px-2 md:px-6">
            <button
              onClick={previous}
              className="bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700 transition duration-300"
            >
              <FaArrowCircleLeft size={30} />
            </button>
            <button
              onClick={next}
              className="bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700 transition duration-300"
            >
              <FaArrowCircleRight size={30} />
            </button>
          </div>

          {/* Slider */}
          <Slider ref={sliderRef} {...settings}>
            <div className="relative">
              <img
                className="w-full h-[300px] md:h-[500px] object-cover rounded-lg shadow-lg"
                src={banner1}
                alt="Banner 1"
              />
              <Container className="absolute inset-0 flex items-center justify-start px-4 md:px-12 lg:px-20">
                <div className="text-black max-w-lg space-y-2 md:space-y-4">
                  <h2 className="text-lg md:text-2xl lg:text-4xl font-bold drop-shadow-lg">
                    Welcome to Our Store
                  </h2>
                  <p className="text-xs md:text-sm lg:text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <button className="bg-gray-100 text-gray-800 py-1 px-3 md:py-2 md:px-4 rounded-lg hover:bg-gray-200 transition">
                    Order Now
                  </button>
                </div>
              </Container>
            </div>
            <div className="relative">
              <img
                className="w-full h-[300px] md:h-[500px] object-cover rounded-lg shadow-lg"
                src={banner2}
                alt="Banner 2"
              />
              <Container className="absolute inset-0 flex items-center justify-start px-4 md:px-12 lg:px-20">
                <div className="text-black max-w-lg space-y-2 md:space-y-4">
                  <h2 className="text-lg md:text-2xl lg:text-4xl font-bold drop-shadow-lg">
                    Welcome to Our Store
                  </h2>
                  <p className="text-xs md:text-sm lg:text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <button className="bg-gray-100 text-gray-800 py-1 px-3 md:py-2 md:px-4 rounded-lg hover:bg-gray-200 transition">
                    Order Now
                  </button>
                </div>
              </Container>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Banner;
