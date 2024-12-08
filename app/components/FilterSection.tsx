const FilterSection = () => {
  return (
    <div className="h-[100px] max-w-full flex justify-between items-center px-20 bg-[#F9F1E7]">
      <div className="flex gap-3 justify-center items-center">
        <div>
          <span>icon</span> Filter
        </div>
        <div>icon 2</div>
        <div>icon 3</div>
        <div className="h-[37px] w-0 border-2 "></div>
        <p className="text-[16px] font-normal">Showing 1-16 of 32 Results</p>
      </div>
      <div className="flex justify-center gap-5 items-center">
        <div className="flex items-center gap-3">
          <p>Show</p>
          <input
            type="number"
            placeholder="16"
            className="bg-white w-[55px] h-[55px] flex justify-center items-center p-3"
          />
        </div>
        <div className="flex items-center gap-3   ">
          <p>Sort by</p>
          <input
            type="text"
            placeholder="Default"
            className="bg-white w-[188px] h-[55px] flex justify-center items-center p-3"
          />
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
