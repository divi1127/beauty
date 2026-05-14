import React from 'react';
import { motion } from 'framer-motion';
import { gallery } from '../data/content';

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-primary uppercase tracking-[5px] font-bold text-sm mb-4 block">Our Work</span>
          <h2 className="text-5xl md:text-6xl font-bold font-serif text-secondary text-center">Megas Beauty Gallery</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {gallery.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative group h-80 overflow-hidden rounded-2xl cursor-pointer"
            >
              <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-secondary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <h4 className="text-white text-2xl font-serif font-bold tracking-wider">{item.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
