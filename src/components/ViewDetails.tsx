"use client";

import { useRouter } from "next/navigation";

interface ViewDetailsButtonProps {
  id: number;
}

function ViewDetails({ id }: ViewDetailsButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/products/${id}`);
  };

  return (
    <button
      onClick={handleClick}
      className="mt-2 px-4 py-2 text-md text-blue-700 font-semibold underline transition cursor-pointer hover:text-blue-900"
    >
      View Details
    </button>
  );
}

export default ViewDetails;
