import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex-1">
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-700 via-purple-600 to-blue-600 animate-gradient-x"></div>

      <div className="flex flex-col items-center justify-center text-center text-white h-screen flex-1 px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg">
          Welcome to <span className="text-blue-300">Talabat-Mart</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-xl drop-shadow-md">
          Explore the best deals, trending products, and more at your
          fingertips.
        </p>
        <Link
          href="/products"
          className="mt-8 px-6 py-3 rounded-full bg-blue-400 text-black font-semibold shadow-lg hover:bg-blue-500 hover:shadow-xl transition duration-300"
        >
          🛒 Shop Now
        </Link>
      </div>
    </div>
  );
}
