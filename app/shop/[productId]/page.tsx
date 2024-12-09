/* eslint-disable @typescript-eslint/no-explicit-any */
import ProductDescription from "./ProductDescription";
import ProductDetails from "./ProductDetails";
import RelatedProducts from "./RelatedProducts";
import TopSection from "./TopSection";

interface Props {
  params: { productId: string };
}

const page = ({ params }: Props) => {
  const { productId } = params;

  console.log("productidget", productId);
  return (
    <div>
      <TopSection />
      <ProductDetails productId={productId} />
      <ProductDescription />
      <RelatedProducts />
    </div>
  );
};

export default page;
