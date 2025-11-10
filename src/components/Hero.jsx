"use client"
import { useEffect, useRef, useState } from "react";
import { CheckCircle2, Play, Globe, Users, BookOpen, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import gsap from "gsap";

export default function HeroSection({ onEnrollClick, onTestClick }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroRef = useRef(null);
  const floatingRef = useRef(null);
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true });

  const { scrollY } = useScroll();
  
  // Smooth parallax transforms
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const contentY = useTransform(scrollY, [0, 500], [0, -50]);
  const opacityTransform = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);
  
  // Smooth spring physics
  const smoothBackgroundY = useSpring(backgroundY, { stiffness: 50, damping: 20 });
  const smoothContentY = useSpring(contentY, { stiffness: 50, damping: 20 });

  // Background images that will cycle
  const backgrounds = [
    '/her1.png',
    '/hero2.png',
    '/hero3.png'
  ];

  // Floating elements animation with GSAP
  useEffect(() => {
    if (floatingRef.current) {
      const elements = floatingRef.current.querySelectorAll('.floating-element');
      
      elements.forEach((element, index) => {
        gsap.to(element, {
          y: -20,
          rotation: index % 2 === 0 ? 5 : -5,
          duration: 2 + index * 0.5,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: index * 0.2
        });
      });
    }
  }, []);

  // Background slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgrounds.length);
    }, 6000);
    return () => clearInterval(interval);
  });

  // Animated stats
  const stats = [
    { icon: Users, value: 200, suffix: "+", label: "Active Students" },
    { icon: Globe, value: 12, suffix: "", label: "Countries" },
    { icon: BookOpen, value: 95, suffix: "%", label: "Success Rate" }
  ];

  // Typewriter effect for headline
  const headline = "Master Portuguese in Just 10 Weeks";
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < headline.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + headline[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background Slideshow */}
      <div className="absolute inset-0">
        {backgrounds.map((bg, index) => (
          <motion.div
            key={bg}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${bg})`,
              y: smoothBackgroundY,
            }}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: currentSlide === index ? 1 : 0,
              scale: currentSlide === index ? 1.1 : 1
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* Gradient Overlay with animated mesh */}
      <motion.div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, rgba(59, 169, 163, 0.9) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(255, 138, 92, 0.7) 0%, transparent 50%),
            linear-gradient(to bottom, rgba(59, 169, 163, 0.85), rgba(59, 169, 163, 0.75))
          `
        }}
        animate={{
          background: [
            `radial-gradient(circle at 20% 50%, rgba(59, 169, 163, 0.9) 0%, transparent 50%),
             radial-gradient(circle at 80% 80%, rgba(255, 138, 92, 0.7) 0%, transparent 50%),
             linear-gradient(to bottom, rgba(59, 169, 163, 0.85), rgba(59, 169, 163, 0.75))`,
            `radial-gradient(circle at 80% 30%, rgba(59, 169, 163, 0.9) 0%, transparent 50%),
             radial-gradient(circle at 20% 70%, rgba(255, 138, 92, 0.7) 0%, transparent 50%),
             linear-gradient(to bottom, rgba(59, 169, 163, 0.85), rgba(59, 169, 163, 0.75))`,
            `radial-gradient(circle at 20% 50%, rgba(59, 169, 163, 0.9) 0%, transparent 50%),
             radial-gradient(circle at 80% 80%, rgba(255, 138, 92, 0.7) 0%, transparent 50%),
             linear-gradient(to bottom, rgba(59, 169, 163, 0.85), rgba(59, 169, 163, 0.75))`
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating Elements */}
      <div ref={floatingRef} className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          className="floating-element absolute top-20 left-10 text-white/20 text-6xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Olá
        </motion.div>
        <motion.div 
          className="floating-element absolute top-40 right-20 text-white/20 text-5xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          Bom dia
        </motion.div>
        <motion.div 
          className="floating-element absolute bottom-40 left-20 text-white/20 text-4xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          Obrigado
        </motion.div>
        <motion.div 
          className="floating-element absolute bottom-20 right-40 text-white/20 text-5xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
        >
          Boa tarde
        </motion.div>
      </div>

      {/* Particle Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            style={{
              // eslint-disable-next-line react-hooks/purity
              left: `${Math.random() * 100}%`,
                // eslint-disable-next-line react-hooks/purity
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.5, 1]
            }}
            transition={{
              // eslint-disable-next-line react-hooks/purity
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
                // eslint-disable-next-line react-hooks/purity
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center text-white"
        style={{ 
          opacity: opacityTransform,
          scale: scale,
          y: smoothContentY
        }}
      >
        {/* Sparkle Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/30 mb-8"
        >
          <Sparkles className="w-4 h-4 text-yellow-300" />
          <span className="text-sm font-semibold">Winter Immersion 2026 - Enrollment Open</span>
        </motion.div>

        {/* Animated Headline with Typewriter Effect */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
            data-testid="text-hero-headline"
          >
            {displayedText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
              className="inline-block w-1 h-16 bg-white ml-2 align-middle"
            />
          </h1>
        </motion.div>

        {/* Subheadline with staggered animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p
            className="text-xl md:text-2xl mb-10 font-medium opacity-95 max-w-3xl mx-auto leading-relaxed"
            data-testid="text-hero-subheadline"
          >
            Go from zero to confident conversation. Live classes. Real teachers. Real results.
          </p>
        </motion.div>

        {/* CTA Buttons with advanced animations */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.button
            className="group relative px-10 py-6 text-lg font-semibold rounded-full min-w-[220px] bg-[#FF8A5C] text-white overflow-hidden"
            onClick={onEnrollClick}
            data-testid="button-enroll-hero"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
            <span className="relative z-10 flex items-center justify-center gap-2">
              Enroll Now
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </motion.button>

          <motion.button
            className="group px-10 py-6 text-lg font-semibold text-white rounded-full min-w-[220px] bg-white/10 backdrop-blur-md border-2 border-white/30 relative overflow-hidden"
            onClick={onTestClick}
            data-testid="button-free-test-hero"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Play className="w-5 h-5" />
              Take Free Test
            </span>
          </motion.button>
        </motion.div>

        {/* Animated Stats */}
        <motion.div
          ref={statsRef}
          className="flex flex-wrap justify-center gap-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isStatsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
              >
                <Icon className="w-5 h-5" />
                <div className="text-left">
                  <motion.div 
                    className="text-2xl font-bold"
                    initial={{ opacity: 0 }}
                    animate={isStatsInView ? { opacity: 1 } : {}}
                  >
                    {isStatsInView && (
                      <CountUp end={stat.value} suffix={stat.suffix} />
                    )}
                  </motion.div>
                  <div className="text-xs opacity-90">{stat.label}</div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20"
          data-testid="text-trust-badge"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <CheckCircle2 className="w-5 h-5 text-green-400" />
          </motion.div>
          <span className="text-sm font-medium">
            Trusted by 200+ students from 12 countries
          </span>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div className="w-1.5 h-1.5 bg-white rounded-full" />
        </motion.div>
      </motion.div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 right-8 flex gap-2">
        {backgrounds.map((_, index) => (
          <motion.button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-white w-8' : 'bg-white/40'
            }`}
            onClick={() => setCurrentSlide(index)}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </div>
    </section>
  );
}

// CountUp Animation Component
function CountUp({ end, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    const duration = 2000;
    
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end]);

  return <>{count}{suffix}</>;
}