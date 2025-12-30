import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { client } from './lib/sanity';
import Navbar from './Navbar';
import About from './components/About';
import Services from './components/Services';
import { Reveal } from './components/Reveal';
import { CheckCircle2, HardHat, ShieldCheck, Cpu } from 'lucide-react'; 
import ceoPhoto from './assets/ceo.jpg';

function App() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const query = '*[_type == "siteContent"][0]';
    client.fetch(query).then((data) => {
      setContent(data);
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* HERO SECTION */}
      <section id="home" className="relative h-screen flex items-center pt-20 px-6 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80')] bg-cover bg-center" />
        <div className="max-w-7xl mx-auto relative z-10">
          <Reveal>
            <h2 className="text-5xl md:text-8xl font-bold mb-8 leading-[0.9] tracking-tighter">
              Strong <br/>Foundations. <br/>
              <span className="text-slate-500">{content?.heroSubtitle || "Smart Engineering."}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="text-lg md:text-xl text-slate-300 max-w-xl mb-10 font-light leading-relaxed">
              {content?.heroDescription || "BaseTech Engineering delivers high-quality, safe, and sustainable infrastructure solutions."}
            </p>
          </Reveal>
          <Reveal delay={0.6}>
             <div className="flex gap-4">
                <a href="#services" className="px-8 py-4 bg-accent hover:bg-blue-700 text-white font-bold transition-all no-underline">
                  Our Services
                </a>
             </div>
          </Reveal>
        </div>
      </section>

      <About />

      {/* NEW UPDATED TECHNICAL CAPACITY & SAFETY SECTION */}
      <section className="py-24 bg-slate-50 px-6 relative overflow-hidden">
        {/* Sophisticated Blueprint Lines */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Reveal>
                <span className="text-accent font-bold tracking-[0.3em] uppercase text-xs block mb-4">Core Competency</span>
                <h3 className="text-4xl font-bold mb-8 text-primary font-display">Technical Capacity</h3>
              </Reveal>
              <div className="space-y-4">
                {[
                  "Skilled engineers and technicians",
                  "Modern design and analysis tools",
                  "Industry-standard software (AutoCAD, Revit, BIM)",
                  "Effective site supervision"
                ].map((item, i) => (
                  <Reveal key={i} delay={i * 0.1}>
                    <div className="flex items-center gap-4 p-5 bg-white border border-slate-200 shadow-sm rounded-sm hover:border-accent transition-colors">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span className="text-slate-700 font-medium text-lg">{item}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Modern Safety Block */}
            <div className="bg-primary p-12 text-white relative shadow-2xl">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/20 -mr-8 -mt-8 rotate-45" />
              <Reveal>
                <ShieldCheck className="text-accent mb-6" size={56} />
                <h3 className="text-3xl font-bold mb-6 font-display">Health, Safety & Quality</h3>
                <p className="text-slate-300 mb-8 leading-relaxed text-lg font-light">
                  {content?.safetyMessage || "We are committed to maintaining high standards of health, safety, and environmental protection on all projects. Quality assurance is achieved through strict material selection and supervision."}
                </p>
                <div className="flex items-center gap-3 text-accent font-bold italic pt-6 border-t border-slate-800">
                  <CheckCircle2 size={24} />
                  <span className="tracking-wide">Compliance with ISO Specifications</span>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <Services />

      {/* CEO MESSAGE SECTION */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            <div className="w-full lg:w-2/5">
              <Reveal>
                <div className="relative group">
                  <div className="absolute -inset-4 border-2 border-slate-100 group-hover:border-accent transition-colors duration-700" />
                  <div className="relative aspect-[4/5] overflow-hidden bg-slate-200 shadow-2xl">
                    <motion.img 
                      src={ceoPhoto} 
                      alt="CEO" 
                      className="w-full h-full object-cover cursor-pointer"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-accent text-white p-6 shadow-xl hidden md:block">
                    <p className="text-xs font-bold tracking-[0.2em] uppercase">Founder & CEO</p>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="w-full lg:w-3/5">
              <Reveal delay={0.3}>
                <span className="text-accent font-bold tracking-[0.3em] uppercase text-xs">Message from the CEO</span>
                <h3 className="text-4xl md:text-5xl font-bold mt-4 mb-8 text-primary font-display leading-[1.1]">
                  "Strong infrastructure begins with <br className="hidden md:block"/> 
                  <span className="text-slate-400">strong engineering principles."</span>
                </h3>
                <p className="text-xl text-slate-600 italic mb-10 leading-relaxed font-light border-l-4 border-accent pl-8">
                  "{content?.ceoMessage || "At BaseTech Engineering, our goal is to deliver projects that stand the test of time."}"
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-3xl font-bold text-primary">Alpha Mahmud Bah</h4>
                    <p className="text-accent font-bold tracking-widest text-sm uppercase">Civil Engineering Professional</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-primary text-white pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
            <p className="text-xl font-medium">Contact: {content?.phoneNumber || "+232 76252233"}</p>
            <p className="text-slate-500 text-[10px] tracking-widest uppercase mt-4">©️ 2025 BaseTech Engineering.</p>
        </div>
      </footer> 

      {/* Floating WhatsApp for Business */}
      <motion.a
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/23276252233"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[999] bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.4)] flex items-center justify-center hover:bg-[#20ba5a] transition-colors"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.938 3.659 1.432 5.63 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </motion.a>
    </div>
  );
}

export default App;