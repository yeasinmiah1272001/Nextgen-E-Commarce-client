import React from "react";
import Title from "../../components/Title";
import Container from "../../components/Container";
import img1 from "../../assets/newArrival/11.jpg";
import img2 from "../../assets/newArrival/2.jpg";
import img3 from "../../assets/newArrival/3.jpg";
import { Link } from "react-router-dom";

const NewArrivals = () => {
  return (
    <Container className="lg:py-14 py-10">
      <Title title={"New Arrivals"} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {/* First Image */}
        <div
          className="col-span-2 lg:row-span-6 bg-cover bg-center relative h-[300px] sm:h-[400px] lg:h-[500px]"
          style={{ backgroundImage: `url(${img1})` }}
        >
          <div className="absolute inset-0 opacity-100 "></div>{" "}
          {/* Overlay with opacity */}
          <div className="absolute inset-0 flex flex-col justify-center items-start p-4 ">
            <h1 className="text-white text-2xl font-bold mb-3 text-left w-1/2">
              10% sales ongoing phone Offers on limited time
            </h1>
            <Link to={"/shop"}>
              {" "}
              <button className="bg-gray-400 text-black py-2 px-4 rounded hover:bg-gray-500 hover:text-white duration-300">
                Shop Now
              </button>
            </Link>
          </div>
        </div>

        {/* Second Image */}
        <div
          className="col-span-2 lg:col-start-3 lg:row-span-3 bg-cover bg-center relative h-[300px] sm:h-[250px]"
          style={{ backgroundImage: `url(${img2})` }}
        >
          <div className="absolute inset-0  bg-opacity-100"></div>{" "}
          {/* Overlay with opacity */}
          <div className="absolute inset-0 flex flex-col justify-center items-start p-8">
            <h1 className="text-black text-2xl font-bold mb-3 text-left">
              <p>
                10% sales ongoing on phone <br /> Offers on limited time
              </p>
            </h1>
            <Link to={"/shop"}>
              {" "}
              <button className="bg-gray-400 text-black py-2 px-4 rounded hover:bg-gray-500 hover:text-white duration-300">
                Shop Now
              </button>
            </Link>
          </div>
        </div>

        {/* Third Image */}
        <div
          className="col-span-2 lg:col-start-3 lg:row-span-3 bg-cover bg-center relative h-[300px] sm:h-[250px]"
          style={{ backgroundImage: `url(${img3})` }}
        >
          <div className="absolute inset-0  bg-opacity-100"></div>{" "}
          {/* Overlay with opacity */}
          <div className="absolute inset-0 flex flex-col justify-center items-start p-8 ">
            <h1 className="text-black text-2xl font-bold mb-3 text-left">
              <p>
                10% sales ongoing on phone <br /> Offers on limited time
              </p>
            </h1>
            <Link to={"/shop"}>
              {" "}
              <button className="bg-gray-400 text-black py-2 px-4 rounded hover:bg-gray-500 hover:text-white duration-300">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default NewArrivals;
