"use client"
import { Zap, Users2, Globe2, Clock, Award, Sparkles, TrendingUp } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerItem = (index) => ({
  initial: { opacity: 0, y: 40, scale: 0.9 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true, margin: "-100px" },
  transition: { 
    duration: 0.5, 
    delay: index * 0.15, 
    ease: [0.25, 0.4, 0.25, 1]
  }
});

export default function BenefitsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const benefits = [
    {
      icon: Zap,
      title: "Fast Progress",
      description: "Our intensive immersion method gets you conversational in 10 weeks. Most students report confidence in basic conversations by week 5.",
      gradient: "from-yellow-400 via-orange-400 to-red-500",
      bgGradient: "from-yellow-50 to-orange-50",
      accentColor: "#F59E0B"
    },
    {
      icon: Users2,
      title: "Small Group Learning",
      description: "Maximum 15 students per class means more speaking time, personal attention, and faster skill development.",
      gradient: "from-blue-400 via-cyan-400 to-teal-500",
      bgGradient: "from-blue-50 to-cyan-50",
      accentColor: "#3B82F6"
    },
    {
      icon: Globe2,
      title: "Portuguese for Real Life",
      description: "Learn practical, modern Portuguese used in everyday situations. Not just textbook phrases—real conversation skills.",
      gradient: "from-green-400 via-emerald-400 to-teal-500",
      bgGradient: "from-green-50 to-emerald-50",
      accentColor: "#10B981"
    },
    {
      icon: Clock,
      title: "Flexible Access",
      description: "Can't make a live session? Every class is recorded. Study on your schedule with lifetime access to all materials.",
      gradient: "from-purple-400 via-pink-400 to-rose-500",
      bgGradient: "from-purple-50 to-pink-50",
      accentColor: "#A855F7"
    },
    {
      icon: Award,
      title: "Cultural Immersion",
      description: "Beyond grammar and vocabulary. Experience Portuguese culture, customs, and contexts through interactive activities.",
      gradient: "from-indigo-400 via-purple-400 to-pink-500",
      bgGradient: "from-indigo-50 to-purple-50",
      accentColor: "#6366F1"
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "95% of our students achieve their language goals. Join hundreds of successful Portuguese learners worldwide.",
      gradient: "from-orange-400 via-red-400 to-pink-500",
      bgGradient: "from-orange-50 to-red-50",
      accentColor: "#EF4444"
    },
  ];

  return (
    <section 
      ref={sectionRef}
      id="benefits" 
      className="relative py-24 md:py-32 px-6 bg-gradient-to-br from-[#3BA9A3] via-[#359690] to-[#2D8B85] text-white overflow-hidden" 
      data-testid="section-benefits"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating circles */}
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-[#FF8A5C]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-72 h-72 bg-white/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        {/* Floating particles */}
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
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div className="text-center mb-20" {...fadeInUp}>
          <motion.div
            className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span className="text-sm font-semibold">Transform Your Language Learning</span>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-white" 
            data-testid="text-benefits-headline"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Why Join the Winter Immersion?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Everything you need to transform from beginner to confident Portuguese speaker.
          </motion.p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div key={index} {...staggerItem(index)}>
                <motion.div 
                  className="group relative p-8 h-full bg-white rounded-2xl overflow-hidden cursor-pointer"
                  data-testid={`card-benefit-${index}`}
                  whileHover={{ 
                    y: -12,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  style={{
                    boxShadow: "0px_20px_30px_-6px_rgba(0,0,0,0.15)"
                  }}
                >
                  {/* Gradient background on hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0`}
                    whileHover={{ opacity: 0.05 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Shine effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                    initial={{ x: "-100%", opacity: 0 }}
                    whileHover={{ x: "100%", opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  />

                  {/* Icon Container with Gradient */}
                  <motion.div
                    className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-6 shadow-lg`}
                    whileHover={{ 
                      rotate: [0, -10, 10, -10, 0],
                      scale: 1.1
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <IconComponent className="w-8 h-8 text-white relative z-10" />
                    
                    {/* Glow effect */}
                    <motion.div
                      className="absolute inset-0 rounded-xl blur-xl opacity-50"
                      style={{ background: benefit.accentColor }}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-4 text-[#394D5C] relative z-10 group-hover:text-[#2D8B85] transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-[#6B8299] leading-relaxed relative z-10">
                    {benefit.description}
                  </p>

                  {/* Decorative corner element */}
                  <motion.div
                    className={`absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-br ${benefit.gradient} opacity-0 blur-2xl`}
                    whileHover={{ opacity: 0.1 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Arrow indicator on hover */}
                  <motion.div
                    className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#3BA9A3] to-[#2D8B85] flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.p 
            className="text-lg text-white/90 mb-4"
            animate={isInView ? { opacity: [0.9, 1, 0.9] } : {}}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Ready to start your Portuguese journey?
          </motion.p>
          <motion.div
            className="flex items-center justify-center gap-2 text-white/70 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <Sparkles className="w-4 h-4" />
            <span>Join 200+ students from 12 countries</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}