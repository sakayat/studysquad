import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-black text-white">
      <nav className="container mx-auto flex items-center justify-between h-20">
        <div className="logo">studysquad</div>
        <div className="links flex gap-5">
          <Link href="/" className="hover:text-gray-400 transition-colors">
            Home
          </Link>
          <Link
            href="/course"
            className="hover:text-gray-400 transition-colors"
          >
            Course
          </Link>
          <Link href="/about" className="hover:text-gray-400 transition-colors">
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-gray-400 transition-colors"
          >
            Contact
          </Link>
        </div>
        <div className="user">
          <Link href="/home" className="hover:text-gray-400 transition-colors">
            Login
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
