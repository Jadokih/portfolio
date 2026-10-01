import { motion } from 'framer-motion';

const WhyBrazil = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-12 bg-accent/30 border-y border-foreground/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter mb-5 sm:mb-6"
          >
            International Quality. Brazilian Pricing.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-3xl mx-auto text-base sm:text-lg text-foreground/70 space-y-4"
          >
            <p>
              I’m based in Brazil, where operating costs are significantly lower than in many European markets. That allows me to offer competitive international pricing while maintaining the same focus on design, development and user experience.
            </p>
            <p>
              Instead of paying for a large agency structure, you work directly with the person designing and building your website.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-6 lg:gap-8 mb-12 sm:mb-20">
          {[
            {
              title: 'LOWER OVERHEAD',
              desc: 'Competitive pricing without unnecessary agency costs.',
            },
            {
              title: 'DIRECT COMMUNICATION',
              desc: 'You work directly with the developer responsible for your project.',
            },
            {
              title: 'INTERNATIONAL WORK',
              desc: 'Based in Brazil. Working remotely with clients and businesses internationally.',
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="text-center p-4 sm:p-6"
            >
              <h3 className="text-sm font-bold tracking-widest uppercase mb-4">{item.title}</h3>
              <p className="text-foreground/70">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10"
        >
          <div className="bg-background p-6 sm:p-8 md:p-12">
            <h4 className="text-lg sm:text-xl font-bold mb-5 sm:mb-6 text-foreground/50">Traditional Agency</h4>
            <ul className="space-y-4 text-foreground/60">
              <li className="flex items-center space-x-2"><span>→</span> <span>Multiple layers</span></li>
              <li className="flex items-center space-x-2"><span>→</span> <span>Account managers</span></li>
              <li className="flex items-center space-x-2"><span>→</span> <span>Office overhead</span></li>
              <li className="flex items-center space-x-2"><span>→</span> <span>Higher operating costs</span></li>
            </ul>
          </div>
          <div className="bg-foreground text-background p-6 sm:p-8 md:p-12">
            <h4 className="text-lg sm:text-xl font-bold mb-5 sm:mb-6">Jade Pereira</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-2"><span>→</span> <span>Direct communication</span></li>
              <li className="flex items-center space-x-2"><span>→</span> <span>Developer-led</span></li>
              <li className="flex items-center space-x-2"><span>→</span> <span>Remote workflow</span></li>
              <li className="flex items-center space-x-2"><span>→</span> <span>Lower overhead</span></li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyBrazil;
