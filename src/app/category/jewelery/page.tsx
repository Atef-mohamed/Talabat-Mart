import Image from "next/image";
import React from "react";

interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
const page = async () => {
  const response = await fetch(
    "https://fakestoreapi.com/products/category/jewelery"
  );
  const data = await response.json();
  // console.log(data)
  return (
    <div className="grid grid-cols-3 gap-4 my-5">
      {data.map((item: IProduct) => (
        <div
          key={item.id}
          className="max-w-xs w-full border border-gray-200 shadow-md rounded-2xl p-4 bg-white flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
        >
          <div className="w-32 h-32 flex items-center justify-center mb-4">
            <Image
              src={item.image}
              alt={item.title}
              width={120}
              height={120}
              className="object-contain rounded-lg"
            />
          </div>

          <h1 className="font-semibold text-lg text-gray-800 line-clamp-2 h-[48px]">
            {item.title}
          </h1>

          <p className="text-xl font-bold text-green-600 mt-2">${item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default page;
