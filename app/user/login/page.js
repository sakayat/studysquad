"use client";
import { FcGoogle } from "react-icons/fc";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const LoginPage = () => {
  const {data: session} = useSession()
  if(session){
    redirect("/")
  }
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-5rem)]">
      <button
        onClick={() => signIn("google")}
        className="text-black bg-[#90EE90] hover:bg-white flex items-center gap-4 py-3 px-8"
      >
        <FcGoogle size={30}/> <span>Login with gmail</span>
      </button>
    </div>
  );
};

export default LoginPage;
