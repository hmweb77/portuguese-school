"use client"
import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter signup:', newsletterEmail);
    setNewsletterEmail("");
  };

  return (
    <footer className="bg-white border-t border-[#E3E5E8]" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#3BA9A3]">IFLI</h3>
            <p className="text-[#6B8299] mb-4">
              Learn Portuguese fast with live classes, expert teachers, and a global community.
            </p>
            <div className="flex gap-4">
              <button className="p-2 hover:bg-[#F5F6F7] rounded-[12px] transition-colors" data-testid="button-social-facebook">
                <Facebook className="w-5 h-5 text-[#394D5C]" />
              </button>
              <button className="p-2 hover:bg-[#F5F6F7] rounded-[12px] transition-colors" data-testid="button-social-instagram">
                <Instagram className="w-5 h-5 text-[#394D5C]" />
              </button>
              <button className="p-2 hover:bg-[#F5F6F7] rounded-[12px] transition-colors" data-testid="button-social-youtube">
                <Youtube className="w-5 h-5 text-[#394D5C]" />
              </button>
              <button className="p-2 hover:bg-[#F5F6F7] rounded-[12px] transition-colors" data-testid="button-social-linkedin">
                <Linkedin className="w-5 h-5 text-[#394D5C]" />
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[#394D5C]">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-[#6B8299] hover:text-[#394D5C] transition-colors" data-testid="link-about">About the Program</a></li>
              <li><a href="#pricing" className="text-[#6B8299] hover:text-[#394D5C] transition-colors" data-testid="link-pricing">Pricing</a></li>
              <li><a href="#faq" className="text-[#6B8299] hover:text-[#394D5C] transition-colors" data-testid="link-faq">FAQ</a></li>
              <li><a href="#contact" className="text-[#6B8299] hover:text-[#394D5C] transition-colors" data-testid="link-contact">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[#394D5C]">Stay Updated</h4>
            <p className="text-[#6B8299] mb-4 text-sm">
              Get course updates, Portuguese tips, and exclusive offers.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
                className="flex-1 px-4 py-2 border-2 border-[#E3E5E8] rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[#3BA9A3] focus:border-transparent text-[#394D5C]"
                data-testid="input-newsletter"
              />
              <button 
                type="submit"
                className="px-4 py-2 bg-[#3BA9A3] text-white rounded-[12px] font-medium hover:bg-[#359690] transition-colors duration-200"
                data-testid="button-newsletter"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-[#E3E5E8] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#6B8299]">
          <p>© 2026 IFLI. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-[#394D5C] transition-colors" data-testid="link-privacy">Privacy Policy</a>
            <a href="#terms" className="hover:text-[#394D5C] transition-colors" data-testid="link-terms">Terms of Service</a>
            <a href="#refund" className="hover:text-[#394D5C] transition-colors" data-testid="link-refund">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}