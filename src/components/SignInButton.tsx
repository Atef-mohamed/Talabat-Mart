"use client";

import { signInAction } from "@/utils/signInAction";
import Image from "next/image";

const SignInButton = () => {
  return (
    <>
      <form action={async () => signInAction("google")}>
        <button className="flex items-center gap-2 px-5 py-2 bg-white text-gray-700 rounded-full shadow hover:shadow-md hover:bg-gray-100 transition">
          <Image
            src={"https://authjs.dev/img/providers/google.svg"}
            alt="Google Logo"
            width={24}
            height={24}
          />
          <span className="font-medium">Sign in with Google</span>
        </button>
      </form>
      <form
        action={async () => {
          await signInAction("facebook");
        }}
      >
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg flex items-center gap-2 hover:bg-blue-700 transition">
          <Image
            src="https://authjs.dev/img/providers/facebook.svg"
            width={24}
            height={24}
            alt="Facebook"
          />
          Sign in with Facebook
        </button>
      </form>
    </>
  );
};

export default SignInButton;
