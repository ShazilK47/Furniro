import Features from "../components/Features";
import Tophead from "../components/Tophead";
import ProductComparison from "./ProductComparison";
import ProductComparisonTable from "./ProductComparisonTable";

const page = () => {
  return (
    <div>
      <Tophead pageName="Product Comparison" />
      <ProductComparison />
      <ProductComparisonTable />
      <Features />
    </div>
  );
};

export default page;
