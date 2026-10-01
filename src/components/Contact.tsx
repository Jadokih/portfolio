import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    business: '',
    email: '',
    country: '',
    needs: '',
    budget: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert("Thanks for your interest! In a real environment, this would send an email to jadesantiagopereira55@gmail.com.");
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-12 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute -bottom-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-accent/20 blur-3xl pointer-events-none -z-10"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 sm:gap-14 lg:gap-16">
        
        {/* Left Side: Contact Info & CTA */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-5/12 flex flex-col justify-between"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-5 sm:mb-6 leading-[1.1]">
              Let’s Build Something Your Customers Will Remember.
            </h2>
            <p className="text-base sm:text-xl text-foreground/70 mb-8 sm:mb-12">
              Tell me a little about your business and what you need. I’ll review your project and send you a clear estimate.
            </p>
          </div>
          
          <div className="space-y-6 sm:space-y-8 mt-auto">
            <div>
              <div className="text-sm font-bold tracking-widest uppercase text-foreground/50 mb-2">Email</div>
              <a href="mailto:jadesantiagopereira55@gmail.com" className="text-sm min-[400px]:text-base sm:text-lg font-medium hover:underline break-all">
                jadesantiagopereira55@gmail.com
              </a>
            </div>
            <div>
              <div className="text-sm font-bold tracking-widest uppercase text-foreground/50 mb-2">WhatsApp</div>
              <a href="https://wa.me/5537991386409?text=Hi%20Jade,%20I%E2%80%99d%20like%20to%20discuss%20a%20website%20project." target="_blank" rel="noreferrer" className="text-lg font-medium hover:underline">
                +55 37 99138-6409
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-7/12"
        >
          <div className="bg-background border border-foreground/10 p-5 sm:p-8 md:p-12 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold tracking-wide">Name</label>
                  <input type="text" id="name" name="name" required value={formState.name} onChange={handleChange} className="w-full p-3.5 sm:p-4 text-base bg-accent/20 border border-foreground/10 focus:border-foreground focus:outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="business" className="text-sm font-bold tracking-wide">Business Name</label>
                  <input type="text" id="business" name="business" value={formState.business} onChange={handleChange} className="w-full p-3.5 sm:p-4 text-base bg-accent/20 border border-foreground/10 focus:border-foreground focus:outline-none transition-colors" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold tracking-wide">Email</label>
                  <input type="email" id="email" name="email" required value={formState.email} onChange={handleChange} className="w-full p-3.5 sm:p-4 text-base bg-accent/20 border border-foreground/10 focus:border-foreground focus:outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="country" className="text-sm font-bold tracking-wide">Country</label>
                  <input type="text" id="country" name="country" value={formState.country} onChange={handleChange} className="w-full p-3.5 sm:p-4 text-base bg-accent/20 border border-foreground/10 focus:border-foreground focus:outline-none transition-colors" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="needs" className="text-sm font-bold tracking-wide">What do you need?</label>
                <select id="needs" name="needs" value={formState.needs} onChange={handleChange} className="w-full p-3.5 sm:p-4 text-base bg-accent/20 border border-foreground/10 focus:border-foreground focus:outline-none transition-colors rounded-none">
                  <option value="">Select an option</option>
                  <option value="Landing Page">Landing Page</option>
                  <option value="Business Website">Business Website</option>
                  <option value="Redesign">Website Redesign</option>
                  <option value="Maintenance">Website Maintenance</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="budget" className="text-sm font-bold tracking-wide">Budget Range</label>
                <select id="budget" name="budget" value={formState.budget} onChange={handleChange} className="w-full p-3.5 sm:p-4 text-base bg-accent/20 border border-foreground/10 focus:border-foreground focus:outline-none transition-colors rounded-none">
                  <option value="">Select a range</option>
                  <option value="€300–€500">€300–€500</option>
                  <option value="€500–€1,000">€500–€1,000</option>
                  <option value="€1,000–€2,000">€1,000–€2,000</option>
                  <option value="€2,000+">€2,000+</option>
                  <option value="Not sure yet">Not sure yet</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold tracking-wide">Message</label>
                <textarea id="message" name="message" rows={4} required value={formState.message} onChange={handleChange} className="w-full p-3.5 sm:p-4 text-base bg-accent/20 border border-foreground/10 focus:border-foreground focus:outline-none transition-colors"></textarea>
              </div>

              <div className="pt-4 flex flex-col items-center">
                <button type="submit" className="w-full py-4 sm:py-5 bg-foreground text-background font-bold uppercase tracking-widest hover:bg-foreground/90 transition-colors mb-3">
                  Get My Free Quote
                </button>
                <span className="text-xs text-center text-foreground/50">No obligation. Just a clear estimate based on your project.</span>
              </div>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/5537991386409?text=Hi%20Jade,%20I%E2%80%99d%20like%20to%20discuss%20a%20website%20project." 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform z-50"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </section>
  );
};

export default Contact;
