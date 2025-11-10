"use client"
import { useState, useEffect } from "react";
import { Clock, Users, Sparkles, ArrowRight, Zap } from "lucide-react";
import ctaBackground from "../../public/finalctaSec.png";
import { motion, AnimatePresence } from "framer-motion";

export default function FinalCTASection({ onEnrollClick }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [prevTime, setPrevTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2026-01-10T23:59:59').getTime();
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const newTime = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        };
        
        setPrevTime(timeLeft);
        setTimeLeft(newTime);
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  const FlipCard = ({ value, label, prevValue }) => {
    return (
      <div className="relative" data-testid={`text-countdown-${label.toLowerCase()}`}>
        <div className="relative w-24 h-28 md:w-32 md:h-36">
          {/* Current Value */}
          <motion.div
            className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 flex items-center justify-center overflow-hidden"
            key={value}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={value}
                initial={{ rotateX: 90, opacity: 0 }}
                animate={{ rotateX: 0, opacity: 1 }}
                exit={{ rotateX: -90, opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl md:text-6xl font-bold text-white"
              >
                {String(value).padStart(2, '0')}
              </motion.div>
            </AnimatePresence>

            {/* Center line */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-white/20" />
          </motion.div>

          {/* Highlight effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent rounded-2xl pointer-events-none"
            animate={{ opacity: [0.3, 0.1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
        
        <div className="text-sm md:text-base opacity-90 mt-3 font-medium text-center">
          {label}
        </div>
      </div>
    );
  };

  const urgencyMessages = [
    { icon: Zap, text: "85% of spots already filled!", color: "from-yellow-400 to-orange-500" },
    { icon: Users, text: "Join 200+ enrolled students", color: "from-blue-400 to-cyan-500" },
    { icon: Sparkles, text: "Limited time offer", color: "from-purple-400 to-pink-500" }
  ];

  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % urgencyMessages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 md:py-32 px-6 overflow-hidden" data-testid="section-final-cta">
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(/finalctaSec.png)` }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#3BA9A3]/85 via-[#2D8B85]/80 to-[#3BA9A3]/90" />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center text-white">
        {/* Rotating Urgency Messages */}
        <motion.div
          className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentMessage}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2"
            >
              
              <span className="text-sm font-semibold">
                {urgencyMessages[currentMessage].text}
              </span>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Headline */}
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" 
          data-testid="text-final-cta-headline"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Your Portuguese Journey Starts<br />
          <span className="text-yellow-300">January 19, 2026</span>
        </motion.h2>
        
        <motion.p 
          className="text-xl md:text-2xl mb-12 opacity-95 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Transform from beginner to confident speaker in just 10 weeks.
        </motion.p>

        {/* Countdown Timer */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <FlipCard value={timeLeft.days} label="Days" prevValue={prevTime.days} />
          <FlipCard value={timeLeft.hours} label="Hours" prevValue={prevTime.hours} />
          <FlipCard value={timeLeft.minutes} label="Minutes" prevValue={prevTime.minutes} />
          <FlipCard value={timeLeft.seconds} label="Seconds" prevValue={prevTime.seconds} />
        </motion.div>

        {/* Badges */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div 
            className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-3 rounded-full border border-white/20"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
          >
            <Clock className="w-5 h-5 text-yellow-300" />
            <span className="text-sm font-medium">Deadline: January 10, 2026</span>
          </motion.div>
          
          <motion.div 
            className="flex items-center gap-2 bg-[#DC2626] px-5 py-3 rounded-full shadow-lg"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Users className="w-5 h-5 text-white" />
            <span className="text-sm font-semibold">Limited Seats Remaining</span>
          </motion.div>
        </motion.div>

        {/* CTA Button */}
        <motion.button 
          className="group relative px-12 py-6 text-lg font-bold rounded-full bg-gradient-to-r from-[#FF8A5C] to-[#FF7A4C] text-white overflow-hidden shadow-2xl"
          onClick={onEnrollClick}
          data-testid="button-enroll-final"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#FF7A4C] to-[#FF6A3C]"
            initial={{ x: "-100%" }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.3 }}
          />
          <span className="relative z-10 flex items-center justify-center gap-3">
            Secure Your Spot Now
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-6 h-6" />
            </motion.div>
          </span>

          {/* Pulse effect */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-white"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.button>

        {/* Trust Message */}
        <motion.p 
          className="mt-8 text-sm text-white/80"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          🔒 Secure payment • 💯 14-day money-back guarantee
        </motion.p>
      </div>
    </section>
  );
}