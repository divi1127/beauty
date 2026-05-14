import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-24 bg-secondary text-white relative overflow-hidden">
      <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
        <div className="flex justify-center mb-8">
          {[...Array(5)].map((_, i) => <Star key={i} className="text-primary fill-primary mx-1" size={20} />)}
        </div>
        <p className="text-3xl md:text-4xl font-serif italic mb-12 leading-relaxed">
          "The level of service at Megas is absolutely unmatched. From the moment I walked in, I felt like royalty. My hair has never looked better!"
        </p>
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 rounded-full border-2 border-primary p-1 mb-4 overflow-hidden">
            <img src="/images/hero_slide_2.jpg" className="w-full h-full object-cover rounded-full" alt="Client" />
          </div>
          <h5 className="text-xl font-bold">Sarah Williams</h5>
          <span className="text-primary-light text-xs uppercase tracking-widest font-bold">Verified Client</span>
        </div>
      </div>
      <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-5 pointer-events-none text-[300px] font-serif font-bold">Megas</div>
    </section>
  );
}
