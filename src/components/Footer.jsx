import React from 'react';
import './Footer.css';
import {
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Github,
    ArrowUp
} from 'lucide-react';

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h2>Sonsvel</h2>
                        <p>Building the future of technology, one solution at a time.</p>
                        <div className="social-links">
                            <a href="#" className="social-link">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="social-link">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="social-link">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="social-link">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="social-link">
                                <Github size={20} />
                            </a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <div className="footer-column">
                            <h3>Company</h3>
                            <ul>
                                <li><a href="#about">About Us</a></li>
                                <li><a href="#services">Services</a></li>
                                <li><a href="#portfolio">Portfolio</a></li>
                                <li><a href="#careers">Careers</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h3>Services</h3>
                            <ul>
                                <li><a href="#web">Web Development</a></li>
                                <li><a href="#mobile">Mobile Apps</a></li>
                                <li><a href="#cloud">Cloud Solutions</a></li>
                                <li><a href="#ai">AI/ML Services</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h3>Support</h3>
                            <ul>
                                <li><a href="#contact">Contact Us</a></li>
                                <li><a href="#faq">FAQ</a></li>
                                <li><a href="#privacy">Privacy Policy</a></li>
                                <li><a href="#terms">Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2024 Sonsvel. All rights reserved.</p>
                    <button className="scroll-top" onClick={scrollToTop}>
                        <ArrowUp size={20} />
                    </button>
                </div>
            </div>
        </footer>
    );
}

export default Footer; 