import React from 'react';
import { Reveal } from './Reveal';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-white overflow-hidden border-b border-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <Reveal>
            <span className="text-accent font-bold tracking-[0.3em] uppercase text-xs mb-4 block">About BaseTech</span>
            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-8 leading-tight font-display">
              Reliable Engineering. <br/>Technically Sound.
            </h2>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-xl text-slate-600 leading-relaxed font-light">
              BaseTech Engineering was established to provide technically sound engineering and 
              construction services. Our company focuses on quality workmanship, professional integrity, 
              and long-lasting infrastructure solutions that contribute to national development.
            </p>
          </Reveal>
        </div>

        {/* Vision & Mission Cards - Redesigned for Sophistication */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          <Reveal delay={0.4}>
            <div className="group p-10 bg-slate-50 hover:bg-white border border-transparent hover:border-slate-200 transition-all duration-500 rounded-sm">
              <h4 className="font-bold text-2xl mb-6 text-primary flex items-center gap-3">
                <span className="w-8 h-[2px] bg-accent"></span> Vision
              </h4>
              <p className="text-slate-600 text-lg leading-relaxed font-light italic">
                "To become a trusted and leading engineering and construction company known for 
                strong foundations, technical excellence, and sustainable infrastructure solutions."
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.5}>
            <div className="group p-10 bg-primary text-white transition-all duration-500 rounded-sm shadow-xl">
              <h4 className="font-bold text-2xl mb-6 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-accent"></span> Mission
              </h4>
              <p className="text-slate-300 text-lg leading-relaxed font-light">
                To deliver professional, efficient, and innovative engineering and construction 
                services by applying modern practices, strict quality control, and a strong 
                commitment to safety and client satisfaction.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;