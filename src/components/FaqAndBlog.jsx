import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, ArrowRight } from 'lucide-react';
import { faqs, blogs } from '../data/content';

export default function FaqAndBlog() {
  const [activeFaq, setActiveFaq] = useState(null);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20">
        <div>
          <span className="text-primary uppercase tracking-[5px] font-bold text-sm mb-6 block">Common Queries</span>
          <h2 className="text-5xl font-bold mb-10 font-serif text-secondary">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-gray-100 last:border-0">
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full py-6 flex justify-between items-center text-left group"
                >
                  <span className="text-lg font-bold text-secondary group-hover:text-primary transition-colors">{faq.q}</span>
                  <Plus className={`w-5 h-5 transition-transform duration-500 ${activeFaq === idx ? 'rotate-45 text-primary' : 'text-gray-400'}`} />
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 text-gray-600 leading-relaxed text-lg">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
        
        <div id="blog">
          <span className="text-primary uppercase tracking-[5px] font-bold text-sm mb-6 block">Latest News</span>
          <h2 className="text-5xl font-bold mb-10 font-serif text-secondary">Beauty & Wellness Tips</h2>
          <div className="space-y-8">
            {blogs.map((blog, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex gap-6 group cursor-pointer"
              >
                <div className="w-32 h-32 rounded-2xl overflow-hidden shrink-0">
                  <img src={blog.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={blog.title} />
                </div>
                <div className="py-2">
                  <span className="text-primary text-xs font-bold uppercase tracking-widest block mb-2">{blog.date}</span>
                  <h4 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors mb-4">{blog.title}</h4>
                  <span className="text-xs font-bold uppercase tracking-widest flex items-center gap-2">Read Post <ArrowRight size={14} /></span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
