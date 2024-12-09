/* eslint-disable @typescript-eslint/no-explicit-any */
import ProductDescription from "./ProductDescription";
import ProductDetails from "./ProductDetails";
import RelatedProducts from "./RelatedProducts";
import TopSection from "./TopSection";

interface Props {
  params: Promise<{
    productId: string;
  }>;
}

const page = async ({ params }: Props) => {
  const { productId } = await params;
  const productIdNumber = parseInt(productId, 10);

  return (
    <div>
      <TopSection />
      <ProductDetails productId={productIdNumber} />
      <ProductDescription />
      <RelatedProducts />
    </div>
  );
};

export default page;
