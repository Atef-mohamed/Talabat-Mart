"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavBtnProps {
  name: string;
  path: string;
}

const NavBtn = ({ name, path }: NavBtnProps) => {
  const pathname = usePathname();

  const isActive = pathname === path;

  return (
    <li>
      <Link
        href={path}
        className={`px-4 py-2 rounded-md font-medium transition-all duration-200 ${
          isActive
            ? "bg-white text-blue-700 shadow"
            : "text-white hover:bg-blue-500/80"
        }`}
      >
        {name}
      </Link>
    </li>
  );
};

export default NavBtn;
