import React from "react";
import ProductCardContainer from "./ProductCardContainer";

const Products = () => {
  return (
    <div className="p-10">
      <h1 className="text-center text-[40px] font-poppins text-headingLight font-bold">
        Our Products
      </h1>
      <ProductCardContainer />
      <div className="w-full mt-8 flex justify-center items-center">
        <button className="w-[245px] h-[48px] flex justify-center items-center text-[#B88E2F] border-[#B88E2F] border-2">
          Show More
        </button>
      </div>
    </div>
  );
};

export default Products;
