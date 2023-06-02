"use client";
import { FcGoogle } from "react-icons/fc";
import SectionHeader from "@/components/SectionHeader";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LoginPage = () => {
  
	const router = useRouter();
	const { data: session } = useSession();
	const loginWithGoogle = async () => {
		try {
			await signIn("google");
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (session) {
			router.replace("user/profile");
		}
	}, [session, router]);

	if (session) {
		return (
			<div className="text-3xl uppercase font-bold flex items-center justify-center min-h-[calc(100vh-5rem)]">
				loading...
			</div>
		);
	}

	return (
		<div className="login">
			<SectionHeader
				span="login"
				h2="Get Started with Google"
				p="Sign and access your accounts and courses"
			/>
			<div className="flex justify-center">
				<button
					onClick={loginWithGoogle}
					className="bg-black text-white py-3 px-5 rounded-lg flex items-center gap-3">
					<span>
						<FcGoogle />
					</span>
					<span>Sign in With Google</span>
				</button>
			</div>
		</div>
	);
};

export default LoginPage;
