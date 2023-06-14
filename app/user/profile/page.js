"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { GoSignOut } from "react-icons/go";

const ProfilePage = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  const logoutHandler = async () => {
    try {
      await signOut();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (!session) {
      router.replace("/user/login");
    }
  }, [session, router]);

  return (
    <div className="py-10">
      {!session ? (
        <div className="text-3xl uppercase font-bold flex items-center justify-center min-h-[calc(100vh-5rem)]">
          loading...
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center gap-3">
          <h2 className="text-3xl">Welcome to studysquad !</h2>
          <Image
            src={session.user.image}
            alt={session.user.name}
            width={70}
            height={70}
            className="border border-black p-1 rounded-full"
          />
          <span className="text-xl tracking-wider">
            Hi {session.user.name}
          </span>
          <button
            onClick={logoutHandler}
            className="bg-black text-white py-3 px-5 rounded-lg flex items-center gap-3"
          >
            <span>
              <GoSignOut />
            </span>
            <span>Sign Out</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
