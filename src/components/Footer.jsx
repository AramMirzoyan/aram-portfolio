import React from 'react';
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

const Footer = () => {
    return (
        <div className=" text-amber-900 drop-shadow-md">
            <div className='flex py-4 flex justify-center items-center gap-4'>


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
                <a
                    href="https://t.me/AramMirzoyan"
                    download
                    className="transition transform hover:scale-125 px-1"
                    aria-label="Telegram">
                    <FaTelegramPlane size={35} />
                </a>

                <a
                    href="https://wa.me/37444766763"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition transform hover:scale-125"
                    aria-label="WhatsApp">
                    <FaWhatsapp size={35} />
                </a>
            </div>
            <div>
                <p ><strong>Email:</strong> aram.a.mirzoyan@gmail.com</p>
                                           <p className="mb-2"><strong>Phone number:</strong> +37444766763</p>

            </div>
        </div>
    );
};

export default Footer;
