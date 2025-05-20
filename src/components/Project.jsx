import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        title: 'Financial Document Processing System',
        description: [
            'Worked on both client-facing and internal projects involving financial document processing using Spring Boot and Java.',
            'Designed and implemented Java models for parsing and transforming JSON data, converting them into structured formats suitable for Parquet files.',
            'Defined Parquet schemas and implemented automatic file uploads to AWS S3.',
            'Wrote and maintained backend services using MySQL, PostgreSQL, and MongoDB.',
            'Developed internal tools for uploading financial documents, using Python scripts to extract and validate data from the database.',
            'Worked in a Linux-based environment, and participated in system architecture discussions with a focus on design patterns and SOLID principles.'
        ]
    },
    {
        title: 'PEP/REP Data Scraping System',
        description: [
            'Built backend applications using Spring Boot and Spring Batch for scraping and processing data related to PEP (Politically Exposed Persons) and REP (Related Exposed Persons).',
            'Created migration tools to convert legacy data structures into new, scalable formats.',
            'Developed and maintained backend systems using MySQL and MongoDB, with a focus on performance and data consistency.',
            'Applied industry-standard design patterns and best practices during development.',
            'Worked in a Linux environment, collaborating with the team to ensure stability, scalability, and maintainability of the system.',
            'Wrote unit tests and contributed to multiple data-oriented projects with evolving requirements.'
        ]
    },
    {
        title: 'Full-stack Banking Platform',
        description: [
            'Developed full-stack banking applications for both customer and legal entity use cases, with modules covering loans, deposits, payment orders, and account services.',
            'Built backend systems using Java, Spring Boot, Hibernate (JPA), and JSP, implementing clean architectures aligned with SOLID principles and design patterns.',
            'Participated in the architectural design and development of web applications and backend services.',
            'Worked on frontend development using Angular, including administrative interfaces and customer portals.',
            'Contributed to the creation of the EGS company website from scratch, actively participating in system design, technology selection, and application structure.',
            'Collaborated with cross-functional teams throughout the SDLC, including design reviews, implementation, and testing.'
        ]
    },
    {
        title: 'LeaveMaster – Company Leave Management System',
        description: [
            'LeaveMaster is a complete staff leave management platform built from scratch.',
            'The system allows employees to request annual leave, unpaid leave, and sick leave with approval workflows.',
            'Implemented secure login and role-based access control using Spring Security and Keycloak integration.',
            'Used GraphQL for flexible and efficient data querying and mutations.',
            'Integrated RabbitMQ for decoupled communication and task messaging between modules.',
            'Designed with a modular architecture focused on maintainability and scalability.',
            'Automated leave tracking includes dynamic calculation of available leave days for each employee based on company rules.'
        ]
    }
];

const ProjectsShowcase = () => {
    return (
        <section className="min-h-screen px-4 sm:px-6 md:px-10 lg:px-20 py-12 md:py-20 text-white bg-[#351394]">
            <motion.h1
                className="text-3xl sm:text-4xl font-bold mb-8 md:mb-12 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Projects
            </motion.h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                {projects.map((project, idx) => (
                    <motion.div
                        key={idx}
                        className="bg-white/10 p-4 sm:p-6 rounded-xl shadow-lg border border-white/20 h-full flex flex-col"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: Math.min(idx * 0.2, 0.8), duration: 0.6 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <h2 className="text-xl sm:text-2xl font-semibold text-yellow-300 mb-2">{project.title}</h2>
                        <ul className="list-disc list-outside ml-4 text-white/90 text-xs sm:text-sm space-y-1 flex-grow">
                            {project.description.map((item, i) => (
                                <li key={i} className="pl-1">{item}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ProjectsShowcase;