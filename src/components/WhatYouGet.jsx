"use client"
import { Check } from "lucide-react";
import materialsImage from "../../public/Portuguese_learning_materials_flatlay_c6fe93fe.png";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerItem = (index) => ({
  initial: { opacity: 0, x: -40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.5, delay: index * 0.1, ease: "easeOut" }
});

export default function WhatYouGetSection({ onEnrollClick }) {
  const deliverables = [
    {
      category: "Live Learning",
      items: [
        "30+ live interactive sessions with native speakers",
        "Real-time Q&A and instant feedback",
        "Speaking practice with classmates",
        "Interactive exercises and activities"
      ]
    },
    {
      category: "Learning Materials",
      items: [
        "Complete A1 Portuguese textbook",
        "Workbook with 200+ exercises",
        "Vocabulary flashcard sets",
        "Grammar reference guide"
      ]
    },
    {
      category: "Digital Resources",
      items: [
        "All session recordings (lifetime access)",
        "Portuguese media library (podcasts, videos)",
        "Mobile app for learning on the go",
        "Progress tracking dashboard"
      ]
    },
    {
      category: "Community & Support",
      items: [
        "Access to student community forum",
        "Study groups with peers",
        "Email support from instructors",
        "Official IFLI completion certificate"
      ]
    }
  ];

  return (
    <section className="py-24 md:py-32 px-6 bg-white" data-testid="section-what-you-get">
      <div className="max-w-7xl mx-auto">
        <motion.div className="text-center mb-20" {...fadeInUp}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-[#394D5C]" data-testid="text-deliverables-headline">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-[#6B8299] max-w-2xl mx-auto leading-relaxed">
            A complete Portuguese learning ecosystem designed for maximum results.
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
              src={materialsImage} 
              alt="Portuguese learning materials" 
              className="rounded-3xl w-full shadow-[0px_30px_50px_-12px_rgba(0,0,0,0.20),0px_15px_30px_-12px_rgba(0,0,0,0.12)]"
              data-testid="img-materials"
            />
          </motion.div>

          <div className="space-y-10">
            {deliverables.map((section, sectionIndex) => (
              <motion.div key={sectionIndex} {...staggerItem(sectionIndex)}>
                <h3 className="text-2xl font-bold mb-4 text-[#3BA9A3]">{section.category}</h3>
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3" data-testid={`text-deliverable-${sectionIndex}-${itemIndex}`}>
                      <Check className="w-5 h-5 text-[#3BA9A3] shrink-0 mt-0.5" />
                      <span className="text-base leading-relaxed text-[#394D5C]">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            <motion.div 
              className="pt-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              <button 
                className="w-full md:w-auto px-10 py-6 rounded-full text-base font-semibold bg-[#FF8A5C] text-white hover:bg-[#FF7A4C] transition-colors duration-200"
                onClick={onEnrollClick}
                data-testid="button-enroll-deliverables"
              >
                Start Your Portuguese Journey
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}