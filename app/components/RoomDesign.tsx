const RoomDesign = () => {
  return (
    <div className="w-full h-[670px] bg-[#FCF8F3] flex justify-center items-center">
      <div className="content flex flex-col gap-3 w-1/3">
        <h1 className="text-[40px] font-bold text-headingLight">
          50+ Beautiful rooms inspiration
        </h1>
        <p className="text-[16px] font-medium text-[#616161]">
          Our designer already made a lot of beautiful prototipe of rooms that
          inspire you
        </p>
        <button className="w-44 h-12 bg-primary flex justify-center items-center text-white">
          Explore More
        </button>
      </div>

      <div className="images flex gap-4">
        <div className="main-design">
          <img src="/images/design1.png" alt="design1" />
        </div>
        <div className="others-design">
          <div className="images">
            <img src="/images/design2.png" alt="design" />
            {/* <img src="/images/design2.png" alt="design3" /> */}
          </div>
          <div className="eliplse flex gap-7 mt-10 ml-5">
            <div className="h-3 w-3 rounded-full bg-[#D8D8D8]"></div>
            <div className="h-3 w-3 rounded-full bg-[#D8D8D8]"></div>
            <div className="h-3 w-3 rounded-full bg-[#D8D8D8]"></div>
            <div className="h-3 w-3 rounded-full bg-[#D8D8D8]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDesign;
