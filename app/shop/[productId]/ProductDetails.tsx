/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
// const ProductDetails = () => {
//   return (
//     <div className="product-details flex gap-4 pt-10 mb-5 px-20">
//       <div className="product-images flex gap-5">
//         <div className="side-images flex flex-col gap-5">
//           <div className="w-[76px] h-[80px] flex  justify-center items-center bg-[#F9F1E7]">
//             <img
//               src="/images/sofaset2.png"
//               alt="sofa2"
//               className="object-cover overflow-hidden "
//             />
//           </div>
//           <div className="w-[76px] h-[80px] flex justify-center items-center bg-[#F9F1E7] rounded-md">
//             <img
//               src="/images/sofaset2.png"
//               alt="sofa2"
//               className="object-cover overflow-hidden "
//             />
//           </div>
//           <div className="w-[76px] h-[80px] flex justify-center items-center bg-[#F9F1E7] rounded-md">
//             <img
//               src="/images/sofaset2.png"
//               alt="sofa2"
//               className="object-cover overflow-hidden "
//             />
//           </div>
//           <div className="w-[76px] h-[80px] flex justify-center items-center bg-[#F9F1E7] rounded-md">
//             <img
//               src="/images/sofaset2.png"
//               alt="sofa2"
//               className="object-cover overflow-hidden "
//             />
//           </div>
//         </div>
//         <div className="main-image w-[423px] h-[500px] flex justify-center items-center bg-[#F9F1E7] rounded-md">
//           <img
//             src="/images/sofa3.png"
//             alt="sofa"
//             className="object-cover  overflow-hidden"
//           />
//         </div>
//       </div>

import StarRating from "@/app/components/StarRating";
import Link from "next/link";

import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

interface Props {
  productId?: number;
}
const ProductDetails = ({ productId }: Props) => {
  const products = [
    {
      id: 1,
      name: "Syltherine",
      description: "Stylish Cafe Chair",
      price: "2.500.000",
      oldPrice: "3.500.000",
      image: "/images/product1.png",
      discount: "-30%",
    },
    {
      id: 2,
      name: "Leviosa",
      description: "Stylish Cafe Chair",
      price: "2.500.000",
      oldPrice: "3.500.000",
      image: "/images/product3.png",
      discount: "-30%",
    },
    {
      id: 3,
      name: "Lolito",
      description: "Luxury big sofa",
      price: "7.000.000",
      oldPrice: "14.000.000",
      image: "/images/product3.png",
      discount: "-30%",
    },
    {
      id: 4,
      name: "Syltherine",
      description: "Stylish Cafe Chair",
      price: "2.500.000",
      oldPrice: "3.500.000",
      image: "/images/product4.png",
      discount: "-30%",
    },
    {
      id: 5,
      name: "Syltherine",
      description: "Stylish Cafe Chair",
      price: "2.500.000",
      oldPrice: "3.500.000",
      image: "/images/product5.png",
      discount: "-30%",
    },
    {
      id: 6,
      name: "Syltherine",
      description: "Stylish Cafe Chair",
      price: "2.500.000",
      oldPrice: "3.500.000",
      image: "/images/product6.png",
      discount: "-30%",
    },
    {
      id: 7,
      name: "Syltherine",
      description: "Stylish Cafe Chair",
      price: "2.500.000",
      oldPrice: "3.500.000",
      image: "/images/product7.png",
      discount: "-30%",
    },
    {
      id: 8,
      name: "Syltherine",
      description: "Stylish Cafe Chair",
      price: "2.500.000",
      oldPrice: "3.500.000",
      image: "/images/product8.png",
      discount: "-30%",
    },
  ];

  const product = products.find((item) => item.id === productId);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="product-details flex flex-col md:flex-row gap-4 pt-10 mb-5 px-4 md:px-20">
      <div className="product-images flex flex-col md:flex-row gap-5">
        <div className="side-images flex flex-row md:flex-col gap-5">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="w-[76px] h-[80px] flex justify-center items-center bg-[#F9F1E7] rounded-md"
            >
              <img
                src={product.image}
                alt={`sofa${index + 1}`}
                className="object-cover overflow-hidden"
              />
            </div>
          ))}
        </div>
        <div className="main-image w-full md:w-[423px] h-[300px] md:h-[500px] flex justify-center items-center bg-[#F9F1E7] rounded-md">
          <img
            src={product.image}
            alt="sofa"
            className="object-cover overflow-hidden"
          />
        </div>
      </div>

      <div className="product-info flex flex-col gap-3 md:ml-10 px-4 md:px-0">
        <h1 className="text-[24px] md:text-[42px] font-medium">
          {product.name}
        </h1>
        <h3 className="text-[18px] md:text-[24px] font-semibold text-[#9F9F9F]">
          Rp {product.price}
        </h3>
        <div className="ratings flex flex-col md:flex-row gap-4 items-start md:items-center">
          <div className="rate-star">
            <StarRating rating={4.5} />
          </div>
          <div className="line h-5 border-2 border-[#9F9F9F]"> </div>
          <p>5 Customer reviews</p>
        </div>
        <p className="desc text-[13px] md:text-[16px] font-medium w-full md:w-3/4">
          Setting the bar as one of the loudest speakers in its class, the
          Kilburn is a compact, stout-hearted hero with a well-balanced audio
          which boasts a clear midrange and extended highs for a sound.
        </p>

        {/* Size Section */}
        <div className="product-size">
          <h3 className="text-[14px] text-[#9F9F9F]">Size</h3>
          <div className="size flex gap-3 mt-3">
            {["L", "XL", "XS"].map((size) => (
              <div
                key={size}
                className="bg-[#F9F1E7] w-[30px] h-[30px] flex justify-center items-center text-[13px] rounded-lg"
              >
                {size}
              </div>
            ))}
          </div>
        </div>

        {/* Color Section */}
        <div className="product-color mt-2">
          <h3 className="text-[14px] text-[#9F9F9F]">Color</h3>
          <div className="color flex gap-3 mt-3">
            {["#816DFA", "black", "yellow"].map((color, idx) => (
              <div
                key={idx}
                style={{ backgroundColor: color }}
                className="w-[30px] h-[30px] rounded-full"
              ></div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="to-buy flex flex-col md:flex-row gap-3 mt-3 mb-5">
          <Link
            href="/"
            className="w-full md:w-[215px] h-[64px] rounded-xl text-[16px] md:text-[20px] flex justify-center items-center border-2 border-black  hover:bg-primary hover:text-white transition"
          >
            Add to Cart
          </Link>
          <Link
            href="/comparison"
            className="w-full md:w-[215px] h-[64px] rounded-xl text-[16px] md:text-[20px] flex justify-center items-center border-2 border-black  hover:bg-primary hover:text-white transition"
          >
            Compare
          </Link>
        </div>

        <hr className="mt-2" />
        <div className="others mt-5">
          <table className="text-[14px] md:text-[16px] text-[#9F9F9F]">
            <tbody>
              <tr>
                <td>SKU </td>
                <td>: SS0O1</td>
              </tr>
              <tr>
                <td>Category </td>
                <td>: sofas</td>
              </tr>
              <tr>
                <td>Tags </td>
                <td>: Sofa, Chair, Home, Shop</td>
              </tr>
              <tr>
                <td>Share </td>
                <td className="flex gap-3 text-black ml-2 mt-1">
                  {" "}
                  <FaFacebook /> <FaLinkedin /> <FaTwitter />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
