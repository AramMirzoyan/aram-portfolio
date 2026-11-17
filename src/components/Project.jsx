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
        title: 'PA – Financial Document Batch Processing Platform',
        description: [
            'Designed and developed a Python-based internal application from scratch to automate financial document operations for the finance team.',
            'Built a Streamlit user interface and Flask REST API for submitting, managing, and monitoring large document-processing jobs.',
            'Implemented configurable batch and wave processing with progress tracking, retry handling, failure reporting, and execution-time estimation.',
            'Supported multiple export workflows, including Corporate, Bank, Segment, versioned, and exceptional-case exports',
            'Developed batch validation workflows and tools for retrieving validation results, document metadata, export statuses, generated file names, and processing errors.',
            'Integrated the application with Airflow jobs, relational databases, MongoDB, and AWS S3.',
            'Added tools for securely finding and deleting exported client files from development, staging, and production S3 environments.',
            'Generated downloadable Excel and CSV reports containing export results, validation details, financial data, missing documents, group IDs, and processing summaries.',
            'Replaced multiple manual finance-team operations with a centralized, reliable, and user-friendly automation platform.'

        ]
    },

    {
        title: 'Gulfim – Financial Document Management & Processing Platform',
        description: [
            'Participated in the design and development of a financial document management and processing platform from scratch using Java 17, Spring Boot, and Hibernate (JPA).',
            'Developed backend services for managing companies, financial reports, document metadata, and processing workflows.',
            'Integrated MySQL and MongoDB to manage structured financial data and synchronize document processing information with the IQ (InnoLytiQ) platform.',
            'Implemented scheduled synchronization processes to retrieve document and template processing statuses from MongoDB and update corresponding financial report records in MySQL.',
            'Developed processing status tracking for multiple financial data types, including IFRS, US GAAP, PA, Bank, Segment Data, and Capital Structure.',
            'Implemented document upload workflows with AWS S3 integration, duplicate detection, and asynchronous processing using RabbitMQ.',
            'Developed validation mechanisms for financial document metadata, including company identifiers, reporting periods, document references, and processing requirements.',
            'Implemented secure REST APIs using Spring Security and Keycloak with OAuth2/OIDC authentication and role-based access control.',
            'Worked with client-specific validation strategies, Spring AOP, and configurable application components to support different business requirements.',
            'Integrated AWS Secrets Manager for secure configuration management and Ehcache for application-level caching.',
            'Implemented Excel export functionality for financial report statuses and company data.',
            'Contributed to database migrations using Flyway, API documentation with Swagger/OpenAPI, and application reliability through retry mechanisms and error handling.'
        ]
    },

    {
        title: 'AI-Powered Document Processing & RAG Platform',
        description: [
            'Designed and developed an AI-powered document processing and Retrieval-Augmented Generation (RAG) application from scratch using Java, Spring Boot, and Spring AI.',
            'Implemented automatic PDF classification to identify scanned, digital, and hybrid documents and select the appropriate extraction strategy.',
            'Developed OCR processing for scanned PDFs using DeepSeek-OCR through Ollama, converting document pages into images and extracting structured Markdown content.',
            'Implemented digital PDF text extraction using Apache PDFBox and table extraction using Tabula, preserving financial tables in Markdown format.',
            'Built a document ingestion pipeline with configurable text chunking, embedding generation, and vector database storage using Spring AI.',
            'Implemented hybrid search combining vector similarity and PostgreSQL full-text search with Reciprocal Rank Fusion (RRF) for improved document retrieval.',
            'Integrated knowledge graph indexing to support context-aware retrieval and question answering over financial and other documents.',
            'Optimized document processing using Java Virtual Threads, semaphores, and configurable concurrency limits for OCR and vector database operations.',
            'Developed a multi-agent workflow for fact extraction, verification, and answer generation using OpenAI and locally hosted Ollama models.',
            'Integrated Agent-to-Agent (A2A) protocol support to expose financial document question-answering capabilities to external AI agents.',
            'Implemented REST APIs for PDF ingestion, document-based question answering, multi-agent processing, and retrieval debugging.',
            'Applied source-grounded prompting and fact verification techniques to reduce LLM hallucinations and improve answer reliability.'
        ]
    },

    {
        title: 'AI-Powered Document Export Automation Agent',
        description: [
            'Designed and developed an AI-powered document export automation application using Java, Spring Boot, and Spring AI.',
            'Implemented an AI agent with Spring AI tool calling to automate document export workflows based on document IDs and export types.',
            'Developed custom AI tools using @Tool and @ToolParam annotations for recipe identification, export task creation, and export job execution.',
            'Integrated REST APIs to create document-processing tasks and retrieve task identifiers for automated export execution.',
            'Implemented support for multiple financial document export types, including Corporate, Bank, Segment Data, Rated, and As-Mapped.',
            'Integrated Java and Python components to execute existing document export processes and manage runtime configuration.',
            'Developed asynchronous batch export processing using Java Virtual Threads, supporting multiple document IDs with job progress tracking.',
            'Implemented REST endpoints for submitting export requests and monitoring job status, completion percentage, and individual document results.',
            'Implemented process execution monitoring, real-time log capturing, error handling, and sensitive credential redaction.',
            'Designed configurable export environments using Spring Boot Configuration Properties for database connections, AWS S3 settings, and export parameters.',
            'Automated multi-step document export operations through AI-driven tool orchestration and backend workflow execution.'
        ]
    },

    {
        title: 'Financial Document Packaging and Delivery System',
        description: [
            'Developed a Java application that processes financial documents using document IDs provided as input.',
            'Retrieved document metadata and source-file locations from MongoDB and mapped the unstructured data into strongly typed Java models.',
            'Downloaded the corresponding PDF or HTML documents from AWS S3 using source paths stored in MongoDB.',
            'Retrieved required delivery file names and additional processing information from a MySQL database.',
            'Migrated the existing export structure to the client-required v1.2.0 format.',
            'Converted document metadata into Apache Parquet files using predefined schemas.',
            'Created ZIP delivery packages containing the generated Parquet metadata and the corresponding PDF or HTML source document.',
            'Uploaded the completed packages to the client’s AWS S3 environments, including development, staging, and production.',
            'Implemented validation, error handling, and logging to ensure reliable document transformation and delivery'

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