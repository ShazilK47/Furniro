/* eslint-disable @next/next/no-img-element */
const FilterSection = () => {
  return (
    <div className="h-auto sm:h-[100px] max-w-full flex flex-wrap sm:flex-nowrap justify-between items-center px-5 sm:px-20 py-4 bg-[#F9F1E7]">
      <div className="flex flex-wrap gap-5 justify-center items-center mb-4 sm:mb-0">
        <div className="flex items-center gap-2">
          <span>
            <img src="/icons/filter.png" alt="filter" />
          </span>
          <p className="text-sm sm:text-base font-normal">Filter</p>
        </div>
        <div className="flex items-center gap-2">
          <span>
            <img src="/icons/icon6.png" alt="icon" />
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span>
            <img src="/icons/icon5.png" alt="icon" />
          </span>
        </div>
        <div className="hidden lg:block h-[37px] w-0 border-2"></div>
        <p className="text-xs sm:text-sm md:text-base font-normal">
          Showing 1-16 of 32 Results
        </p>
      </div>

      <div className="flex flex-wrap sm:flex-nowrap justify-center gap-5 items-center">
        <div className="flex items-center gap-3">
          <p className="text-xs sm:text-sm md:text-base font-normal">Show</p>
          <input
            type="number"
            placeholder="16"
            className="bg-white w-[45px] sm:w-[55px] h-[40px] sm:h-[55px] flex justify-center items-center p-2 sm:p-3"
          />
        </div>
        <div className="flex items-center gap-3">
          <p className="text-xs sm:text-sm md:text-base font-normal">Sort by</p>
          <input
            type="text"
            placeholder="Default"
            className="bg-white w-[120px] sm:w-[188px] h-[40px] sm:h-[55px] flex justify-center items-center p-2 sm:p-3"
          />
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
