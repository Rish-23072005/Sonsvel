import './Navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">Sonsvel</div>
            <ul>
                <li><a href="#hero">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}