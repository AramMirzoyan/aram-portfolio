import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="py-6 flex justify-center items-center gap-6">
            <a
                href="https://github.com/AramMirzoyan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-600 text-2xl"
            >
                <FaGithub />
            </a>
            <a
                href="https://www.linkedin.com/in/aram-a-mirzoyan/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-600 text-2xl"
            >
                <FaLinkedin />
            </a>
        </footer>
    );
};

export default Footer;
