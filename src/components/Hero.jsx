import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { slides } from '../data/content';

export default function Hero({ currentSlide, setCurrentSlide }) {
  return (
    <section id="home" className="relative h-screen overflow-hidden">
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${slides[currentSlide].image})` }}
        >
          <div className="container mx-auto px-6 h-full flex items-center">
            <div className="max-w-3xl text-white">
              <motion.span
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="block text-primary-light uppercase tracking-[8px] mb-6 text-sm font-bold"
              >
                {slides[currentSlide].tagline}
              </motion.span>
              <motion.h1
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-6xl md:text-8xl font-bold leading-[1.1] mb-8 font-serif"
              >
                {slides[currentSlide].title}
              </motion.h1>
              <motion.p
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-lg md:text-xl mb-10 opacity-90 max-w-xl leading-relaxed"
              >
                {slides[currentSlide].description}
              </motion.p>
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex flex-wrap gap-6"
              >
                <button className="btn btn-primary">Book Appointment</button>
                <button className="btn border-2 border-white text-white hover:bg-white hover:text-secondary">Explore Services</button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      <div className="absolute bottom-12 right-12 z-10 flex gap-4">
        <button onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)} className="w-14 h-14 flex items-center justify-center border border-white/20 rounded-full text-white hover:bg-primary hover:border-primary transition-all duration-300">
          <ChevronLeft size={24} />
        </button>
        <button onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)} className="w-14 h-14 flex items-center justify-center border border-white/20 rounded-full text-white hover:bg-primary hover:border-primary transition-all duration-300">
          <ChevronRight size={24} />
        </button>
      </div>

      <motion.div 
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }} 
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]" 
      />
      <motion.div 
        animate={{ x: [0, -40, 0], y: [0, -50, 0] }} 
        transition={{ duration: 25, repeat: Infinity }}
        className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]" 
      />
    </section>
  );
}
