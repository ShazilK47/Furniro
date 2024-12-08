const TopSection = () => {
  return (
    <div className="h-[100px] max-w-full flex justify-between items-center px-20 bg-[#F9F1E7]">
      <div className="flex gap-3 justify-center items-center">
        <p className="flex items-center">
          Home <span className="mx-3 font-semibold text-[20px]">{">"}</span>{" "}
          Shop <span className="mx-3 font-semibold text-[20px]">{">"}</span>
        </p>
        <div className="h-[37px] w-0 border-2 border-[#9F9F9F]"></div>
        <p className="text-[16px] font-normal ml-3">Asgaard sofa</p>
      </div>
    </div>
  );
};

export default TopSection;
