"use client";
import Button from "@/components/Button";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { AiOutlineCheck } from 'react-icons/ai';
const SuccessPage = () => {
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (!session) {
      router.replace("/user/login");
    } else {
      router.replace("/success")
    }
  }, [session, router]);


  return (
    <div className="min-h-[calc(100vh-10rem)] flex flex-col justify-center items-center ">
      <div className="bg-white p-6 rounded-md shadow-lg text-center max-w-sm">
        <div className="flex justify-center mb-6">
          <span className="text-3xl font-bold text-[#8fb4ff]"><AiOutlineCheck /></span>
        </div>
        <h2 className="text-xl font-bold mb-2">Transaction Successful</h2>
        <p className="text-gray-600 mb-4">
          Your payment has been processed and confirmed. Thank you for your
          purchase!
        </p>
        <div className="flex justify-center">
          <Button href="/" placeholder="Return to Homepage" color="primary" size="default"/>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
