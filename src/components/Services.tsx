import { motion } from 'framer-motion';

const services = [
  {
    title: 'Landing Pages',
    description: 'Focused, high-converting pages designed around a specific service, offer or campaign.',
  },
  {
    title: 'Business Websites',
    description: 'Professional websites that establish credibility and make it easy for customers to contact you.',
  },
  {
    title: 'Website Redesign',
    description: 'Transform an outdated website into a modern, responsive and conversion-focused experience.',
  },
  {
    title: 'Conversion-Focused Websites',
    description: 'Structure, messaging and calls-to-action designed to turn visitors into enquiries.',
  },
  {
    title: 'Website Maintenance',
    description: 'Post-launch updates, small improvements and ongoing technical support.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-12 bg-accent/30">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter mb-10 sm:mb-16 text-center"
        >
          What I Can Build For You
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-background p-6 sm:p-8 border border-foreground/5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 bg-foreground/5 flex items-center justify-center mb-5 sm:mb-6 group-hover:bg-foreground group-hover:text-background transition-colors">
                <span className="font-bold font-mono text-sm">0{index + 1}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold tracking-tight mb-3 sm:mb-4">{service.title}</h3>
              <p className="text-foreground/70 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
