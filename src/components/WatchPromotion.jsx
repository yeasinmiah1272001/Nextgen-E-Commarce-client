import React from "react";
import Container from "./Container";
import img from "../assets/ba.png";
import { Link } from "react-router-dom";

const WatchPromotion = () => {
  return (
    <div className="bg-[#F1F3F8]">
      <Container className={"mt-10 "}>
        <div className="flex flex-col md:flex-row items-center justify-between p-6 rounded-2xl">
          <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-10 text-center md:text-left">
            <h1 className="text-2xl font-bold text-gray-800">
              Smart Watch S9 Pro Max
            </h1>
            <h1>Special Offer : 40%</h1>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, blanditiis harum doloremque delectus expedita nesciunt
              dolore consectetur? Labore, soluta aperiam?
            </p>
            <Link to={"/shop"}>
              {" "}
              <button
                type="submit"
                className="w-1/2 px-4 py-3 bg-red-500 text-white font-medium rounded-md hover:bg-pink-600"
              >
                Buy Now
                <span className="ml-2">→</span>
              </button>
            </Link>
          </div>
          <div className="w-full md:w-1/2">
            <img src={img} alt="Smart Watch" className=" w-full h-96" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WatchPromotion;
