import { useEffect, useState } from 'react';

const useActiveSection = (sectionIds) => {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            let current = 'home';
            for (let id of sectionIds) {
                const section = document.getElementById(id);
                if (section && window.scrollY >= section.offsetTop - 200) {
                    current = id;
                }
            }
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [sectionIds]);

    return activeSection;
};

export default useActiveSection;
