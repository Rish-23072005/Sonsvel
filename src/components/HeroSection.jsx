import './HeroSection.css';

export default function HeroSection() {
    return (
        <section className="hero" id="hero">
            <div className="hero-content">
                <h1>Powering Innovation with Code</h1>
                <p>
                    We transform your ideas into powerful digital solutions that drive business growth and enhance user experience.
                </p>
                <div className="hero-buttons">
                    <button className="primary">Get Started</button>
                    <button className="secondary">Explore Services</button>
                </div>
                <div className="stats">
                    <div>
                        <span>250</span>
                        <p>Projects Delivered</p>
                    </div>
                    <div>
                        <span>120</span>
                        <p>Clients Served</p>
                    </div>
                    <div>
                        <span>15</span>
                        <p>Years Experience</p>
                    </div>
                </div>
            </div>
            <div className="hero-image">
                <img src="https://placehold.co/800x600/2563eb/ffffff?text=Innovative+Technology" alt="Technology Solutions" />
                <div className="ai-badge">
                    <span className="dot"></span> AI-Powered Solutions
                </div>
            </div>
        </section>
    );
}