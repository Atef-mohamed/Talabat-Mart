"use client";

import React, { useState } from "react";
import Search from "./Search";
import ProductsList from "./ProductsList";

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

// interface IProps {
//   filterValue: string;
// }
const ProductsWrapper = ({ products }: { products: IProduct[] }) => {
  const [query, setQuery] = useState("");

  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-6 w-full">
      <Search query={query} setQuery={setQuery} />
      {/* <ProductsList products={filtered} /> */}
    </div>
  );
};

export default ProductsWrapper;
