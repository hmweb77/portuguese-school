"use client"
import { Calendar, Users, BookOpen, MessageCircle, TrendingUp, Award } from "lucide-react";
import programImage from "../../public/aboutSec.png";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" }
};

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7, ease: "easeOut" }
};

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7, ease: "easeOut" }
};

const staggerItem = (index) => ({
  initial: { opacity: 0, y: 40, scale: 0.95 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true, margin: "-100px" },
  transition: { 
    duration: 0.5, 
    delay: index * 0.1, 
    ease: "easeOut",
    scale: { duration: 0.3 }
  }
});

export default function AboutProgram() {
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true });

  const highlights = [
    { 
      icon: Calendar, 
      title: "10 Weeks", 
      description: "Jan 19 - Mar 27, 2026",
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-50"
    },
    { 
      icon: MessageCircle, 
      title: "Live Sessions", 
      description: "One hour per day Monday to friday",
      color: "from-orange-400 to-orange-600",
      bgColor: "bg-orange-50"
    },
    { 
      icon: Users, 
      title: "Small Groups", 
      description: "Max 12 participants per session",
      color: "from-purple-400 to-purple-600",
      bgColor: "bg-purple-50"
    },
    { 
      icon: BookOpen, 
      title: "All Materials Included", 
      description: "presentations, recordings & library",
      color: "from-green-400 to-green-600",
      bgColor: "bg-green-50"
    },
    
  ];

  const stats = [
    { value: 200, suffix: "+", label: "Students Enrolled", icon: Users },
    { value: 98, suffix: "%", label: "Success Rate", icon: TrendingUp },
    { value: 50, suffix: "+", label: "Live Sessions", icon: BookOpen },
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 px-6 bg-linear-to-b from-white via-[#F5F6F7] to-white overflow-hidden" data-testid="section-about-program">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-[#3BA9A3]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#FF8A5C]/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div className="text-center mb-20" {...fadeInUp}>
          <motion.div 
            className="inline-block mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#3BA9A3]/10 text-[#3BA9A3] rounded-full text-sm font-semibold">
              <Award className="w-4 h-4" />
              Comprehensive Program
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-[#394D5C]" data-testid="text-about-headline">
          About the Portuguese Immersion Experiences
          </h2>
          <p className="text-xl text-[#6B8299] max-w-3xl mx-auto leading-relaxed">
          An intensive 10-week Portuguese language program designed for busy professionals and anyone who wants to become a fluent and confident speaker of Portuguese. Real results, fast.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image with Enhanced Effects */}
          <motion.div
            {...fadeInLeft}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <Image 
                src={programImage} 
                alt="Student learning Portuguese online" 
                className="rounded-3xl w-full shadow-[0px_30px_50px_-12px_rgba(0,0,0,0.20),0px_15px_30px_-12px_rgba(0,0,0,0.12)] relative z-10"
                data-testid="img-program"
              />
              
              {/* Decorative border animation */}
              <motion.div
                className="absolute -inset-4 bg-linear-to-r from-[#3BA9A3] to-[#FF8A5C] rounded-3xl opacity-20 blur-xl"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div className="space-y-8" {...fadeInRight}>
  {/* Paragraph 1 */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.1 }}
  >
    <p className="text-lg leading-relaxed text-[#394D5C]">
      The IFLI Immersion Experience is <span className="font-semibold text-[#3BA9A3]">more than just language sessions</span>. 
      It’s a complete learning ecosystem designed to get you speaking Portuguese with confidence.
    </p>
  </motion.div>

  {/* Paragraph 2 */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.2 }}
  >
    <p className="text-lg leading-relaxed text-[#394D5C]">
      You’ll learn from <span className="font-semibold text-[#3BA9A3]">experienced and qualified native facilitators</span> in live, online interactive sessions 1 hour a day, from Monday to Friday. 
      Every session is recorded so you can review anytime. Plus, you get access to our extensive Portuguese digital library.
    </p>
  </motion.div>

  {/* Feature List */}
  <motion.div
    className="space-y-4"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.3 }}
  >
    {[
      { icon: "✓", text: "Experienced native Portuguese facilitators" },
      { icon: "✓", text: "Interactive live sessions" },
      { icon: "✓", text: "Session recordings available (review anytime)" },
      { icon: "✓", text: "Immersionexperience from anywhere" }
    ].map((item, index) => (
      <motion.div
        key={index}
        className="flex items-center gap-3"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 + index * 0.1 }}
      >
        <div className="w-6 h-6 rounded-full bg-[#3BA9A3]/10 flex items-center justify-center shrink-0">
          <span className="text-[#3BA9A3] font-bold text-sm">{item.icon}</span>
        </div>
        <span className="text-[#394D5C]">{item.text}</span>
      </motion.div>
    ))}
  </motion.div>
</motion.div>

        </div>

        {/* Highlight Cards with Enhanced Design */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div key={index} {...staggerItem(index)}>
                <motion.div 
                  className="group relative p-6 bg-white border-2 border-[#E3E5E8] rounded-2xl overflow-hidden cursor-pointer"
                  data-testid={`card-highlight-${index}`}
                  whileHover={{ 
                    y: -8,
                    boxShadow: "0px 20px 40px -10px rgba(0,0,0,0.15)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Gradient background on hover */}
                  <motion.div
                    className={`absolute inset-0 bg-linear-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  />
                  
                  {/* Icon with gradient background */}
                  <motion.div
                    className={`w-14 h-14 rounded-xl bg-linear-to-br ${item.color} flex items-center justify-center mb-4 relative z-10`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <IconComponent className="w-7 h-7 text-white" />
                  </motion.div>

                  <h3 className="font-bold text-xl mb-2 text-[#394D5C] relative z-10">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#6B8299] relative z-10">
                    {item.description}
                  </p>

                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-br from-[#3BA9A3]/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          ref={statsRef}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                className="text-center p-8 bg-white rounded-2xl border-2 border-[#E3E5E8] hover:border-[#3BA9A3]/30 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 rounded-full bg-linear-to-br from-[#3BA9A3] to-[#2D8B85] flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </motion.div>
                
                <div className="text-4xl font-bold text-[#394D5C] mb-2">
                  {isStatsInView && <CountUp end={stat.value} suffix={stat.suffix} />}
                </div>
                <div className="text-sm text-[#6B8299]">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>
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