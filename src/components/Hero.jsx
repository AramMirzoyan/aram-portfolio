import React, { useEffect, useState } from 'react';

const Hero = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setAnimate(true), 200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center bg-[#351394] text-white"
        >


            {/* Centered Name Block */}
            <div className="text-center px-6">
                <p className="text-sm text-white/80 mb-2">Hi there, I am</p>
                <h1
                    className={`text-5xl md:text-6xl font-bold transition-all duration-1000 ${
                        animate ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                    }`}
                >
                    Aram <br />
                    <span className="text-red-400">Mirzoyan</span>
                </h1>
                <p className="mt-4 text-white text-lg font-medium">Java Software Engineer</p>
            </div>
        </section>
    );
};

export default Hero;
