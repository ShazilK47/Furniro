import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="hero-section w-full h-[calc(100vh-100px)] relative overflow-hidden">
      <Image
        src="/images/hero-img.png"
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        className="absolute top-0 left-0 w-full h-full"
      />

      <div
        className="absolute bg-[#FFF3E3] rounded-lg flex flex-col justify-center items-center p-6 sm:p-8 md:p-10"
        style={{
          width: "80%", // 80% of the hero section width
          maxWidth: "643px", // Limit width to 643px
          height: "55vh", // 45% of the viewport height for responsiveness
          maxHeight: "443px", // Limit height to 443px
          top: "25vh", // Position it 25% from the top of the viewport
          left: "50%", // Horizontally center it
        }}
      >
        <div className="box-content ">
          <p className="font-semibold font-poppins text-[14px] sm:text-[16px] md:text-[18px] tracking-widest ">
            New Arrival
          </p>
          <h1 className="font-bold text-[32px] sm:text-[42px] md:text-[52px] text-primary">
            DISCOVER OUR <br /> NEW COLLECTION
          </h1>
          <p className="text-[14px] sm:text-[16px] md:text-[18px] font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            tenetur obcaecati error facere cumque perferendis.
          </p>
          <button className="w-[180px] sm:w-[200px] md:w-[222px] h-[60px] sm:h-[65px] md:h-[74px] bg-primary text-white text-[14px] sm:text-[16px] md:text-[16px] mt-4">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
