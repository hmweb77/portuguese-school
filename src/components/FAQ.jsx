"use client"
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerItem = (index) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.4, delay: index * 0.08, ease: "easeOut" }
});

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What if I can't attend all the live sessions?",
      answer: "No problem! Every live session is recorded and available for lifetime access. You can watch them anytime at your own pace. We recommend attending live when possible for the interactive experience, but recordings ensure you never miss content."
    },
    {
      question: "I'm a complete beginner. Is this course right for me?",
      answer: "Absolutely! The Winter Immersion is designed specifically for A1 level (complete beginners). Our experienced teachers will guide you from your first Portuguese word to confident basic conversations. No prior knowledge required."
    },
    {
      question: "What's your refund policy?",
      answer: "We offer a 14-day money-back guarantee. If you're not satisfied within the first two weeks, we'll refund your payment in full, no questions asked. After 14 days, all sales are final."
    },
    {
      question: "How much time do I need to commit each week?",
      answer: "We recommend 5-7 hours per week: 3 hours for live sessions and 2-4 hours for homework and practice. The more you invest, the faster you'll progress. But the flexible format lets you adapt to your schedule."
    },
    {
      question: "Will I really be conversational in 10 weeks?",
      answer: "Yes! Our immersion method focuses on practical communication from day one. Most students can handle basic conversations (ordering food, asking directions, making small talk) by week 5-6. By week 10, you'll have a solid A1-A2 foundation."
    },
    {
      question: "Do I get to keep the materials after the course ends?",
      answer: "Yes! You get lifetime access to all course materials, recordings, and the Portuguese library. You can review and continue learning long after the 10 weeks end."
    },
    {
      question: "What's the difference between the plans?",
      answer: "Offline gives you all materials and recordings. Online adds live sessions with teachers and classmates. Premium includes everything plus private tutoring and personalized coaching. Choose based on how much live interaction you want."
    },
    {
      question: "Is there a certificate at the end?",
      answer: "Yes! All students who complete the program receive an official IFLI completion certificate for Portuguese A1 level."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 md:py-32 px-6 bg-white" data-testid="section-faq">
      <div className="max-w-4xl mx-auto">
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-[#394D5C]" data-testid="text-faq-headline">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-[#6B8299] leading-relaxed">
            Everything you need to know about the Winter Immersion Experience.
          </p>
        </motion.div>

        <div className="space-y-4" data-testid="accordion-faq">
          {faqs.map((faq, index) => (
            <motion.div key={index} {...staggerItem(index)}>
              <div 
                className="border-2 border-[#E3E5E8] rounded-[12px] px-6 bg-white hover:shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.08),0px_2px_4px_-1px_rgba(0,0,0,0.05)] transition-all duration-300"
                data-testid={`accordion-item-${index}`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left font-bold text-base py-6 flex items-center justify-between text-[#394D5C]"
                >
                  <span>{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-[#6B8299] transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                  }`}
                >
                  <p className="text-[#6B8299] leading-relaxed text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}