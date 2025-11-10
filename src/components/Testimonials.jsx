"use client"
import { Star } from "lucide-react";
import testimonial1 from "../../public/Portuguese_learning_materials_flatlay_c6fe93fe.png";
import testimonial2 from "../../public/Portuguese_learning_materials_flatlay_c6fe93fe.png";
import testimonial3 from "../../public/Portuguese_learning_materials_flatlay_c6fe93fe.png";
import { motion } from "framer-motion";

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
  transition: { duration: 0.5, delay: index * 0.15, ease: "easeOut" }
});

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      country: "🇺🇸 USA",
      achievement: "A1 → B1 in 10 weeks",
      quote: "I went from zero Portuguese to having real conversations with locals during my trip to Lisbon. The live classes made all the difference!",
      image: testimonial1
    },
    {
      name: "Marcus Silva",
      country: "🇬🇧 UK",
      achievement: "Career breakthrough",
      quote: "Learning Portuguese opened up job opportunities I never imagined. The small group sizes meant I actually got to practice speaking every session.",
      image: testimonial2
    },
    {
      name: "Emma Rodriguez",
      country: "🇨🇦 Canada",
      achievement: "Reconnected with family",
      quote: "As a digital nomad, the flexible schedule was perfect. I could attend live or watch recordings. Now I can finally talk to my Portuguese relatives!",
      image: testimonial3
    }
  ];

  return (
    <section id="testimonials" className="py-24 md:py-32 px-6 bg-white" data-testid="section-testimonials">
      <div className="max-w-7xl mx-auto">
        <motion.div className="text-center mb-20" {...fadeInUp}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-[#394D5C]" data-testid="text-testimonials-headline">
            Join Students From Around the World
          </h2>
          <p className="text-xl text-[#6B8299] max-w-2xl mx-auto leading-relaxed">
            Real stories from real students who transformed their Portuguese in 10 weeks.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} {...staggerItem(index)}>
              <div className="p-8 h-full bg-white border-2 border-[#E3E5E8] rounded-[12px] hover:shadow-[0px_20px_30px_-6px_rgba(0,0,0,0.15),0px_10px_20px_-6px_rgba(0,0,0,0.10)] transition-all duration-300 group" data-testid={`card-testimonial-${index}`}>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#3BA9A3] text-[#3BA9A3]" />
                  ))}
                </div>
                
                <p className="text-base leading-relaxed mb-6 italic text-[#394D5C]">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full ring-2 ring-[#3BA9A3]/20 overflow-hidden" data-testid={`avatar-testimonial-${index}`}>
                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-base text-[#394D5C]">{testimonial.name}</p>
                    <p className="text-sm text-[#6B8299]">{testimonial.country}</p>
                  </div>
                </div>

                <div className="inline-block px-3 py-1 bg-[#FF8A5C] text-white rounded-full text-sm font-medium group-hover:bg-[#3BA9A3] transition-colors duration-300" data-testid={`badge-achievement-${index}`}>
                  {testimonial.achievement}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}