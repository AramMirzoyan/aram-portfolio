

import React, { useState } from 'react';
import { Outlet, Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import profileImage from '../assets/aram-photo.jpg';
import Footer from './Footer';
const FixedHeader = () => {
    const [activeSection, setActiveSection] = useState('home');
    const location = useLocation();
    const sections = [
        { name: 'Home', route: '/' },
        { name: 'Workplace', route: '/work' },
        { name: 'Skills', route: '/skills' },
        { name: 'Projects', route: '/project' },
        { name: 'About me', route: '/about' },
    ];





    return (
        <div className="flex flex-col items-center justify-center gap-10" style={{
            position: 'fixed',
            marginLeft: '60%'
        }} >

            <div className="w-60 h-60 rounded-full overflow-hidden border-[4px] border-white shadow-xl bg-white">
                <img
                    src={profileImage}
                    alt="Aram"
                    className="w-full h-full object-cover object-top scale-110"
                />
            </div>

            <div className="flex flex-col items-end">
                {sections.map(({ name, to, route }, i) => (
                    <React.Fragment key={name}>
                        {route ? (
                            <RouterLink
                                to={route}
                                onClick={() => setActiveSection(route)}
                                className="flex items-center gap-4 group cursor-pointer"
                            >
                                <span
                                    className={`transition-all text-right ${activeSection === route || location.pathname === route
                                        ? 'font-bold text-red-500 text-xl'
                                        : 'text-[#38802A] text-lg'
                                        } group-hover:scale-110`}
                                >
                                    {name}
                                </span>
                                <span
                                    className={`w-4 h-4 rounded-full transition-all duration-300 ${activeSection === route || location.pathname === route
                                        ? 'bg-red-500'
                                        : 'border-2 border-[#38802A]'
                                        } group-hover:scale-125 group-hover:bg-red-500`}
                                />
                            </RouterLink>
                        ) : (
                            <ScrollLink
                                to={to}
                                smooth={true}
                                duration={500}
                                offset={-60}
                                onClick={() => setActiveSection(to)}
                                className="flex items-center gap-4 group cursor-pointer"
                            >

                                <span
                                    className={`transition-all text-right ${activeSection === to && location.pathname === '/'
                                        ? 'font-bold bg-red-500 text-xl'
                                        : 'text-[#38802A] text-lg'
                                        } group-hover:scale-110`}
                                >

                                </span>
                                <span
                                    className={`w-4 h-4 rounded-full transition-all duration-300 ${activeSection === to && location.pathname === '/'
                                        ? 'bg-red-500'
                                        : 'border-2 border-[#38802A]'
                                        } group-hover:scale-125 group-hover:bg-red-500`}
                                />
                            </ScrollLink>
                        )}
                        {i < sections.length - 1 && (
                            <div className="h-14 w-[3px] bg-[#38802A] mr-[6px]" />
                        )}
                    </React.Fragment>
                ))}
            </div>
            <div style={{
                marginLeft: '10px'
            }}>
                <Footer />

            </div>

        </div>
    )
}

export default FixedHeader