import React from 'react';
import './Careers.css';
import {
    Briefcase,
    GraduationCap,
    Heart,
    Clock,
    Globe,
    Users,
    Zap,
    Coffee
} from 'lucide-react';

function Careers() {
    const benefits = [
        {
            icon: <Heart size={24} />,
            title: "Health & Wellness",
            description: "Comprehensive health insurance and wellness programs"
        },
        {
            icon: <Clock size={24} />,
            title: "Flexible Hours",
            description: "Work-life balance with flexible scheduling options"
        },
        {
            icon: <Globe size={24} />,
            title: "Remote Work",
            description: "Work from anywhere with our remote-first policy"
        },
        {
            icon: <Users size={24} />,
            title: "Team Events",
            description: "Regular team building and social activities"
        },
        {
            icon: <Zap size={24} />,
            title: "Learning Budget",
            description: "Annual budget for courses and conferences"
        },
        {
            icon: <Coffee size={24} />,
            title: "Office Perks",
            description: "Free snacks, coffee, and modern office space"
        }
    ];

    const positions = [
        {
            id: 1,
            title: "Senior Frontend Developer",
            department: "Engineering",
            location: "Remote",
            type: "Full-time",
            description: "Join our team to build cutting-edge web applications using React and modern JavaScript."
        },
        {
            id: 2,
            title: "DevOps Engineer",
            department: "Engineering",
            location: "Remote",
            type: "Full-time",
            description: "Help us scale our infrastructure and implement CI/CD pipelines."
        },
        {
            id: 3,
            title: "UX/UI Designer",
            department: "Design",
            location: "Remote",
            type: "Full-time",
            description: "Create beautiful and intuitive user interfaces for our products."
        },
        {
            id: 4,
            title: "Product Manager",
            department: "Product",
            location: "Remote",
            type: "Full-time",
            description: "Lead product development and work closely with our engineering team."
        }
    ];

    return (
        <section className="careers-section" id="careers">
            <div className="container">
                <h2 className="section-title">Join Our Team</h2>
                <p className="section-description">
                    Be part of a team that's shaping the future of technology
                </p>

                <div className="benefits-section">
                    <h3>Why Work With Us</h3>
                    <div className="benefits-grid">
                        {benefits.map((benefit, index) => (
                            <div className="benefit-card" key={index}>
                                <div className="benefit-icon">
                                    {benefit.icon}
                                </div>
                                <h4>{benefit.title}</h4>
                                <p>{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="positions-section">
                    <h3>Open Positions</h3>
                    <div className="positions-grid">
                        {positions.map(position => (
                            <div className="position-card" key={position.id}>
                                <div className="position-header">
                                    <div className="position-title">
                                        <Briefcase size={20} />
                                        <h4>{position.title}</h4>
                                    </div>
                                    <span className="position-type">{position.type}</span>
                                </div>
                                <div className="position-details">
                                    <span className="position-department">
                                        <GraduationCap size={16} />
                                        {position.department}
                                    </span>
                                    <span className="position-location">
                                        <Globe size={16} />
                                        {position.location}
                                    </span>
                                </div>
                                <p className="position-description">{position.description}</p>
                                <button className="apply-button">Apply Now</button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="careers-cta">
                    <h3>Don't see the right position?</h3>
                    <p>We're always looking for talented individuals. Send us your resume!</p>
                    <button className="cta-button">Send Resume</button>
                </div>
            </div>
        </section>
    );
}

export default Careers; 