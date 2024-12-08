import Features from "../components/Features";
import FilterSection from "../components/FilterSection";
import ProductCardContainer from "../components/productSection/ProductCardContainer";
import Tophead from "../components/Tophead";
import NextPage from "./NextPage";

const page = () => {
  return (
    <div>
      <Tophead pageName="Shop" />
      <FilterSection />
      <ProductCardContainer />
      <NextPage />
      <Features />
    </div>
  );
};

export default page;
