import ProductDescription from "./ProductDescription";
import ProductDetails from "./ProductDetails";
import RelatedProducts from "./RelatedProducts";
import TopSection from "./TopSection";

const page = () => {
  return (
    <div>
      <TopSection />
      <ProductDetails />
      <ProductDescription />
      <RelatedProducts />
    </div>
  );
};

export default page;
