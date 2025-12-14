"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Smooth scroll for mobile buttons
  const handleScroll = (id: string) => {
    setIsOpen(false);
    if (id) {
      router.push(`/#${id}`);
    } else {
      router.push(`/`);
    }
  };

  return (
    <header className="bg-baseColor w-full z-50 relative">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link href={"/"}>
            <Image
              src={"/Logo/logo_transparent.png"}
              alt="Farrukh Hafeez"
              width={80}
              height={100}
              className="cursor-pointer"
            />
          </Link>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#0084b2] md:hidden focus:outline-none z-50"
          >
            {!isOpen ? <Menu size={28} /> : null}
          </button>
        </div>

        {/* Desktop Navigation (real links) */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className="relative cursor-pointer text-sm font-semibold text-[#1a1a1a] underline underline-offset-8"
          >
            Home
          </Link>

          <Link
            href="/#about"
            className="relative cursor-pointer text-sm font-semibold text-[#0084b2] hover:text-[#1a1a1a] transition duration-300 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-[#1a1a1a] after:transition-all after:duration-300 hover:after:w-full"
          >
            About
          </Link>

          <Link
            href="/#skillstechnologies"
            className="relative cursor-pointer text-sm font-semibold text-[#0084b2] hover:text-[#1a1a1a] transition duration-300 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-[#1a1a1a] after:transition-all after:duration-300 hover:after:w-full"
          >
            Skills
          </Link>

          <Link
            href="/#project"
            className="relative cursor-pointer text-sm font-semibold text-[#0084b2] hover:text-[#1a1a1a] transition duration-300 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-[#1a1a1a] after:transition-all after:duration-300 hover:after:w-full"
          >
            Projects
          </Link>

          <Link
            href="/#contact"
            className="relative cursor-pointer text-sm font-semibold text-[#0084b2] hover:text-[#1a1a1a] transition duration-300 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-[#1a1a1a] after:transition-all after:duration-300 hover:after:w-full"
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile Menu (buttons with smooth scroll) */}
      <div
        className={`fixed inset-0 bg-baseColor flex flex-col items-center justify-center space-y-8 transition-transform duration-500 ease-in-out md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-[#0084b2] hover:text-[#1a1a1a] transition"
        >
          <X size={28} />
        </button>

        {[
          { label: "Home", id: "" },
          { label: "About", id: "about" },
          { label: "Skills", id: "skillstechnologies" },
          { label: "Projects", id: "project" },
          { label: "Contact", id: "contact" },
        ].map(({ label, id }) => (
          <button
            key={label}
            onClick={() => handleScroll(id)}
            className="text-2xl relative cursor-pointer font-semibold text-[#0084b2] hover:text-[#1a1a1a] transition duration-300 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-[#1a1a1a] after:transition-all after:duration-300 hover:after:w-full"
          >
            {label}
          </button>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
