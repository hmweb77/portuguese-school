'use client';

import { useState } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/Hero";
import AboutProgram from "@/components/About";
import BenefitsSection from "@/components/Benefits";
import PricingSection from "@/components/Pricing";
import TestimonialsSection from "@/components/Testimonials";
import WhatYouGetSection from "@/components/WhatYouGet";
import LeadMagnetSection from "@/components/LeadMagnet";
import FinalCTASection from "@/components/FinalCTA";
import FAQSection from "@/components/FAQ";
import Footer from "@/components/Footer";
import EnrollmentModal from "@/components/Enrollment";
import PortugueseTestModal from "@/components/Portuguesetest";
import FloatingCTA from "@/components/FloatingCTA";
import Toast from "@/components/Toast";


export default function Home() {
  const [enrollmentModalOpen, setEnrollmentModalOpen] = useState(false);
  const [testModalOpen, setTestModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(undefined);
  const [toasts, setToasts] = useState([]);

  const showToast = (title, description) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, title, description }]);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
      setToasts(prev => prev.filter(toast => toast.id !== id));
    }, 5000);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  const handleEnrollClick = (plan) => {
    setSelectedPlan(plan);
    setEnrollmentModalOpen(true);
  };

  const handleEnrollmentSubmit = (data) => {
    console.log('Enrollment submitted:', data);
    showToast(
      "Enrollment Received!",
      "We'll contact you within 24 hours to complete your enrollment."
    );
  };

  const handleLeadMagnetSubmit = (email) => {
    console.log('Lead magnet email:', email);
    showToast(
      "Guide Downloaded!",
      "Check your email for the Portuguese Starter Guide."
    );
  };

  const handleTestClick = () => {
    setTestModalOpen(true);
  };

  const handleTestComplete = (email, score) => {
    console.log('Test completed:', { email, score });
    showToast(
      "Results Ready!",
      `You scored ${score}/12. Check your email for your Portuguese starter guide!`
    );
  };

  return (
    <div className="min-h-screen">
      <Navbar onEnrollClick={() => handleEnrollClick()} />
      <HeroSection 
        onEnrollClick={() => handleEnrollClick()}
        onTestClick={handleTestClick}
      />
      <AboutProgram />
      {/* <BenefitsSection /> */}
      <PricingSection onSelectPlan={handleEnrollClick} />
      <TestimonialsSection />
      <WhatYouGetSection onEnrollClick={() => handleEnrollClick()} />
      <LeadMagnetSection onSubmit={handleLeadMagnetSubmit} />
      <FinalCTASection onEnrollClick={() => handleEnrollClick()} />
      <FAQSection />
      <Footer />
      
      <EnrollmentModal
        open={enrollmentModalOpen}
        onClose={() => setEnrollmentModalOpen(false)}
        onSubmit={handleEnrollmentSubmit}
        selectedPlan={selectedPlan}
      />
      
      <PortugueseTestModal
        open={testModalOpen}
        onClose={() => setTestModalOpen(false)}
        onComplete={handleTestComplete}
      />
      
      <FloatingCTA onEnrollClick={() => handleEnrollClick()} />
      
      {/* Toast Container */}
      <div className="fixed bottom-6 right-6  flex flex-col gap-3 pointer-events-none">
        {toasts.map(toast => (
          <Toast
            key={toast.id}
            title={toast.title}
            description={toast.description}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    </div>
  );
}