import React from 'react';
import { motion } from 'framer-motion';

const plans = [
  {
    name: 'STARTER',
    price: 'From €350',
    description: 'For simple businesses and professionals who need a strong online presence.',
    features: [
      'One-page website',
      'Responsive design',
      'Mobile-first development',
      'Contact CTA',
      'WhatsApp integration',
      'Google Maps',
      'Social links',
      'Basic SEO',
      'Modern animations'
    ],
    highlight: false,
  },
  {
    name: 'PRO',
    price: 'From €650',
    description: 'For businesses that need a more complete and polished website.',
    features: [
      'Custom design',
      'Multiple sections/pages',
      'Conversion-focused structure',
      'Professional animations',
      'Contact/booking integration',
      'WhatsApp',
      'Google Maps',
      'Basic SEO',
      'Mobile optimisation',
      'Performance optimisation'
    ],
    highlight: true,
  },
  {
    name: 'PREMIUM',
    price: 'From €1,000',
    description: 'For businesses that need a fully custom digital experience.',
    features: [
      'Fully custom design',
      'Multi-page website',
      'Advanced interactions',
      'Conversion-focused UX',
      'Custom sections',
      'Forms and integrations',
      'Advanced responsive behaviour',
      'SEO foundations',
      'Performance optimisation',
      'Post-launch support'
    ],
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter mb-4"
          >
            Clear Pricing. No Mystery.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-xl text-foreground/70 max-w-2xl mx-auto"
          >
            You should know roughly what a website investment looks like before starting a conversation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 max-w-md sm:max-w-xl lg:max-w-none mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 sm:p-8 border flex flex-col h-full ${
                plan.highlight
                  ? 'border-foreground bg-foreground text-background shadow-xl'
                  : 'border-foreground/10 bg-background hover:border-foreground/30 transition-colors'
              }`}
            >
              <h3 className="text-sm font-bold tracking-widest uppercase mb-4">{plan.name}</h3>
              <div className="text-3xl font-bold mb-4">{plan.price}</div>
              <p className={`text-sm mb-6 sm:mb-8 pb-6 sm:pb-8 border-b ${plan.highlight ? 'border-background/20 text-background/80' : 'border-foreground/10 text-foreground/70'}`}>
                {plan.description}
              </p>
              
              <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start text-sm">
                    <span className={`mr-2 mt-0.5 ${plan.highlight ? 'text-background/50' : 'text-foreground/30'}`}>+</span>
                    <span className={plan.highlight ? 'text-background/90' : 'text-foreground/80'}>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href="#contact"
                className={`w-full py-4 text-center text-sm font-bold tracking-widest uppercase transition-colors ${
                  plan.highlight
                    ? 'bg-background text-foreground hover:bg-background/90'
                    : 'bg-foreground text-background hover:bg-foreground/90'
                }`}
              >
                Get My Exact Estimate
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8 sm:mt-12 text-xs sm:text-sm text-foreground/50 italic"
        >
          * Final pricing depends on the number of pages, integrations, content requirements and project complexity.
        </motion.p>
      </div>
    </section>
  );
};

export default Pricing;
