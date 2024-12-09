const Features = () => {
  return (
    <div className="features h-auto  p-6 lg:h-[270px] max-w-full bg-[#FAF3EA] flex md:justify-center gap-10 items-center flex-wrap">
      <div className="feature1 flex gap-3">
        <div className="h-[60px] w-[60px]">
          <img src="/icons/icon1.png" alt="icon1" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-[#242424] ">
            High Quality
          </h1>
          <p className="text-[20px] font-medium text-[#898989]">
            Crafted from top materials
          </p>
        </div>
      </div>
      <div className="feature2 flex gap-3">
        <div className=" h-auto md:h-[60px] w-[60px]">
          <img src="/icons/icon2.png" alt="icon2" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-[#242424] ">
            Warrenty Protection
          </h1>
          <p className="text-[20px] font-medium text-[#898989]">Over 2 years</p>
        </div>
      </div>
      <div className="feature3 flex gap-3">
        <div className=" h-auto md:h-[60px] w-[60px]">
          <img src="/icons/icon3.png" alt="icon3" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-[#242424] ">
            Free Shipping
          </h1>
          <p className="text-[20px] font-medium text-[#898989]">
            order over 150$
          </p>
        </div>
      </div>
      <div className="feature4 flex gap-3">
        <div className=" h-auto md:h-[60px] w-[60px]">
          <img src="/icons/icon4.png" alt="icon4" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-[#242424] ">
            24 / 7 Support
          </h1>
          <p className="text-[20px] font-medium text-[#898989]">
            Dedicated support
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
