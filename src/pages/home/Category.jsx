import React from "react";
import Container from "../../components/Container";
import img1 from "../../assets/category/category1.webp";
import img2 from "../../assets/category/category2.webp";
import img3 from "../../assets/category/category3.webp";
import img4 from "../../assets/category/category4.webp";

const Category = () => {
  return (
    <Container className={"mt-10"}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto justify-center items-center">
        <div className="flex items-center group overflow-hidden transition bg-[#F5F5F5] p-2 gap-4 rounded-md justify-center">
          <img
            className="h-36 w-36 group-hover:scale-110 transition-transform duration-300"
            src={img1}
            alt=""
          />
          <div>
            <h1 className="tracking-wide">Gadget Associates</h1>
            <p className="mt-2">
              Starting at <span className="text-red-400">99$</span>
            </p>
          </div>
        </div>
        <div className="flex items-center group overflow-hidden transition bg-[#F5F5F5] p-2 gap-4 rounded-md justify-center">
          <img
            className="h-36 w-36 group-hover:scale-110 transition-transform duration-300"
            src={img2}
            alt=""
          />
          <div>
            <h1 className="tracking-wide">Gadget Associates</h1>
            <p className="mt-2">
              Starting at <span className="text-red-400">99$</span>
            </p>
          </div>
        </div>
        <div className="flex items-center group overflow-hidden transition bg-[#F5F5F5] p-2 gap-4 rounded-md justify-center">
          <img
            className="h-36 w-36 group-hover:scale-110 transition-transform duration-300"
            src={img3}
            alt=""
          />
          <div>
            <h1 className="tracking-wide">Gadget Associates</h1>
            <p className="mt-2">
              Starting at <span className="text-red-400">99$</span>
            </p>
          </div>
        </div>
        <div className="flex items-center group overflow-hidden transition bg-[#F5F5F5] p-2 gap-4 rounded-md justify-center">
          <img
            className="h-36 w-36 group-hover:scale-110 transition-transform duration-300"
            src={img4}
            alt=""
          />
          <div>
            <h1 className="tracking-wide">Gadget Associates</h1>
            <p className="mt-2">
              Starting at <span className="text-red-400">99$</span>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Category;
