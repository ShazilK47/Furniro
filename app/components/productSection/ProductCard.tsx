import Image from "next/image";

const ProductCard = ({ product }) => {
  const { name, description, price, oldPrice, discount, image } = product;
  return (
    <div className="product-card w-[285px] h-[446px] bg-[#f4f5f7]">
      <div className="card-img w-full h-[301px] relative">
        <div className="h-12 w-12 bg-[#E97171] absolute rounded-full text-white flex justify-center items-center top-4 left-56">
          {discount}
        </div>
        <Image
          src={image}
          alt="Hero Image"
          width={301}
          height={446}
          objectFit="cover"
          className=" w-full h-full"
        />
      </div>
      <div className="card-desc p-3">
        <h2 className="text-[24px] font-semibold font-poppins"> {name} </h2>
        <p className="text-[16px] font-medium text-[#898980] mb-2">
          {description}
        </p>
        <span className="font-semibold font-poppins text-xl ">
          Rp {price}{" "}
          <del className="text-[16px] font-normal text-[#b0b0b0] ml-2">
            Rp {oldPrice}
          </del>{" "}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
