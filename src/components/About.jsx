// About.jsx - Responsive Updates
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2, duration: 0.6 }
    }),
};

const About = () => {
    const [isMobile, setIsMobile] = useState(false);

    // Check if screen width is mobile size
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Initial check
        checkMobile();

        // Add event listener for window resize
        window.addEventListener('resize', checkMobile);

        // Cleanup
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const paragraphs = [
        "I'm a Java Software Developer with a strong background in backend development, working on a variety of projects including banking systems, financial applications, document processing tools, and enterprise web platforms. I enjoy writing clean, efficient code and solving real-world problems with solid, maintainable solutions.",
        "I've worked closely with cross-functional teams, actively participated in system architecture design, and contributed to defining technical schemas and workflows. I've also been involved in client communication and task management to align development goals with business needs.",
        "My experience includes data transformation, document parsing, legacy data migration, and full-stack banking services. I'm comfortable designing APIs, managing relational and NoSQL databases, integrating with AWS S3, and working in Linux-based environments.",
    ];

    return (
        <section className="min-h-screen bg-[#fef8f3] px-4 sm:px-6 md:px-20 py-16 md:py-24 text-[#0a0a0a]">
            <div className="max-w-6xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl md:text-4xl font-bold border-b-4 border-[#002244] inline-block mb-8 md:mb-12"
                >
                    About Me
                </motion.h1>

                <div className={`${isMobile ? '' : 'grid md:grid-cols-3'} gap-8 md:gap-12`}>
                    <div className={`${isMobile ? 'mb-6' : 'md:col-span-1'}`}>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="text-sm text-gray-600"
                        >
                            <p className="mb-2"><strong>Location:</strong> Yerevan, Armenia</p>
                            <p className="mb-2"><strong>Email:</strong> aram.a.mirzoyan@gmail.com</p>
                            <p className="mb-2"><strong>Role:</strong> Java Software Engineer</p>
                            <p className="mb-2"><strong>Current company:</strong> Cognaize</p>
                            <p className="mb-2"><strong>Phone number:</strong> +37444766763</p>
                        </motion.div>
                    </div>

                    <div className={`${isMobile ? '' : 'md:col-span-2'} space-y-4 md:space-y-6 text-base md:text-lg text-gray-800 leading-relaxed`}>
                        {paragraphs.map((text, i) => (
                            <motion.p key={i} custom={i} initial="hidden" animate="visible" variants={fadeUp}>
                                {text}
                            </motion.p>
                        ))}

                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeUp}
                            custom={paragraphs.length}
                        >
                            <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
                            <div className="bg-white rounded-xl shadow-md p-4 text-sm text-gray-700 leading-6">
                                <strong>
                                    Java, Spring Boot, Spring Batch, Hibernate (JPA), JSP, Apache Parquet, GraphQL,
                                    RabbitMQ, JUnit, Mockito, Maven, Gradle, Git, Docker, MySQL, PostgreSQL, MongoDB,
                                    Snowflake, Linux
                                </strong>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
