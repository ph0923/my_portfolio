"use client";
import React from 'react';
import Script from 'next/script';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { useMousePosition } from './hooks/useMousePosition';
import { useActiveSection } from './hooks/useActiveSection';
import { useTheme } from './hooks/useTheme';
import { themes } from './constants/themes';
import { handleNavClick } from './utils/navigation';
import { generatePersonSchema, generateBreadcrumbSchema } from './metadata';

const App = () => {
  const mousePosition = useMousePosition();
  const activeSection = useActiveSection();
  const [theme, setTheme] = useTheme('red');
  const currentTheme = themes[theme];

  return (
    <>
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generatePersonSchema()),
        }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema()),
        }}
      />
      <div className="min-h-screen text-slate-400 font-sans selection:text-teal-900" style={{ backgroundColor: currentTheme.bg, '--accent-color': currentTheme.accent, '--accent-hover': currentTheme.accentHover, '--accent-rgb': currentTheme.accentRgb }}>
        <div
          className="pointer-events-none fixed inset-0 z-30 transition duration-300"
          style={{
            background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, ${currentTheme.gradient}, transparent 80%)`
          }}
        />

        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-6 lg:py-0">
          <div className="lg:flex lg:justify-between lg:gap-4">
            <Header
              activeSection={activeSection}
              handleNavClick={handleNavClick}
              theme={theme}
              setTheme={setTheme}
              themes={themes}
            />

            <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
              <AboutSection currentTheme={currentTheme} />
              <ExperienceSection currentTheme={currentTheme} />
              <ProjectsSection currentTheme={currentTheme} />
              <ContactSection currentTheme={currentTheme} />
              <Footer />
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
