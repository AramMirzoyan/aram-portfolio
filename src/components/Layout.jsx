import { Outlet, } from 'react-router-dom';
import FixedHeader from './FixedHeader';

const Layout = () => {



    return (
        <section className="bg-[#FFFFFF] min-h-screen flex flex-col items-center justify-between " style={{
            padding:'50px'
        }}>

            <div className="w-full max-w-[1100px] flex flex-col md:flex-row justify-between items-start  ">
                    <Outlet />

                <FixedHeader />

            </div>


        </section>
    );
};

export default Layout;
