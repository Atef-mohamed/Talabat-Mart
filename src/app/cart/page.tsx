"use client";

import { useAppDispatch, useAppSelector } from "@/redux/store";
import { removeFromCart, clearCart, CartItem } from "@/redux/cartSlice";
import Image from "next/image";
import toast from "react-hot-toast";

export default function CartPage() {
  const items = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  if (items.length === 0) {
    return (
      <p className="text-center mt-16 text-lg text-gray-500">
        🛒 Your cart is empty!
      </p>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-blue-600">Your Cart</h1>

      <div className="flex flex-col gap-6">
        {items.map((item: CartItem) => (
          <div
            key={item.id}
            className="flex items-center justify-between border rounded-2xl shadow-md p-5 bg-white hover:shadow-lg transition"
          >
            <div className="flex items-center gap-5">
              <Image
                src={item.image}
                alt={item.title}
                width={80}
                height={80}
                className="rounded-md object-contain bg-gray-50 p-2"
              />
              <div>
                <h2 className="font-semibold text-lg text-gray-800 line-clamp-1">
                  {item.title}
                </h2>
                <p className="text-sm text-gray-500">{item.category}</p>
                <p className="text-sm text-gray-600 mt-1">
                  ${item.price.toFixed(2)}
                </p>
                <p className="text-sm font-medium text-blue-600 mt-1">
                  Quantity: {item.quantity}
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                dispatch(removeFromCart(item.id));
                toast.error(`${item.title} removed from cart ❌`);
              }}
              className="text-red-600 font-medium hover:underline cursor-pointer"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-10 flex justify-between items-center bg-gray-50 border p-6 rounded-xl shadow-inner">
        <button
          onClick={() => {
            dispatch(clearCart());
            toast.error("Cart cleared ❌");
          }}
          className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 cursor-pointer transition"
        >
          Clear Cart
        </button>
        <p className="text-2xl font-bold text-gray-800">
          Total: $
          {items
            .reduce((acc, item) => acc + item.price * item.quantity, 0)
            .toFixed(2)}
        </p>
      </div>
    </div>
  );
}
