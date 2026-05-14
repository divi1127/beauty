import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/content';

export default function Services() {
  return (
    <section id="services" className="py-24 bg-accent/30 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-primary uppercase tracking-[5px] font-bold text-sm mb-4 block">Our Expertise</span>
          <h2 className="text-5xl md:text-6xl font-bold font-serif text-secondary">Premium Beauty Services</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white group rounded-2xl overflow-hidden hover:shadow-4xl transition-all duration-500 border border-transparent hover:border-primary/10"
            >
              <div className="h-64 overflow-hidden relative">
                <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full font-bold shadow-lg z-10">
                  {service.price}
                </div>
              </div>
              <div className="p-8 text-center">
                <h3 className="text-xl font-bold mb-3 font-serif text-secondary group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-gray-500 mb-6 text-sm leading-relaxed h-10 overflow-hidden">{service.desc}</p>
                <a href="#booking" className="text-primary font-bold text-xs uppercase tracking-widest border-b-2 border-primary/20 hover:border-primary transition-all pb-1">
                  Book Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
