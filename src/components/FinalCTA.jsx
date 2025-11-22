"use client"
import { useState, useEffect } from "react";
import { Clock, Users, Sparkles, ArrowRight, Zap } from "lucide-react";
import ctaBackground from "../../public/finalctaSec.png";
import { motion, AnimatePresence } from "framer-motion";

export default function FinalCTASection({ onEnrollClick }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    // Set target date to January 10, 2026 at 23:59:59
    const targetDate = new Date('2026-01-10T23:59:59').getTime();
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setIsExpired(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    // Update immediately
    updateCountdown();
    
    // Then update every second
    const interval = setInterval(updateCountdown, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const FlipCard = ({ value, label }) => {
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
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.3 }}
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
            className="absolute inset-0 bg-linear-to-b from-white/10 to-transparent rounded-2xl pointer-events-none"
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
  });

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
      <div className="absolute inset-0 bg-linear-to-b from-[#3BA9A3]/85 via-[#2D8B85]/80 to-[#3BA9A3]/90" />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              // eslint-disable-next-line react-hooks/purity
              left: `${Math.random() * 100}%`,
                            // eslint-disable-next-line react-hooks/purity
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
                            // eslint-disable-next-line react-hooks/purity
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
                            // eslint-disable-next-line react-hooks/purity
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
          Become a confident Portuguese speaker in just 10 weeks.
        </motion.p>

        {/* Countdown Timer or Expired Message */}
        {!isExpired ? (
          <motion.div 
            className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <FlipCard value={timeLeft.days} label="Days" />
            <FlipCard value={timeLeft.hours} label="Hours" />
            <FlipCard value={timeLeft.minutes} label="Minutes" />
            <FlipCard value={timeLeft.seconds} label="Seconds" />
          </motion.div>
        ) : (
          <motion.div
            className="mb-12 p-8 bg-red-500/20 backdrop-blur-md rounded-2xl border border-red-500/30"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <p className="text-2xl font-bold text-white mb-2">
              Enrollment Period Has Ended
            </p>
            <p className="text-white/80">
              Contact us for information about our next cohort!
            </p>
          </motion.div>
        )}

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
          className={`group relative px-12 py-6 text-lg font-bold rounded-full bg-linear-to-r from-[#FF8A5C] to-[#FF7A4C] text-white overflow-hidden shadow-2xl ${
            isExpired ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={isExpired ? undefined : onEnrollClick}
          disabled={isExpired}
          data-testid="button-enroll-final"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: isExpired ? 0.5 : 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          whileHover={!isExpired ? { scale: 1.05 } : {}}
          whileTap={!isExpired ? { scale: 0.95 } : {}}
        >
          <motion.div
            className="absolute inset-0 bg-linear-to-r from-[#FF7A4C] to-[#FF6A3C]"
            initial={{ x: "-100%" }}
            whileHover={!isExpired ? { x: 0 } : {}}
            transition={{ duration: 0.3 }}
          />
          <span className="relative z-10 flex items-center justify-center gap-3">
            {isExpired ? 'Enrollment Closed' : 'Secure Your Spot Now'}
            {!isExpired && (
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-6 h-6" />
              </motion.div>
            )}
          </span>

          {/* Pulse effect */}
          {!isExpired && (
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-white"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          )}
        </motion.button>

        {/* Trust Message */}
        <motion.p 
          className="mt-8 text-sm text-white/80"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          🔒 Secure payment • 💯  5-day money-back guarantee
        </motion.p>
      </div>
    </section>
  );
}