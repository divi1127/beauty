import React from 'react';
import { motion } from 'framer-motion';
import { stats } from '../data/content';

export default function Stats() {
  return (
    <section className="bg-secondary py-20 text-white relative z-10">
      <div className="container mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-5xl font-bold text-primary mb-2 font-serif">{stat.value}{stat.suffix}</h3>
            <p className="text-gray-400 uppercase tracking-widest text-xs font-semibold">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
