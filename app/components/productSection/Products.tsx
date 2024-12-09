import React from "react";
import ProductCardContainer from "./ProductCardContainer";
import Link from "next/link";

const Products = () => {
  return (
    <div className="p-10">
      <h1 className="text-center text-[40px] font-poppins text-headingLight font-bold">
        Our Products
      </h1>
      <ProductCardContainer limit={8} />
      <div className="w-full mt-8 flex justify-center items-center">
        <Link
          href="/shop"
          className="w-[245px] h-[48px] flex justify-center items-center text-[#B88E2F] border-[#B88E2F] hover:text-white hover:bg-primary transition border-2"
        >
          Show More
        </Link>
      </div>
    </div>
  );
};

export default Products;
