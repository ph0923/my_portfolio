"use client";
import React from 'react';

const AboutSection = ({ currentTheme }) => {
    return (
        <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0" style={{ backgroundColor: `${currentTheme.bg}bf` }}>
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
            </div>
            <div>
                <div>
                    <p className="mb-4">
                        Hi, I'm Hemanth Pothineni, an experienced data engineer passionate about building robust, scalable data infrastructures that help organizations make better decisions. I specialize in designing and maintaining efficient ETL/ELT pipelines that transform complex, raw data into accessible, actionable insights.
                    </p>
                    <p className="mb-4">
                        My expertise includes automating data workflows using Apache Airflow, Databricks, and dbt to ensure data reliability and efficiency. I have hands-on experience with the full development lifecycle—from data modeling and ingestion to visualization using Power BI and Tableau. I'm proficient in DevOps practices with Git and Azure DevOps, and I thrive in Agile environments where I can implement robust data governance and dimensional modeling practices.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
