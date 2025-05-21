import './AboutUs.css';

export default function AboutUs() {
    return (
        <section className="about" id="about">
            <h2>About Us</h2>
            <p className="about-intro">
                We're a team of passionate technologists dedicated to transforming ideas into powerful digital solutions.
            </p>
            <div className="about-mission-vision">
                <div>
                    <h3>Our Mission</h3>
                    <p>
                        At Sonsvel, we're committed to empowering businesses through innovative technology solutions that drive growth, efficiency, and competitive advantage.
                    </p>
                </div>
                <div>
                    <h3>Our Vision</h3>
                    <p>
                        To be the trusted technology partner for businesses worldwide, known for our technical excellence, innovative solutions, and exceptional client service.
                    </p>
                </div>
            </div>
            <div className="about-values-images">
                <div className="about-values">
                    <div>
                        <h4>Quality Commitment</h4>
                        <p>We deliver solutions that meet the highest standards of quality and reliability.</p>
                    </div>
                    <div>
                        <h4>Innovation Focus</h4>
                        <p>We stay at the forefront of technology to provide cutting-edge solutions.</p>
                    </div>
                    <div>
                        <h4>Client Partnership</h4>
                        <p>We build lasting relationships based on trust and collaboration.</p>
                    </div>
                    <div>
                        <h4>Timely Delivery</h4>
                        <p>We ensure projects are delivered on time, every time.</p>
                    </div>
                </div>
                <div className="about-images">
                    <img src="https://placehold.co/500x300/2563eb/ffffff?text=Team+Collaboration" alt="Team collaboration" />
                    <img src="https://placehold.co/500x300/2563eb/ffffff?text=Team+Meeting" alt="Team meeting" />
                    <img src="https://placehold.co/500x300/2563eb/ffffff?text=Team+Discussion" alt="Team discussion" />
                    <img src="https://placehold.co/500x300/2563eb/ffffff?text=Team+Presentation" alt="Team presentation" />
                </div>
            </div>
        </section>
    );
}