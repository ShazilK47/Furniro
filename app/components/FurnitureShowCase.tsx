import Image from "next/image";

const FurnitureShowcase = () => {
  return (
    <div className="furniture-showcase mx-auto max-w-[1200px] h-[780px] py-10 relative">
      {/* Heading */}
      <div className="text-center mb-8">
        <p className="text-lg font-medium text-gray-600">
          Share your setup with
        </p>
        <h1 className="text-4xl font-bold text-primary">#FuniroFurniture</h1>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-12 grid-rows-4 gap-4 h-[calc(100%-120px)]">
        {/* Row 1 */}
        <div className="col-span-3 row-span-2 relative">
          <Image
            src="/images/furniture1.png"
            alt="Furniture 1"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="col-span-6 row-span-2 relative">
          <Image
            src="/images/furniture2.png"
            alt="Furniture 2"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="col-span-3 row-span-2 relative">
          <Image
            src="/images/furniture3.png"
            alt="Furniture 3"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        {/* Row 2 */}
        <div className="col-span-4 row-span-2 relative">
          <Image
            src="/images/furniture4.png"
            alt="Furniture 4"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="col-span-4 row-span-1 relative">
          <Image
            src="/images/furniture5.png"
            alt="Furniture 5"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="col-span-4 row-span-1 relative">
          <Image
            src="/images/furniture6.png"
            alt="Furniture 6"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default FurnitureShowcase;
