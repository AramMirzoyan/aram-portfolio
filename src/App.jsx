import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";

function App() {
    return (
        <div className="font-sans bg-white text-black min-h-screen">
            <Header />
            <Hero />
            <Projects />
            <Footer />
        </div>
    );
}

export default App;
