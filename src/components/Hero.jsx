import React from 'react';
import profileImage from '../assets/aram-photo.jpg'; // Make sure you have this image in assets

const Hero = () => {
    return (
        <section className="flex flex-col-reverse md:flex-row items-center justify-between px-8 py-12">
            <div className="max-w-xl text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Aram <br /> Mirzoyan
                </h1>
                <p className="text-xl text-gray-600 mb-6">Java Software Engineer</p>
                <a
                    href="/CV_Aram_Mirzoyan.pdf"
                    download
                    className="border-2 border-black px-6 py-2 rounded hover:bg-black hover:text-white transition"
                >
                    View CV
                </a>
            </div>
            <div className="mb-8 md:mb-0">
                <img
                    src={profileImage}
                    alt="Aram Mirzoyan"
                    className="w-60 md:w-72 rounded-xl object-cover"
                />
            </div>
        </section>
    );
};

export default Hero;
