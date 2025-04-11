"use client";

import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation"; // ✅ Correct import

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter(); // ✅ Use `useRouter` inside the component

  return (
    <nav className="fixed top-0 left-0 w-full bg-white bg-opacity-90 backdrop-blur-md shadow-md z-50">
      <div className="flex justify-between items-center max-container padding-container py-4">
        
        {/* Logo */}
        <Link href="/home" className="text-white text-xl font-bold flex items-center gap-2 ml-10">
          <Image src="/logo-dark.png" alt="Logo" width={250} height={200} />
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex gap-8 list-none text-dark-100 flex-center">
        {NAV_LINKS.map((link) => (
  <li key={link.key} className="relative group list-none">
    {link.sublinks ? (
      <>
        <span className="cursor-pointer text-dark-100 text-lg font-medium hover:text-primary">
          {link.label}
        </span>
        <ul className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all z-50">
          {link.sublinks.map((sublink) => (
            <li key={sublink.label}>
              <Link
                href={sublink.href}
                className="block px-4 py-2 text-dark-100 hover:bg-gray-100 hover:text-primary text-sm"
              >
                {sublink.label}
              </Link>
            </li>
          ))}
        </ul>
      </>
    ) : (
      <Link 
        href={link.href} 
        className="text-dark-100 text-lg font-medium transition-all hover:text-primary"
      >
        {link.label}
      </Link>
    )}
  </li>
))}
        </ul>

        {/* Login Button */}
        <div className="hidden lg:block">
          <Button
            onClick={() => router.push("/sign-in")}
            className="btn-secondary px-8 py-3 text-lg mr-15"
          >
            <Image src="/user.png" alt="User Icon" width={20} height={20} />
            Portal
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-white p-2 focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black bg-opacity-95 flex flex-col items-center py-6 space-y-4 lg:hidden">
          <ul className="list-none flex flex-col items-center gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.key} className="list-none">
                <Link 
                  href={link.href} 
                  className="text-white text-lg font-medium transition-all hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
