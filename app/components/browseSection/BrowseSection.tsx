import Image from "next/image";

const BrowseSection = () => {
  return (
    <div className="browse-section p-8 w-full mt-9">
      <div className="browse-heading w-full text-center mb-10">
        <h2 className="text-3xl font-poppins text-headingLight font-bold">
          Browse our products
        </h2>
        <p className="text-xl text-subHeading">
          Discover the latest trends and features in our range.
        </p>
      </div>

      {/* Grid layout for the ranges */}
      <div className="ranges grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="range flex flex-col items-center justify-center">
          <div className="image-container relative w-full max-w-[480px]">
            <Image
              src="/images/range1.png"
              alt="Dining"
              height={381}
              width={480}
              layout="responsive"
              objectFit="cover"
            />
          </div>
          <h2 className="text-2xl font-semibold mt-7">Dining</h2>
        </div>

        <div className="range flex flex-col items-center justify-center">
          <div className="image-container relative w-full max-w-[480px]">
            <Image
              src="/images/range2.png"
              alt="Living"
              height={381}
              width={480}
              layout="responsive"
              objectFit="cover"
            />
          </div>
          <h2 className="text-2xl font-semibold mt-7">Living</h2>
        </div>

        <div className="range flex flex-col items-center justify-center">
          <div className="image-container relative w-full max-w-[480px]">
            <Image
              src="/images/range3.png"
              alt="Bedroom"
              height={381}
              width={480}
              layout="responsive"
              objectFit="cover"
            />
          </div>
          <h2 className="text-2xl font-semibold mt-7">Bedroom</h2>
        </div>
      </div>
    </div>
  );
};

export default BrowseSection;
