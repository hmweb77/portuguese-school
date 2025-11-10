"use client"
import { CheckCircle2 } from "lucide-react";

import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection({ onEnrollClick, onTestClick }) {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityTransform = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(/port3.png)`,
          y: backgroundY,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#3BA9A3]/80 via-[#3BA9A3]/70 to-[#3BA9A3]/90" />

      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center text-white"
        style={{ opacity: opacityTransform }}
      >
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight"
          data-testid="text-hero-headline"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Master Portuguese in Just 10 Weeks
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl mb-10 font-medium opacity-95 max-w-3xl mx-auto leading-relaxed"
          data-testid="text-hero-subheadline"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Go from zero to confident conversation. Live classes. Real teachers.
          Real results.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <button
            className="px-10 py-6 text-lg font-semibold rounded-full min-w-[220px] shadow-[0px_20px_30px_-6px_rgba(0,0,0,0.15),0px_10px_20px_-6px_rgba(0,0,0,0.10)] bg-[#FF8A5C] text-white hover:bg-[#FF7A4C] transition-colors duration-200"
            onClick={onEnrollClick}
            data-testid="button-enroll-hero"
          >
            Enroll Now
          </button>
          <button
            className="px-10 py-6 text-lg font-semibold text-[#FF8A5C] rounded-full min-w-[220px] bg-white border-2 border-white/30 hover:bg-white/90 transition-colors duration-200"
            onClick={onTestClick}
            data-testid="button-free-test-hero"
          >
            Take Free Test
          </button>
        </motion.div>

        <motion.div
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20"
          data-testid="text-trust-badge"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <CheckCircle2 className="w-5 h-5 text-green-400" />
          <span className="text-sm font-medium">
            Trusted by 200+ students from 12 countries
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}