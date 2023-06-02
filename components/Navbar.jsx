"use client";
import Link from "next/link";
import Button from "./Button";
import { useSession } from "next-auth/react";
const Navbar = () => {
	const { data: session } = useSession();
	return (
		<div className="bg-black text-white">
			<nav className="container mx-auto flex items-center justify-between h-20">
				<Link href="/" className="logo text-yellow-200">
					studysquad
				</Link>
				<div className="links flex gap-5">
					<Link href="/" className="hover:text-yellow-200 transition-colors">
						Home
					</Link>
					<Link href="/course" className="hover:text-yellow-200 transition-colors">
						Course
					</Link>
					<Link href="/about" className="hover:text-yellow-200 transition-colors">
						About
					</Link>
					<Link href="/contact" className="hover:text-yellow-200transition-colors">
						Contact
					</Link>
				</div>
				<div className="user">
					{session ? (
						<Button
							href="/user/profile"
							placeholder="Profile"
							className="hover:text-yellow-200transition-colors"
							color="secondary"
							size="default"
						/>
					) : (
						<Button
							href="user/login"
							placeholder="Login"
							className="hover:text-yellow-200transition-colors"
							color="secondary"
							size="default"
						/>
					)}
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
