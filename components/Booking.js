"use client";

import { motion } from "framer-motion";

export default function Booking() {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "91XXXXXXXXXX";
  const message = encodeURIComponent(
    "Hi In His Time! 👋 I'd like to enquire about a direct booking. Please share availability, price and booking details."
  );
  const href = `https://wa.me/${number.replace(/\D/g, "")}?text=${message}`;

  return (
    <section id="book" className="relative overflow-hidden bg-[#294936] px-5 py-28 text-white md:px-8 md:py-40">
      <motion.div
        className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#b79a62]/20 blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 9, repeat: Infinity }}
      />
      <div className="relative mx-auto max-w-5xl text-center">
        <p className="text-xs uppercase tracking-[.3em] text-[#d9c9a7]">08 / Book direct</p>
        <h2 className="mx-auto mt-5 max-w-4xl font-display text-balance text-6xl leading-[.9] tracking-[-.04em] md:text-8xl">
          Make Sohra
          <br />
          your next slow morning.
        </h2>
        <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/65">
          For availability, direct pricing and booking details, speak with the host on WhatsApp.
        </p>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 inline-flex rounded-full bg-[#f4f0e7] px-7 py-4 text-sm font-semibold text-[#17221b] transition hover:bg-white"
        >
          Check availability on WhatsApp ↗
        </a>
      </div>
    </section>
  );
}