'use client';

import { useState, Suspense, useEffect } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/Hero";
import LisbonProject from "@/components/LisbonProject";
// import FreeTrialSection from "@/components/FreeTrialSection";

// Lazy load below-the-fold components with loading skeletons
const AboutProgram = dynamic(() => import("@/components/About"), {
  loading: () => <div className="min-h-screen bg-gray-50 animate-pulse" />
});

const BenefitsSection = dynamic(() => import("@/components/Benefits"), {
  loading: () => <div className="min-h-screen bg-[#3BA9A3] animate-pulse" />
});

const PricingSection = dynamic(() => import("@/components/Pricing"), {
  loading: () => <div className="min-h-screen bg-[#3BA9A3] animate-pulse" />
});

const TestimonialsSection = dynamic(() => import("@/components/Testimonials"), {
  loading: () => <div className="min-h-screen bg-gray-50 animate-pulse" />
});

const LeadMagnetSection = dynamic(() => import("@/components/LeadMagnet"), {
  loading: () => <div className="min-h-screen bg-[#3BA9A3] animate-pulse" />
});

const FinalCTASection = dynamic(() => import("@/components/FinalCTA"), {
  loading: () => <div className="min-h-screen bg-cover animate-pulse" />
});

const Experiences2026Section = dynamic(() => import("@/components/Experiences2026"), {
  loading: () => <div className="min-h-[400px] bg-gray-50 animate-pulse" />
});

const FAQSection = dynamic(() => import("@/components/FAQ"), {
  loading: () => <div className="min-h-screen bg-gray-50 animate-pulse" />
});

const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <div className="min-h-[400px] bg-gray-100 animate-pulse" />
});

// Lazy load modals and floating elements (only when needed)
const EnrollmentModal = dynamic(() => import("@/components/Enrollment"));
const PortugueseTestModal = dynamic(() => import("@/components/Portuguesetest"));
const WhatsAppButton = dynamic(() => import("@/components/WhatsAppButton"), {
  ssr: false // Don't render on server
});
const Toast = dynamic(() => import("@/components/Toast"));


export default function Home() {
  const [enrollmentModalOpen, setEnrollmentModalOpen] = useState(false);
  const [testModalOpen, setTestModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(undefined);
  const [toasts, setToasts] = useState([]);

  // Preload Airtable connection for faster iframe loading
  useEffect(() => {
    // Create preconnect links for Airtable
    const preconnect = document.createElement('link');
    preconnect.rel = 'preconnect';
    preconnect.href = 'https://airtable.com';
    preconnect.crossOrigin = 'anonymous';
    document.head.appendChild(preconnect);

    const dnsPrefetch = document.createElement('link');
    dnsPrefetch.rel = 'dns-prefetch';
    dnsPrefetch.href = 'https://airtable.com';
    document.head.appendChild(dnsPrefetch);

    // Cleanup
    return () => {
      document.head.removeChild(preconnect);
      document.head.removeChild(dnsPrefetch);
    };
  }, []);

  const showToast = (title, description) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, title, description }]);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
      setToasts(prev => prev.filter(toast => toast.id !== id));
    }, 10000);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  // Temporary: all Enroll buttons go to WhatsApp. Set back to modal when form is ready.
  const WHATSAPP_ENROLL_URL = "https://wa.me/351933292112?text=" + encodeURIComponent("Hi! I'm interested in the Portuguese Immersion program and would like to secure a spot.");
  const handleEnrollClick = () => {
    window.open(WHATSAPP_ENROLL_URL, "_blank", "noopener,noreferrer");
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
      
      <Suspense fallback={<div className="min-h-screen" />}>
        <AboutProgram />
        <BenefitsSection />
        <PricingSection onSelectPlan={() => handleEnrollClick()} />
        {/* <FreeTrialSection/> */}
        <TestimonialsSection />
        <LeadMagnetSection onSubmit={handleLeadMagnetSubmit} />
        <FinalCTASection onEnrollClick={() => handleEnrollClick()} />
        <Experiences2026Section />
        <FAQSection />
       <LisbonProject/>
        <Footer />
      </Suspense>
      
      {enrollmentModalOpen && (
        <EnrollmentModal
          open={enrollmentModalOpen}
          onClose={() => setEnrollmentModalOpen(false)}
          onSubmit={handleEnrollmentSubmit}
          selectedPlan={selectedPlan}
        />
      )}
      
      {testModalOpen && (
        <PortugueseTestModal
          open={testModalOpen}
          onClose={() => setTestModalOpen(false)}
          onComplete={handleTestComplete}
        />
      )}
      
      <WhatsAppButton />
      
      {/* Toast Container */}
      {toasts.length > 0 && (
        <div className="fixed bottom-6 right-6 flex flex-col gap-3 pointer-events-none z-50">
          {toasts.map(toast => (
            <Toast
              key={toast.id}
              title={toast.title}
              description={toast.description}
              onClose={() => removeToast(toast.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}