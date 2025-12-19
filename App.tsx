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
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';
import { Blogs } from './components/Blogs';
import { BlogDetail } from './components/BlogDetail';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'program' | 'privacy' | 'terms' | 'blogs' | 'blog-detail'>('home');
  const [selectedProgramId, setSelectedProgramId] = useState<string | null>(null);
  const [selectedBlogId, setSelectedBlogId] = useState<string | null>(null);

  const handleProgramSelect = (id: string) => {
    setSelectedProgramId(id);
    setCurrentView('program');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBlogSelect = (id: string) => {
    setSelectedBlogId(id);
    setCurrentView('blog-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = (targetSectionId?: string) => {
    setCurrentView('home');
    setSelectedProgramId(null);
    setSelectedBlogId(null);

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

  const handleBackToBlogs = () => {
    setCurrentView('blogs');
    setSelectedBlogId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle footer link clicks
  React.useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.href?.includes('/privacy-policy')) {
        e.preventDefault();
        setCurrentView('privacy');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (target.href?.includes('/terms-of-service')) {
        e.preventDefault();
        setCurrentView('terms');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (target.href?.includes('/blog')) {
        e.preventDefault();
        setCurrentView('blogs');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, []);

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
        ) : currentView === 'program' && selectedProgramId ? (
          <ProgramDetails programId={selectedProgramId} onBack={() => handleBackToHome()} />
        ) : currentView === 'privacy' ? (
          <PrivacyPolicy onBack={() => handleBackToHome()} />
        ) : currentView === 'terms' ? (
          <TermsOfService onBack={() => handleBackToHome()} />
        ) : currentView === 'blogs' ? (
          <Blogs onBack={() => handleBackToHome()} onSelectBlog={handleBlogSelect} />
        ) : currentView === 'blog-detail' && selectedBlogId ? (
          <BlogDetail blogId={selectedBlogId} onBack={handleBackToBlogs} />
        ) : null}
      </main>
      <Footer />
    </div>
  );
};

export default App;
