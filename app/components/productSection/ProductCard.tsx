import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
  const { id, name, description, price, oldPrice, discount, image } = product;
  return (
    <div className="product-card relative w-auto h-auto md:w-[285px] md:h-[446px] bg-[#f4f5f7] rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
      {/* Card Image */}
      <div className="card-img w-full h-[301px] relative">
        <div className="h-12 w-12 bg-[#E97171] absolute rounded-full text-white flex justify-center items-center top-4 left-[calc(100%-56px)]">
          {discount}
        </div>

        <Image
          src={image}
          alt="Hero Image"
          width={301}
          height={446}
          objectFit="cover"
          className="w-full h-full transition-transform duration-300 hover:scale-110"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center space-y-4">
          {/* Add to Cart Button */}
          <Link
            href=""
            className="bg-white text-black px-6 py-2 font-semibold rounded-full"
          >
            Add to Cart
          </Link>

          {/* Action Links */}
          <div className="flex space-x-4 text-white text-sm">
            <Link href="" className="hover:text-gray-300">
              Share
            </Link>
            <Link href="/comparison" className="hover:text-gray-300">
              Compare
            </Link>
            <Link href="" className="hover:text-gray-300">
              Like
            </Link>
          </div>
        </div>
      </div>

      {/* Card Description */}
      <div className="card-desc p-3">
        <h2 className="text-[24px] font-semibold font-poppins">
          {" "}
          <Link href={`/shop/${id}`}> {name} </Link>{" "}
        </h2>
        <p className="text-[16px] font-medium text-[#898980] mb-2">
          {description}
        </p>
        <span className="font-semibold font-poppins text-xl">
          Rp {price}{" "}
          <del className="text-[16px] font-normal text-[#b0b0b0] ml-2">
            Rp {oldPrice}
          </del>
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
