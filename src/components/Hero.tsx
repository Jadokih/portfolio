import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const headline = "Your Business Deserves a Digital Presence That Stands Out.";
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.2, 0.65, 0.3, 0.9] } },
  };

  return (
    <section className="relative min-h-[90svh] flex items-center justify-center pt-28 pb-14 sm:pt-32 sm:pb-16 px-5 sm:px-8 lg:px-12 overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] md:w-[800px] md:h-[800px] max-w-[800px] max-h-[800px] border border-foreground/5 rounded-full pointer-events-none opacity-50"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] md:w-[600px] md:h-[600px] max-w-[600px] max-h-[600px] border border-foreground/5 rounded-full pointer-events-none opacity-50"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-5 sm:mb-6 flex items-center justify-center space-x-2"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-[0.65rem] sm:text-xs uppercase tracking-[0.12em] sm:tracking-[0.2em] text-foreground/60 font-semibold text-left sm:text-center">
            Based in Brazil · Working with clients internationally
          </span>
        </motion.div>

        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-[2.5rem] sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] mb-6 sm:mb-8"
        >
          {headline.split(' ').map((word, i) => (
            <motion.span key={i} variants={wordVariants} className="inline-block mr-[0.25em]">
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-base sm:text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed"
        >
          I design and develop modern, high-converting websites and landing pages for businesses that want to look professional online and turn visitors into enquiries.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-6"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto px-6 sm:px-8 py-4 text-sm sm:text-base text-center bg-foreground text-background uppercase tracking-widest font-semibold hover:bg-foreground/90 transition-colors"
          >
            Get a Free Quote
          </a>
          <a
            href="#work"
            className="w-full sm:w-auto px-6 sm:px-8 py-4 text-sm sm:text-base text-center bg-transparent border border-foreground/20 text-foreground uppercase tracking-widest font-semibold hover:border-foreground transition-colors"
          >
            View My Work
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
