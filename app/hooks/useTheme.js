"use client";
import { useState, useEffect } from 'react';

export const useTheme = (defaultTheme = 'red') => {
    const [theme, setTheme] = useState(defaultTheme);

    useEffect(() => {
        const savedTheme = localStorage.getItem('portfolio-theme');
        if (savedTheme && savedTheme !== theme) {
            setTheme(savedTheme);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('portfolio-theme', theme);
    }, [theme]);

    return [theme, setTheme];
};
