import Link from "next/link";
import ProductDropdown from "./ProductDropdown";

const ProductComparison = () => {
  return (
    <div className="p-14 flex gap-10">
      <div className="view-more max-w-[223px]">
        <h1 className=" text-[28px] font-black">
          Go to product page for more products
        </h1>
        <Link href="/" className="mt-6 text-[20px] text-[#727272]">
          View More
        </Link>
        <hr className="w-[50%]" />
      </div>

      <div className="cards flex gap-8">
        <div className="card-1 w-[280px] h-[400px] ">
          <div className="img-section bg-[#F9F1E7] h-[177px]">
            <img
              src="/images/sofa3.png"
              alt="sofa"
              className=" object-cover flex justify-center items-center overflow-hidden"
            />
          </div>
          <div className="card-desc">
            <h1>Asgaara Sora</h1>
            <h3>Rs 250,00.00</h3>
            <div className="ratings flex gap-6">
              <i className="fas fa-star text-black">4.7 &star; &star;</i>
              <div className="w-1 h-6 border-2 "></div>
              <p>204 Reviews</p>
            </div>
          </div>
        </div>
        <div className="card-1 w-[280px] h-[400px] ">
          <div className="img-section bg-[#F9F1E7] h-[177px]">
            <img
              src="/images/sofa3.png"
              alt="sofa"
              className=" object-cover flex justify-center items-center overflow-hidden"
            />
          </div>
          <div className="card-desc">
            <h1>Asgaara Sora</h1>
            <h3>Rs 250,00.00</h3>
            <div className="ratings flex gap-6">
              <i className="fas fa-star text-black">4.7 &star; &star;</i>
              <div className="w-1 h-6 border-2 "></div>
              <p>204 Reviews</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        {/* <h1 className="text-xl font-semibold ">Add a product</h1> */}
        <ProductDropdown />
      </div>
    </div>
  );
};

export default ProductComparison;
