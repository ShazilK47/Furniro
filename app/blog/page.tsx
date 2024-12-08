import Tophead from "../components/Tophead";
import BlogContainer from "./BlogContainer";
import SideBar from "./SideBar";

const page = () => {
  return (
    <div>
      <Tophead pageName="Blog" />
      <div className="p-24 flex gap-6">
        <BlogContainer />
        <SideBar />
      </div>
    </div>
  );
};

export default page;
