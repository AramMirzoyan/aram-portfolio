import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Footer from "./components/Footer.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route
                    index
                    element={
                        <>
                            <Hero />
                        </>
                    }
                />
                <Route path="about" element={<About />} />
                <Route path="project" element={<Projects />} />
            </Route>
        </Routes>
    );
}

export default App;
