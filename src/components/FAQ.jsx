"use client"
import { useState } from "react";
import { ChevronDown, Search, HelpCircle, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [searchTerm, setSearchTerm] = useState("");

  const faqs = [
    {
      question: "What if I can't attend all the live sessions?",
      answer: "No problem! Every live session is recorded and available for lifetime access. You can watch them anytime at your own pace. We recommend attending live when possible for the interactive experience, but recordings ensure you never miss content.",

    },
    {
      question: "I'm a complete beginner. Is this course right for me?",
      answer: "Absolutely! The Winter Immersion is designed specifically for A1 level (complete beginners). Our experienced teachers will guide you from your first Portuguese word to confident basic conversations. No prior knowledge required.",

    },
    {
      question: "What's your refund policy?",
      answer: "We offer a 14-day money-back guarantee. If you're not satisfied within the first two weeks, we'll refund your payment in full, no questions asked. After 14 days, all sales are final.",

    },
    {
      question: "How much time do I need to commit each week?",
      answer: "We recommend 5-7 hours per week: 3 hours for live sessions and 2-4 hours for homework and practice. The more you invest, the faster you'll progress. But the flexible format lets you adapt to your schedule.",

    },
    {
      question: "Will I really be conversational in 10 weeks?",
      answer: "Yes! Our immersion method focuses on practical communication from day one. Most students can handle basic conversations (ordering food, asking directions, making small talk) by week 5-6. By week 10, you'll have a solid A1-A2 foundation.",

    },
    {
      question: "Do I get to keep the materials after the course ends?",
      answer: "Yes! You get lifetime access to all course materials, recordings, and the Portuguese library. You can review and continue learning long after the 10 weeks end.",

    },
    {
      question: "What's the difference between the plans?",
      answer: "Offline (€145) gives you all materials and recordings. Online (€295) adds live sessions with teachers and classmates. Premium (€345) includes everything plus weekend resources and enhanced support. Choose based on how much live interaction you want.",

    },
    {
      question: "Is there a certificate at the end?",
      answer: "Yes! All students who complete the program receive an official IFLI completion certificate for Portuguese A1 level.",

    },
    {
      question: "What's the Flex Pass option?",
      answer: "The Flex Pass (+€150) allows you to attend both morning and evening sessions for ultimate flexibility. This is available only if there are at least 6 learners in each group.",

    },
    {
      question: "Can I switch between plans later?",
      answer: "Yes! You can upgrade your plan anytime during the course. Contact our support team and we'll help you with the transition and pricing difference.",

    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const categories = ["All", ...new Set(faqs.map(faq => faq.category))];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const displayedFaqs = selectedCategory === "All" 
    ? filteredFaqs 
    : filteredFaqs.filter(faq => faq.category === selectedCategory);

  return (
    <section id="faq" className="relative py-24 md:py-32 px-6 bg-gradient-to-b from-white via-[#F5F6F7] to-white overflow-hidden" data-testid="section-faq">
      {/* Background elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#3BA9A3]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-[#FF8A5C]/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div className="text-center mb-12" {...fadeInUp}>
          <motion.div
            className="inline-flex items-center gap-2 px-5 py-2 bg-[#3BA9A3]/10 text-[#3BA9A3] rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <HelpCircle className="w-4 h-4" />
            <span className="text-sm font-semibold">Got Questions?</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-[#394D5C]" data-testid="text-faq-headline">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-[#6B8299] leading-relaxed">
            Everything you need to know about the Winter Immersion Experience.
          </p>
        </motion.div>


        {/* FAQ Accordion */}
        <div className="space-y-4" data-testid="accordion-faq">
          <AnimatePresence>
            {displayedFaqs.length === 0 ? (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <p className="text-[#6B8299]">No questions found matching "{searchTerm}"</p>
              </motion.div>
            ) : (
              displayedFaqs.map((faq, index) => (
                <motion.div key={index} {...staggerItem(index)}>
                  <motion.div 
                    className="bg-white border-2 border-[#E3E5E8] rounded-2xl overflow-hidden hover:border-[#3BA9A3]/30 transition-all duration-300"
                    data-testid={`accordion-item-${index}`}
                    whileHover={{ boxShadow: "0px 10px 30px -10px rgba(0,0,0,0.1)" }}
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full text-left font-bold text-base px-6 py-6 flex items-center justify-between text-[#394D5C] hover:text-[#3BA9A3] transition-colors"
                    >
                      <span className="flex items-start gap-3 flex-1">
                        <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          openIndex === index ? "text-[#3BA9A3]" : "text-[#E3E5E8]"
                        }`} />
                        {faq.question}
                      </span>
                      <motion.div
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-5 h-5 text-[#6B8299] flex-shrink-0" />
                      </motion.div>
                    </button>
                    
                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pl-14">
                            <p className="text-[#6B8299] leading-relaxed text-base">
                              {faq.answer}
                            </p>
                            <div className="mt-4">
                              <span className="inline-block px-3 py-1 bg-[#3BA9A3]/10 text-[#3BA9A3] rounded-full text-xs font-medium">
                                {faq.category}
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>

        {/* Still have questions CTA */}
        <motion.div
          className="mt-16 text-center p-8 bg-white border-2 border-[#E3E5E8] rounded-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold mb-3 text-[#394D5C]">
            Still have questions?
          </h3>
          <p className="text-[#6B8299] mb-6">
            Our team is here to help! Contact us and we'll get back to you within 24 hours.
          </p>
          <motion.a
            href="mailto:support@ifli.com"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#3BA9A3] to-[#2D8B85] text-white rounded-full font-semibold hover:shadow-lg transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Support
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}