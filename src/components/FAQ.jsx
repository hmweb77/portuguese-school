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
      answer: "No problem! Every live session is recorded and available for at least 1 year. You can watch them anytime at your own pace. We recommend attending live when possible for the interactive experience, but recordings ensure you never miss content.",

    },
    {
      question: "I'm a complete beginner. Is this course right for me?",
      answer: "Yes! These programs are designed for all levels, and they are extremely beneficial for beginners.",

    },
    {
      question: "What's your refund policy?",
      answer: "We offer a 5-day money-back guarantee.",

    },
    {
      question: "How much time do I need to commit each week?",
      answer: "You just need to commit to doing something in Portuguese about an hour a day. This could be joining one of our live online sessions, watching the recording of a missed session, listening to Portuguese music, watching TV in Portuguese, speaking to Portuguese people in the street, or anything that involves listening to or practising your Portuguese.",

    },
    {
      question: "Will I really be conversational in 10 weeks?",
      answer: "Yes! You will be conversational at your level. Our proven system helps you become confident at communicating with the language you know within 10 weeks, provided you practise every day.",

    },
    {
      question: "Do I get to keep the materials after the course ends?",
      answer: "Yes. You’ll have access to all materials, recordings, and resources for at least 1 year after the course ends.",

    },
    {
      question: "What's the difference between the plans?",
      answer: "The main differences are the inclusion of live sessions and additional 1-on-1 support.",

    },
    {
      question: "Is there a certificate at the end?",
      answer: "Yes, all participants receive a certificate of participation at the end of the experience. This certificate is not valid for nationality, though.",

    },
    {
      question: "Can I switch between plans later?",
      answer: "Yes, you can upgrade at any time. You cannot downgrade, through.",

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
    <section id="faq" className="relative py-24 md:py-32 px-6 bg-linear-to-b from-white via-[#F5F6F7] to-white overflow-hidden" data-testid="section-faq">
      {/* Background elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#3BA9A3]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-[#FF8A5C]/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div className="text-center mb-12" {...fadeInUp}>
          

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-[#394D5C]" data-testid="text-faq-headline">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-[#6B8299] leading-relaxed">
          Everything you need to know about the IFLI Immersion Experiences.
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
                <p className="text-[#6B8299]">No questions found matching &quot;{searchTerm}&quot;</p>
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
                        <CheckCircle className={`w-5 h-5 shrink-0 mt-0.5 ${
                          openIndex === index ? "text-[#3BA9A3]" : "text-[#E3E5E8]"
                        }`} />
                        {faq.question}
                      </span>
                      <motion.div
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-5 h-5 text-[#6B8299] shrink-0" />
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

      </div>
    </section>
  );
}