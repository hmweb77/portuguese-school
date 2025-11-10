"use client"
import { Star, Quote, Play, ChevronLeft, ChevronRight, Award, TrendingUp } from "lucide-react";
import testimonial1 from "../../public/Portuguese_learning_materials_flatlay_c6fe93fe.png";
import testimonial2 from "../../public/Portuguese_learning_materials_flatlay_c6fe93fe.png";
import testimonial3 from "../../public/Portuguese_learning_materials_flatlay_c6fe93fe.png";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useState, useRef } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerItem = (index) => ({
  initial: { opacity: 0, y: 40, scale: 0.95 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true, margin: "-100px" },
  transition: { 
    duration: 0.5, 
    delay: index * 0.15, 
    ease: "easeOut"
  }
});

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Software Engineer",
      country: "🇺🇸 USA",
      location: "San Francisco, CA",
      achievement: "A1 → B1 in 10 weeks",
      rating: 5,
      quote: "I went from zero Portuguese to having real conversations with locals during my trip to Lisbon. The live classes made all the difference! The teachers are so patient and the small group size means you actually get to practice speaking.",
      image: testimonial1,
      gradient: "from-blue-400 to-cyan-500",
      hasVideo: true
    },
    {
      name: "Marcus Silva",
      role: "Business Consultant",
      country: "🇬🇧 UK",
      location: "London",
      achievement: "Career breakthrough",
      rating: 5,
      quote: "Learning Portuguese opened up job opportunities I never imagined. The small group sizes meant I actually got to practice speaking every session. Now I'm leading projects in Portugal!",
      image: testimonial2,
      gradient: "from-purple-400 to-pink-500",
      hasVideo: false
    },
    {
      name: "Emma Rodriguez",
      role: "Digital Nomad",
      country: "🇨🇦 Canada",
      location: "Toronto → Lisbon",
      achievement: "Reconnected with family",
      rating: 5,
      quote: "As a digital nomad, the flexible schedule was perfect. I could attend live or watch recordings. Now I can finally talk to my Portuguese relatives! The cultural insights made learning so much richer.",
      image: testimonial3,
      gradient: "from-orange-400 to-red-500",
      hasVideo: true
    },
  
    {
      name: "Priya Patel",
      role: "Travel Blogger",
      country: " Netherlands",
      location: "Amsterdam",
      achievement: "Confident traveler",
      rating: 5,
      quote: "I travel to Portugal frequently for my blog. Being able to speak Portuguese transformed my experience. Locals are so much more welcoming when you make the effort. Worth every penny!",
      image: testimonial2,
      gradient: "from-yellow-400 to-orange-500",
      hasVideo: true
    },
    {
      name: "Carlos Mendes",
      role: "Entrepreneur",
      country: "Spain",
      location: "Madrid",
      achievement: "Business expansion",
      rating: 5,
      quote: "I needed to improve my Portuguese for business negotiations. The Premium plan with 1-on-1 sessions was exactly what I needed. My confidence skyrocketed!",
      image: testimonial3,
      gradient: "from-indigo-400 to-purple-500",
      hasVideo: false
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(testimonials.length / 3)) % Math.ceil(testimonials.length / 3));
  };

  const stats = [
    { value: "200+", label: "Happy Students", icon: Award },
    { value: "95%", label: "Success Rate", icon: TrendingUp },
    { value: "12", label: "Countries", icon: Star }
  ];

  return (
    <section 
      ref={sectionRef}
      id="testimonials" 
      className="relative py-24 md:py-32 px-6 bg-gradient-to-b from-white via-[#F5F6F7] to-white overflow-hidden" 
      data-testid="section-testimonials"
    >
      {/* Background decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#3BA9A3]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-[#FF8A5C]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div className="text-center mb-20" {...fadeInUp}>
          <motion.div
            className="inline-flex items-center gap-2 px-5 py-2 bg-[#3BA9A3]/10 text-[#3BA9A3] rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <Star className="w-4 h-4" />
            <span className="text-sm font-semibold">Student Success Stories</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-[#394D5C]" data-testid="text-testimonials-headline">
            Join Students From Around the World
          </h2>
          <p className="text-xl text-[#6B8299] max-w-2xl mx-auto leading-relaxed">
            Real stories from real students who transformed their Portuguese in 10 weeks.
          </p>
        </motion.div>


        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} {...staggerItem(index)}>
              <motion.div 
                className="group relative p-8 h-full bg-white border-2 border-[#E3E5E8] rounded-2xl overflow-hidden cursor-pointer" 
                data-testid={`card-testimonial-${index}`}
                whileHover={{ 
                  y: -8,
                  borderColor: "#3BA9A3",
                  transition: { duration: 0.3 }
                }}
              >
                {/* Gradient overlay on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                {/* Quote icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-16 h-16 text-[#3BA9A3]" />
                </div>

                {/* Star Rating */}
                <div className="flex gap-1 mb-4 relative z-10">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.05 }}
                    >
                      <Star className="w-5 h-5 fill-[#3BA9A3] text-[#3BA9A3]" />
                    </motion.div>
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-base leading-relaxed mb-6 text-[#394D5C] relative z-10">
                  "{testimonial.quote}"
                </p>

                {/* Student Info */}
                <div className="flex items-center gap-4 mb-4 relative z-10">
                  <motion.div 
                    className="relative w-14 h-14 rounded-full ring-2 ring-[#3BA9A3]/20 overflow-hidden" 
                    data-testid={`avatar-testimonial-${index}`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                    {testimonial.hasVideo && (
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Play className="w-6 h-6 text-white" />
                      </div>
                    )}
                  </motion.div>
                  <div className="flex-1">
                    <p className="font-bold text-base text-[#394D5C]">{testimonial.name}</p>
                    <p className="text-sm text-[#6B8299]">{testimonial.role}</p>
                    <p className="text-xs text-[#6B8299]">{testimonial.country} {testimonial.location}</p>
                  </div>
                </div>

                {/* Achievement Badge */}
                <motion.div 
                  className={`inline-block px-3 py-1 bg-gradient-to-r ${testimonial.gradient} text-white rounded-full text-sm font-medium relative z-10`}
                  data-testid={`badge-achievement-${index}`}
                  whileHover={{ scale: 1.05 }}
                >
                  {testimonial.achievement}
                </motion.div>

                {/* Decorative corner */}
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-[#3BA9A3]/5 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-lg text-[#6B8299] mb-4">
            Want to be our next success story?
          </p>
          <motion.div
            className="inline-flex items-center gap-2 text-[#3BA9A3] font-semibold"
            whileHover={{ x: 5 }}
          >
            <span>Read more testimonials</span>
            <ChevronRight className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}