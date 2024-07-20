"use client";

import Link from "next/link";

import CardComponent from "~/components/AdminDashboard/CardComponent";
import { cardData } from "~/components/AdminDashboard/cardData";
import { data, gradients } from "~/components/AdminDashboard/productData";
import TopProductsComponent from "~/components/AdminDashboard/TopProductsComponent";

const Client = () => {
  return (
    <>
      <div className="p-4 md:p-8">
        <div className="mb-4 md:mb-0">
          <div className="mt-4 flex flex-col items-start justify-start">
            <Link href="#" className="py-[6px]">
              <h1 className="text-2xl font-bold text-neutral-600">Overview</h1>
            </Link>
            <p className="text-base font-normal text-neutral-600">
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

        <div className="mt-6 grid grid-cols-1 gap-[16px] lg:grid-cols-5">
          <div className="rounded-xl border border-slate-300 bg-white p-4 shadow-md lg:col-span-3">
            <h2 className="mb-4 font-semibold">Overview</h2>
            <div className="rounded p-2">
              {/* <Chart chartData={chartData} chartConfig={chartConfig} /> */}
            </div>
          </div>
          <TopProductsComponent data={data} gradients={gradients} />
        </div>
      </div>
    </>
  );
};

export default Client;
