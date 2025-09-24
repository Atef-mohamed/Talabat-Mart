import React from "react";
import NavBtn from "./NavBtn";
import { auth } from "@/services/auth";
import Image from "next/image";
import Link from "next/link";
import CartBadge from "./CartBadge"; // 👈 استدعاء الكومبوننت الجديد

const Navbar = async () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Category", path: "/category" },
  ];

  const session = await auth();

  return (
    <div className="sticky top-0 z-50">
      <nav className="bg-gradient-to-r from-blue-600 to-blue-600 shadow-md flex items-center justify-between px-6 py-3">
        <p className="font-extrabold text-white text-xl tracking-wide">
          Talabt-Mart
        </p>

        <ul className="flex items-center gap-6">
          {links.map((link) => (
            <NavBtn key={link.name} name={link.name} path={link.path} />
          ))}

          <CartBadge />
        </ul>

        <div className="flex items-center gap-4">
          {session?.user?.image && (
            <Image
              src={session.user.image}
              alt="User Avatar"
              className="rounded-full border border-white shadow-md"
              width={36}
              height={36}
            />
          )}

          {session ? (
            <Link
              href="/signout"
              className="px-3 py-2 bg-red-700 text-white rounded-lg font-sm hover:bg-red-600 transition"
            >
              Logout
            </Link>
          ) : (
            <Link
              href="/signin"
              className="px-4 py-2 bg-green-500 text-white rounded-lg font-sm hover:bg-green-600 transition"
            >
              Login
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
