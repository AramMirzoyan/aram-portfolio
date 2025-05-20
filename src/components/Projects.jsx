import React from 'react';
import { FaShieldAlt, FaLeaf, FaPowerOff, FaDocker } from 'react-icons/fa';

const projects = [
    {
        title: "Keycloak Integration",
        description: "Keycloak integrations",
        icon: <FaShieldAlt size={32} />,
    },
    {
        title: "MongoDB Aggregations",
        description: "Aggregates mongodb testings",
        icon: <FaLeaf size={32} />,
    },
    {
        title: "Spring Boot Testing",
        description: "Testing boot testing",
        icon: <FaPowerOff size={32} />,
    },
    {
        title: "Docker ComposeSetups",
        description: "Docker Compose setups",
        icon: <FaDocker size={32} />,
    },
];

const Projects = () => {
    return (
        <section className="px-8 py-12">
            <h2 className="text-3xl font-bold mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <div key={index} className="flex items-center gap-4 p-6 border rounded-lg shadow-sm hover:shadow-md transition">
                        <div className="text-gray-600">{project.icon}</div>
                        <div>
                            <h3 className="text-xl font-semibold">{project.title}</h3>
                            <p className="text-gray-500">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
