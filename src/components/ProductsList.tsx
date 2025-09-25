import Image from "next/image";
import ViewDetails from "./ViewDetails";
import AddToCartButton from "./AddToCartButton";
import ProductDescription from "./ProductDescription";

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
  filterValue: string;
}

export default async function ProductsList({ filterValue }: IProps) {
  const response = await fetch("https://fakestoreapi.com/products");
  const data: IProduct[] = await response.json();

  let filteredData = data;
  if (filterValue !== "all") {
    filteredData = data.filter(
      (item) => item.category.toLowerCase() === filterValue.toLowerCase()
    );
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {filteredData.map((item) => (
        <div
          key={item.id}
          className="max-w-sm w-full bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
        >
          <div className="flex justify-center items-center h-48 p-4">
            <Image
              src={item.image}
              alt={item.title}
              width={150}
              height={150}
              className="object-contain h-full"
            />
          </div>

          <div className="flex flex-col flex-grow px-4 pb-4">
            <h1 className="font-semibold text-gray-800 text-lg text-center h-[60px] line-clamp-2">
              {item.title}
            </h1>
            <ProductDescription text={item.description} />
            <p className="text-sm text-gray-500 text-center mt-1">
              {item.category}
            </p>

            <div className="flex justify-between items-center mt-3">
              <p className="text-xl font-bold text-blue-600">${item.price}</p>
              <p className="text-sm text-yellow-500">
                ⭐ {item.rating.rate} ({item.rating.count})
              </p>
            </div>

            <div className="flex justify-between mt-4">
              <ViewDetails id={item.id} />
              <AddToCartButton product={item} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
