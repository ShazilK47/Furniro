import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[calc(100vh-100px)] overflow-hidden">
      <Image
        src="/images/hero-img.png"
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        className="absolute top-0 left-0 w-full h-full"
      />

      <div className="absolute inset-0 flex items-center justify-center lg:justify-start lg:pl-[50%]">
        <div className="bg-[#FFF3E3] rounded-lg p-6 sm:p-8 md:p-10 w-[90%] sm:w-[80%] max-w-[643px] text-center lg:text-left">
          <p className="font-semibold font-poppins text-sm sm:text-base md:text-lg tracking-widest mb-4">
            New Arrival
          </p>
          <h1 className="font-bold text-2xl sm:text-4xl md:text-5xl text-primary mb-4 leading-snug">
            DISCOVER OUR <br /> NEW COLLECTION
          </h1>
          <p className="text-sm sm:text-base md:text-lg font-medium mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            tenetur obcaecati error facere cumque perferendis.
          </p>
          <button className="w-[160px] sm:w-[200px] md:w-[220px] h-[50px] sm:h-[60px] md:h-[70px] bg-primary text-white text-sm sm:text-base md:text-lg rounded-lg transition-transform transform hover:scale-105">
            <Link href="/shop"> Buy Now </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
