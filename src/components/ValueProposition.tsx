import React from 'react';
import { motion } from 'framer-motion';

const ValueProposition = () => {
  const words = ['Trust.', 'Professionalism.', 'Clarity.', 'Conversion.'];

  return (
    <section className="py-20 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-12 bg-foreground text-background">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter mb-6 sm:mb-8 leading-tight"
        >
          Your Business Deserves a Website That Reflects Its Value.
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-xl md:text-2xl text-background/70 max-w-3xl mx-auto mb-10 sm:mb-16 leading-relaxed"
        >
          Your website is often the first impression a potential customer has of your business. It should communicate{' '}
          <span className="inline">
            {words.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + (i * 0.2) }}
                className="inline-block mr-[0.4em] text-background font-semibold"
              >
                {word}
              </motion.span>
            ))}
          </span>
          {' '}before you ever speak to them.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
        >
          <a
            href="#contact"
            className="inline-block w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-5 bg-background text-foreground text-base sm:text-lg uppercase tracking-widest font-bold hover:bg-background/90 transition-colors"
          >
            Build My Website
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ValueProposition;
