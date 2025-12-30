import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className={`fixed w-full z-[100] transition-all duration-500 ${
        scrolled || isOpen ? 'bg-white/90 backdrop-blur-lg py-4 shadow-md' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            <div className="flex-shrink-0">
              <h1 className={`text-xl md:text-2xl font-bold tracking-tighter transition-colors duration-500 ${
                scrolled || isOpen ? 'text-primary' : 'text-white'
              }`}>
                BASETECH <span className="text-accent font-light">ENGINEERING</span>
              </h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-10">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className={`text-xs uppercase tracking-[0.2em] font-bold transition-colors ${
                    scrolled ? 'text-slate-600 hover:text-accent' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className={`p-2 transition-colors ${scrolled || isOpen ? 'text-primary' : 'text-white'}`}
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Partial Slide-Down Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-t border-slate-100 shadow-2xl md:hidden"
            >
              <div className="flex flex-col p-8 space-y-6">
                {navLinks.map((link, i) => (
                  <motion.a
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-primary text-xl font-bold tracking-tight hover:text-accent transition-colors flex justify-between items-center"
                  >
                    {link.name}
                    <span className="text-[10px] text-slate-300 font-light">0{i+1}</span>
                  </motion.a>
                ))}
                
                {/* Contact Quick Link in Menu */}
                <div className="pt-6 border-t border-slate-100">
                   <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-2">Project Inquiry</p>
                   <p className="text-primary font-bold">+232 76252233</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Overlay to dim the background slightly when menu is open */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-primary/20 backdrop-blur-sm z-[90] md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;