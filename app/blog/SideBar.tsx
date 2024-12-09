import Link from "next/link";

const SideBar = () => {
  return (
    <div className="w-[393px] p-5">
      <div className="blog-categories">
        <div className="blog-search w-[311px] h-[58px] rounded-md border-2 mb-6 flex justify-center items-center p-3">
          <input
            type="text"
            className="w-full outline-none "
            placeholder="search"
          />
          <img src="/icons/search.png" alt="search" />
        </div>
        <div className="categories-blogs p-8">
          <h1 className="text-[24px] font-semibold mb-6">Categories</h1>
          <div className="category-links flex flex-col gap-10">
            <div className="flex justify-between text-[16px] text-[#9F9F9F]">
              <Link href="/">Craft</Link>
              <span>2</span>
            </div>
            <div className="flex justify-between text-[16px] text-[#9F9F9F]">
              <Link href="/">Design</Link>
              <span>8</span>
            </div>
            <div className="flex justify-between text-[16px] text-[#9F9F9F]">
              <Link href="/">Handmade</Link>
              <span>7</span>
            </div>
            <div className="flex justify-between text-[16px] text-[#9F9F9F]">
              <Link href="/">Interior</Link>
              <span>1</span>
            </div>
            <div className="flex justify-between text-[16px] text-[#9F9F9F]">
              <Link href="/">Wood</Link>
              <span>6</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
