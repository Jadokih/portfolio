import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const TechAndFAQ = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    { q: "How much does a website cost?", a: "Projects typically start at €350 for a one-page website. The final cost depends on the number of pages, custom features, and complexity. I provide a clear estimate before we start." },
    { q: "How long does a website take?", a: "A standard landing page takes 1-2 weeks. More complex multi-page websites can take 3-4 weeks from discovery to launch." },
    { q: "Do I need to provide the content?", a: "Yes, you will need to provide the text and specific images for your business. However, I can help structure the content and suggest stock imagery if needed." },
    { q: "Do you work with clients outside Brazil?", a: "Yes, I work with clients internationally. The remote workflow makes it seamless, and direct communication ensures everything runs smoothly." },
    { q: "Can you build the website in my language?", a: "Yes. While I communicate in English (or Portuguese), the website itself can be in any language you require. You just need to provide the translated content." },
    { q: "Do you provide hosting?", a: "I help you set up hosting, but the account will be in your name so you retain full ownership. Depending on the tech stack, we can use excellent free hosting tiers like Vercel." },
    { q: "Do I need to buy a domain?", a: "Yes, a domain (e.g., yourname.com) must be purchased. They usually cost around €10-20 per year. I can guide you on where and how to buy it." },
    { q: "Who owns the website?", a: "You do. Once the final payment is made and the site is launched, you own all the code and assets." },
    { q: "Can I request changes after launch?", a: "Yes. I offer a 14-day bug-fix period. For ongoing changes, I offer Website Care packages." },
    { q: "Do you offer website maintenance?", a: "Yes, I offer Website Care starting from €50/month for small content updates, minor fixes, and technical assistance." },
    { q: "Can you redesign my existing website?", a: "Yes, I often help clients transform their outdated websites into modern, conversion-focused experiences." },
    { q: "Do you build websites from scratch or use templates?", a: "I design and build custom websites tailored to your specific needs, using modern frameworks rather than generic WordPress templates." },
    { q: "Can I pay in instalments?", a: "Yes. Payments are typically split into two: 50% upfront to secure the booking and start work, and 50% before the final launch." }
  ];

  return (
    <div id="faq" className="py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-24 lg:space-y-32">
        
        {/* Technology & Domain Explainer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-4 sm:mb-6">Built With Modern Technology</h3>
            <p className="text-foreground/70 mb-6 sm:mb-8">
              Fast, responsive, and maintainable.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {['HTML', 'CSS', 'JavaScript', 'React', 'Next.js / Vite', 'Vercel', 'GitHub'].map(tech => (
                <span key={tech} className="px-3 sm:px-4 py-2 border border-foreground/10 text-xs sm:text-sm font-mono bg-accent/20">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-4 sm:mb-6">Domain, Hosting & Everything In Between</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-sm tracking-widest uppercase mb-2">What is a domain?</h4>
                <p className="text-foreground/70 text-sm">Your domain is your website address, such as yourbusiness.com. Domains are generally paid annually and remain under your ownership.</p>
              </div>
              <div>
                <h4 className="font-bold text-sm tracking-widest uppercase mb-2">What is hosting?</h4>
                <p className="text-foreground/70 text-sm">Hosting is where your website files are stored and delivered to visitors. Depending on the project and technology, hosting can range from free platforms to paid services.</p>
              </div>
              <div className="p-4 sm:p-6 bg-accent/30 border border-foreground/5 text-sm font-medium">
                You own your domain and your website. I can help you set everything up and connect everything correctly.
              </div>
              <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1 text-[0.65rem] sm:text-xs font-mono font-bold text-foreground/40 mt-4 px-0 sm:px-4">
                <span>DOMAIN</span> <span>→</span> <span>HOSTING</span> <span>→</span> <span>YOUR WEBSITE</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Website Care */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-foreground text-background px-5 py-10 sm:p-12 md:p-16 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter mb-4">Need Help After Launch?</h2>
          <div className="text-base sm:text-xl font-bold text-background/50 mb-6 sm:mb-8 tracking-wider sm:tracking-widest">WEBSITE CARE — FROM €50/MONTH</div>
          <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-x-8 gap-y-2 sm:gap-y-4 mb-6 sm:mb-8 text-sm sm:text-base text-background/80">
            <span>✓ Small content updates</span>
            <span>✓ Minor fixes</span>
            <span>✓ Basic maintenance</span>
            <span>✓ Technical assistance</span>
          </div>
          <p className="text-sm text-background/40 italic">Final monthly pricing depends on the amount of ongoing support required.</p>
        </motion.div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter mb-8 sm:mb-12 text-center"
          >
            Frequently Asked Questions
          </motion.h2>
          
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="border border-foreground/10 bg-background"
              >
                <button
                  className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left text-sm sm:text-base font-bold focus:outline-none"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="pr-4">{faq.q}</span>
                  <span className="text-foreground/50 shrink-0">
                    {openFaq === index ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-6 pb-4 sm:pb-5 text-sm sm:text-base text-foreground/70 leading-relaxed border-t border-foreground/5 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default TechAndFAQ;
