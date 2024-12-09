const RoomDesign = () => {
  return (
    <div className="w-full h-auto lg:h-[670px] bg-[#FCF8F3] flex flex-col lg:flex-row justify-center items-center gap-6 p-4 lg:p-0">
      {/* Content Section */}
      <div className="content flex flex-col gap-3 w-full lg:w-1/3 text-center lg:text-left">
        <h1 className="text-[28px] sm:text-[32px] lg:text-[40px] font-bold text-headingLight">
          50+ Beautiful rooms inspiration
        </h1>
        <p className="text-[14px] sm:text-[16px] font-medium text-[#616161]">
          Our designer already made a lot of beautiful prototipe of rooms that
          inspire you
        </p>
        <button className="w-36 sm:w-44 h-10 sm:h-12 bg-primary flex justify-center items-center text-white mx-auto lg:mx-0">
          Explore More
        </button>
      </div>

      {/* Images Section */}
      <div className="images flex flex-col lg:flex-row gap-4 items-center">
        {/* Main Design Image */}
        <div className="main-design">
          <img
            src="/images/design1.png"
            alt="design1"
            className="w-full max-w-[300px] lg:max-w-none"
          />
        </div>

        {/* Other Designs */}
        <div className="others-design flex flex-col items-center">
          <div className="images">
            <img
              src="/images/design2.png"
              alt="design2"
              className="w-full max-w-[200px] lg:max-w-none"
            />
          </div>
          <div className="eliplse flex gap-4 mt-4 lg:mt-10">
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
