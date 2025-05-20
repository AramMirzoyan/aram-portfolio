import React from 'react';
import {FaCcVisa, FaDownload, FaFilePdf, FaGithub, FaLinkedin} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="py-4 flex justify-center items-center gap-4 text-amber-900 drop-shadow-md">

            <a
                href="https://github.com/AramMirzoyan"
                target="_blank"
                rel="noopener noreferrer"
                className="transition transform hover:scale-125 px-1"
                aria-label="GitHub"
            >
                <FaGithub size={35} />
            </a>
            <a
                href="https://www.linkedin.com/in/aram-a-mirzoyan/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition transform hover:scale-125 px-1"
                aria-label="LinkedIn"

            >
                <FaLinkedin size={35} />
            </a>

            <a
                href="/CV_Aram_Mirzoyan.pdf"
                download
                className="transition transform hover:scale-125 px-1"
                aria-label="Download CV"            >
                <FaFilePdf size={35} />
            </a>
        </footer>
    );
};

export default Footer;
