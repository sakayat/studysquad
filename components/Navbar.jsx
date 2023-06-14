"use client";
import Link from "next/link";
import Button from "./Button";
import { useSession } from "next-auth/react";
const Navbar = () => {
	const { data: session } = useSession();

	const links = [
		{ href: "/", text: "Home" },
		{ href: "/course", text: "Course" },
		{ href: "/about", text: "About" },
		{ href: "/contact", text: "Contact" },
	];

	if (session) {
		links.push({ href: "/user/dashboard/order", text: "Orders" });
	}

	return (
		<div className="bg-gray-900 text-[#8fb4ff]">
			<nav className="container mx-auto flex items-center justify-between h-20">
				<Link href="/" className="logo font-semibold text-xl tracking-tight">
					studysquad
				</Link>
				<div className="links flex gap-5">
					{links.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className="hover:text-[#ebf1ff] transition-colors">
							{link.text}
						</Link>
					))}
				</div>
				<div className="user">
					{session ? (
						<Button
							href="/user/profile"
							placeholder="Profile"
							className="hover:text-yellow-200transition-colors"
							color="primary"
							size="default"
						/>
					) : (
						<Button
							href="user/login"
							placeholder="Login"
							className="hover:text-yellow-200transition-colors"
							color="primary"
							size="default"
						/>
					)}
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
