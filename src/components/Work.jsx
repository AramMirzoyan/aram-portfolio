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

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section className="min-h-screen px-4 sm:px-6 md:px-10 lg:px-20 py-12 md:py-20 text-white bg-[#351394]">
            <motion.h1
                className="text-3xl sm:text-4xl font-bold mb-8 md:mb-12 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
            >
                Work Experience
            </motion.h1>

            <motion.div
                className="space-y-6 md:space-y-8"
                variants={container}
                initial="hidden"
                animate="show"
            >
                {experiences.map((exp, idx) => (
                    <motion.div
                        key={idx}
                        className="bg-white/10 p-4 sm:p-6 rounded-xl shadow-lg border border-white/20"
                        variants={item}
                        whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                    >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                            <h2 className="text-xl sm:text-2xl font-semibold text-yellow-300">{exp.title}</h2>
                            <p className="text-sm sm:text-md text-white/80 italic">{exp.date}</p>
                        </div>

                        <a
                            href={exp.company.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mb-3 text-blue-300 hover:text-blue-200 underline text-sm sm:text-base transition-colors"
                        >
                            {exp.company.name}
                        </a>

                        {exp.responsibilities.length > 0 && (
                            <ul className="list-disc list-outside ml-4 text-white/90 text-xs sm:text-sm space-y-1">
                                {exp.responsibilities.map((item, i) => (
                                    <li key={i} className="pl-1">{item}</li>
                                ))}
                            </ul>
                        )}
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Work;