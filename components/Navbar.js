"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  ["Stay", "#stay"],
  ["Experience", "#experience"],
  ["Gallery", "#gallery"],
  ["Location", "#location"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-7">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/20 bg-[#17221b]/75 px-5 py-3 text-white backdrop-blur-xl">
        <a href="#" className="font-display text-xl tracking-wide" aria-label="In His Time home">
          In His Time
        </a>

        <div className="hidden items-center gap-7 text-sm text-white/75 md:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="transition hover:text-white">{label}</a>
          ))}
          <a
            href="#book"
            className="rounded-full bg-[#f4f0e7] px-5 py-2.5 font-medium text-[#17221b] transition hover:bg-white"
          >
            Book direct
          </a>
        </div>

        <button
          className="rounded-full border border-white/20 px-4 py-2 text-sm md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          Menu
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-4 mt-2 rounded-3xl border border-white/20 bg-[#17221b]/95 p-5 text-white backdrop-blur-xl md:hidden"
          >
            <div className="grid gap-2">
              {links.map(([label, href]) => (
                <a key={href} href={href} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 hover:bg-white/10">
                  {label}
                </a>
              ))}
              <a href="#book" onClick={() => setOpen(false)} className="mt-2 rounded-2xl bg-[#f4f0e7] px-4 py-3 text-center font-medium text-[#17221b]">
                Book direct on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}