import Filter from "@/components/Filter";
import ProductsList from "@/components/ProductsList";
import ProductsWrapper from "@/components/ProductsWrapper";
import Search from "@/components/Search";
import Spinner from "@/components/Spinner";
import { Metadata } from "next";
import { Suspense } from "react";

export const revalidate = 15;
export const metadata: Metadata = {
  title: "Products",
  description: "Products page",
};

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

interface IProps {
  searchParams: Promise<{ category: string }>;
}

export default async function Page({ searchParams }: IProps) {
  const { category } = await searchParams;
  const filterValue = category ?? "all";
  console.log("categoryData:", filterValue);

  const response = await fetch("https://fakestoreapi.com/products");
  const products: IProduct[] = await response.json();
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Products</h1>
      <Suspense fallback={<Spinner />}>
      <Filter />
        <ProductsList filterValue={filterValue} />
        {/* <Search products={products} /> */}
        {/* <ProductsWrapper products={products} /> */}
      </Suspense>
    </div>
  );
}
