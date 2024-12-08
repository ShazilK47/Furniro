import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineUser,
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="navbar w-full h-[100px] flex justify-between items-center px-20 text-black border-2 ">
      <div className="logo flex justify-center items-center">
        <Image src="/logo.png" alt="logo" height={32} width={50} />
        <h1 className="font-montserrat text-[34px]  font-bold">Furniro</h1>
      </div>
      <div className="flex gap-20 nav-links text-[16px] font-medium">
        <Link href="/">Home</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className="flex gap-14 ">
        {/* User Icon with Link */}
        <Link href="">
          <AiOutlineUser size={24} />
        </Link>

        {/* Search Icon with Link */}
        <Link href="">
          <AiOutlineSearch size={24} />
        </Link>

        {/* Heart Icon with Link */}
        <Link href="">
          <AiOutlineHeart size={24} />
        </Link>

        {/* Shopping Cart Icon with Link */}
        <Link href="">
          <AiOutlineShoppingCart size={24} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
