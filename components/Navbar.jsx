"use client";
import Link from "next/link";
import Button from "./Button";
import { AiFillBuild } from "react-icons/ai";

const Navbar = () => {
  const links = [
    { href: "/", text: "Home" },
    { href: "/course", text: "Course" },
    { href: "/about", text: "About" },
    { href: "/contact", text: "Contact" },
  ];

//   if (session) {
//     links.push({ href: "/user/dashboard/order", text: "Orders" });
//   }

  return (
    <div className="bg-gray-900 fixed w-full z-[10]">
      <nav className="container mx-auto flex items-center justify-between h-20 px-8">
        <Link
          href="/"
          className="logo tracking-[2px] flex items-center gap-2"
        >
          <span>
            <AiFillBuild />
          </span>
          <span>studysquad</span>
        </Link>
        <div className="links flex gap-14">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.text}
            </Link>
          ))}
        </div>
        <div className="user">
          <Button
            href="/user/login"
            placeholder="Login"
            className="hover:text-yellow-200 transition-colors"
            color="primary"
            size="default"
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
