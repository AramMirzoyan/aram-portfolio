import React from 'react';
import { motion } from 'framer-motion';

const Work = () => {
    const experiences = [
        {
            title: 'Java Software Developer',
            company: { name: 'Cognaize', url: 'https://www.cognaize.com' },
            date: 'Feb 2023 - Current',
            responsibilities: [
                'Worked on both client-facing and internal projects involving financial document processing using Spring Boot and Java.',
                'Designed and implemented Java models for parsing and transforming JSON data, converting them into structured formats suitable for Parquet files.',
                'Defined Parquet schemas and implemented automatic file uploads to AWS S3.',
                'Wrote and maintained backend services using MySQL, PostgreSQL, and MongoDB.',
                'Developed internal tools for uploading financial documents, using Python scripts to extract and validate data from the database.',
                'Worked in a Linux-based environment, and participated in system architecture discussions with a focus on design patterns and SOLID principles.',
            ],
        },
        {
            title: 'Java Software Developer',
            company: { name: 'Polixis', url: 'https://polixis.com/' },
            date: 'Aug 2021 - Jan 2023',
            responsibilities: [
                'Built backend applications using Spring Boot and Spring Batch for scraping and processing data related to PEP (Politically Exposed Persons) and REP (Related Exposed Persons).',
                'Created migration tools to convert legacy data structures into new, scalable formats.',
                'Developed and maintained backend systems using MySQL and MongoDB, with a focus on performance and data consistency.',
                'Applied industry-standard design patterns and best practices during development.',
                'Worked in a Linux environment, collaborating with the team to ensure stability, scalability, and maintainability of the system.',
                'Wrote unit tests and contributed to multiple data-oriented projects with evolving requirements.',
            ],
        },
        {
            title: 'Java Software Developer',
            company: { name: 'Energize Global Services', url: 'https://energizeglobal.com/' },
            date: 'Apr 2019 - Aug 2021',
            responsibilities: [
                'Developed full-stack banking applications for both customer and legal entity use cases, with modules covering loans, deposits, payment orders, and account services.',
                'Built backend systems using Java, Spring Boot, Hibernate (JPA), and JSP, implementing clean architectures aligned with SOLID principles and design patterns.',
                'Participated in the architectural design and development of web applications and backend services.',
                'Worked on frontend development using Angular, including administrative interfaces and customer portals.',
                'Contributed to the creation of the EGS company website from scratch, actively participating in system design, technology selection, and application structure.',
                'Collaborated with cross-functional teams throughout the SDLC, including design reviews, implementation, and testing.',
            ],
        },
        {
            title: 'Java Software Development Intern',
            company: { name: 'Energize Global Services', url: 'https://energizeglobal.com/' },
            date: 'Nov 2018 - Mar 2019',
            responsibilities: [],
        },
        {
            title: 'Stress Engineer',
            company: { name: 'Progresstech-Armenia', url: 'https://progresstech.am/en' },
            date: 'Dec 2014 - Dec 2018',
            responsibilities: [
                'Creation of FEM and static analysis (linear and nonlinear) section 3 slat aircraft SSJ-100 metal parts',
                'Fatigue calculation of the wing and fuselage parts of the aircraft SSJ-100',
                'Calculation of static and fatigue strength air-frame components made with deviation from the CD',
                'Calculation of fatigue strength air-frame components with deviation during operation.',
                'Creating CEM MC-21-300 aircraft metal parts',
            ],
        },
    ];

    return (
        <section className="min-h-screen px-6 md:px-20 py-20 text-white bg-[#351394]">
            <motion.h1
                className="text-4xl font-bold mb-12 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 4, y: 0 }}
                transition={{ duration: 0.9 }}
            >
                Work Experience
            </motion.h1>
            <div className="space-y-12">
                {experiences.map((exp, idx) => (
                    <motion.div
                        key={idx}
                        className="bg-white/10 p-6 rounded-xl shadow-lg border border-white/20"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 3, y: 0 }}
                        transition={{ delay: idx * 0.5, duration: 0.6 }}
                    >
                        <h2 className="text-2xl font-semibold text-yellow-300">{exp.title}</h2>
                        <p className="text-md text-white mb-2">
                            <a href={exp.company.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-300">
                                {exp.company.name}
                            </a> | <span className="italic">{exp.date}</span>
                        </p>
                        <ul className="list-disc list-inside text-white/90 text-sm pl-2 space-y-1">
                            {exp.responsibilities.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Work;
