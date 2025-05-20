import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const lines = ['Hi there, I am',
    'Aram', 'Mirzoyan',
    'Java Software Engineer',
];

const Hero = () => {
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

    return (
        <section
            id="home"
            className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center w-full bg-[#351394] text-green-500 px-4"
        >
            <div className="text-center">
                {lines.map((line, i) => (
                    <motion.h1
                        key={i}
                        className={`${isMobile ? 'text-2xl' : 'text-3xl md:text-5xl'} font-bold mb-2`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: [0, 1, 0], y: [20, 0, -20] }}
                        transition={{
                            delay: i * 0.3,
                            duration: 5,
                            repeat: Infinity,
                            repeatType: 'loop',
                            ease: 'easeInOut'
                        }}
                    >
                        {line}
                    </motion.h1>
                ))}
            </div>
        </section>
    );
};

export default Hero;