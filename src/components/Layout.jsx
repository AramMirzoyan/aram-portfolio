import { Outlet } from 'react-router-dom';
import FixedHeader from './FixedHeader';
import { useState, useEffect } from 'react';

const Layout = () => {
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
        <section className="bg-[#FFFFFF] min-h-screen flex flex-col">
            <div className={`w-full max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 ${isMobile ? '' : 'flex'}`}>
                {/* On mobile, show header first */}
                {isMobile && <FixedHeader />}

                {/* Main content area */}
                <div className={`${isMobile ? 'w-full' : 'w-2/3'}`}>
                    <Outlet />
                </div>

                {/* On desktop, show header on the side */}
                {!isMobile && (
                    <div className="w-1/3">
                        <FixedHeader />
                    </div>
                )}
            </div>
        </section>
    );
};

export default Layout;