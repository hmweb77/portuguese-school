"use client"
import { useState } from "react";
import { Download } from "lucide-react";
import pdfImage from "../../public/Portuguese_learning_materials_flatlay_c6fe93fe.png";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function LeadMagnetSection({ onSubmit }) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      onSubmit(email);
      setEmail("");
    }
  };

  return (
    <section className="py-24 md:py-32 px-6 bg-[#3BA9A3] text-white" data-testid="section-lead-magnet">
      <div className="max-w-5xl mx-auto">
        <motion.div {...fadeInUp}>
          <div className="p-10 md:p-16 shadow-[0px_30px_50px_-12px_rgba(0,0,0,0.20),0px_15px_30px_-12px_rgba(0,0,0,0.12)] bg-white rounded-[12px]">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-[#394D5C]" data-testid="text-lead-magnet-headline">
                  Not Ready to Enroll Yet?
                </h2>
                <p className="text-lg text-[#6B8299] mb-8 leading-relaxed">
                  Get our free Portuguese Starter Guide. Learn essential phrases, pronunciation tips, and culture insights.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full h-14 text-base px-6 rounded-[12px] border-2 border-[#E3E5E8] focus:outline-none focus:ring-2 focus:ring-[#3BA9A3] focus:border-transparent text-[#394D5C]"
                    data-testid="input-email-lead"
                  />
                  <button 
                    type="submit"
                    className="w-full rounded-full py-6 text-base font-semibold bg-[#FF8A5C] text-white hover:bg-[#FF7A4C] transition-colors duration-200 flex items-center justify-center gap-2"
                    data-testid="button-download-guide"
                  >
                    <Download className="w-5 h-5" />
                    Download Free Guide
                  </button>
                </form>
                
                <p className="text-sm text-[#6B8299] mt-6">
                  We respect your privacy. Unsubscribe anytime.
                </p>
              </div>

              <div className="order-1 md:order-2">
                <motion.img 
                  src={pdfImage} 
                  alt="Portuguese Starter Guide" 
                  className="w-full max-w-sm mx-auto drop-shadow-2xl"
                  data-testid="img-guide"
                  initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}