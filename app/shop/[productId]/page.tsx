import ProductDescription from "./ProductDescription";
import ProductDetails from "./ProductDetails";
import RelatedProducts from "./RelatedProducts";
import TopSection from "./TopSection";

interface Props {
  params: { productId: string };
}

// @ts-expect-error: Ignoring expected type mismatch error here

const page = ({ params: { productId } }: Props) => {
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
