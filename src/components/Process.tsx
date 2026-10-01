import { motion } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'DISCOVERY',
    desc: 'We discuss your business, goals, audience and what your website needs to achieve.',
  },
  {
    num: '02',
    title: 'DESIGN',
    desc: 'I create the visual direction, structure and user experience.',
  },
  {
    num: '03',
    title: 'DEVELOPMENT',
    desc: 'I turn the approved design into a responsive, functional website.',
  },
  {
    num: '04',
    title: 'REVIEW',
    desc: 'You review the website and request adjustments.',
  },
  {
    num: '05',
    title: 'LAUNCH',
    desc: 'Your website goes live and is ready for your customers.',
  },
];

const Process = () => {
  return (
    <section id="process" className="py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-12 bg-foreground text-background">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter mb-10 sm:mb-16"
        >
          How It Works
        </motion.h2>

        <div className="relative border-l border-background/20 pl-8 md:pl-12 ml-2 md:ml-6 space-y-10 sm:space-y-14 md:space-y-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="absolute -left-[41px] md:-left-[57px] top-1 w-4 h-4 rounded-full border-4 border-background bg-foreground"></div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 flex flex-wrap items-baseline">
                <span className="text-sm text-background/50 mr-3 sm:mr-4 font-mono">{step.num} —</span>
                {step.title}
              </h3>
              <p className="text-background/70 text-base sm:text-lg max-w-2xl">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
