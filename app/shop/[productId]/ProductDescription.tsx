import Link from "next/link";

const ProductDescription = () => {
  return (
    // <div className="product-about p-12">
    //   <div className="title-link w-full flex justify-center items-center gap-10 mb-4 pb-4">
    //     <Link href="/" className="text-black text-[24px]">
    //       Description
    //     </Link>
    //     <Link href="/" className="text-[#9F9F9F] text-[24px]">
    //       Additional Information
    //     </Link>
    //     <Link href="/" className="text-[#9F9F9F] text-[24px]">
    //       Reviews [5]
    //     </Link>
    //   </div>

    //   <div className="description-about flex flex-col justify-center items-center gap-3 w-[85%] text-[16px] text-[#9F9F9F] font-normal m-auto mt-4">
    //     <p>
    //       Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
    //       portable active stereo speaker takes the unmistakable look and sound
    //       of Marshall, unplugs the chords, and takes the show on the road.
    //     </p>
    //     <br />
    //     <p>
    //       Weighing in under 7 pounds, the Kilburn is a lightweight piece of
    //       vintage styled engineering. Setting the bar as one of the loudest
    //       speakers in its class, the Kilburn is a compact, stout-hearted hero
    //       with a well-balanced audio which boasts a clear midrange and extended
    //       highs for a sound that is both articulate and pronounced. The analogue
    //       knobs allow you to fine tune the controls to your personal preferences
    //       while the guitar-influenced leather strap enables easy and stylish
    //       travel.
    //     </p>
    //   </div>
    //   <div className="images flex gap-4 justify-center items-center mt-10">
    //     <div className="w-[605px] h-[348px] flex justify-center items-center bg-[#F9F1E7] rounded-lg">
    //       <img src="/images/sofa4.png" alt="sofa" className="object-cover " />
    //     </div>
    //     <div className="w-[605px] h-[348px] flex justify-center items-center bg-[#F9F1E7] rounded-lg">
    //       <img src="/images/sofa5.png" alt="sofa" className="object-cover " />
    //     </div>
    //   </div>
    // </div>

    <div className="product-about p-4 md:p-12">
      <div className="title-link w-full flex flex-wrap justify-center items-center gap-5 md:gap-10 mb-4 pb-4">
        {["Description", "Additional Information", "Reviews [5]"].map(
          (text, idx) => (
            <Link
              key={idx}
              href="/"
              className={`text-[18px] md:text-[24px] ${
                idx === 0 ? "text-black" : "text-[#9F9F9F]"
              }`}
            >
              {text}
            </Link>
          )
        )}
      </div>

      <div className="description-about flex flex-col justify-center items-center gap-3 w-full md:w-[85%] text-[14px] md:text-[16px] text-[#9F9F9F] font-normal m-auto mt-4">
        <p>
          Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
          portable active stereo speaker takes the unmistakable look and sound
          of Marshall, unplugs the chords, and takes the show on the road.
        </p>
        <br />
        <p>
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of
          vintage styled engineering. Setting the bar as one of the loudest
          speakers in its class, the Kilburn is a compact, stout-hearted hero
          with a well-balanced audio which boasts a clear midrange and extended
          highs for a sound that is both articulate and pronounced.
        </p>
      </div>

      <div className="images flex flex-wrap gap-4 justify-center items-center mt-10">
        {[4, 5].map((num) => (
          <div
            key={num}
            className="w-full md:w-[605px] h-[200px] md:h-[348px] flex justify-center items-center bg-[#F9F1E7] rounded-lg"
          >
            <img
              src={`/images/sofa${num}.png`}
              alt={`sofa${num}`}
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDescription;
