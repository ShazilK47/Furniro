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

import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineUser,
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar w-full h-[100px] flex justify-between items-center px-6 md:px-20 text-black border-b border-gray-200">
      <div className="logo flex items-center gap-2">
        <Image
          src="/logo.png"
          alt="logo"
          height={32}
          width={50}
          className="block"
        />
        <h1 className="font-montserrat text-[24px] md:text-[34px] font-bold">
          Furniro
        </h1>
      </div>

      <div className="hidden md:flex gap-10 text-[14px] md:text-[16px] font-medium">
        <Link href="/">Home</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
      </div>

      <div className="hidden md:flex items-center gap-4 md:gap-10">
        <Link href="">
          <AiOutlineUser size={24} />
        </Link>
        <Link href="">
          <AiOutlineSearch size={24} />
        </Link>
        <Link href="">
          <AiOutlineHeart size={24} />
        </Link>
        <Link href="">
          <AiOutlineShoppingCart size={24} />
        </Link>
      </div>

      <div
        className="block md:hidden cursor-pointer text-black z-50"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <HiX size={28} /> : <HiOutlineMenuAlt3 size={28} />}
      </div>

      <div
        className={`absolute top-[100px] left-0 w-full bg-white border-t z-50 border-gray-200 md:hidden transition-transform duration-300 ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col items-center gap-6 py-4 text-[16px] font-medium">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link href="/shop" onClick={() => setIsMenuOpen(false)}>
            Shop
          </Link>
          <Link href="/blog" onClick={() => setIsMenuOpen(false)}>
            Blog
          </Link>
          <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
        </div>
        {/* Icons in Mobile Menu */}
        <div className="flex justify-center gap-6 mt-4">
          <Link href="">
            <AiOutlineUser size={24} />
          </Link>
          <Link href="">
            <AiOutlineSearch size={24} />
          </Link>
          <Link href="">
            <AiOutlineHeart size={24} />
          </Link>
          <Link href="">
            <AiOutlineShoppingCart size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
