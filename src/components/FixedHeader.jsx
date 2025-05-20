import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import profileImage from '../assets/aram-photo.jpg';
import Footer from './Footer';
import { FaBars, FaTimes } from 'react-icons/fa';

const FixedHeader = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isMobile, setIsMobile] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const sections = [
        { name: 'Home', route: '/' },
        { name: 'Workplace', route: '/work' },
        { name: 'Skills', route: '/skills' },
        { name: 'Projects', route: '/project' },
        { name: 'About me', route: '/about' },
    ];

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

    // Close menu when route changes
    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    return (
        <div className={`flex flex-col items-center ${isMobile ? 'w-full py-4' : 'md:sticky md:top-10'}`}>
            {isMobile && (
                <div className="w-full flex justify-between items-center px-4 mb-4">
                    <div className="flex items-center">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md mr-3">
                            <img
                                src={profileImage}
                                alt="Aram"
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-gray-800">Aram Mirzoyan</h2>
                            <p className="text-sm text-gray-600">Java Software Engineer</p>
                        </div>
                    </div>
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-[#38802A] p-2"
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            )}

            {(!isMobile || menuOpen) && (
                <div className={`flex flex-col items-center ${isMobile ? 'w-full' : ''}`}>
                    {!isMobile && (
                        <div className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-white shadow-xl bg-white mb-8">
                            <img
                                src={profileImage}
                                alt="Aram"
                                className="w-full h-full object-cover object-top scale-110"
                            />
                        </div>
                    )}

                    <nav className={`flex flex-col ${isMobile ? 'items-center w-full' : 'items-end'} mb-6`}>
                        {sections.map(({ name, to, route }, i) => (
                            <React.Fragment key={name}>
                                {route ? (
                                    <RouterLink
                                        to={route}
                                        onClick={() => setActiveSection(route)}
                                        className={`flex items-center gap-4 group cursor-pointer py-2 ${isMobile ? 'flex-row-reverse' : ''}`}
                                    >
                                        <span
                                            className={`transition-all ${isMobile ? 'text-center' : 'text-right'} ${
                                                activeSection === route || location.pathname === route
                                                    ? 'font-bold text-red-500 text-lg md:text-xl'
                                                    : 'text-[#38802A] text-base md:text-lg'
                                            } group-hover:scale-105`}
                                        >
                                            {name}
                                        </span>
                                        <span
                                            className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
                                                activeSection === route || location.pathname === route
                                                    ? 'bg-red-500'
                                                    : 'border-2 border-[#38802A]'
                                            } group-hover:scale-110 group-hover:bg-red-500`}
                                        />
                                    </RouterLink>
                                ) : (
                                    <ScrollLink
                                        to={to}
                                        smooth={true}
                                        duration={500}
                                        offset={-60}
                                        onClick={() => setActiveSection(to)}
                                        className={`flex items-center gap-4 group cursor-pointer py-2 ${isMobile ? 'flex-row-reverse' : ''}`}
                                    >
                                        <span
                                            className={`transition-all ${isMobile ? 'text-center' : 'text-right'} ${
                                                activeSection === to && location.pathname === '/'
                                                    ? 'font-bold text-red-500 text-lg md:text-xl'
                                                    : 'text-[#38802A] text-base md:text-lg'
                                            } group-hover:scale-105`}
                                        >
                                            {name}
                                        </span>
                                        <span
                                            className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
                                                activeSection === to && location.pathname === '/'
                                                    ? 'bg-red-500'
                                                    : 'border-2 border-[#38802A]'
                                            } group-hover:scale-110 group-hover:bg-red-500`}
                                        />
                                    </ScrollLink>
                                )}
                                {i < sections.length - 1 && !isMobile && (
                                    <div className="h-10 w-[2px] bg-[#38802A] mr-[5px]" />
                                )}
                            </React.Fragment>
                        ))}
                    </nav>

                    <div className={`${isMobile ? 'w-full px-4 mt-4' : ''}`}>
                        <Footer />
                    </div>
                </div>
            )}
        </div>
    );
};

export default FixedHeader;