import React from 'react';

export default function Navbar({ scrolled }) {
  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className={`font-serif text-3xl font-bold tracking-wider ${scrolled ? 'text-primary' : 'text-white'}`}>MEGAS</a>
        <nav className="hidden lg:flex gap-8">
          {['Home', 'About', 'Services', 'Gallery', 'Booking', 'Team', 'Blog', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className={`text-[13px] font-bold uppercase tracking-widest hover:text-primary transition-colors ${scrolled ? 'text-secondary' : 'text-white'}`}>
              {item}
            </a>
          ))}
        </nav>
        <a href="#booking" className={`btn transition-all duration-300 hidden sm:block ${scrolled ? 'btn-primary' : 'bg-white text-primary hover:bg-primary hover:text-white'}`}>Book Now</a>
      </div>
    </header>
  );
}
