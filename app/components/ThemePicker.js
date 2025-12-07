"use client";
import React, { useState, useRef, useEffect } from 'react';
import { Palette } from 'lucide-react';

const ThemePicker = ({ theme, setTheme, themes }) => {
    const [showThemePicker, setShowThemePicker] = useState(false);
    const themePickerRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (themePickerRef.current && !themePickerRef.current.contains(event.target)) {
                setShowThemePicker(false);
            }
        };

        if (showThemePicker) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showThemePicker]);

    return (
        <div ref={themePickerRef}>
            <button
                className="block hover:text-slate-200 transition-colors"
                onClick={() => setShowThemePicker(!showThemePicker)}
                aria-label="Change theme"
            >
                <Palette size={24} />
            </button>
            {showThemePicker && (
                <div className="absolute bottom-full mb-3 right-0 z-50">
                    <div
                        className="relative rounded-xl shadow-2xl p-3 border backdrop-blur-xl overflow-hidden"
                        style={{
                            backgroundColor: 'rgba(30, 41, 59, 0.8)',
                            borderColor: 'rgba(148, 163, 184, 0.2)',
                            marginRight: '-12px'
                        }}
                    >
                        <div className="flex gap-2">
                            {Object.keys(themes).map((themeName) => (
                                <button
                                    key={themeName}
                                    onClick={() => {
                                        setTheme(themeName);
                                        setShowThemePicker(false);
                                    }}
                                    className={`w-8 h-8 rounded-full border-2 transition-all hover:scale-110 ${theme === themeName ? 'border-white scale-110 shadow-lg' : 'border-slate-600'}`}
                                    style={{ backgroundColor: themes[themeName].accent }}
                                    aria-label={`${themeName} theme`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ThemePicker;
