"use client"
import { useState, useEffect } from "react";
import { Clock, Users } from "lucide-react";
import ctaBackground from "../../public/Portuguese_learning_materials_flatlay_c6fe93fe.png";

export default function FinalCTASection({ onEnrollClick }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2026-01-10T23:59:59').getTime();
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-6 relative overflow-hidden bg-white" data-testid="section-final-cta">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${ctaBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#3BA9A3]/80 via-[#3BA9A3]/70 to-[#3BA9A3]/90" />

      <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-final-cta-headline">
          Your Portuguese Journey Starts January 19, 2026
        </h2>
        <p className="text-xl md:text-2xl mb-8 opacity-95">
          Join now and transform from beginner to confident speaker in just 10 weeks.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-[12px] border border-white/20" data-testid="text-countdown-days">
            <div className="text-4xl font-bold transition-all duration-500">{timeLeft.days}</div>
            <div className="text-sm opacity-90 mt-1">Days</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-[12px] border border-white/20" data-testid="text-countdown-hours">
            <div className="text-4xl font-bold transition-all duration-500">{timeLeft.hours}</div>
            <div className="text-sm opacity-90 mt-1">Hours</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-[12px] border border-white/20" data-testid="text-countdown-minutes">
            <div className="text-4xl font-bold transition-all duration-500">{timeLeft.minutes}</div>
            <div className="text-sm opacity-90 mt-1">Minutes</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-[12px] border border-white/20 animate-pulse" data-testid="text-countdown-seconds">
            <div className="text-4xl font-bold transition-all duration-500">{timeLeft.seconds}</div>
            <div className="text-sm opacity-90 mt-1">Seconds</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
            <Clock className="w-5 h-5 text-[#3BA9A3]" />
            <span className="text-sm font-medium">Enrollment deadline: January 10, 2026</span>
          </div>
          <div className="flex items-center gap-2 bg-[#DC2626]/20 backdrop-blur-md px-4 py-2 rounded-full border border-[#DC2626]/40">
            <Users className="w-5 h-5 text-white" />
            <span className="text-sm font-medium">Limited seats remaining</span>
          </div>
        </div>

        <button 
          className="px-12 py-6 text-lg font-semibold rounded-full bg-[#FF8A5C] text-white hover:bg-[#FF7A4C] transition-colors duration-200 shadow-[0px_10px_20px_-4px_rgba(0,0,0,0.12),0px_6px_12px_-4px_rgba(0,0,0,0.08)]"
          onClick={onEnrollClick}
          data-testid="button-enroll-final"
        >
          Secure Your Spot Now
        </button>
      </div>
    </section>
  );
}