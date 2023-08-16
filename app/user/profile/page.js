"use client";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const ProfilePage = () => {
  const {data: session} = useSession()
  if(!session){
    redirect("/user/login")
  }
  return (
    <div className="py-20">
      <div className="container mx-auto px-8">
        <div className="flex flex-col items-center gap-5 py-20">
          <h2 className="text-2xl">{session?.user?.name}</h2>
        <button
          onClick={() => signOut()}
          className="text-black bg-[#90EE90] hover:bg-white py-3 px-8"
        >
          Log Out
        </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
