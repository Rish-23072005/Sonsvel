import './Services.css';

const services = [
    {
        title: "Custom Software Development",
        desc: "Tailored software solutions designed to address your unique business challenges and operational requirements.",
        icon: "💻"
    },
    {
        title: "Web Application Development",
        desc: "Responsive, scalable web applications built with modern frameworks to deliver exceptional user experiences.",
        icon: "🌐"
    },
    {
        title: "AI & Machine Learning Solutions",
        desc: "Harness the power of artificial intelligence to automate processes, gain insights, and drive innovation.",
        icon: "🤖"
    },
    {
        title: "Cloud Computing Services",
        desc: "Scalable cloud infrastructure and migration services to optimize performance, security, and cost-efficiency.",
        icon: "☁️"
    },
    {
        title: "Cybersecurity Solutions",
        desc: "Comprehensive security services to protect your digital assets, prevent breaches, and ensure compliance.",
        icon: "🔒"
    },
    {
        title: "Mobile App Development",
        desc: "Native and cross-platform mobile applications that deliver seamless experiences across all devices.",
        icon: "📱"
    }
];

export default function Services() {
    return (
        <section className="services" id="services">
            <h2>Services</h2>
            <p className="services-desc">
                We deliver cutting-edge solutions tailored to your business needs with expertise across multiple domains.
            </p>
            <div className="services-grid">
                {services.map((s, i) => (
                    <div key={i} className="service-card">
                        <div className="icon">{s.icon}</div>
                        <h3>{s.title}</h3>
                        <p>{s.desc}</p>
                        <a href="#">Learn more &rarr;</a>
                    </div>
                ))}
            </div>
        </section>
    );
}