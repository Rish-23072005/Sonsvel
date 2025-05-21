import React from 'react';
import './Impact.css';
import { Globe, Clock, Users, Clipboard, Code, Cloud, Shield } from 'lucide-react';

function Impact() {
    return (
        <>
            <section className="expertise-section" id="expertise">
                <div className="container">
                    <h2 className="section-title">Our Expertise</h2>
                    <div className="expertise-grid">
                        <div className="expertise-card">
                            <div className="icon-box">
                                <Code size={24} />
                            </div>
                            <h3>Modern Technologies</h3>
                            <p>Expertise in React, Angular, Vue, Node.js, Python, and other cutting-edge frameworks.</p>
                        </div>
                        <div className="expertise-card">
                            <div className="icon-box">
                                <Code size={24} />
                            </div>
                            <h3>AI & Machine Learning</h3>
                            <p>Advanced capabilities in TensorFlow, PyTorch, and natural language processing.</p>
                        </div>
                        <div className="expertise-card">
                            <div className="icon-box">
                                <Cloud size={24} />
                            </div>
                            <h3>Cloud Architecture</h3>
                            <p>Certified experts in AWS, Azure, and Google Cloud Platform services.</p>
                        </div>
                        <div className="expertise-card">
                            <div className="icon-box">
                                <Shield size={24} />
                            </div>
                            <h3>Cybersecurity</h3>
                            <p>Comprehensive security solutions including penetration testing and compliance.</p>
                        </div>
                    </div>
                    <div className="cta-container">
                        <button className="cta-button">Join Our Team</button>
                    </div>
                </div>
            </section>

            <section className="impact-section" id="impact">
                <div className="container">
                    <h2 className="section-title">Our Impact</h2>
                    <p className="impact-description">We've helped businesses across industries achieve remarkable results through technology.</p>

                    <div className="stats-grid">
                        <div className="stat-card">
                            <div className="icon-circle">
                                <Users size={24} />
                            </div>
                            <h3 className="stat-number">120</h3>
                            <h4 className="stat-title">Clients Served</h4>
                            <p className="stat-description">From startups to Fortune 500 companies across the globe</p>
                        </div>
                        <div className="stat-card">
                            <div className="icon-circle">
                                <Clipboard size={24} />
                            </div>
                            <h3 className="stat-number">250</h3>
                            <h4 className="stat-title">Projects Delivered</h4>
                            <p className="stat-description">Successfully completed projects with exceptional client satisfaction</p>
                        </div>
                        <div className="stat-card">
                            <div className="icon-circle">
                                <Clock size={24} />
                            </div>
                            <h3 className="stat-number">15</h3>
                            <h4 className="stat-title">Years Experience</h4>
                            <p className="stat-description">Delivering innovative technology solutions since 2009</p>
                        </div>
                        <div className="stat-card">
                            <div className="icon-circle">
                                <Globe size={24} />
                            </div>
                            <h3 className="stat-number">30</h3>
                            <h4 className="stat-title">Countries Reached</h4>
                            <p className="stat-description">Serving clients and delivering solutions worldwide</p>
                        </div>
                    </div>

                    <div className="clients-section">
                        <h3 className="clients-title">Trusted by Leading Companies</h3>
                        <div className="client-logos">
                            <div className="client-logo">COMPANY 1</div>
                            <div className="client-logo">COMPANY 2</div>
                            <div className="client-logo">COMPANY 3</div>
                            <div className="client-logo">COMPANY 4</div>
                            <div className="client-logo">COMPANY 5</div>
                            <div className="client-logo">COMPANY 6</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Impact;