"use client"
import { useState } from "react";
import { X, Phone, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.termsAccepted) {
      setError("Please accept the terms and conditions to continue.");
      return;
    }

    setIsSubmitting(true);
    setError("");
    setSuccess(false);

    try {
      // Call API to save enrollment
      const response = await fetch('/api/send-enrollment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit enrollment');
      }

      console.log('✅ Enrollment successful:', data);
      
      // Show success message
      setSuccess(true);
      
      // Call parent callback
      if (onSubmit) {
        onSubmit(formData);
      }
      
      // Reset form after delay
      setTimeout(() => {
        setFormData({ 
          firstName: "", 
          lastName: "", 
          email: "", 
          whatsapp: "", 
          comments: "",
          plan: "online",
          termsAccepted: false 
        });
        setSuccess(false);
        onClose();
      }, 2000);
      
    } catch (err) {
      console.error('❌ Enrollment error:', err);
      setError(err.message || 'Failed to submit enrollment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
        {/* Success Message */}
        {success && (
          <div className="absolute inset-0 bg-white rounded-xl flex items-center justify-center z-10">
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-green-600 mb-2">Success!</h3>
              <p className="text-gray-600">Your enrollment has been submitted successfully.</p>
              <p className="text-sm text-gray-500 mt-2">Check your email for confirmation.</p>
            </div>
          </div>
        )}

        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-2xl font-bold text-[#394D5C]" data-testid="text-modal-title">
              Pre-Enroll in Portuguese Immersion
            </h2>
            <button
              onClick={onClose}
              className="text-[#6B8299] hover:text-[#394D5C] transition-colors"
              disabled={isSubmitting}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <p className="text-sm text-[#6B8299]">
            Fill out the form below and we'll be in touch within 24 hours to complete your enrollment.
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-red-800">{error}</p>
          </div>
        )}
        
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
              disabled={isSubmitting}
              className="w-full px-4 py-2 border-2 border-[#E3E5E8] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3BA9A3] focus:border-transparent text-[#394D5C] disabled:bg-gray-50 disabled:cursor-not-allowed"
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
              disabled={isSubmitting}
              className="w-full px-4 py-2 border-2 border-[#E3E5E8] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3BA9A3] focus:border-transparent text-[#394D5C] disabled:bg-gray-50 disabled:cursor-not-allowed"
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
              disabled={isSubmitting}
              className="w-full px-4 py-2 border-2 border-[#E3E5E8] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3BA9A3] focus:border-transparent text-[#394D5C] disabled:bg-gray-50 disabled:cursor-not-allowed"
              data-testid="input-email"
            />
          </div>

          {/* WhatsApp Number Input */}
          <div>
            <label htmlFor="whatsapp" className="block text-sm font-medium text-[#394D5C] mb-2">
              WhatsApp Number (Include Country Code) <span className="text-red-500">*</span>
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
                disabled={isSubmitting}
                className="w-full pl-11 pr-4 py-2 border-2 border-[#E3E5E8] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3BA9A3] focus:border-transparent text-[#394D5C] disabled:bg-gray-50 disabled:cursor-not-allowed"
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
              disabled={isSubmitting}
              className="w-full px-4 py-2 border-2 border-[#E3E5E8] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3BA9A3] focus:border-transparent text-[#394D5C] bg-white disabled:bg-gray-50 disabled:cursor-not-allowed"
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
              Any additional comments?
            </label>
            <textarea
              id="comments"
              value={formData.comments}
              onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
              rows={4}
              disabled={isSubmitting}
              className="w-full px-4 py-2 border-2 border-[#E3E5E8] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3BA9A3] focus:border-transparent text-[#394D5C] resize-none disabled:bg-gray-50 disabled:cursor-not-allowed"
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
                disabled={isSubmitting}
                className="mt-1 w-4 h-4 border-2 border-[#E3E5E8] rounded focus:ring-2 focus:ring-[#3BA9A3] text-[#3BA9A3] disabled:cursor-not-allowed"
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
              disabled={isSubmitting}
              className="flex-1 px-4 py-2 border-2 border-[#E3E5E8] rounded-xl font-medium text-[#394D5C] hover:bg-[#F5F6F7] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              data-testid="button-cancel"
            >
              Cancel
            </button>
            <button 
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-4 py-2 bg-[#3BA9A3] text-white rounded-xl font-medium hover:bg-[#359690] transition-colors duration-200 shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.08),0px_2px_4px_-1px_rgba(0,0,0,0.05)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              data-testid="button-submit-enrollment"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                'Submit Enrollment'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}