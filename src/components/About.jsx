import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="pr-12 pb-12">
            <img src="/images/hero_slide_1.jpg" alt="About" className="rounded-2xl shadow-3xl grayscale-[20%] hover:grayscale-0 transition-all duration-700" />
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-0 right-0 bg-primary text-white p-10 rounded-2xl shadow-2xl text-center min-w-[200px]"
            >
              <span className="text-5xl font-bold block mb-2 font-serif">15+</span>
              <span className="text-xs uppercase tracking-[3px] font-bold">Years of Trust</span>
            </motion.div>
          </div>
          <div className="absolute top-10 left-10 -z-10 w-full h-full border-2 border-primary/20 rounded-2xl"></div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary uppercase tracking-[5px] font-bold text-sm mb-6 block">Our Salon Story</span>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight font-serif text-secondary">A Premium Beauty Experience in MK</h2>
          <p className="text-gray-600 mb-10 text-lg leading-relaxed italic">
            "We provide a tranquil space for those looking to elevate their natural allure and express their personal flair. Our technicians are here to celebrate you."
          </p>
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {['Award Winning Artists', 'Premium Spa Products', 'Natural Skincare', 'Certified Salon'].map((item) => (
              <div key={item} className="flex items-center gap-4 group">
                <div className="w-6 h-6 bg-primary/10 flex items-center justify-center rounded-full group-hover:bg-primary transition-colors">
                  <Check className="w-3 h-3 text-primary group-hover:text-white" />
                </div>
                <span className="font-bold text-secondary text-sm tracking-wide uppercase">{item}</span>
              </div>
            ))}
          </div>
          <button className="btn btn-primary group">
            About More 
            <ArrowRight className="inline-block ml-2 group-hover:translate-x-2 transition-transform" size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
