import Image from "next/image";

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

export default async function ProductPage(props: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await props.params;

  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product: IProduct = await response.json();

  return (
    <div className="p-6 flex flex-col items-center container mx-auto">
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <p className="text-lg text-gray-700">{product.price}$</p>
      <Image
        src={product.image}
        alt={product.title}
        width={200}
        height={200}
        className="my-4"
      />
      <p>{product.description}</p>
    </div>
  );
}
