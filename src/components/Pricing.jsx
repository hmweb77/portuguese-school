"use client"
import { Check } from "lucide-react";
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

export default function PricingSection({ onSelectPlan }) {
  const plans = [
    {
      name: "Offline",
      price: "$299",
      subtitle: "per 10 weeks",
      description: "Perfect for self-directed learners",
      features: [
        "All pre-recorded lessons",
        "Downloadable materials",
        "Portuguese library access",
        "Community forum access",
        "Completion certificate"
      ],
      cta: "Get Started",
      featured: false
    },
    {
      name: "Online",
      price: "$599",
      subtitle: "per 10 weeks",
      description: "The complete live learning experience",
      features: [
        "Everything in Offline, plus:",
        "30+ live interactive sessions",
        "Real-time Q&A with teachers",
        "Speaking practice groups",
        "Session recordings",
        "Priority support"
      ],
      cta: "Enroll Now",
      featured: true,
      badge: "Most Popular"
    },
    {
      name: "Premium",
      price: "$999",
      subtitle: "per 10 weeks",
      description: "Maximum results with 1-on-1 support",
      features: [
        "Everything in Online, plus:",
        "4 private tutoring sessions",
        "Personalized study plan",
        "Weekly progress reviews",
        "Pronunciation coaching",
        "Lifetime course updates"
      ],
      cta: "Go Premium",
      featured: false,
      seatsLeft: 8
    }
  ];

  return (
    <section id="pricing" className="py-24 md:py-32 px-6 bg-[#3BA9A3] text-white" data-testid="section-pricing">
      <div className="max-w-7xl mx-auto">
        <motion.div className="text-center mb-6" {...fadeInUp}>
          <div className="inline-block mb-6 text-sm px-4 py-2 bg-[#FF8A5C] text-white rounded-full font-medium" data-testid="badge-seats-warning">
            Limited Seats Available - Enroll by January 10, 2026
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-white" data-testid="text-pricing-headline">
            Choose Your Learning Path
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            All plans include lifetime access to materials and our student community.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {plans.map((plan, index) => (
            <motion.div key={index} {...staggerItem(index)}>
              <div 
                className={`p-8 flex flex-col relative h-full bg-white rounded-[12px] hover:shadow-[0px_30px_50px_-12px_rgba(0,0,0,0.20),0px_15px_30px_-12px_rgba(0,0,0,0.12)] transition-all duration-300 ${
                  plan.featured ? 'border-2 border-[#3BA9A3] shadow-[0px_20px_30px_-6px_rgba(0,0,0,0.15),0px_10px_20px_-6px_rgba(0,0,0,0.10)]' : 'border-2 border-[#E3E5E8]'
                }`}
                data-testid={`card-plan-${plan.name.toLowerCase()}`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#3BA9A3] text-white rounded-full text-sm font-medium" data-testid="badge-featured">
                    {plan.badge}
                  </div>
                )}
                {plan.seatsLeft && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#DC2626] text-white rounded-full text-sm font-medium" data-testid="badge-seats-left">
                    Only {plan.seatsLeft} seats left
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-3 text-[#394D5C]">{plan.name}</h3>
                  <p className="text-sm text-[#6B8299] mb-6">{plan.description}</p>
                  <div className="mb-2">
                    <span className="text-5xl font-bold text-[#394D5C]">{plan.price}</span>
                  </div>
                  <p className="text-sm text-[#6B8299]">{plan.subtitle}</p>
                </div>

                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3 text-[#394D5C]" data-testid={`text-feature-${index}-${featureIndex}`}>
                      <Check className="w-5 h-5 text-[#3BA9A3] shrink-0 mt-0.5" />
                      <span className={feature.includes(':') ? 'font-bold' : ''}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  className="w-full rounded-full py-6 text-base font-semibold bg-[#FF8A5C] text-white hover:bg-[#FF7A4C] transition-colors duration-200"
                  onClick={() => onSelectPlan(plan.name)}
                  data-testid={`button-select-${plan.name.toLowerCase()}`}
                >
                  {plan.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}