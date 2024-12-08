import Image from "next/image";
import Features from "../components/Features";
import Tophead from "../components/Tophead";

const page = () => {
  return (
    <>
      <Tophead pageName="Cart" />
      <div className="flex flex-col lg:flex-row items-start justify-center gap-6 p-6 mt-12 mb-12">
        {/* Table Section */}
        <div className="w-[817px]">
          <table className="w-full border-collapse text-left">
            <thead className="bg-[#F9F1E7]">
              <tr className="bg-beige-100">
                <th className="p-4 border-b">Product</th>
                <th className="p-4 border-b">Price</th>
                <th className="p-4 border-b">Quantity</th>
                <th className="p-4 border-b">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4 flex items-center gap-4">
                  <Image
                    src="/images/product1.png"
                    alt="Asgaard sofa"
                    width={60}
                    height={60}
                    className="rounded-md"
                  />
                  <span>Asgaard sofa</span>
                </td>
                <td className="p-4">Rs. 250,000.00</td>
                <td className="p-4">
                  <input
                    type="number"
                    defaultValue="1"
                    min="1"
                    className="w-16 p-2 border rounded text-center"
                  />
                </td>
                <td className="p-4">Rs. 250,000.00</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Cart Total Section */}
        <div className="w-[393px] h-[390px] bg-[#F9F1E7] p-6 rounded-md shadow-md flex flex-col justify-center ">
          <h3 className=" font-semibold mb-6 w-full text-center text-[32px]">
            Cart Totals
          </h3>
          <div className="space-y-4 px-6 mt-10">
            <div className="flex justify-between ">
              <span>Subtotal</span>
              <span className="text-[#9F9F9F]">Rs. 250,000.00</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span className="text-primary">Rs. 250,000.00</span>
            </div>
          </div>
          <button className="w-[222px] m-auto mt-8 text-black border-2 border-black py-2 px-4 rounded-md hover:bg-gray-800 transition">
            Check Out
          </button>
        </div>
      </div>
      <Features />
    </>
  );
};

export default page;
