import React from 'react';
import { motion } from 'framer-motion';
import { Share2, Mail, Phone } from 'lucide-react';
import { team } from '../data/content';

export default function Team() {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-primary uppercase tracking-[5px] font-bold text-sm mb-4 block">Expert Team</span>
          <h2 className="text-5xl md:text-6xl font-bold font-serif text-secondary">Meet Our Professionals</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl h-[500px]"
            >
              <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-transparent to-transparent flex flex-col justify-end p-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h4 className="text-2xl font-bold text-white font-serif mb-1">{member.name}</h4>
                <p className="text-primary-light font-semibold uppercase tracking-widest text-xs mb-6">{member.role}</p>
                <div className="flex gap-4">
                  {[Share2, Mail, Phone].map((Icon, i) => (
                    <div key={i} className="w-9 h-9 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors cursor-pointer">
                      <Icon size={16} />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
