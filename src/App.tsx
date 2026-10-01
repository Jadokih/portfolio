import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import ValueProposition from './components/ValueProposition';
import Services from './components/Services';
import Pricing from './components/Pricing';
import WhyBrazil from './components/WhyBrazil';
import About from './components/About';
import Process from './components/Process';
import TechAndFAQ from './components/TechAndFAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans overflow-x-hidden relative w-full">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ValueProposition />
        <Portfolio />
        <Services />
        <Pricing />
        <WhyBrazil />
        <About />
        <Process />
        <TechAndFAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
