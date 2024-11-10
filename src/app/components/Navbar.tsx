// export default Navbar;
"use client";
import Link from "next/link";
import NavLink from "./NavLink";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

// Define the structure of each navigation link
interface NavLinkProps {
  title: string;
  path: string;
}

const navLinks: NavLinkProps[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "./About",
  },
  {
    title: "Projects",
    path: "#project",
  },
  {
    title: "Contact",
    path: "./Contact",
  },
];

// Define the Navbar component
const Navbar: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] opacity-90">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="text-2xl md:text-5xl text-white font-bold ">
          <Image src="/logo.jpg" alt="logo" width={50} 
  height={100} className="m-2 pr-2"
/>
        </Link>

        {/* Mobile Menu Button */}
        <div className="mobile-menu block md:hidden">
          {navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-3 border rounded border-slate-300 text-slate-200 hover:text-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-3 border rounded border-slate-300 text-slate-200 hover:text-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Desktop & Mobile Menu */}
        <div
          className={`menu ${
            navbarOpen ? "block" : "hidden"
          } md:block md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
