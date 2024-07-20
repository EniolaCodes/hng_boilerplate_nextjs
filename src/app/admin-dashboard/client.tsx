"use client";

import Link from "next/link";

import CardComponent from "~/components/AdminDashboard/CardComponent";
import { cardData } from "~/components/AdminDashboard/cardData";

const Client = () => {
  return (
    <>
      <div className="p-4 md:p-8">
        <div className="mb-4 md:mb-0">
          <div className="mt-4 flex flex-col items-start justify-start">
            <Link href="#" className="py-[6px]">
              <h1 className="text-[24px] font-bold text-[#525252]">Overview</h1>
            </Link>
            <p className="text-[16px] font-semibold text-[#525252]">
              Showing records from the last .....
            </p>
          </div>
        </div>

        <div className="mb-6 mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {cardData.map((card, index) => (
            <CardComponent
              key={index}
              title={card.title}
              value={card.value}
              description={card.description}
              icon={card.icon}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 gap-[16px] lg:grid-cols-5">
          <div className="rounded bg-white p-4 shadow-md lg:col-span-3">
            <h2 className="mb-4 font-semibold">Overview</h2>
            <div className="rounded p-2">
              {/* <Chart chartData={chartData} chartConfig={chartConfig} /> */}
            </div>
          </div>
          <div className="w-full rounded bg-white p-4 shadow lg:col-span-2">
            <h2 className="font-semibold text-[#080808]">Top Products</h2>
            <h1 className="mb-6 text-[#626262]">
              You made 265 sales this month
            </h1>
            <ul>
              {/* {data.map((item, index) => (
                <li key={index} className="mb-2 flex justify-between">
                  <div className="flex justify-start space-x-4">
                    <p
                      className="rounded-full p-6"
                      style={{
                        background: gradients[index % gradients.length],
                      }}
                    ></p>
                    <div>
                      <p className="font-bold">{item.name}</p>
                      <p className="text-sm text-[#525252]">{item.email}</p>
                    </div>
                  </div>
                  <p className="text-[#0A0A0A]">{item.amount}</p>
                </li>
              ))} */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Client;
