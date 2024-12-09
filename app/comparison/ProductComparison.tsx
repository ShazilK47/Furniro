/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import ProductDropdown from "./ProductDropdown";
import StarRating from "../components/StarRating";

const ProductComparison = () => {
  return (
    <div className="p-6 md:p-14 flex flex-col gap-10 lg:flex-row">
      <div className="view-more max-w-[223px] mx-auto lg:mx-0">
        <h1 className="text-[24px] md:text-[28px] font-black text-center lg:text-left">
          Go to product page for more products
        </h1>
        <Link
          href="/"
          className="mt-4 md:mt-6 text-[18px] md:text-[20px] text-[#727272] block text-center lg:text-left"
        >
          View More
        </Link>
        <hr className="w-[50%] mx-auto lg:mx-0 mt-4" />
      </div>

      <div className="cards flex flex-col lg:flex-row gap-8">
        <div className="card w-full max-w-[280px] h-[400px] mx-auto lg:mx-0">
          <div className="img-section bg-[#F9F1E7] h-[177px] rounded-lg flex justify-center items-center">
            <img
              src="/images/sofa3.png"
              alt="sofa"
              className="object-cover rounded-lg"
            />
          </div>
          <div className="card-desc text-center lg:text-left">
            <h1 className="text-xl md:text-2xl font-medium mt-2">
              Asgaara Sora
            </h1>
            <h3 className="text-lg">Rs 250,00.00</h3>
            <div className="ratings flex justify-center lg:justify-start gap-6 mt-2">
              <i className="flex gap-2 text-black">
                5 <StarRating rating={5} />
              </i>
              <div className="w-0 h-6 border-2"></div>
              <p>204 Reviews</p>
            </div>
          </div>
        </div>

        <div className="card w-full max-w-[280px] h-[400px] mx-auto lg:mx-0">
          <div className="img-section bg-[#F9F1E7] h-[177px] rounded-lg flex justify-center items-center">
            <img
              src="/images/sofa3.png"
              alt="sofa"
              className="object-cover rounded-lg"
            />
          </div>
          <div className="card-desc text-center lg:text-left">
            <h1 className="text-xl md:text-2xl font-medium mt-2">
              Asgaara Sora
            </h1>
            <h3 className="text-lg">Rs 250,00.00</h3>
            <div className="ratings flex justify-center lg:justify-start gap-6 mt-2">
              <i className="flex gap-2 text-black">
                4.7 <StarRating rating={4.7} />
              </i>
              <div className="w-0 h-6 border-2"></div>
              <p>204 Reviews</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto lg:mx-0">
        <ProductDropdown />
      </div>
    </div>
  );
};

export default ProductComparison;
