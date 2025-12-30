import React from 'react';
import { motion } from 'framer-motion'; 
import { Reveal } from './Reveal';
import { 
  Building2, HardHat, Compass, Ruler, 
  Map, Layout, Wrench, ShieldCheck, Shovel 
} from 'lucide-react';

const services = [
  { title: "Civil Engineering Consultancy", icon: <Compass /> },
  { title: "Building Construction", icon: <Building2 /> },
  { title: "Road Works & Drainage", icon: <Map /> },
  { title: "Structural Design & Analysis", icon: <Ruler /> },
  { title: "Quantity Surveying", icon: <Layout /> },
  { title: "Project Management", icon: <ShieldCheck /> },
  { title: "Foundation Works", icon: <Shovel /> },
  { title: "Renovation & Maintenance", icon: <Wrench /> },
  { title: "Architectural House Plans", icon: <HardHat /> },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <Reveal>
              <span className="text-accent font-bold tracking-[0.3em] uppercase text-xs">Expertise</span>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mt-4 font-display">Our Services</h2>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-slate-100">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              
              whileHover={{ backgroundColor: "#0F172A", color: "#FFFFFF" }}
              whileTap={{ backgroundColor: "#0F172A", color: "#FFFFFF", scale: 0.95 }}
              transition={{ 
                type: "tween", 
                ease: "easeOut", 
                duration: 0.15 
              }}
              style={{ willChange: "background-color, transform" }} 
              className="group p-10 border-[0.5px] border-slate-100 relative overflow-hidden cursor-pointer"
            >
              {/* Numbering - Glow effect on background */}
              <span className="absolute -right-4 -bottom-4 text-9xl font-bold text-slate-50 opacity-[0.05] group-hover:opacity-10 transition-opacity">
                0{index + 1}
              </span>

              {/* Icon */}
              <motion.div 
                className="text-accent mb-8"
                variants={{
                  hover: { y: -5, color: "#3B82F6" }
                }}
              >
                {React.cloneElement(service.icon, { size: 42, strokeWidth: 1 })}
              </motion.div>
              
              <h4 className="text-xl font-bold mb-4 transition-colors">
                {service.title}
              </h4>
              
              <p className="text-slate-500 text-sm group-hover:text-slate-400 transition-colors leading-relaxed">
                Applying industry-standard software and sound engineering judgment for quality delivery.
              </p>

              {/* SNAPPY BLUE LINE */}
              <motion.div 
                className="absolute bottom-0 left-0 h-1 bg-accent w-0"
                transition={{ duration: 0.2 }} 
                whileHover={{ width: "100%" }}
                whileTap={{ width: "100%" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;