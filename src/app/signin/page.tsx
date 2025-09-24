import SignInButton from "@/components/SignInButton";
import React from "react";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col items-center gap-6 w-[350px]">
        <h1 className="text-2xl font-bold text-gray-800 text-center">
          Welcome Back 👋
        </h1>
        <p className="text-gray-500 text-center text-sm">
          Sign in to continue to{" "}
          <span className="font-semibold text-violet-600">Talabt-Mart</span>
        </p>

        <SignInButton />

        <p className="text-xs text-gray-400 text-center mt-4">
          By signing in, you agree to our{" "}
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
