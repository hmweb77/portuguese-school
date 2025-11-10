import { Zap, Users2, Globe2, Clock, Award } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerItem = (index) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.5, delay: index * 0.15, ease: "easeOut" }
});

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Zap,
      title: "Fast Progress",
      description: "Our intensive immersion method gets you conversational in 10 weeks. Most students report confidence in basic conversations by week 5."
    },
    {
      icon: Users2,
      title: "Small Group Learning",
      description: "Maximum 15 students per class means more speaking time, personal attention, and faster skill development."
    },
    {
      icon: Globe2,
      title: "Portuguese for Real Life",
      description: "Learn practical, modern Portuguese used in everyday situations. Not just textbook phrases—real conversation skills."
    },
    {
      icon: Clock,
      title: "Flexible Access",
      description: "Can't make a live session? Every class is recorded. Study on your schedule with lifetime access to all materials."
    },
    {
      icon: Award,
      title: "Cultural Immersion",
      description: "Beyond grammar and vocabulary. Experience Portuguese culture, customs, and contexts through interactive activities."
    },
  ];

  return (
    <section id="benefits" className="py-24 md:py-32 px-6 bg-[#3BA9A3] text-white" data-testid="section-benefits">
      <div className="max-w-7xl mx-auto">
        <motion.div className="text-center mb-20" {...fadeInUp}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-white" data-testid="text-benefits-headline">
            Why Join the Winter Immersion?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Everything you need to transform from beginner to confident Portuguese speaker.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div key={index} {...staggerItem(index)}>
                <div 
                  className="p-8 h-full bg-white border-2 border-[#E3E5E8] rounded-[12px] hover:shadow-[0px_20px_30px_-6px_rgba(0,0,0,0.15),0px_10px_20px_-6px_rgba(0,0,0,0.10)] transition-shadow duration-300"
                  data-testid={`card-benefit-${index}`}
                >
                  <div className="w-16 h-16 rounded-[12px] bg-[#3BA9A3]/10 flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-[#3BA9A3]" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-[#394D5C]">{benefit.title}</h3>
                  <p className="text-[#6B8299] leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}