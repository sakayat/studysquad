"use client";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-5rem)]">
      <button
        onClick={() => signIn("google")}
        className="text-black bg-[#90EE90] hover:bg-white flex items-center gap-3 py-3 px-8"
      >
        <FcGoogle /> <span>Login with gmail</span>
      </button>
    </div>
  );
};

export default LoginPage;
