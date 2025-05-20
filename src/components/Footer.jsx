import React, { useState, useEffect } from 'react';
import {
    FaCcVisa,
    FaDownload,
    FaFilePdf,
    FaGithub,
    FaLinkedin,
    FaTelegram,
    FaTelegramPlane,
    FaWhatsapp
} from 'react-icons/fa';
import { FaUpwork } from "react-icons/fa6";

const Footer = () => {
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
        <div className={`text-amber-900 drop-shadow-md ${isMobile ? 'flex flex-col' : 'flex flex-wrap'} justify-center items-center gap-4 py-4`}>
            <div className={`flex py-2 justify-center items-center flex-wrap gap-4`}>
                <a
                    href="https://github.com/AramMirzoyan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition transform hover:scale-125 px-1"
                    aria-label="GitHub"
                >
                    <FaGithub size={isMobile ? 28 : 35} />
                </a>
                <a
                    href="https://www.linkedin.com/in/aram-a-mirzoyan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition transform hover:scale-125 px-1"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin size={isMobile ? 28 : 35} />
                </a>
                <a
                    href="CV_Aram_Mirzoyan.pdf"
                    download
                    className="transition transform hover:scale-125 px-1"
                    aria-label="Download CV"
                >
                    <FaFilePdf size={isMobile ? 28 : 35} />
                </a>
                <a
                    href="https://t.me/AramMirzoyan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition transform hover:scale-125 px-1"
                    aria-label="Telegram"
                >
                    <FaTelegramPlane size={isMobile ? 28 : 35} />
                </a>
                <a
                    href="https://wa.me/37444766763"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition transform hover:scale-125 px-1"
                    aria-label="WhatsApp"
                >
                    <FaWhatsapp size={isMobile ? 28 : 35} />
                </a>
                <a
                    href="https://www.upwork.com/freelancers/~0164181316d63cc70c?mp_source=share"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition transform hover:scale-125 px-1"
                    aria-label="Upwork"
                >
                    <FaUpwork size={isMobile ? 28 : 35} />
                </a>
            </div>
            <div className={`${isMobile ? 'text-center text-sm' : ''}`}>
                <p><strong>Email:</strong> aram.a.mirzoyan@gmail.com</p>
                <p className="mb-2"><strong>Phone number:</strong> +37444766763</p>
            </div>
        </div>
    );
};

export default Footer;