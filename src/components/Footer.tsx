import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 sm:py-16 px-5 sm:px-8 lg:px-12 border-t border-background/10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
        
        <div className="space-y-4">
          <div className="text-2xl font-bold tracking-tighter">
            JADE PEREIRA<span className="text-background/50">.</span>
          </div>
          <p className="text-background/70 text-sm max-w-sm">
            Web Development & Landing Pages<br/>
            Brazil · Working Worldwide
          </p>
          <div className="pt-2 space-y-1 text-sm text-background/90">
            <div><a href="mailto:jadesantiagopereira55@gmail.com" className="hover:underline">jadesantiagopereira55@gmail.com</a></div>
            <div>+55 37 99138-6409</div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-10 sm:gap-x-10 lg:gap-x-16 w-full lg:w-auto">
          <div className="flex flex-col space-y-3">
            <span className="font-bold text-xs tracking-widest uppercase text-background/50 mb-2">Navigation</span>
            <a href="#work" className="text-sm text-background/80 hover:text-background transition-colors">Work</a>
            <a href="#services" className="text-sm text-background/80 hover:text-background transition-colors">Services</a>
            <a href="#pricing" className="text-sm text-background/80 hover:text-background transition-colors">Pricing</a>
            <a href="#about" className="text-sm text-background/80 hover:text-background transition-colors">About</a>
            <a href="#faq" className="text-sm text-background/80 hover:text-background transition-colors">FAQ</a>
            <a href="#contact" className="text-sm text-background/80 hover:text-background transition-colors">Contact</a>
          </div>

          <div className="flex flex-col space-y-3">
            <span className="font-bold text-xs tracking-widest uppercase text-background/50 mb-2">Social</span>
            <a href="#" className="text-sm text-background/80 hover:text-background transition-colors">Instagram</a>
            <a href="#" className="text-sm text-background/80 hover:text-background transition-colors">LinkedIn</a>
            <a href="#" className="text-sm text-background/80 hover:text-background transition-colors">GitHub</a>
          </div>
          
          <div className="flex flex-col space-y-3">
            <span className="font-bold text-xs tracking-widest uppercase text-background/50 mb-2">Legal</span>
            <a href="#" className="text-sm text-background/80 hover:text-background transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-background/80 hover:text-background transition-colors">Terms</a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-background/10 text-xs text-background/40 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-3 sm:gap-4">
        <p>&copy; {new Date().getFullYear()} Jade Pereira. All rights reserved.</p>
        <p>Designed and built for conversion.</p>
      </div>
    </footer>
  );
};

export default Footer;
