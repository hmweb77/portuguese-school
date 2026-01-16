"use client";
import {
  Check,
  X,
  Sparkles,
  Crown,
  Zap,
  MessageCircle,
  Calendar,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerItem = (index) => ({
  initial: { opacity: 0, y: 40, scale: 0.95 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true, margin: "-100px" },
  transition: {
    duration: 0.5,
    delay: index * 0.15,
    ease: "easeOut",
  },
});

export default function PricingSection({ onSelectPlan }) {
  const sectionRef = useRef(null);
  const [hoveredPlan, setHoveredPlan] = useState(null);

  const plans = [
    {
      name: "Offline",
      price: "145€",
      originalPrice: "195€",
      subtitle: "All levels  • 1 year access",
      description: "Perfect for self-directed learners",
      priceBreakdown: "Self-paced recordings",
      icon: Zap,
      iconColor: "from-blue-400 to-blue-600",
      features: [
        { name: "Access to 50hs of session recordings", included: true },
        { name: "Access to digital library", included: true },
        { name: "Exclusive WhatsApp Community", included: true },
        { name: "50hs of live online group sessions", included: false },
        { name: "Additional 1-on-1 support", included: false },
      ],
      cta: "Get Started",
      featured: false,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Online",
      price: "295€",
      originalPrice: "345€",
      subtitle: "All levels • 1 year access",
      description: "The complete live learning experience",
      priceBreakdown: "€5.90/session • 50 live sessions over 10 weeks",
      priceBreakdownColor: "text-[#3BA9A3]",
      icon: MessageCircle,
      iconColor: "from-orange-400 to-orange-600",
      features: [
        { name: "Access to 50hs of live online sessions", included: true },
        { name: "Access to 50hs of sessions recordings", included: true },
        { name: "Access to digital library", included: true },
        { name: "Exclusive WhatsApp Community", included: true },
        { name: "Access to additional 1-1 support", included: false },
      ],
      cta: "Enroll Now",
      featured: true,
      badge: "Most Popular",
      gradient: "from-orange-400 to-red-500",
    },
    {
      name: "Premium",
      price: "345€",
      originalPrice: "395€",
      subtitle: "All levels  • 1 year access",
      description: "Maximum results with 1-on-1 support",
      priceBreakdown: "€6.90/session • 50 live sessions + 1-on-1",
      priceBreakdownColor: "text-[#8B5CF6]",
      icon: Crown,
      iconColor: "from-purple-400 to-purple-600",
      features: [
        { name: "Access to 50hs of live online sessions", included: true },
        { name: "Access to 50hs of sessions recordings", included: true },
        { name: "Access to digital library", included: true },
        { name: "Exclusive WhatsApp Community", included: true },
        { name: "Access to additional 1-1 support", included: true },
      ],
      cta: "Go Premium",
      featured: false,
      seatsLeft: 8,
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="relative py-24 md:py-32 px-6 bg-linear-to-br from-[#3BA9A3] via-[#359690] to-[#2D8B85] text-white overflow-hidden"
      data-testid="section-pricing"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-72 h-72 bg-[#FF8A5C]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <motion.div
            className="inline-flex items-center gap-2 px-5 py-2 bg-[#FF8A5C] text-white rounded-full mb-6 shadow-lg"
            data-testid="badge-seats-warning"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">
              Limited Seats Available - Enroll by January 18, 2026
            </span>
          </motion.div>

          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-white"
            data-testid="text-pricing-headline"
          >
            Choose Your Learning Path
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            All plans include 1 year access to materials and lifetime access to
            our student community.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            const hasBadge = plan.badge || plan.seatsLeft;

            return (
              <motion.div
                key={index}
                {...staggerItem(index)}
                onHoverStart={() => setHoveredPlan(index)}
                onHoverEnd={() => setHoveredPlan(null)}
              >
                <motion.div
                  className={`relative p-8 flex flex-col bg-white rounded-2xl overflow-hidden ${
                    plan.featured
                      ? "shadow-[0px_30px_60px_-12px_rgba(0,0,0,0.25)] ring-2 ring-[#FF8A5C]"
                      : "shadow-[0px_20px_40px_-12px_rgba(0,0,0,0.15)]"
                  }`}
                  style={{
                    height: "100%",
                    minHeight: hasBadge ? "720px" : "690px",
                  }}
                  data-testid={`card-plan-${plan.name.toLowerCase()}`}
                  whileHover={{
                    y: -12,
                    transition: { duration: 0.3 },
                  }}
                >
                  {/* Most Popular Badge */}
                  {plan.badge && (
                    <motion.div
                      className="absolute top-4 right-4 z-10"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="bg-gradient-to-r from-[#FF8A5C] to-[#FF7A4C] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                        ⭐ {plan.badge}
                      </div>
                    </motion.div>
                  )}

                  {/* Top gradient bar */}
                  <motion.div
                    className={`absolute top-0 left-0 right-0 h-2 bg-linear-to-br ${plan.gradient}`}
                    animate={
                      plan.featured
                        ? {
                            background: [
                              `linear-gradient(to right, #FB923C, #EF4444)`,
                              `linear-gradient(to right, #EF4444, #FB923C)`,
                              `linear-gradient(to right, #FB923C, #EF4444)`,
                            ],
                          }
                        : {}
                    }
                    transition={{ duration: 3, repeat: Infinity }}
                  />

                  {/* Plan Header */}
                  <div
                    className={`text-center ${
                      hasBadge ? "mb-6 mt-6" : "mb-8 mt-4"
                    }`}
                  >
                    <motion.div
                      className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-linear-to-br ${plan.iconColor} flex items-center justify-center shadow-lg`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </motion.div>

                    <h3 className="text-2xl font-bold mb-2 text-[#394D5C]">
                      {plan.name}
                    </h3>
                    <p className="text-sm text-[#6B8299] mb-6 min-h-10">
                      {plan.description}
                    </p>

                    <div className="mb-2">
                      {/* Price Display */}
                      <div className="flex items-center justify-center gap-3 mb-1">
                       
                        <span
                          className={`text-5xl font-bold bg-linear-to-br ${plan.gradient} bg-clip-text text-transparent`}
                        >
                          {plan.originalPrice}
                        </span>
                      </div>

                      {/* Price Breakdown */}
                      {plan.priceBreakdown && (
                        <p
                          className={`text-xs font-medium mt-2 ${
                            plan.priceBreakdownColor || "text-[#6B8299]"
                          }`}
                        >
                          {plan.priceBreakdown}
                        </p>
                      )}
                    </div>
                    <p className="text-sm text-[#6B8299] mt-3">
                      {plan.subtitle}
                    </p>
                  </div>

                  {/* Features List - Equal Height */}
                  <ul className="space-y-4 mb-8 flex-1">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-start gap-3"
                        data-testid={`text-feature-${index}-${featureIndex}`}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + featureIndex * 0.05 }}
                      >
                        {feature.included ? (
                          <div
                            className={`w-6 h-6 rounded-full bg-linear-to-br ${plan.gradient} flex items-center justify-center shrink-0`}
                          >
                            <Check className="w-4 h-4 text-white" />
                          </div>
                        ) : (
                          <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                            <X className="w-4 h-4 text-gray-300" />
                          </div>
                        )}
                        <span
                          className={`text-sm ${
                            feature.included
                              ? "text-[#394D5C]"
                              : "text-gray-400"
                          }`}
                        >
                          {feature.name}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button - Fixed at Bottom */}
                  <motion.button
                    className={`w-full relative rounded-full py-6 text-base font-semibold text-white overflow-hidden shadow-lg mt-auto`}
                    onClick={() => onSelectPlan(plan.name)}
                    data-testid={`button-select-${plan.name.toLowerCase()}`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      className={`absolute inset-0 bg-linear-to-br ${plan.gradient}`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-linear-to-br from-transparent via-white/30 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                    <span className="relative z-10">{plan.cta}</span>
                  </motion.button>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Payment Methods Notice */}
        <motion.div
          className="mt-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center">
            <p className="text-white/90 text-lg mb-3 font-semibold">
              Multiple Payment Options Available
            </p>
            <p className="text-white/80 text-sm">
              We accept credit cards, MBWAY (Portugal), Bizum (Spain), and
              Revolut for your convenience.
              <br />
              Choose your preferred payment method during checkout.
            </p>
          </div>
        </motion.div>

        {/* Bottom Trust Message */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-white/80 text-sm">
            🔒 Secure payment • 💯 5-day money-back guarantee • 🌟 Join 200+
            happy learners
          </p>
        </motion.div>
      </div>
    </section>
  );
}