import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

// Custom component for perfect iframe scaling
const ScaledIframe = ({ src, targetWidth, targetHeight }: { src: string, targetWidth: number, targetHeight: number }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setScale(entry.contentRect.width / targetWidth);
      }
    });
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => observer.disconnect();
  }, [targetWidth]);

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden bg-white">
      <iframe
        src={src}
        className="absolute top-0 left-0 origin-top-left max-w-none pointer-events-none"
        style={{
          width: `${targetWidth}px`,
          height: `${targetHeight}px`,
          transform: `scale(${scale})`,
          border: 'none'
        }}
        title="Project Preview"
      />
    </div>
  );
};

const projects = [
  {
    id: '01',
    name: 'Clinica Aura',
    category: 'Aesthetic Clinic · Landing Page',
    link: 'https://aura-seven-delta-46.vercel.app/',
    description:
      'A premium aesthetic clinic landing page designed to communicate trust, elegance and professionalism while guiding visitors toward booking a consultation.',
    features: ['Premium visual identity', 'Aesthetic clinic positioning', 'Conversion-focused CTA'],
  },
  {
    id: '02',
    name: 'Lumina Dental',
    category: 'Dental Clinic · Landing Page',
    link: 'https://dentist-mauve-ten.vercel.app/',
    description:
      'A modern dental clinic landing page designed around trust, clarity and appointment conversion.',
    features: ['Professional dental branding', 'Trust-building content', 'Appointment CTA'],
  },
];

const Portfolio = () => {
  return (
    <section id="work" className="py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter mb-4"
          >
            Selected Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-xl text-foreground/70 max-w-2xl"
          >
            Real websites designed and developed with a focus on clarity, trust and conversion.
          </motion.p>
        </div>

        <div className="space-y-20 sm:space-y-28 lg:space-y-32">
          {projects.map((project, index) => (
            <div key={project.id} className="flex flex-col lg:flex-row gap-10 sm:gap-16 lg:gap-12 items-center">
              
              {/* Project Info */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className={`w-full lg:w-5/12 flex flex-col ${index % 2 !== 0 ? 'lg:order-2' : ''}`}
              >
                <div className="text-sm font-bold text-foreground/40 mb-2 tracking-widest uppercase">
                  Project {project.id}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-2 tracking-tight">{project.name}</h3>
                <p className="text-xs sm:text-sm uppercase tracking-wider text-foreground/60 mb-5 sm:mb-6 pb-5 sm:pb-6 border-b border-foreground/10">
                  {project.category}
                </p>
                <p className="text-base sm:text-lg text-foreground/80 mb-6 sm:mb-8 leading-relaxed">
                  {project.description}
                </p>
                <ul className="space-y-2 mb-8 sm:mb-10 text-sm sm:text-base text-foreground/70">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 opacity-50">+</span> {feature}
                    </li>
                  ))}
                </ul>
                <div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full sm:w-auto justify-center items-center space-x-2 px-6 py-3.5 bg-foreground text-background text-sm font-semibold tracking-widest uppercase hover:bg-foreground/90 transition-colors group"
                  >
                    <span>View Live Website</span>
                    <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </motion.div>

              {/* Project Mockups (Mobile-First Layout) */}
              <div className={`w-full lg:w-7/12 relative mt-2 lg:mt-0 pb-8 sm:pb-14 lg:pb-12 ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                
                {/* Desktop Mockup */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full sm:w-[90%] mr-auto rounded-xl border border-foreground/10 bg-background shadow-2xl overflow-hidden relative z-10"
                >
                  {/* Browser Bar */}
                  <div className="w-full h-8 sm:h-10 bg-[#e8e8e8] border-b border-foreground/10 flex items-center px-3 sm:px-4 space-x-1.5 sm:space-x-2">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27c93f] border border-[#1aab29]"></div>
                    <div className="flex-grow flex justify-center">
                      <div className="bg-white/60 px-4 py-1 rounded-md text-[9px] sm:text-[10px] font-mono text-foreground/40 w-2/3 sm:w-1/2 text-center truncate">
                        {project.link.replace('https://', '')}
                      </div>
                    </div>
                  </div>
                  {/* Iframe content */}
                  <div className="relative w-full aspect-[16/10] bg-white group">
                     <ScaledIframe src={project.link} targetWidth={1440} targetHeight={900} />
                     {/* Overlay */}
                     <div className="absolute inset-0 z-10 hover:bg-black/5 transition-colors cursor-pointer" onClick={() => window.open(project.link, '_blank')} />
                  </div>
                </motion.div>

                {/* Mobile Mockup */}
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="absolute bottom-0 right-2 sm:right-0 w-[40%] sm:w-[35%] max-w-[220px] rounded-[1.5rem] sm:rounded-[2.5rem] border-[6px] sm:border-[12px] border-[#1a1a1a] bg-[#1a1a1a] shadow-2xl overflow-hidden z-20"
                >
                  {/* iPhone Notch */}
                  <div className="absolute top-0 inset-x-0 h-4 sm:h-6 bg-[#1a1a1a] rounded-b-xl w-[45%] mx-auto z-30"></div>
                  
                  {/* Iframe content */}
                  <div className="relative w-full aspect-[390/844] bg-white overflow-hidden rounded-[1rem] sm:rounded-[1.5rem]">
                     <ScaledIframe src={project.link} targetWidth={390} targetHeight={844} />
                     <div className="absolute inset-0 z-10 hover:bg-black/5 transition-colors cursor-pointer" onClick={() => window.open(project.link, '_blank')} />
                  </div>
                </motion.div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
