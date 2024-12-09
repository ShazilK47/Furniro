import ProductCardContainer from "@/app/components/productSection/ProductCardContainer";
import Link from "next/link";

const RelatedProducts = () => {
  return (
    <div className="related-products flex flex-col gap-5 items-center justify-center border-2 p-6 py-16">
      <h1 className="text-black text-[36px] font-medium">Related Products</h1>
      <ProductCardContainer limit={4} />
      <Link
        href="/shop"
        className="w-[245px] h-[48px] flex justify-center items-center text-[#B88E2F] border-2 border-[#B88E2F] mt-4"
      >
        Show More
      </Link>
    </div>
  );
};

export default RelatedProducts;
