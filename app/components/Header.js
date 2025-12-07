"use client";
import React from 'react';
import { Github, Linkedin, Mail, Palette } from 'lucide-react';
import Navigation from './Navigation';
import ThemePicker from './ThemePicker';

const Header = ({ activeSection, handleNavClick, theme, setTheme, themes }) => {
    return (
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
                <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                    <a href="/">Hemanth Pothineni</a>
                </h1>
                <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                    Data Engineer
                </h2>
                <p className="mt-4 max-w-xs leading-normal">
                    Turning data into a structured, understandable asset
                </p>

                <Navigation activeSection={activeSection} handleNavClick={handleNavClick} />
            </div>

            <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
                <li className="mr-5 text-xs">
                    <a className="block hover:text-slate-200" href="https://github.com/ph0923" target="_blank" rel="noreferrer">
                        <span className="sr-only">GitHub</span>
                        <Github size={24} />
                    </a>
                </li>
                <li className="mr-5 text-xs">
                    <a className="block hover:text-slate-200" href="https://www.linkedin.com/in/hp09/" target="_blank" rel="noreferrer">
                        <span className="sr-only">LinkedIn</span>
                        <Linkedin size={24} />
                    </a>
                </li>
                <li className="mr-5 text-xs">
                    <a className="block hover:text-slate-200" href="mailto:hemanthpothineni@outlook.com" target="_blank" rel="noreferrer">
                        <span className="sr-only">Email</span>
                        <Mail size={24} />
                    </a>
                </li>
                <li className="mr-5 text-xs relative">
                    <ThemePicker theme={theme} setTheme={setTheme} themes={themes} />
                </li>
            </ul>
        </header>
    );
};

export default Header;
