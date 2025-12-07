"use client";
import React, { useState, useRef } from 'react';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactSection = ({ currentTheme }) => {
    const formRef = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        setErrorMessage('');

        try {
            // Send email using EmailJS
            const result = await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                formRef.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            );

            console.log('Email sent successfully:', result.text);
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });

            // Clear success message after 5 seconds
            setTimeout(() => setStatus(''), 5000);
        } catch (error) {
            console.error('Email sending failed:', error);
            setStatus('error');
            setErrorMessage('Failed to send message. Please try again or contact me directly.');

            // Clear error message after 5 seconds
            setTimeout(() => {
                setStatus('');
                setErrorMessage('');
            }, 5000);
        }
    };

    return (
        <section id="contact" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Contact me">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0" style={{ backgroundColor: `${currentTheme.bg}bf` }}>
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Contact</h2>
            </div>
            <div className="group relative">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <div className="relative z-10">
                    <p className="mb-8 text-slate-400">
                        Have a question or want to work together? Feel free to reach out!
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                        <div className="group/input">
                            <label htmlFor="name" className="block text-sm font-medium text-slate-200 mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-teal-300 focus:ring-1 focus:ring-teal-300 transition-all duration-200"
                                placeholder="Your name"
                            />
                        </div>

                        <div className="group/input">
                            <label htmlFor="email" className="block text-sm font-medium text-slate-200 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-teal-300 focus:ring-1 focus:ring-teal-300 transition-all duration-200"
                                placeholder="your.email@example.com"
                            />
                        </div>

                        <div className="group/input">
                            <label htmlFor="message" className="block text-sm font-medium text-slate-200 mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-teal-300 focus:ring-1 focus:ring-teal-300 transition-all duration-200 resize-none"
                                placeholder="Your message..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            className="group inline-flex items-center gap-2 px-6 py-3 bg-teal-400/10 border border-teal-300/30 rounded-lg text-slate-200 font-medium hover:bg-teal-400/20 hover:border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <span>
                                {status === 'sending' ? 'Sending...' : status === 'success' ? 'Sent!' : 'Send Message'}
                            </span>
                            <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" />
                        </button>

                        {status === 'success' && (
                            <p className="text-teal-300 text-sm">
                                Thank you! Your message has been sent successfully.
                            </p>
                        )}

                        {status === 'error' && errorMessage && (
                            <p className="text-red-400 text-sm">
                                {errorMessage}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
