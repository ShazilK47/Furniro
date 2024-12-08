const ProductComparisonTable = () => {
  return (
    <div className="overflow-x-auto p-16">
      <table className="w-full text-sm text-left">
        <thead className="mb-4">
          <tr>
            <th className="py-2 text-black font-semibold text-[28px]">
              General
            </th>
            <th className="py-2 text-gray-700 font-normal"></th>
            <th className="py-2 text-gray-700 font-normal"></th>
          </tr>
        </thead>
        <tbody>
          {/* Row: Sales Package */}
          <tr>
            <td className="py-1 font-medium text-gray-700">Sales Package</td>
            <td className="py-1 text-gray-500">1 sectional sofa</td>
            <td className="py-1 text-gray-500">
              1 Three Seater, 2 Single Seater
            </td>
          </tr>
          {/* Row: Model Number */}
          <tr>
            <td className="py-1 font-medium text-gray-700">Model Number</td>
            <td className="py-1 text-gray-500">TFCLUBGRL65RH6</td>
            <td className="py-1 text-gray-500">DTUBUGRL65G8</td>
          </tr>
          {/* Row: Secondary Material */}
          <tr>
            <td className="py-1 font-medium text-gray-700">
              Secondary Material
            </td>
            <td className="py-1 text-gray-500">Solid Wood</td>
            <td className="py-1 text-gray-500">Solid Wood</td>
          </tr>
          {/* Row: Configuration */}
          <tr>
            <td className="py-1 font-medium text-gray-700">Configuration</td>
            <td className="py-1 text-gray-500">L-shaped</td>
            <td className="py-1 text-gray-500">L-shaped</td>
          </tr>
          {/* Add more rows */}
          <tr>
            <td className="py-1 font-medium text-gray-700">Dimensions</td>
            <td className="py-1 text-gray-500">
              Width: 265.32 cm
              <br />
              Height: 76 cm
              <br />
              Depth: 187.76 cm
              <br />
              Weight: 45 KG
            </td>
            <td className="py-1 text-gray-500">
              Width: 265.32 cm
              <br />
              Height: 76 cm
              <br />
              Depth: 187.76 cm
              <br />
              Weight: 65 KG
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductComparisonTable;
