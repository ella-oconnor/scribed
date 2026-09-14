"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/templates", label: "Templates" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border-light">
      <div className="mx-auto max-w-[1200px] px-6 flex items-center justify-between h-16">
              <Link
                  href="/"
                  className="flex items-center"
                >
                  <img src="/icon-s.png" alt="" className="h-7 w-7 -mr-[6px]" />
                  <span className="font-serif text-2xl tracking-tight text-text">cribed</span>
                </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-text-secondary hover:text-text transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-px bg-text transition-all duration-200 ${
              menuOpen ? "rotate-45 translate-y-[3.5px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-text transition-all duration-200 ${
              menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
            }`}
          />
        </button>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8 md:hidden">
          <button
            className="absolute top-5 right-6 w-8 h-8 flex items-center justify-center"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <span className="block w-5 h-px bg-text rotate-45 absolute" />
            <span className="block w-5 h-px bg-text -rotate-45 absolute" />
          </button>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-serif text-3xl text-text hover:text-accent transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
