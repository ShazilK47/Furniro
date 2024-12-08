import BrowseSection from "./components/browseSection/BrowseSection";
import FurnitureShowcase from "./components/FurnitureShowCase";
import HeroSection from "./components/HeroSection";
import Products from "./components/productSection/Products";
import RoomDesign from "./components/RoomDesign";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <BrowseSection />
      <Products />
      <RoomDesign />
      <FurnitureShowcase />
    </main>
  );
}
