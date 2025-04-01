import React from "react";
import Container from "../components/Container";
import img1 from "../assets/banner/5.jpg";
import img2 from "../assets/banner/7.jpg";
import img3 from "../assets/banner/4.jpg";
import img4 from "../assets/banner/6.jpg";
import img5 from "../assets/banner/8.webp";
import Title from "../components/Title";

const HotDealsPage = () => {
  return (
    <Container>
      <Title title={"Hot Deals Collections"} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 grid-rows-8 gap-3">
        <div className="relative col-span-1 sm:col-span-3 row-span-4">
          <img src={img1} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-70 transition-all flex items-center justify-center text-white">
            <div className="text-center">
              <h3 className="text-lg font-bold">Exclusive Summer Sale</h3>
              <button className="bg-white text-black py-2 px-4 rounded hover:bg-gray-800 hover:text-white duration-300">
                Shop Now
              </button>
            </div>
          </div>
        </div>

        <div className="relative col-span-1 sm:col-span-2 row-span-4 sm:col-start-4 bg-slate-300">
          <img src={img2} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-70 transition-all flex items-center justify-center text-white">
            <div className="text-center">
              <h3 className="text-lg font-bold">50% Off on Electronics</h3>
              <button className="bg-white text-black py-2 px-4 rounded hover:bg-gray-800 hover:text-white duration-300">
                Shop Now
              </button>
            </div>
          </div>
        </div>

        <div className="relative col-span-1 sm:col-span-2 md:col-span-2 row-span-8 col-start-6 bg-slate-200">
          <img src={img3} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-70 transition-all flex items-center justify-center text-white">
            <div className="text-center">
              <h3 className="text-lg font-bold">Limited Time Offer</h3>
              <button className="bg-white text-black py-2 px-4 rounded hover:bg-gray-800 hover:text-white duration-300">
                Shop Now
              </button>
            </div>
          </div>
        </div>

        <div className="relative col-span-1 sm:col-span-3 row-span-4 col-start-3 row-start-5 bg-slate-600">
          <img src={img4} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-70 transition-all flex items-center justify-center text-white">
            <div className="text-center">
              <h3 className="text-lg font-bold">Seasonal Discounts</h3>
              <button className="bg-white text-black py-2 px-4 rounded hover:bg-gray-800 hover:text-white duration-300">
                Shop Now
              </button>
            </div>
          </div>
        </div>

        <div className="relative col-span-1 sm:col-span-2 row-span-4 col-start-1 row-start-5">
          <img src={img5} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-70 transition-all flex items-center justify-center text-white">
            <div className="text-center">
              <h3 className="text-lg font-bold">Best Deals of the Year</h3>
              <button className="bg-white text-black py-2 px-4 rounded hover:bg-gray-800 hover:text-white duration-300">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HotDealsPage;
