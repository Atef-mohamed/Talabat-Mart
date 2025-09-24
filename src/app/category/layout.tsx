import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Categories",
  description: "Categories page",
};

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-white border-r border-gray-200 shadow-md p-6">
        <h1 className="text-xl font-bold mb-6">Categories</h1>
        <nav className="flex flex-col gap-4">
          <Link
            href="/category/electronics"
            className="px-3 py-2 rounded-lg hover:bg-gray-100 transition"
          >
            Electronics
          </Link>
          <Link
            href="/category/jewelery"
            className="px-3 py-2 rounded-lg hover:bg-gray-100 transition"
          >
            Jewelery
          </Link>
        </nav>
      </aside>

      <main className="flex-1 p-6 bg-gray-50">{children}</main>
    </div>
  );
};

export default layout;
