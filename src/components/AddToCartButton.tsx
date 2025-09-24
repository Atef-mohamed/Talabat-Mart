"use client";

import { useSession } from "next-auth/react";
import { useAppDispatch } from "@/redux/store";
import { addToCart } from "@/redux/cartSlice";
import toast from "react-hot-toast";
import Link from "next/link";

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

export default function AddToCartButton({ product }: { product: IProduct }) {
  const dispatch = useAppDispatch();
  const { data: session, status } = useSession();

  const handleAdd = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));
    toast.success(`${product.title} added to cart 🛒`);
  };

  if (status === "loading") {
    return (
      <button
        disabled
        className="px-4 py-2.5 rounded-xl bg-gray-300 text-gray-600 cursor-not-allowed"
      >
        Checking...
      </button>
    );
  }

  if (!session) {
    return (
      <Link
        href="/signin"
        className="group relative inline-flex items-center gap-2 px-5 py-2.5 
               bg-gradient-to-r from-gray-500 to-gray-600 text-white 
               rounded-full shadow-md cursor-pointer 
               transition-all duration-300 hover:from-gray-600 hover:to-gray-700"
      >
        <span className="font-medium">Login to Add</span>
        <span className="transform transition-transform duration-300 group-hover:translate-x-1">
          ➔
        </span>
      </Link>
    );
  }

  return (
    <button
      onClick={handleAdd}
      className="group relative inline-flex items-center gap-2 px-4 py-2.5 
             bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold 
             rounded-xl shadow-md transition-all duration-300 
             hover:from-blue-600 hover:to-blue-700 hover:shadow-lg active:scale-95"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 6h13m-11.5-6L5 5m2 8h10"
        />
      </svg>
      <span>Add to Cart</span>
    </button>
  );
}
