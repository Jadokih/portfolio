import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 sm:gap-14 md:gap-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-sm sm:max-w-md md:max-w-none md:w-1/2 relative pr-4 pb-4 md:pr-0 md:pb-0"
        >
          {/* Decorative frame */}
          <div className="absolute inset-0 border border-foreground/10 translate-x-4 translate-y-4"></div>
          <div className="relative aspect-[3/4] bg-accent/50 overflow-hidden">
            {/* Placeholder for Jade's Photo */}
            <img 
              src="/jade.png"
              alt="Jade Pereira" 
              className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2"
        >
          <div className="mb-6 flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-[0.65rem] sm:text-xs uppercase tracking-[0.12em] sm:tracking-[0.2em] text-foreground/60 font-semibold">
              Based in Brazil · Working internationally
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter mb-6 sm:mb-8">
            Hi, I’m Jade.
          </h2>
          <div className="space-y-5 sm:space-y-6 text-base sm:text-lg text-foreground/80 leading-relaxed">
            <p>
              I’m a Brazilian developer focused on creating modern, responsive websites and landing pages for businesses that want to build trust online and turn visitors into enquiries.
            </p>
            <p>
              I combine design, development and conversion-focused thinking to create websites that are not only visually polished, but also clear, fast and easy to use.
            </p>
            <p>
              I work directly with my clients throughout the process, from the first idea to the final launch.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
