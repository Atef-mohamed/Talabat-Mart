"use client";

import { signInAction } from "@/utils/signInAction";
import Image from "next/image";

const SignInButton = () => {
  return (
    <form action={signInAction}>
      <button
        className="flex items-center gap-2 px-5 py-2 bg-white text-gray-700 rounded-full shadow hover:shadow-md hover:bg-gray-100 transition"
      >
        <Image
          src={"https://authjs.dev/img/providers/google.svg"}
          alt="Google Logo"
          width={24}
          height={24}
        />
        <span className="font-medium">Sign in with Google</span>
      </button>
    </form>
  );
};

export default SignInButton;
