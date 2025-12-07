"use client";
import React from 'react';

const Navigation = ({ activeSection, handleNavClick }) => {
    const navItems = [
        { id: 'about', label: 'About' },
        { id: 'experience', label: 'Experience' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' }
    ];

    return (
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
            <ul className="mt-16 w-max">
                {navItems.map((item) => (
                    <li key={item.id}>
                        <a
                            className={`group flex items-center py-3 ${activeSection === item.id ? 'active' : ''}`}
                            href={`#${item.id}`}
                            onClick={(e) => handleNavClick(e, item.id)}
                        >
                            <span className={`nav-indicator mr-4 h-px transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none ${activeSection === item.id ? 'w-16 bg-slate-200' : 'w-8 bg-slate-600'}`}></span>
                            <span className={`nav-text text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200 ${activeSection === item.id ? 'text-slate-200' : 'text-slate-500'}`}>{item.label}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;
