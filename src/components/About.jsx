import { Calendar, Users, BookOpen, MessageCircle } from "lucide-react";
import programImage from "../../public/Portuguese_learning_materials_flatlay_c6fe93fe.png";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  initial: {},
  whileInView: {},
  viewport: { once: true, margin: "-100px" }
};

const staggerItem = (index) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.5, delay: index * 0.1, ease: "easeOut" }
});

export default function AboutProgram() {
  const highlights = [
    { icon: Calendar, title: "10 Weeks", description: "Jan 19 - Mar 27, 2026" },
    { icon: Users, title: "Small Groups", description: "Max 15 students per class" },
    { icon: BookOpen, title: "Complete Materials", description: "Books, recordings & library" },
    { icon: MessageCircle, title: "Live Sessions", description: "Interactive real-time learning" },
  ];

  return (
    <section id="about" className="py-24 md:py-32 px-6 bg-white" data-testid="section-about-program">
      <div className="max-w-7xl mx-auto">
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-[#394D5C]" data-testid="text-about-headline">
            About the Winter Immersion Experience
          </h2>
          <p className="text-xl text-[#6B8299] max-w-3xl mx-auto leading-relaxed">
            An intensive 10-week Portuguese language program designed for busy professionals who want real results, fast.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <img 
              src={programImage} 
              alt="Student learning Portuguese online" 
              className="rounded-3xl w-full shadow-[0px_30px_50px_-12px_rgba(0,0,0,0.20),0px_15px_30px_-12px_rgba(0,0,0,0.12)]"
              data-testid="img-program"
            />
          </motion.div>

          <motion.div className="space-y-8" {...staggerContainer}>
            <motion.p 
              className="text-lg leading-relaxed text-[#394D5C]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              The IFLI Winter Immersion is more than just language classes. It's a complete learning ecosystem designed to get you speaking Portuguese with confidence.
            </motion.p>
            <motion.p 
              className="text-lg leading-relaxed text-[#394D5C]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            >
              You'll learn from experienced native speakers in live, interactive sessions. Every class is recorded so you can review anytime. Plus, you get lifetime access to our extensive Portuguese library.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-4 pt-6">
              {highlights.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div key={index} {...staggerItem(index)}>
                    <div 
                      className="p-6 bg-white border-2 border-[#E3E5E8] rounded-[12px] hover:shadow-[0px_10px_20px_-4px_rgba(0,0,0,0.12),0px_6px_12px_-4px_rgba(0,0,0,0.08)] transition-all duration-300 relative"
                      data-testid={`card-highlight-${index}`}
                    >
                      <IconComponent className="w-10 h-10 text-[#3BA9A3] mb-4" />
                      <h3 className="font-bold text-lg mb-2 text-[#394D5C]">{item.title}</h3>
                      <p className="text-sm text-[#6B8299]">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}