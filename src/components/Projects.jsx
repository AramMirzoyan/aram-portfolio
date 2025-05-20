import React from 'react';
import { FaShieldAlt, FaLeaf, FaPowerOff, FaDocker } from 'react-icons/fa';

const projects = [
    {
        title: "Keycloak Integration",
        description: "Implemented secure identity management using Keycloak.",
        icon: <FaShieldAlt size={28} />,
    },
    {
        title: "MongoDB Aggregations",
        description: "Built complex aggregations for financial document parsing.",
        icon: <FaLeaf size={28} />,
    },
    {
        title: "Spring Boot Testing",
        description: "Created unit and integration test suites using JUnit.",
        icon: <FaPowerOff size={28} />,
    },
    {
        title: "Docker Compose Setups",
        description: "Dockerized backend services and dev environments.",
        icon: <FaDocker size={28} />,
    },
];

const Projects = () => {
    return (
        <section id="projects" className="bg-[#fef8f3] py-20 px-6 md:px-16">
            <h2 className="text-3xl font-bold mb-12 border-b-4 border-[#002244] inline-block">
                Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition"
                    >
                        <div className="mb-4 text-[#002244]">{project.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-gray-600 text-sm">{project.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
