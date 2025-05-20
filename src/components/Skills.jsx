import {useEffect, useState} from "react";
import { motion } from "framer-motion"; // Added import for motion

const Skills = () => {
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

    const skillsData = [
        {
            category: 'Programming Languages & Frameworks',
            items: [
                'Java (Core, OOP, Collections, Streams, Multithreading)',
                'Spring (Core, Boot, Data, Security, Batch)',
                'Hibernate (JPA)',
                'JSP',
                'Keycloak'
            ]
        },
        {
            category: 'Testing & Debugging',
            items: ['JUnit', 'Mockito']
        },
        {
            category: 'Data Processing & Integration',
            items: ['Apache Parquet', 'RabbitMQ', 'Spring Batch', 'GraphQL',]
        },
        {
            category: 'Build & Dependency Management',
            items: ['Maven', 'Gradle']
        },
        {
            category: 'Databases',
            items: ['SQL', 'MySQL', 'MongoDB', 'PostgreSQL', 'SnowFlake']
        },
        {
            category: 'Frontend',
            items: ['HTML', 'CSS (Bootstrap)', 'Angular (basic knowledge)']
        },
        {
            category: 'Version Control & DevOps',
            items: ['Git', 'Docker']
        },
        {
            category: 'Operating Systems',
            items: ['Linux', 'Windows']
        }
    ];

    return (
        <section className="min-h-screen px-4 sm:px-6 md:px-20 py-16 md:py-20 text-white bg-[#351394]">
            <motion.h1
                className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Skills
            </motion.h1>
            <div className={`grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-2'} gap-6 md:gap-10`}>
                {skillsData.map((skill, idx) => (
                    <motion.div
                        key={idx}
                        className="bg-white/10 p-4 md:p-6 rounded-xl shadow-md border border-white/20"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1, duration: 0.6 }}
                    >
                        <h2 className="text-xl md:text-2xl font-semibold text-green-300 mb-3 md:mb-4">{skill.category}</h2>
                        <ul className="list-disc list-inside space-y-1 text-white/90 text-xs md:text-sm">
                            {skill.items.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;