"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[92svh] overflow-hidden bg-[#17221b] text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-75"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(10,18,13,.18), rgba(10,18,13,.88)), url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=2200&q=85')"
        }}
      />
      <div className="hero-grid absolute inset-0 opacity-20" />

      <motion.div
        className="absolute -bottom-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#b79a62]/20 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [.25, .4, .25] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto flex min-h-[92svh] max-w-7xl items-end px-5 pb-16 pt-32 md:px-8 md:pb-20">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7, delay: .15 }}
            className="mb-5 text-xs uppercase tracking-[.28em] text-[#d9c9a7]"
          >
            Sohra · Meghalaya · India
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: .25, ease: [0.22, 1, .36, 1] }}
            className="font-display text-balance text-6xl leading-[.92] tracking-[-.04em] sm:text-7xl md:text-9xl"
          >
            Stay where
            <br />
            Meghalaya <i className="font-normal text-[#d9c9a7]">slows down.</i>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8, delay: .5 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <a href="#book" className="rounded-full bg-[#f4f0e7] px-6 py-3.5 text-center text-sm font-semibold text-[#17221b] transition hover:bg-white">
              Book direct on WhatsApp
            </a>
            <a href="#stay" className="rounded-full border border-white/30 px-6 py-3.5 text-center text-sm text-white backdrop-blur-sm transition hover:bg-white/10">
              Explore the stay ↓
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-7 right-7 hidden text-right text-xs uppercase tracking-[.22em] text-white/50 md:block">
        <div>One-bedroom private stay</div>
        <div className="mt-1">Circuit House Road · Sohra</div>
      </div>
    </section>
  );
}