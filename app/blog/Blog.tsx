import Link from "next/link";

const Blog = ({ blog }) => {
  const { title, desc, image, author, date, category } = blog;
  return (
    <div className="w-[820px] h-[794px] my-6">
      <div className="blog-img w-[817px] h-[500px]">
        <img src={image} alt="blog1" className="object-cover w-full h-full" />
      </div>
      <div className="blog-desc">
        <div className=" flex mt-8 mb-4 gap-5 text-[#9F9F9F]">
          <div className="flex gap-1 justify-center items-center">
            <span>icon</span>
            <span>{author}</span>
          </div>
          <div className="flex gap-1 justify-center items-center">
            <span>icon</span>
            <span>{date}</span>
          </div>
          <div className="flex gap-1 justify-center items-center">
            <span>icon</span>
            <span> {category}</span>
          </div>
        </div>

        <h1 className="title text-[30px] font-semibold">{title}</h1>
        <p className="text-[15px] font-medium pt-3 text-[#9F9F9F] mb-7 ">
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
