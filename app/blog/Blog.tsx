/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Blog = ({ blog }: any) => {
  const { title, desc, image, author, date, category } = blog;
  return (
    <div className="w-auto h-auto md:w-[820px] md:h-[794px] mt-11">
      <div className="blog-img w-auto h-auto md:w-[817px] md:h-[500px]">
        <img src={image} alt="blog1" className="object-cover w-full h-full" />
      </div>
      <div className="blog-desc">
        <div className=" sm:text-xs lg:text-xl flex mt-8 mb-4 gap-5 text-[#9F9F9F]">
          <div className="flex gap-1 justify-center items-center">
            <span>
              <img src="/icons/author.png" alt="author" />
            </span>
            <span className="text-xs">{author}</span>
          </div>
          <div className="flex gap-1 justify-center items-center ">
            <span>
              <img src="/icons/calender.png" alt="date" />
            </span>
            <span className="text-xs">{date}</span>
          </div>
          <div className="flex gap-1 justify-center items-center">
            <span>
              <img src="/icons/cate.png" alt="category" />
            </span>
            <span className="text-xs"> {category}</span>
          </div>
        </div>

        <h1 className="title text-2xl md:text-[30px] font-semibold">{title}</h1>
        <p className="text-xs md:text-[15px] leading-6 font-medium pt-3 tracking-wide text-[#9F9F9F] mb-7 ">
          {desc}
        </p>

        <Link href="/" className="">
          Read more
        </Link>
        <hr className="w-20 ml-1 mt-1" />
      </div>
    </div>
  );
};

export default Blog;
