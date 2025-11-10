"use client"
import { useState } from "react";
import { Download, CheckCircle, Mail, FileText, Sparkles, Lock } from "lucide-react";
import pdfImage from "../../public/leadSec.png";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function LeadMagnetSection({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitting(true);
      
      // Simulate submission
      setTimeout(() => {
        onSubmit(email);
        setIsSubmitting(false);
        setShowSuccess(true);
        setEmail("");
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      }, 1000);
    }
  };

  const benefits = [
    { icon: FileText, text: "50+ Essential Portuguese phrases" },
    { icon: Sparkles, text: "Pronunciation guide with audio" },
    { icon: CheckCircle, text: "Cultural tips for travelers" },
  ];

  return (
    <section className="relative py-24 md:py-32 px-6 bg-gradient-to-br from-[#3BA9A3] via-[#359690] to-[#2D8B85] text-white overflow-hidden" data-testid="section-lead-magnet">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-[#FF8A5C]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        {/* Floating particles */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div {...fadeInUp}>
          <div className="relative p-10 md:p-16 shadow-[0px_30px_50px_-12px_rgba(0,0,0,0.20),0px_15px_30px_-12px_rgba(0,0,0,0.12)] bg-white rounded-3xl overflow-hidden">
            {/* Success confetti animation */}
            <AnimatePresence>
              {showSuccess && (
                <>
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-3 h-3 rounded-full"
                      style={{
                        left: '50%',
                        top: '50%',
                        background: ['#3BA9A3', '#FF8A5C', '#394D5C', '#FFD700'][i % 4],
                      }}
                      initial={{ scale: 0, x: 0, y: 0 }}
                      animate={{
                        scale: [0, 1, 0],
                        x: Math.cos((i / 20) * Math.PI * 2) * 200,
                        y: Math.sin((i / 20) * Math.PI * 2) * 200,
                      }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  ))}
                </>
              )}
            </AnimatePresence>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="order-2 md:order-1">
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#3BA9A3]/10 text-[#3BA9A3] rounded-full mb-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-semibold">FREE Resource</span>
                </motion.div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-[#394D5C]" data-testid="text-lead-magnet-headline">
                  Not Ready to Enroll Yet?
                </h2>
                
                <p className="text-lg text-[#6B8299] mb-6 leading-relaxed">
                  Get our <span className="font-bold text-[#3BA9A3]">free Portuguese Starter Guide</span>. Learn essential phrases, pronunciation tips, and culture insights.
                </p>

                {/* Benefits List */}
                <div className="space-y-3 mb-8">
                  {benefits.map((benefit, index) => {
                    const IconComponent = benefit.icon;
                    return (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                      >
                        <div className="w-8 h-8 rounded-full bg-[#3BA9A3]/10 flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-4 h-4 text-[#3BA9A3]" />
                        </div>
                        <span className="text-[#394D5C]">{benefit.text}</span>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Form */}
                <AnimatePresence mode="wait">
                  {!showSuccess ? (
                    <motion.form
                      onSubmit={handleSubmit}
                      className="space-y-4"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="relative">
                        <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B8299]" />
                        <motion.input
                          type="email"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="w-full h-14 text-base pl-14 pr-6 rounded-2xl border-2 border-[#E3E5E8] focus:outline-none focus:ring-2 focus:ring-[#3BA9A3] focus:border-transparent text-[#394D5C] transition-all"
                          data-testid="input-email-lead"
                          whileFocus={{ scale: 1.02 }}
                        />
                      </div>
                      
                      <motion.button 
                        type="submit"
                        disabled={isSubmitting}
                        className="group relative w-full rounded-full py-6 text-base font-semibold bg-gradient-to-r from-[#FF8A5C] to-[#FF7A4C] text-white overflow-hidden shadow-lg disabled:opacity-50"
                        data-testid="button-download-guide"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-[#FF7A4C] to-[#FF6A3C]"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          {isSubmitting ? (
                            <>
                              <motion.div
                                className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              />
                              Sending...
                            </>
                          ) : (
                            <>
                              <Download className="w-5 h-5" />
                              Download Free Guide
                            </>
                          )}
                        </span>
                      </motion.button>
                    </motion.form>
                  ) : (
                    <motion.div
                      className="p-6 bg-green-50 border-2 border-green-200 rounded-2xl"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                          <CheckCircle className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-green-900">Success!</h3>
                          <p className="text-sm text-green-700">Check your email for the guide</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* Privacy Note */}
                <motion.div
                  className="flex items-center gap-2 mt-6 text-sm text-[#6B8299]"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <Lock className="w-4 h-4" />
                  <span>We respect your privacy. Unsubscribe anytime.</span>
                </motion.div>
              </div>

              {/* Right - PDF Mockup */}
              <div className="order-1 md:order-2">
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                >
                  {/* Glow effect */}
                  <motion.div
                    className="absolute -inset-4 bg-gradient-to-r from-[#3BA9A3] to-[#FF8A5C] rounded-3xl opacity-20 blur-2xl"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.2, 0.3, 0.2],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />

                  <Image 
                    src={pdfImage} 
                    alt="Portuguese Starter Guide" 
                    className="relative z-10 w-full max-w-sm mx-auto drop-shadow-2xl rounded-2xl"
                    data-testid="img-guide"
                  />

                  {/* Floating badge */}
               
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}