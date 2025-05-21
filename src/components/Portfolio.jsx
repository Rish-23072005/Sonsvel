import React, { useState } from 'react';
import './Portfolio.css';
import { ExternalLink, Github } from 'lucide-react';

function Portfolio() {
    const [activeFilter, setActiveFilter] = useState('all');

    const projects = [
        {
            id: 1,
            title: "E-Commerce Platform",
            category: "web",
            image: "https://via.placeholder.com/400x300",
            description: "A full-stack e-commerce solution with React and Node.js",
            technologies: ["React", "Node.js", "MongoDB", "Stripe"],
            liveLink: "#",
            githubLink: "#"
        },
        {
            id: 2,
            title: "AI Chat Application",
            category: "ai",
            image: "https://via.placeholder.com/400x300",
            description: "Real-time chat application with AI-powered responses",
            technologies: ["Python", "TensorFlow", "WebSocket", "React"],
            liveLink: "#",
            githubLink: "#"
        },
        {
            id: 3,
            title: "Mobile Banking App",
            category: "mobile",
            image: "https://via.placeholder.com/400x300",
            description: "Secure mobile banking application with biometric authentication",
            technologies: ["React Native", "Firebase", "Redux", "Node.js"],
            liveLink: "#",
            githubLink: "#"
        },
        {
            id: 4,
            title: "Cloud Management Dashboard",
            category: "cloud",
            image: "https://via.placeholder.com/400x300",
            description: "AWS resource management and monitoring dashboard",
            technologies: ["AWS", "React", "GraphQL", "DynamoDB"],
            liveLink: "#",
            githubLink: "#"
        }
    ];

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(project => project.category === activeFilter);

    return (
        <section className="portfolio-section" id="portfolio">
            <div className="container">
                <h2 className="section-title">Our Portfolio</h2>
                <p className="section-description">
                    Explore our diverse range of projects showcasing our expertise across different domains
                </p>

                <div className="portfolio-filters">
                    <button
                        className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
                        onClick={() => setActiveFilter('all')}
                    >
                        All Projects
                    </button>
                    <button
                        className={`filter-btn ${activeFilter === 'web' ? 'active' : ''}`}
                        onClick={() => setActiveFilter('web')}
                    >
                        Web Development
                    </button>
                    <button
                        className={`filter-btn ${activeFilter === 'mobile' ? 'active' : ''}`}
                        onClick={() => setActiveFilter('mobile')}
                    >
                        Mobile Apps
                    </button>
                    <button
                        className={`filter-btn ${activeFilter === 'ai' ? 'active' : ''}`}
                        onClick={() => setActiveFilter('ai')}
                    >
                        AI/ML
                    </button>
                    <button
                        className={`filter-btn ${activeFilter === 'cloud' ? 'active' : ''}`}
                        onClick={() => setActiveFilter('cloud')}
                    >
                        Cloud Solutions
                    </button>
                </div>

                <div className="portfolio-grid">
                    {filteredProjects.map(project => (
                        <div className="portfolio-card" key={project.id}>
                            <div className="portfolio-image">
                                <img src={project.image} alt={project.title} />
                                <div className="portfolio-overlay">
                                    <a href={project.liveLink} className="portfolio-link" target="_blank" rel="noopener noreferrer">
                                        <ExternalLink size={24} />
                                    </a>
                                    <a href={project.githubLink} className="portfolio-link" target="_blank" rel="noopener noreferrer">
                                        <Github size={24} />
                                    </a>
                                </div>
                            </div>
                            <div className="portfolio-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="portfolio-tags">
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Portfolio; 