"use client"
import { useState } from "react";
import { X, Phone } from "lucide-react";

export default function EnrollmentModal({ open, onClose, onSubmit, selectedPlan }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    whatsapp: "",
    comments: "",
    plan: selectedPlan || "online",
    termsAccepted: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.termsAccepted) {
      alert("Please accept the terms and conditions to continue.");
      return;
    }
    onSubmit(formData);
    setFormData({ 
      firstName: "", 
      lastName: "", 
      email: "", 
      whatsapp: "", 
      comments: "",
      plan: "online",
      termsAccepted: false 
    });
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div 
        className="relative bg-white rounded-xl shadow-[0px_30px_50px_-12px_rgba(0,0,0,0.20),0px_15px_30px_-12px_rgba(0,0,0,0.12)] w-full max-w-md mx-4 p-6 max-h-[90vh] overflow-y-auto"
        data-testid="modal-enrollment"
      >
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-2xl font-bold text-[#394D5C]" data-testid="text-modal-title">
              Pre-Enroll in Portuguese Immersion
            </h2>
            <button
              onClick={onClose}
              className="text-[#6B8299] hover:text-[#394D5C] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <p className="text-sm text-[#6B8299]">
            Fill out the form below and we'll be in touch within 24 hours to complete your enrollment.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* First Name Input */}
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-[#394D5C] mb-2">
              First Name | Primer Nombre | Primeiro Nome <span className="text-red-500">*</span>
            </label>
            <input
              id="firstName"
              type="text"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              required
              className="w-full px-4 py-2 border-2 border-[#E3E5E8] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3BA9A3] focus:border-transparent text-[#394D5C]"
              data-testid="input-first-name"
            />
          </div>

          {/* Last Name Input */}
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-[#394D5C] mb-2">
              Last Name | Apellido(s) | Apelido(s) <span className="text-red-500">*</span>
            </label>
            <input
              id="lastName"
              type="text"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              required
              className="w-full px-4 py-2 border-2 border-[#E3E5E8] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3BA9A3] focus:border-transparent text-[#394D5C]"
              data-testid="input-last-name"
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#394D5C] mb-2">
              Email Address | Correo Electrónico | Endereço de e-mail <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full px-4 py-2 border-2 border-[#E3E5E8] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3BA9A3] focus:border-transparent text-[#394D5C]"
              data-testid="input-email"
            />
          </div>

          {/* WhatsApp Number Input */}
          <div>
            <label htmlFor="whatsapp" className="block text-sm font-medium text-[#394D5C] mb-2">
              WhatsApp Number (Include Country Code, e.g., +44 for UK, +34 for Spain) | Número de WhatsApp (Incluye código de país, ej. +34 para España) | Número de WhatsApp (Inclua o código do país, ex. +351 para Portugal) <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B8299]" />
              <input
                id="whatsapp"
                type="tel"
                placeholder="+351 XXX XXX XXX"
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                required
                className="w-full pl-11 pr-4 py-2 border-2 border-[#E3E5E8] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3BA9A3] focus:border-transparent text-[#394D5C]"
                data-testid="input-whatsapp"
              />
            </div>
          </div>

          {/* Plan Select */}
          <div>
            <label htmlFor="plan" className="block text-sm font-medium text-[#394D5C] mb-2">
              Choose Your Plan <span className="text-red-500">*</span>
            </label>
            <select
              id="plan"
              value={formData.plan}
              onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
              className="w-full px-4 py-2 border-2 border-[#E3E5E8] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3BA9A3] focus:border-transparent text-[#394D5C] bg-white"
              data-testid="select-plan"
            >
              <option value="offline" data-testid="option-offline">Offline - €145</option>
              <option value="online" data-testid="option-online">Online - €295 (Most Popular)</option>
              <option value="premium" data-testid="option-premium">Premium - €345</option>
              <option value="online-a2-part1" data-testid="option-online-a2-part1">Online A2 Part 1 - €395</option>
              <option value="online-a2-part2" data-testid="option-online-a2-part2">Online A2 Part 2 - €445</option>
              <option value="premium-a2-part1" data-testid="option-premium-a2-part1">Premium A2 Part 1 - €445</option>
              <option value="premium-a2-part2" data-testid="option-premium-a2-part2">Premium A2 Part 2 - €495</option>
            </select>
          </div>

          {/* Comments Input */}
          <div>
            <label htmlFor="comments" className="block text-sm font-medium text-[#394D5C] mb-2">
              Any additional comments? | ¿Algún otro comentario? | Algum comentário adicional?
            </label>
            <textarea
              id="comments"
              value={formData.comments}
              onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
              rows={4}
              className="w-full px-4 py-2 border-2 border-[#E3E5E8] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3BA9A3] focus:border-transparent text-[#394D5C] resize-none"
              data-testid="input-comments"
            />
          </div>

          {/* Terms and Conditions */}
          <div>
            <label className="block text-sm font-medium text-[#394D5C] mb-2">
              Terms and Conditions <span className="text-red-500">*</span>
            </label>
            <p className="text-xs text-[#6B8299] mb-3">
              By checking the box and submitting this form you consent to the collection, processing, and storage of your personal data for the purposes of communicating with you about our services and other language learning opportunities. You may withdraw your consent and unsubscribe from our communications at any time by emailing us at info@iflimmersion.com.
            </p>
            <div className="flex items-start gap-3">
              <input
                id="terms"
                type="checkbox"
                checked={formData.termsAccepted}
                onChange={(e) => setFormData({ ...formData, termsAccepted: e.target.checked })}
                required
                className="mt-1 w-4 h-4 border-2 border-[#E3E5E8] rounded focus:ring-2 focus:ring-[#3BA9A3] text-[#3BA9A3]"
                data-testid="checkbox-terms"
              />
              <label htmlFor="terms" className="text-sm text-[#394D5C] cursor-pointer">
                I accept the terms and conditions <span className="text-red-500">*</span>
              </label>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <button 
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border-2 border-[#E3E5E8] rounded-xl font-medium text-[#394D5C] hover:bg-[#F5F6F7] transition-colors duration-200"
              data-testid="button-cancel"
            >
              Cancel
            </button>
            <button 
              type="submit"
              className="flex-1 px-4 py-2 bg-[#3BA9A3] text-white rounded-xl font-medium hover:bg-[#359690] transition-colors duration-200 shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.08),0px_2px_4px_-1px_rgba(0,0,0,0.05)]"
              data-testid="button-submit-enrollment"
            >
              Submit Enrollment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}