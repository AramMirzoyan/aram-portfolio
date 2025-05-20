import React from 'react';

const Header = () => {
    return (
        <header className="flex justify-between items-center px-8 py-6 shadow-sm">
            <nav className="space-x-8 font-medium text-gray-700">
                <a href="#" className="text-black font-bold border-b-2 border-black">Home</a>
                <a href="#">About</a>
                <a href="#">Projects</a>
                <a href="#">Contact</a>
            </nav>
        </header>
    );
};

export default Header;
