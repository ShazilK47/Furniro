import ProductCard from "./ProductCard";

const ProductCardContainer = ({ limit }: { limit?: number }) => {
  const products = [
    {
      id: 1,
      name: "Syltherine",
      description: "Stylish Cafe Chair",
      price: "2.500.000",
      oldPrice: "3.500.000",
      image: "/images/product1.png",
      discount: "-30%",
    },
    {
      id: 2,
      name: "Leviosa",
      description: "Stylish Cafe Chair",
      price: "2.500.000",
      oldPrice: "3.500.000",
      image: "/images/product3.png",
      discount: "-30%",
    },
    {
      id: 3,
      name: "Lolito",
      description: "Luxury big sofa",
      price: "7.000.000",
      oldPrice: "14.000.000",
      image: "/images/product3.png",
      discount: "-30%",
    },
    {
      id: 4,
      name: "Syltherine",
      description: "Stylish Cafe Chair",
      price: "2.500.000",
      oldPrice: "3.500.000",
      image: "/images/product4.png",
      discount: "-30%",
    },
    {
      id: 5,
      name: "Syltherine",
      description: "Stylish Cafe Chair",
      price: "2.500.000",
      oldPrice: "3.500.000",
      image: "/images/product5.png",
      discount: "-30%",
    },
    {
      id: 6,
      name: "Syltherine",
      description: "Stylish Cafe Chair",
      price: "2.500.000",
      oldPrice: "3.500.000",
      image: "/images/product6.png",
      discount: "-30%",
    },
    {
      id: 7,
      name: "Syltherine",
      description: "Stylish Cafe Chair",
      price: "2.500.000",
      oldPrice: "3.500.000",
      image: "/images/product7.png",
      discount: "-30%",
    },
    {
      id: 8,
      name: "Syltherine",
      description: "Stylish Cafe Chair",
      price: "2.500.000",
      oldPrice: "3.500.000",
      image: "/images/product8.png",
      discount: "-30%",
    },
  ];

  // Apply the limit if provided
  const displayProducts = limit ? products.slice(0, limit) : products;

  return (
    <>
      <div className="product-card w-full justify-center flex gap-6 flex-wrap pt-8">
        {displayProducts.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </>
  );
};

export default ProductCardContainer;
