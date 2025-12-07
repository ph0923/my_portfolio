"use client";
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import ExperienceItem from './ExperienceItem';

const ExperienceSection = ({ currentTheme }) => {
    const experiences = [
        {
            period: 'Sept 2025 – Present',
            ariaLabel: 'Sept 2025 to Present',
            title: 'Data Engineer',
            company: 'CBRE Group',
            companyUrl: 'https://www.linkedin.com/company/cbreim/',
            location: 'Dallas, TX',
            description: 'I build and maintain ELT pipelines using Apache Airflow and dbt to transform data in Snowflake, while SnapLogic workflows integrate cross-system data with automated validation to minimize errors. I develop optimized SQL queries and Python scripts that handle data cleaning and transformation automatically, significantly improving performance and eliminating manual work. I also create dimensional models and Power BI dashboards that help business teams track key metrics in real-time, and manage CI/CD pipelines through Azure DevOps to streamline our deployment process.',
            technologies: ['Apache Airflow', 'dbt', 'Snowflake', 'SnapLogic', 'Power BI', 'Azure DevOps']
        },
        {
            period: 'Apr 2024 – Aug 2025',
            ariaLabel: 'Apr 2024 to Aug 2025',
            title: 'Data Engineer',
            company: 'Metamor Systems',
            companyUrl: 'https://www.linkedin.com/company/metamorsys/',
            location: 'Indianapolis, IN',
            description: 'I migrated legacy batch processes to a modern Airflow and Azure Data Factory architecture, resolving latency issues and improving data availability. Using Databricks with Apache Spark, I processed over 3TB of historical case data to enable quality monitoring and identify agent error trends. I built Python and scikit-learn pipelines to automate eligibility data processing and error classification, cutting manual quality review time significantly. I also automated reporting workflows by streamlining data extraction from Azure Data Lake, saving the team hours of manual work each week. My optimization of PostgreSQL queries and indexing improved caseworker application response times, while Python-based anomaly detection in Airflow DAGs helps catch pipeline issues early and keeps our ETL processes running smoothly.',
            technologies: ['Airflow', 'Azure Data Factory', 'Databricks', 'Python', 'PostgreSQL']
        },
        {
            period: 'Aug 2023 – Dec 2023',
            ariaLabel: 'Aug 2023 to Dec 2023',
            title: 'Business Intelligence Engineer',
            company: 'Maternal 911 Education Systems',
            companyUrl: 'https://www.linkedin.com/company/maternal911/',
            location: 'Ithaca, MI',
            description: 'I build scalable analytics pipelines on Azure using Python for ETL and optimized PostgreSQL databases to model patient care workflows. I\'ve delivered numerous automated reporting solutions with SQL stored procedures and Python scripts that give healthcare teams visibility into critical KPIs and operational metrics. My Power BI dashboards for clinical operations include upstream Python validation to ensure data accuracy, while optimized data models keep load times fast. I\'ve improved process accuracy and regulatory compliance by replacing manual tracking with SQL-based logic and Python automation.',
            technologies: ['Azure', 'Python', 'PostgreSQL', 'Power BI', 'SQL']
        }
    ];

    return (
        <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Work experience">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0" style={{ backgroundColor: `${currentTheme.bg}bf` }}>
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Experience</h2>
            </div>
            <div>
                <ol className="group/list">
                    {experiences.map((exp, index) => (
                        <ExperienceItem key={index} {...exp} />
                    ))}
                </ol>
                <div className="mt-12">
                    <a className="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group" aria-label="View Full Resume" href="/DE Resume.pdf" target="_blank" rel="noopener noreferrer">
                        <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">View Full Resume</span>
                        <span className="whitespace-nowrap ml-1">
                            <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none" />
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
