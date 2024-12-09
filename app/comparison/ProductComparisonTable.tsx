import React from "react";

const ProductComparisonTable = () => {
  return (
    <div className="w-full overflow-x-auto relative mb-10 p-6 md:p-10">
      {/* Vertical Divider Lines */}
      <div className="absolute left-[50%] top-0 bottom-0 w-[1px] bg-[#E8E8E8] hidden md:block"></div>
      <div className="absolute left-[80%] top-0 bottom-0 w-[1px] bg-[#E8E8E8] hidden md:block"></div>

      <table className="w-full text-left text-sm border-collapse hidden md:table">
        {/* General Section */}
        <tbody>
          <tr>
            <td colSpan={3} className="font-medium text-2xl px-4 py-2">
              General
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">Sales Package</td>
            <td className="px-4 py-2">1 sectional sofa</td>
            <td className="px-4 py-2">1 Three Seater, 2 Single Seater</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Model Number</td>
            <td className="px-4 py-2">TFCBL1GRBL6SRHS</td>
            <td className="px-4 py-2">DTUBL1GRBL568</td>
          </tr>

          {/* Product Section */}
          <tr>
            <td colSpan={3} className="font-medium text-2xl px-4 py-2">
              Product
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">Filling Material</td>
            <td className="px-4 py-2">Foam</td>
            <td className="px-4 py-2">Matte</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Finish Type</td>
            <td className="px-4 py-2">Bright Grey & Lion</td>
            <td className="px-4 py-2">Bright Grey & Lion</td>
          </tr>

          {/* Dimensions Section */}
          <tr>
            <td colSpan={3} className="font-medium text-2xl px-4 py-2">
              Dimensions
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">Maximum Load Capacity</td>
            <td className="px-4 py-2">280 KG</td>
            <td className="px-4 py-2">300 KG</td>
          </tr>

          <tr>
            <td colSpan={3} className="font-medium text-2xl px-4 py-2">
              Warranty
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">Origin of Manufacture</td>
            <td className="px-4 py-2">Pakistan</td>
            <td className="px-4 py-2">Pakistan</td>
          </tr>
        </tbody>
      </table>

      <div className="md:hidden">
        <div className="mb-6">
          <h2 className="font-medium text-xl mb-2">General</h2>
          <div className="space-y-2">
            <p className="flex justify-between">
              <span className="font-semibold">Sales Package:</span>
              <span>1 sectional sofa</span>
            </p>
            <p className="flex justify-between">
              <span className="font-semibold">Model Number:</span>
              <span>TFCBL1GRBL6SRHS</span>
            </p>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="font-medium text-xl mb-2">Product</h2>
          <div className="space-y-2">
            <p className="flex justify-between">
              <span className="font-semibold">Filling Material:</span>
              <span>Foam</span>
            </p>
            <p className="flex justify-between">
              <span className="font-semibold">Finish Type:</span>
              <span>Bright Grey & Lion</span>
            </p>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="font-medium text-xl mb-2">Dimensions</h2>
          <div className="space-y-2">
            <p className="flex justify-between">
              <span className="font-semibold">Maximum Load Capacity:</span>
              <span>280 KG</span>
            </p>
          </div>
        </div>

        <div>
          <h2 className="font-medium text-xl mb-2">Warranty</h2>
          <div className="space-y-2">
            <p className="flex justify-between">
              <span className="font-semibold">Origin of Manufacture:</span>
              <span>Pakistan</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductComparisonTable;
