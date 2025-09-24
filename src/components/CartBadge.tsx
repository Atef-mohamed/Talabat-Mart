"use client";

import Link from "next/link";
import { useAppSelector } from "@/redux/store";

const CartBadge = () => {
  const cartCount = useAppSelector((state) =>
    state.cart.items.reduce((acc, item) => acc + item.quantity, 0)
  );

  return (
    <div className="relative">
      <Link href="/cart" className="text-white text-lg">
        🛒
      </Link>
      {cartCount > 0 && (
        <span className="absolute -top-2 -right-3 bg-blue-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full shadow">
          {cartCount}
        </span>
      )}
    </div>
  );
};

export default CartBadge;
