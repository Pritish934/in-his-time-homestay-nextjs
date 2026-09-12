"use client";

import { motion } from "framer-motion";

export default function WhatsAppButton() {
  const number = process.env.NEXT_WHATSAPP_NUMBER || "91XXXXXXXXXX";
  const message = encodeURIComponent(
    "Hi In His Time! 👋 I'm interested in booking a stay at your homestay in Sohra. Could you please share availability and the direct booking price?",
  );
  const href = `https://wa.me/${number.replace(/\D/g, "")}?text=${message}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book directly on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#17221b] px-4 py-3 text-sm font-medium text-white shadow-2xl ring-1 ring-white/15"
      whileHover={{ y: -3, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
    >
      <span className="grid h-8 w-8 place-items-center rounded-full bg-[#b79a62] text-[#17221b]">
        ↗
      </span>
      <span className="hidden sm:inline">Book on WhatsApp</span>
    </motion.a>
  );
}
