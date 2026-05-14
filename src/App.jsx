import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import BookingForm from './components/BookingForm';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import FaqAndBlog from './components/FaqAndBlog';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';
import { slides } from './data/content';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    const interval = setInterval(() => setCurrentSlide((prev) => (prev + 1) % slides.length), 6000);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="min-h-screen text-gray-900 font-sans selection:bg-primary selection:text-white">
      <Navbar scrolled={scrolled} />
      <Hero currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />
      <Stats />
      <About />
      <Services />
      <Gallery />
      <BookingForm />
      <Team />
      <Testimonials />
      <FaqAndBlog />
      <CTABanner />
      <Footer />
    </div>
  );
}
