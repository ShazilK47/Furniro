const ProductDetails = () => {
  return (
    <div className="product-details flex gap-4 pt-10 mb-5 px-20">
      <div className="product-images flex gap-5">
        <div className="side-images flex flex-col gap-5">
          <div className="w-[76px] h-[80px] flex  justify-center items-center bg-[#F9F1E7]">
            <img
              src="/images/sofaset2.png"
              alt="sofa2"
              className="object-cover overflow-hidden "
            />
          </div>
          <div className="w-[76px] h-[80px] flex justify-center items-center bg-[#F9F1E7] rounded-md">
            <img
              src="/images/sofaset2.png"
              alt="sofa2"
              className="object-cover overflow-hidden "
            />
          </div>
          <div className="w-[76px] h-[80px] flex justify-center items-center bg-[#F9F1E7] rounded-md">
            <img
              src="/images/sofaset2.png"
              alt="sofa2"
              className="object-cover overflow-hidden "
            />
          </div>
          <div className="w-[76px] h-[80px] flex justify-center items-center bg-[#F9F1E7] rounded-md">
            <img
              src="/images/sofaset2.png"
              alt="sofa2"
              className="object-cover overflow-hidden "
            />
          </div>
        </div>
        <div className="main-image w-[423px] h-[500px] flex justify-center items-center bg-[#F9F1E7] rounded-md">
          <img
            src="/images/sofa3.png"
            alt="sofa"
            className="object-cover  overflow-hidden"
          />
        </div>
      </div>

      <div className="product-info  flex flex-col gap-3 ml-10">
        <h1 className="text-[42px] font-medium">Asgaard Sofa</h1>
        <h3 className="text-[24px] font-semibold text-[#9F9F9F]">
          Rp 250,00.00
        </h3>
        <div className="ratings flex gap-4">
          <div className="rate-star">1 2 3 4 5</div>
          <div className="line border-2 border-[#9F9F9F]"></div>
          <p>5 Customer review</p>
        </div>
        <p className="desc text-[13px] font-medium w-3/4">
          Setting the bar as one of the loudest speakers in its class, the
          Kilburn is a compact, stout-hearted hero with a well-balanced audio
          which boasts a clear midrange and extended highs for a sound.
        </p>
        <div className="product-size">
          <h3 className="text-[14px] text-[#9F9F9F]">Size</h3>
          <div className="size flex gap-3 mt-3">
            <div className="bg-[#F9F1E7] w-[30px] h-[30px] flex justify-center items-center text-[13px] rounded-lg">
              L
            </div>
            <div className="bg-[#F9F1E7] w-[30px] h-[30px] flex justify-center items-center text-[13px] rounded-lg">
              XL
            </div>
            <div className="bg-[#F9F1E7] w-[30px] h-[30px] flex justify-center items-center text-[13px] rounded-lg">
              XS
            </div>
          </div>
        </div>
        <div className="product-color mt-2  ">
          <h3 className="text-[14px] text-[#9F9F9F]">Color</h3>
          <div className="color flex gap-3 mt-3">
            <div className="bg-[#816DFA] w-[30px] h-[30px]  rounded-full"></div>
            <div className="bg-black w-[30px] h-[30px]  rounded-full"></div>
            <div className="bg-primary w-[30px] h-[30px]  rounded-full"></div>
          </div>
        </div>

        <div className="to-buy flex gap-3 mt-3 mb-5">
          <button className="w-[215px] h-[64px] rounded-xl text-[20px] flex justify-center items-center border-2 border-black">
            Add to Cart
          </button>
          <button className="w-[215px] h-[64px] rounded-xl text-[20px] flex justify-center items-center border-2 border-black">
            Compare
          </button>
        </div>

        <hr className="mt-2" />
        <div className="others mt-5 ">
          <table className="text-[16px] text-[#9F9F9F]">
            <tr>
              <td>SKU </td>
              <td>: SS0O1</td>
            </tr>
            <tr>
              <td>Category </td>
              <td>: sofas</td>
            </tr>
            <tr>
              <td>Tags </td>
              <td>: Sofa, Chair, Home, Shop</td>
            </tr>
            <tr>
              <td>Share </td>
              <td> F L T</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
