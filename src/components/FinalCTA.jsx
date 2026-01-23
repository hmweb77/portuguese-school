"use client"
import { useMemo } from "react";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function FinalCTASection() {
  // WhatsApp configuration
  const whatsappNumber = "351933292112";
  const whatsappMessage = encodeURIComponent("Hi! I'm interested in the Portuguese Immersion program and would like to secure a spot.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  // Generate deterministic particle positions
  const particlePositions = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      left: `${(i * 13.7 + 23) % 100}%`,
      top: `${(i * 17.3 + 15) % 100}%`,
      size: 4 + (i % 4) * 2,
      duration: 4 + (i % 4),
      delay: (i % 6) * 0.5
    }));
  }, []);

  return (
    <section className="relative py-28 md:py-36 px-6 overflow-hidden" data-testid="section-final-cta">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3BA9A3] via-[#2D9B95] to-[#1E7A75]" />
      
      {/* Decorative circles */}
      <motion.div 
        className="absolute top-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#FF8A5C]/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
        animate={{ scale: [1, 1.4, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particlePositions.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/20"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
        
       

        {/* Headline */}
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" 
          data-testid="text-final-cta-headline"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Last Chance to Signup
        </motion.h2>
        
        {/* Subtitle */}
        <motion.p 
          className="text-lg md:text-xl mb-12 text-white/90 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Contact us to secure a spot or for information about our next cohort
        </motion.p>

        {/* CTA Button */}
        <motion.a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-3 px-10 py-5 text-lg font-bold rounded-full bg-white text-[#2D8B85] overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_60px_-12px_rgba(0,0,0,0.4)] transition-shadow duration-300"
          data-testid="button-enroll-final"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Hover gradient overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#FF8A5C] to-[#FF7A4C] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
          
          <MessageCircle className="w-5 h-5 relative z-10 group-hover:text-white transition-colors duration-300" />
          <span className="relative z-10 group-hover:text-white transition-colors duration-300">
            Enroll Now
          </span>
          <motion.div
            className="relative z-10"
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowRight className="w-5 h-5 group-hover:text-white transition-colors duration-300" />
          </motion.div>

          {/* Pulse ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-white/50"
            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
        </motion.a>

        {/* Trust indicators */}
        <motion.div 
          className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-white/70"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400"></span>
            Quick Response
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400"></span>
            5-Day Money-Back Guarantee
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400"></span>
            200+ Happy Learners
          </span>
        </motion.div>
      </div>
    </section>
  );
}