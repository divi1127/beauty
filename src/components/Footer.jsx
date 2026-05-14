import React from 'react';
import { Share2, Mail, Star, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-secondary text-white py-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
        <div>
          <a href="#" className="font-serif text-4xl font-bold tracking-wider text-white mb-10 block">MEGAS</a>
          <p className="text-gray-400 mb-10 leading-relaxed text-lg italic">
            "As the premier beauty salon, we specialize in delivering exceptional hairdressing, makeup, and skincare services tailored to you."
          </p>
          <div className="flex gap-4">
            {[Share2, Mail, Star, Phone].map((Icon, idx) => (
              <a key={idx} href="#" className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300">
                <Icon className="w-5 h-5 text-white" />
              </a>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-xl font-bold mb-10 font-serif border-b border-primary/30 pb-4 inline-block">Our Services</h4>
          <ul className="space-y-5 text-gray-400 font-semibold text-sm tracking-wide">
            {['Sun Protection', 'Exfoliation', 'Moisturizing', 'Cleansing', 'Microneedling', 'Chemical Peels'].map(item => (
              <li key={item} className="flex items-center gap-3 hover:text-primary transition-colors cursor-pointer group">
                <div className="w-1.5 h-1.5 bg-primary/40 rounded-full group-hover:bg-primary"></div>
                {item}
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-xl font-bold mb-10 font-serif border-b border-primary/30 pb-4 inline-block">Quick Links</h4>
          <ul className="space-y-5 text-gray-400 font-semibold text-sm tracking-wide">
            {['About Us', 'Our Services', 'Meet Our Team', 'Latest News', 'Terms & Conditions'].map(item => (
              <li key={item} className="flex items-center gap-3 hover:text-primary transition-colors cursor-pointer group">
                <div className="w-1.5 h-1.5 bg-primary/40 rounded-full group-hover:bg-primary"></div>
                {item}
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-xl font-bold mb-10 font-serif border-b border-primary/30 pb-4 inline-block">Contact Us</h4>
          <div className="space-y-6 text-gray-400">
            <div className="flex gap-5">
              <MapPin className="w-6 h-6 text-primary shrink-0" />
              <span className="text-sm font-semibold leading-relaxed">25/7, MK High Street, London, United Kingdom</span>
            </div>
            <div className="flex gap-5">
              <Phone className="w-6 h-6 text-primary shrink-0" />
              <span className="text-sm font-semibold">+44 20 7946 0000</span>
            </div>
            <div className="flex gap-5">
              <Mail className="w-6 h-6 text-primary shrink-0" />
              <span className="text-sm font-semibold">info@megassalon.com</span>
            </div>
          </div>
          <div className="mt-12 pt-10 border-t border-white/5">
            <h4 className="text-lg font-bold mb-6 text-primary font-serif italic">Opening Time</h4>
            <div className="space-y-3 text-sm font-semibold">
              <p className="flex justify-between"><span>Mon - Sat:</span> <span>9am - 8pm</span></p>
              <p className="flex justify-between"><span>Sunday:</span> <span className="text-primary-light">Closed</span></p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-sm font-semibold">
        <p>&copy; 2025 Megas Salon. All Rights Reserved. Designed by Themeholy.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
}
