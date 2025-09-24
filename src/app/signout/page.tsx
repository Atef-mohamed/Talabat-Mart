import SignOutButton from "@/components/SignOutButton";
import React from "react";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col items-center gap-6 w-[350px]">
        <h1 className="text-2xl font-bold text-gray-800 text-center">
         See You Soon👋
        </h1>
      

        <SignOutButton />

        <p className="text-xs text-gray-400 text-center mt-4">
          By signing out, you agree to our{" "}
          <a href="#" className="text-violet-600 hover:underline">
            Terms
          </a>{" "}
          and{" "}
          <a href="#" className="text-violet-600 hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
