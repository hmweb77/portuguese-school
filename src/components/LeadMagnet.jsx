"use client";
import { useMemo } from "react";
import { CheckCircle, FileText, Sparkles } from "lucide-react";
import pdfImage from "../../public/freeS.png";
import { motion } from "framer-motion";
import Image from "next/image";

const CLASSROOM_URL =
  "https://classroom.google.com/c/NzkyNzEyNzIzMzgw?cjc=clutbctc";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function LeadMagnetSection() {
  const particlePositions = useMemo(() => {
    return Array.from({ length: 10 }, (_, i) => ({
      left: `${(i * 13.7 + 23) % 100}%`,
      top: `${(i * 17.3 + 15) % 100}%`,
      duration: 3 + (i % 3),
      delay: (i % 5) * 0.4
    }));
  }, []);

  const benefits = [
    { icon: FileText, text: "Join a sample IFLI Google Classroom" },
    { icon: Sparkles, text: "1h recording of a sample session" },
    { icon: CheckCircle, text: "A taste of our digital library" },
  ];

  return (
    <section
      id="free-resources"
      className="relative py-24 md:py-32 px-6 bg-linear-to-br from-[#3BA9A3] via-[#359690] to-[#2D8B85] text-white overflow-hidden"
      data-testid="section-lead-magnet"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-[#FF8A5C]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

      {/* Floating Particles - FIXED VERSION */}
<div className="absolute inset-0 overflow-hidden pointer-events-none">
  {particlePositions.map((particle, i) => (
    <motion.div
      key={i}
      className="absolute w-2 h-2 bg-white/20 rounded-full"
      style={{
        left: particle.left,
        top: particle.top,
      }}
      animate={{
        y: [0, -20, 0],
        opacity: [0.2, 0.5, 0.2],
      }}
      transition={{
        duration: particle.duration,
        repeat: Infinity,
        delay: particle.delay,
      }}
    />
  ))}
</div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div {...fadeInUp}>
          <div className="relative p-10 md:p-16 shadow-[0px_30px_50px_-12px_rgba(0,0,0,0.20),0px_15px_30px_-12px_rgba(0,0,0,0.12)] bg-white rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="order-2 md:order-1">
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#3BA9A3]/10 text-[#3BA9A3] rounded-full mb-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-semibold">FREE Resources</span>
                </motion.div>

                <h2
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-[#394D5C]"
                  data-testid="text-lead-magnet-headline"
                >
                  Get INSTANT Access to FREE SAMPLE RESOURCES
                </h2>

                <p className="text-lg text-[#6B8299] mb-6 leading-relaxed">
                  See how IFLI will help you speak Portuguese confidently, no commitment, just value.
                </p>

                {/* Benefits List */}
                <div className="space-y-3 mb-8">
                  {benefits.map((benefit, index) => {
                    const IconComponent = benefit.icon;
                    return (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                      >
                        <div className="w-8 h-8 rounded-full bg-[#3BA9A3]/10 flex items-center justify-center shrink-0">
                          <IconComponent className="w-4 h-4 text-[#3BA9A3]" />
                        </div>
                        <span className="text-[#394D5C]">{benefit.text}</span>
                      </motion.div>
                    );
                  })}
                </div>

                <motion.a
                  id="btn-lead-magnet-submit"
                  href={CLASSROOM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex w-full items-center justify-center rounded-full py-6 text-base font-semibold bg-linear-to-r from-[#FF8A5C] to-[#FF7A4C] text-white overflow-hidden shadow-lg"
                  data-testid="button-download-guide"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-linear-to-r from-[#FF7A4C] to-[#FF6A3C]"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10">
                    Join Your Sample IFLI Google Classroom
                  </span>
                </motion.a>
              </div>

              {/* Right - PDF Mockup */}
              <div className="order-1 md:order-2">
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                >
                  {/* Glow effect */}
                  <motion.div
                    className="absolute -inset-4 bg-linear-to-r from-[#3BA9A3] to-[#FF8A5C] rounded-3xl opacity-20 blur-2xl"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.2, 0.3, 0.2],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />

                  <Image
                    src={pdfImage}
                    alt="IFLI Free Sample Account Preview"
                    className="relative z-10 w-full max-w-sm mx-auto drop-shadow-2xl rounded-2xl"
                    data-testid="img-guide"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
