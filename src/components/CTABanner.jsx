import React from 'react';

export default function CTABanner() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 text-white flex flex-col lg:flex-row justify-between items-center gap-12 text-center lg:text-left">
        <div>
          <span className="uppercase tracking-[6px] text-sm font-bold mb-4 block opacity-90">Schedule A Service</span>
          <h2 className="text-5xl md:text-6xl font-bold font-serif leading-tight">Explore Every Detail of Megas</h2>
        </div>
        <button className="px-12 py-6 bg-secondary text-white font-bold uppercase tracking-[4px] hover:bg-white hover:text-secondary transition-all duration-500 shadow-2xl rounded-sm text-sm">
          Book Appointment
        </button>
      </div>
      <div className="absolute inset-0 bg-black/5"></div>
    </section>
  );
}
