"use client";
import React from 'react';
import ProjectItem from './ProjectItem';

const ProjectsSection = ({ currentTheme }) => {
    const projects = [
        {
            title: 'Real-Time Credit Card Fraud Detection',
            url: 'https://github.com/ph0923/credit-fraud-detection',
            description: 'A machine learning pipeline that detects fraudulent credit card transactions in real-time. Built with Python, Apache Kafka (Redpanda), and Streamlit. Uses Isolation Forest algorithm trained on the Credit Card Fraud dataset.',
            technologies: ['Python', 'Apache Kafka', 'Streamlit', 'Isolation Forest'],
            image: 'https://media.assettype.com/outlookmoney/import/uploadimage/library/16_9/16_9_5/IMAGE_1644244767.jpg?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true',
            imageAlt: 'Credit Card Fraud Detection'
        }
    ];

    return (
        <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected projects">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0" style={{ backgroundColor: `${currentTheme.bg}bf` }}>
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2>
            </div>
            <div>
                <ul className="group/list">
                    {projects.map((project, index) => (
                        <ProjectItem key={index} {...project} />
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default ProjectsSection;
