import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/content';

export default function BookingForm() {
  return (
    <section id="booking" className="py-24 bg-accent/30 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-4xl overflow-hidden grid md:grid-cols-2">
          {/* Info Side */}
          <div className="bg-primary p-12 text-white flex flex-col justify-center">
            <h2 className="text-4xl font-serif font-bold mb-6">Book an Appointment</h2>
            <p className="text-white/90 text-lg mb-8 leading-relaxed italic">
              “Book your appointment today and enjoy professional beauty services from our experienced beauticians. Choose your preferred service, date, and time, and we will confirm your booking shortly.”
            </p>
            <div className="space-y-4 text-sm font-semibold opacity-80 uppercase tracking-widest">
              <p>Professional Care</p>
              <p>Experienced Stylists</p>
              <p>Premium Products</p>
            </div>
          </div>
          
          {/* Form Side */}
          <div className="p-12">
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-primary transition-colors text-sm font-semibold"
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-primary transition-colors text-sm font-semibold"
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-primary transition-colors text-sm font-semibold"
                />
                <select 
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-primary transition-colors text-sm font-semibold text-gray-400"
                >
                  <option value="">Select Service</option>
                  {services.map((s, i) => (
                    <option key={i} value={s.title}>{s.title}</option>
                  ))}
                </select>
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    type="date" 
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-primary transition-colors text-sm font-semibold text-gray-400"
                  />
                  <input 
                    type="time" 
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-primary transition-colors text-sm font-semibold text-gray-400"
                  />
                </div>
                <textarea 
                  placeholder="Message / Special Request" 
                  rows="4" 
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-primary transition-colors text-sm font-semibold"
                ></textarea>
              </div>
              <button className="w-full btn btn-primary py-5 rounded-xl shadow-lg">
                Confirm Booking
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Decorative Blur */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
    </section>
  );
}
