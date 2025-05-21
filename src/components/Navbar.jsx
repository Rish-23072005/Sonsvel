import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <div className="navbar-brand">
                    <a href="#home" className="logo">Sonsvel</a>
                </div>

                <button className="nav-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
                    <ul className="navbar-links">
                        <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
                        <li><a href="#services" onClick={() => setIsOpen(false)}>Services</a></li>
                        <li><a href="#about" onClick={() => setIsOpen(false)}>About Us</a></li>
                        <li><a href="#portfolio" onClick={() => setIsOpen(false)}>Portfolio</a></li>
                        <li><a href="#careers" onClick={() => setIsOpen(false)}>Careers</a></li>
                        <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}