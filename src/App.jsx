import React, { useEffect, useState } from 'react'; // Updated
import { motion } from 'framer-motion';
import { client } from './lib/sanity'; // Added
import Navbar from './Navbar';
import About from './components/About';
import Services from './components/Services';
import { Reveal } from './components/Reveal';
import { CheckCircle2, HardHat, ShieldCheck, Cpu } from 'lucide-react'; 
import ceoPhoto from './assets/ceo.jpg';

function App() {
  // 1. Initialize state for Sanity content
  const [content, setContent] = useState(null);

  // 2. Fetch data from Sanity on load
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
              {/* Use content if available, else show fallback text */}
              <span className="text-slate-500">{content?.heroSubtitle || "Smart Engineering."}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="text-lg md:text-xl text-slate-300 max-w-xl mb-10 font-light leading-relaxed">
              {content?.heroDescription || "BaseTech Engineering delivers high-quality, safe, and sustainable infrastructure solutions for both public and private sector clients."}
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

      {/* TECHNICAL CAPACITY & SAFETY */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <Reveal>
                <h3 className="text-3xl font-bold mb-8 text-primary font-display uppercase tracking-tight">Technical Capacity</h3>
              </Reveal>
              <div className="space-y-6">
                {[
                  { text: "Skilled engineers and technicians", icon: <HardHat size={24} className="text-accent" /> },
                  { text: "Modern design and analysis tools", icon: <Cpu size={24} className="text-accent" /> },
                  { text: "Industry-standard software (AutoCAD, Revit, BIM)", icon: <ShieldCheck size={24} className="text-accent" /> },
                  { text: "Effective site supervision", icon: <CheckCircle2 size={24} className="text-accent" /> }
                ].map((item, i) => (
                  <Reveal key={i} delay={i * 0.1}>
                    <div className="flex items-center gap-4 p-4 bg-white border border-slate-100 shadow-sm rounded-sm">
                      {item.icon}
                      <span className="text-slate-700 font-medium">{item.text}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="bg-primary p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 -mr-16 -mt-16 rounded-full" />
              <Reveal>
                <ShieldCheck className="text-safety mb-6" size={48} />
                <h3 className="text-3xl font-bold mb-6 font-display">Health, Safety & Quality</h3>
                <p className="text-slate-300 mb-8 leading-relaxed text-lg">
                  {content?.safetyMessage || "We are committed to maintaining high standards of health, safety, and environmental protection."}
                </p>
                <div className="flex items-center gap-3 text-safety font-bold italic border-t border-slate-700 pt-6">
                  <CheckCircle2 size={20} />
                  <span>ISO Standards Compliant Practice</span>
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
                  {/* Dynamic CEO message */}
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
    </div>
  );
}

export default App;