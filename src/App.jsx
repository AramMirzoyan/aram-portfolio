import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Work from './components/Work.jsx';
import About from './components/About';
import Skills from "./components/Skills.jsx";
import Project from "./components/Project.jsx";

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
                <Route path="work" element={<Work />} />
                <Route path="skills" element={<Skills />} />
                <Route path="project" element={<Project />} />
            </Route>
        </Routes>
    );
}

export default App;
