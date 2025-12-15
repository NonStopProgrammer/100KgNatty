import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Programs } from './components/Programs';
import { Transformations } from './components/Transformations';
import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProgramDetails } from './components/ProgramDetails';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'program'>('home');
  const [selectedProgramId, setSelectedProgramId] = useState<string | null>(null);

  const handleProgramSelect = (id: string) => {
    setSelectedProgramId(id);
    setCurrentView('program');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = (targetSectionId?: string) => {
    setCurrentView('home');
    setSelectedProgramId(null);
    
    // If a target section is provided, scroll to it after the view renders
    if (targetSectionId) {
      setTimeout(() => {
        const element = document.getElementById(targetSectionId);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100);
    } else {
       window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full min-h-screen bg-black overflow-x-hidden">
      <Navbar onNavigate={handleBackToHome} isHome={currentView === 'home'} />
      <main>
        {currentView === 'home' ? (
          <>
            <section id="home">
              <Hero />
            </section>
            <section id="about">
              <About />
            </section>
            <section id="programs">
              <Programs onSelectProgram={handleProgramSelect} />
            </section>
            <section id="transformations">
              <Transformations />
            </section>
            <section id="pricing">
              <Pricing />
            </section>
            <section id="contact">
              <Contact />
            </section>
          </>
        ) : (
          <ProgramDetails 
            programId={selectedProgramId || 'hypertrophy'} 
            onBack={() => handleBackToHome()} 
          />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;