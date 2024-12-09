import Blog from "./Blog";

const blogs = [
  {
    id: 1,
    title: "Going all-in with millennial design",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
    image: "/images/blog1.png",
    author: "Admin",
    date: "14 oct 2022",
    category: "wood",
  },
  {
    id: 2,
    title: "Exploring new ways of decorating",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
    image: "/images/blog2.png",
    author: "Admin",
    date: "14 oct 2022",
    category: "Handmade",
  },
  {
    id: 3,
    title: "Handmade pieces that took time to make",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
    image: "/images/blog3.png",
    author: "Admin",
    date: "14 oct 2022",
    category: "wood",
  },
];

const BlogContainer = () => {
  return (
    <div className="flex flex-col p-3">
      {blogs.map((blog) => {
        return <Blog key={blog.id} blog={blog} />;
      })}
    </div>
  );
};

export default BlogContainer;
