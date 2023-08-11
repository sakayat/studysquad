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
    <div className="bg-gray-900">
      <nav className="container mx-auto flex items-center justify-between h-20 border-b">
        <Link
          href="/"
          className="logo tracking-[2px] uppercase flex items-center gap-2"
        >
          <span>
            <AiFillBuild />
          </span>
          studysquad
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
            href="/user/profile"
            placeholder="Profile"
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
