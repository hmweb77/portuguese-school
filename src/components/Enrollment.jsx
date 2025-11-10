"use client"
import { useState } from "react";
import { X } from "lucide-react";

export default function EnrollmentModal({ open, onClose, onSubmit, selectedPlan }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    plan: selectedPlan || "online"
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: "", email: "", plan: "online" });
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
        className="relative bg-white rounded-[12px] shadow-[0px_30px_50px_-12px_rgba(0,0,0,0.20),0px_15px_30px_-12px_rgba(0,0,0,0.12)] w-full max-w-md mx-4 p-6"
        data-testid="modal-enrollment"
      >
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-2xl font-bold text-[#394D5C]" data-testid="text-modal-title">
              Enroll in Winter Immersion
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
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[#394D5C] mb-2">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full px-4 py-2 border-2 border-[#E3E5E8] rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[#3BA9A3] focus:border-transparent text-[#394D5C]"
              data-testid="input-name"
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#394D5C] mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full px-4 py-2 border-2 border-[#E3E5E8] rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[#3BA9A3] focus:border-transparent text-[#394D5C]"
              data-testid="input-email"
            />
          </div>

          {/* Plan Select */}
          <div>
            <label htmlFor="plan" className="block text-sm font-medium text-[#394D5C] mb-2">
              Choose Your Plan
            </label>
            <select
              id="plan"
              value={formData.plan}
              onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
              className="w-full px-4 py-2 border-2 border-[#E3E5E8] rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[#3BA9A3] focus:border-transparent text-[#394D5C] bg-white"
              data-testid="select-plan"
            >
              <option value="offline" data-testid="option-offline">Offline - $299</option>
              <option value="online" data-testid="option-online">Online - $599 (Most Popular)</option>
              <option value="premium" data-testid="option-premium">Premium - $999</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <button 
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border-2 border-[#E3E5E8] rounded-[12px] font-medium text-[#394D5C] hover:bg-[#F5F6F7] transition-colors duration-200"
              data-testid="button-cancel"
            >
              Cancel
            </button>
            <button 
              type="submit"
              className="flex-1 px-4 py-2 bg-[#3BA9A3] text-white rounded-[12px] font-medium hover:bg-[#359690] transition-colors duration-200 shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.08),0px_2px_4px_-1px_rgba(0,0,0,0.05)]"
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