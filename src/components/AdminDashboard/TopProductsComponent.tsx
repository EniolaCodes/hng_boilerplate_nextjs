// src/components/AdminDashboard/TopProducts.tsx

import React from "react";

type ProductData = {
  name: string;
  amount: string;
};

type TopProductsProperties = {
  data: ProductData[];
  gradients: string[];
};

const TopProductsComponent: React.FC<TopProductsProperties> = ({
  data,
  gradients,
}) => {
  return (
    <>
      <div className="w-full rounded bg-white p-4 shadow lg:col-span-2">
        <h2 className="font-semibold text-[#080808]">Top Products</h2>
        <h1 className="mb-6 text-[#626262]">You made 265 sales this month</h1>
        <ul>
          {data.map((item, index) => (
            <li key={index} className="mb-2 flex justify-between">
              <div className="flex justify-start space-x-4">
                <p
                  className="h-10 w-10 rounded-md"
                  style={{ background: gradients[index % gradients.length] }}
                ></p>
                <div>
                  <p className="font-bold">{item.name}</p>
                </div>
              </div>
              <p className="text-[#0A0A0A]">{item.amount}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TopProductsComponent;
