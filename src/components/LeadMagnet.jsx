"use client";
import { useState, useMemo } from "react";
import { Download, CheckCircle, Mail, FileText, Sparkles, Lock, User, Phone } from "lucide-react";
import pdfImage from "../../public/freeSs.png";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function LeadMagnetSection({ onSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const particlePositions = useMemo(() => {
    return Array.from({ length: 10 }, (_, i) => ({
      left: `${(i * 13.7 + 23) % 100}%`,
      top: `${(i * 17.3 + 15) % 100}%`,
      duration: 3 + (i % 3),
      delay: (i % 5) * 0.4
    }));
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !whatsapp) {
      alert('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);

    try {
      // Call API to save lead to Airtable and send email
      const response = await fetch('/api/send-lead-magnet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          name, 
          email, 
          whatsapp 
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit');
      }

      console.log('✅ Lead captured successfully:', data);

      // Call parent callback if provided
      if (onSubmit) {
        await onSubmit({ name, email, whatsapp });
      }

      setShowSuccess(true);

    } catch (error) {
      console.error('❌ Lead magnet submission error:', error);
      alert('Something went wrong. Please try again or contact us directly.');
      setIsSubmitting(false);
    }
  };

  const benefits = [
    { icon: FileText, text: "Join a sample IFLI Google Classroom" },
    { icon: Sparkles, text: "1h recording of a sample session" },
    { icon: CheckCircle, text: "A taste of our digital library" },
  ];

  return (
    <section
      className="relative py-24 md:py-32 px-6 bg-linear-to-br from-[#3BA9A3] via-[#359690] to-[#2D8B85] text-white overflow-hidden"
      data-testid="section-lead-magnet"
    >
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


      {/* Floating Particles - FIXED VERSION */}
<div className="absolute inset-0 overflow-hidden pointer-events-none">
  {particlePositions.map((particle, i) => (
    <motion.div
      key={i}
      className="absolute w-2 h-2 bg-white/20 rounded-full"
      style={{
        left: particle.left,
        top: particle.top,
      }}
      animate={{
        y: [0, -20, 0],
        opacity: [0.2, 0.5, 0.2],
      }}
      transition={{
        duration: particle.duration,
        repeat: Infinity,
        delay: particle.delay,
      }}
    />
  ))}
</div>
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
                        left: "50%",
                        top: "50%",
                        background: ["#3BA9A3", "#FF8A5C", "#394D5C", "#FFD700"][i % 4],
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
                  <span className="text-sm font-semibold">FREE Resources</span>
                </motion.div>

                <h2
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-[#394D5C]"
                  data-testid="text-lead-magnet-headline"
                >
                  Get INSTANT Access to FREE SAMPLE RESOURCES
                </h2>

                <p className="text-lg text-[#6B8299] mb-6 leading-relaxed">
                  See how IFLI will help you speak Portuguese confidently, no commitment, just value.
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
                        <div className="w-8 h-8 rounded-full bg-[#3BA9A3]/10 flex items-center justify-center shrink-0">
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
                      {/* Name */}
                      <div className="relative">
                        <User className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B8299]" />
                        <motion.input
                          type="text"
                          placeholder="Enter your name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          disabled={isSubmitting}
                          className="w-full h-14 text-base pl-14 pr-6 rounded-2xl border-2 border-[#E3E5E8] focus:outline-none focus:ring-2 focus:ring-[#3BA9A3] focus:border-transparent text-[#394D5C] transition-all disabled:bg-gray-50 disabled:cursor-not-allowed"
                          whileFocus={{ scale: 1.02 }}
                        />
                      </div>

                      {/* Email */}
                      <div className="relative">
                        <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B8299]" />
                        <motion.input
                          type="email"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          disabled={isSubmitting}
                          className="w-full h-14 text-base pl-14 pr-6 rounded-2xl border-2 border-[#E3E5E8] focus:outline-none focus:ring-2 focus:ring-[#3BA9A3] focus:border-transparent text-[#394D5C] transition-all disabled:bg-gray-50 disabled:cursor-not-allowed"
                          data-testid="input-email-lead"
                          whileFocus={{ scale: 1.02 }}
                        />
                      </div>

                      {/* WhatsApp */}
                      <div className="relative">
                        <Phone className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B8299]" />
                        <motion.input
                          type="tel"
                          placeholder="Enter your WhatsApp number"
                          value={whatsapp}
                          onChange={(e) => setWhatsapp(e.target.value)}
                          required
                          disabled={isSubmitting}
                          className="w-full h-14 text-base pl-14 pr-6 rounded-2xl border-2 border-[#E3E5E8] focus:outline-none focus:ring-2 focus:ring-[#3BA9A3] focus:border-transparent text-[#394D5C] transition-all disabled:bg-gray-50 disabled:cursor-not-allowed"
                          whileFocus={{ scale: 1.02 }}
                        />
                      </div>

                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        className="group relative w-full rounded-full py-6 text-base font-semibold bg-linear-to-r from-[#FF8A5C] to-[#FF7A4C] text-white overflow-hidden shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                        data-testid="button-download-guide"
                        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-linear-to-r from-[#FF7A4C] to-[#FF6A3C]"
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
                              Processing...
                            </>
                          ) : (
                            <>
                              Join Your Sample IFLI Google Classroom 
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
                          <h3 className="font-bold text-green-900">Thank You!</h3>
                          <p className="text-sm text-green-700">
                            You&apos;ll receive an email with access shortly.
                          </p>
                          <p className="text-xs text-green-600 mt-1">
                            Check your inbox for the next steps!
                          </p>
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
                    className="absolute -inset-4 bg-linear-to-r from-[#3BA9A3] to-[#FF8A5C] rounded-3xl opacity-20 blur-2xl"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.2, 0.3, 0.2],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />

                  <Image
                    src={pdfImage}
                    alt="IFLI Free Sample Account Preview"
                    className="relative z-10 w-full max-w-sm mx-auto drop-shadow-2xl rounded-2xl"
                    data-testid="img-guide"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}