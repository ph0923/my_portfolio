export const siteMetadata = {
    title: 'Hemanth Pothineni | Data Engineer',
    description: 'Hemanth Pothineni is an experienced data engineer specializing in building scalable data infrastructures, ETL/ELT pipelines, Apache Airflow, Databricks, dbt, Snowflake, and Power BI. Expert in data engineering, analytics, and cloud platforms.',
    keywords: 'experienced data engineer, data engineer, Hemanth Pothineni, hemanth, pothineni, hemanth p, data engineering, ETL pipelines, Apache Airflow, Databricks, dbt, Snowflake, Power BI, Azure, data analytics, CBRE data engineer',
    author: 'Hemanth Pothineni',
    siteUrl: 'https://hemanth-portfolio-app.web.app',
    image: '/og-image.jpg',
    locale: 'en_US',
    type: 'website',
};

export const generatePersonSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Hemanth Pothineni',
    alternateName: ['Hemanth P', 'Hemanth', 'Pothineni'],
    jobTitle: 'Data Engineer',
    description: 'Experienced Data Engineer specializing in scalable data infrastructures, ETL/ELT pipelines, and data analytics platforms',
    url: 'https://hemanth-portfolio-app.web.app',
    image: 'https://hemanth-portfolio-app.web.app/profile.jpg',
    email: 'hemanthpothineni@outlook.com',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Dallas',
        addressRegion: 'TX',
        addressCountry: 'US',
    },
    sameAs: [
        'https://github.com/ph0923',
        'https://www.linkedin.com/in/hp09/',
    ],
    worksFor: [
        {
            '@type': 'Organization',
            name: 'CBRE Group',
            url: 'https://www.linkedin.com/company/cbreim/',
        },
    ],
    alumniOf: {
        '@type': 'Organization',
        name: 'Metamor Systems',
    },
    knowsAbout: [
        'Data Engineering',
        'ETL Pipelines',
        'Apache Airflow',
        'Databricks',
        'dbt',
        'Snowflake',
        'SnapLogic',
        'Power BI',
        'Azure Data Factory',
        'Python',
        'SQL',
        'PostgreSQL',
        'Data Analytics',
        'Business Intelligence',
        'Cloud Computing',
        'Azure',
        'Data Modeling',
        'Dimensional Modeling',
        'Data Governance',
    ],
    hasOccupation: {
        '@type': 'Occupation',
        name: 'Data Engineer',
        occupationLocation: {
            '@type': 'City',
            name: 'Dallas, TX',
        },
        skills: 'Apache Airflow, dbt, Snowflake, SnapLogic, Power BI, Azure DevOps, Python, SQL, Databricks, Azure Data Factory, PostgreSQL',
        experienceRequirements: 'Senior Level',
    },
});

export const generateBreadcrumbSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://hemanth-portfolio-app.web.app',
        },
        {
            '@type': 'ListItem',
            position: 2,
            name: 'About',
            item: 'https://hemanth-portfolio-app.web.app#about',
        },
        {
            '@type': 'ListItem',
            position: 3,
            name: 'Experience',
            item: 'https://hemanth-portfolio-app.web.app#experience',
        },
        {
            '@type': 'ListItem',
            position: 4,
            name: 'Projects',
            item: 'https://hemanth-portfolio-app.web.app#projects',
        },
    ],
});
