"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const categories = [
  { key: "all", label: "All" },
  { key: "jewelery", label: "Jewelery" },
  { key: "electronics", label: "Electronics" },
  { key: "men's clothing", label: "Men’s Clothing" },
  { key: "women's clothing", label: "Women’s Clothing" },
];

const Filter = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const activeCategory = searchParams.get("category") || "all";

  const handleFilter = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("category", value);
    const newPathname = `${pathname}?${params.toString()}`;
    router.replace(newPathname);
  };

  return (
    <div className="flex flex-wrap gap-3 justify-center mb-6">
      {categories.map((cat) => (
        <button
          key={cat.key}
          onClick={() => handleFilter(cat.key)}
          className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
            activeCategory === cat.key 
              ? "bg-blue-600 text-white shadow-md"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
};

export default Filter;
