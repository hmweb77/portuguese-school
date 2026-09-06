"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const EXPERIENCES = [
  { name: "Winter Immersion Experience", dates: "19 Jan – 27 Mar" },
  { name: "Spring Immersion Experience", dates: "13 Apr – 19 Jun" },
  { name: "Summer Immersion Experience", dates: "13 Jul – 18 Sep" },
  { name: "Autumn Immersion Experience", dates: "12 Oct – 18 Dec" },
];

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5, ease: "easeOut" },
};

export default function Experiences2026() {
  return (
    <section className="relative py-20 md:py-28 px-6 bg-gray-50" data-testid="section-experiences-2026">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-[#394D5C] mb-12 tracking-tight"
          {...fadeInUp}
        >
          2026 Experiences
        </motion.h2>

        <div className="grid gap-4 sm:gap-5">
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={exp.name}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-5 md:p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#3BA9A3]/20 transition-all duration-300"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="flex items-start gap-3">
                <div className="mt-1 p-2 rounded-lg bg-[#3BA9A3]/10 text-[#2D8B85]">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-[#394D5C]">
                    {exp.name}
                  </h3>
                  <p className="text-[#6B8299] font-medium mt-0.5">
                    {exp.dates}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
