/* eslint-disable @next/next/no-img-element */
// import Image from "next/image";
// import Link from "next/link";
// import {
//   AiOutlineUser,
//   AiOutlineSearch,
//   AiOutlineHeart,
//   AiOutlineShoppingCart,
// } from "react-icons/ai";

// const Navbar = () => {
//   return (
//     <div className="navbar w-full h-[100px] flex justify-between items-center px-20 text-black border-2 ">
//       <div className="logo flex justify-center items-center">
//         <Image src="/logo.png" alt="logo" height={32} width={50} />
//         <h1 className="font-montserrat text-[34px]  font-bold">Furniro</h1>
//       </div>
//       <div className="flex gap-20 nav-links text-[16px] font-medium">
//         <Link href="/">Home</Link>
//         <Link href="/shop">Shop</Link>
//         <Link href="/blog">Blog</Link>
//         <Link href="/contact">Contact</Link>
//       </div>
//       <div className="flex gap-14 ">
//         {/* User Icon with Link */}
//         <Link href="">
//           <AiOutlineUser size={24} />
//         </Link>

//         {/* Search Icon with Link */}
//         <Link href="">
//           <AiOutlineSearch size={24} />
//         </Link>

//         {/* Heart Icon with Link */}
//         <Link href="">
//           <AiOutlineHeart size={24} />
//         </Link>

//         {/* Shopping Cart Icon with Link */}
//         <Link href="">
//           <AiOutlineShoppingCart size={24} />
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineUser,
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="navbar w-full flex-col p-3 md:flex-row  h-[100px] flex justify-between items-center px-6 lg:px-20 text-black border-b-2">
      {/* Logo */}
      <div className="logo flex items-center">
        <Image src="/logo.png" alt="logo" height={32} width={50} />
        <h1 className="xs:text-xl md:font-montserrat text-2xl lg:text-[34px] font-bold">
          Furniro
        </h1>
      </div>

      {/* Navigation Links for Large Screens */}
      <div className="hidden lg:flex gap-20 nav-links text-[16px] font-medium">
        <Link href="/">Home</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
      </div>

      {/* Icons */}
      <div className="flex gap-6 lg:gap-14">
        <Link href="">
          <AiOutlineUser size={24} />
        </Link>
        <Link href="">
          <AiOutlineSearch size={24} />
        </Link>
        <Link href="">
          <AiOutlineHeart size={24} />
        </Link>
        <Link href="" onClick={toggleCart}>
          <AiOutlineShoppingCart size={24} />
        </Link>

        {/* Menu Icon for Mobile */}
        <button
          onClick={toggleSidebar}
          className="block lg:hidden text-black focus:outline-none ml-4"
        >
          {isSidebarOpen ? (
            <AiOutlineClose size={24} />
          ) : (
            <AiOutlineMenu size={24} />
          )}
        </button>
      </div>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-2/4 bg-white shadow-lg transform transition-transform duration-300 overflow-y-auto z-50  ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6">
          <button
            onClick={toggleSidebar}
            className="self-end mb-6 text-black focus:outline-none"
          >
            <AiOutlineClose size={24} />
          </button>
          <nav className="flex flex-col gap-6 text-[16px] font-medium">
            <Link href="/" onClick={toggleSidebar}>
              Home
            </Link>
            <Link href="/shop" onClick={toggleSidebar}>
              Shop
            </Link>
            <Link href="/blog" onClick={toggleSidebar}>
              Blog
            </Link>
            <Link href="/contact" onClick={toggleSidebar}>
              Contact
            </Link>
          </nav>
        </div>
      </div>

      {/** ------------------------------------------------------------------------------------------------ */}
      {/* Shopping Cart Drawer */}
      <div
        className={`fixed z-50 p-5 top-0 right-0 h-auto sm:h-auto w-[90%] sm:w-[75%] md:w-[50%] lg:w-[30%] xl:w-[25%] rounded-md bg-white shadow-lg transform ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center px-4 py-3 border-b">
          <h2 className="text-lg font-semibold">Shopping Cart</h2>
          <button onClick={toggleCart} className="text-2xl">
            <AiOutlineClose />
          </button>
        </div>

        {/* Cart Items */}
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <img
                src="/images/sofa4.png"
                alt="Asgaard sofa"
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <p className="font-semibold">Asgaard sofa</p>
                <p className="text-sm text-gray-500">
                  1 x <span className="text-primary">Rp. 250,000.00</span>
                </p>
              </div>
            </div>
            <button className="text-gray-500 hover:text-gray-700">
              <AiOutlineClose />
            </button>
          </div>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <img
                src="/images/sofa3.png"
                alt="Coastliving Wood"
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <p className="font-semibold">Coastliving Wood</p>
                <p className="text-sm text-gray-500">
                  1 x <span className="text-primary">Rp. 270,000.00</span>
                </p>
              </div>
            </div>
            <button className="text-gray-500 hover:text-gray-700">
              <AiOutlineClose />
            </button>
          </div>
        </div>

        {/* Subtotal and Actions */}
        <div className="p-4 border-t">
          <p className="text-right mb-4 flex justify-between">
            <span> Subtotal:</span>{" "}
            <span className="font-bold text-primary">Rp. 520,000.00</span>
          </p>
          <div className="flex flex-wrap gap-2 justify-center items-center">
            <Link
              href="/cart"
              className="flex-1 text-xs sm:flex-none sm:w-28 text-black px-3 py-1 border-2 rounded-full"
            >
              Cart
            </Link>
            <Link
              href="/checkout"
              className="flex-1 text-xs sm:flex-none sm:w-28 text-black px-3 py-1 border-2 rounded-full"
            >
              Checkout
            </Link>
            <Link
              href="/comparison"
              className="flex-1 text-xs sm:flex-none sm:w-28 text-black px-3 py-1 border-2 rounded-full"
            >
              Comparison
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay (when cart is open) */}
      {isCartOpen && (
        <div
          onClick={toggleCart}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        ></div>
      )}
      {/* ---------------------------------------------------------------------------------------------- */}
    </div>
  );
};

export default Navbar;
