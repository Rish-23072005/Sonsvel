import React from 'react';
import './Clients.css';
import { Building2, Globe, Award, Users, TrendingUp, Shield } from 'lucide-react';

function Clients() {
    const clients = [
        {
            id: 1,
            name: "TechCorp Global",
            logo: "https://via.placeholder.com/150",
            industry: "Technology",
            description: "Leading provider of enterprise software solutions",
            icon: <Building2 size={24} />
        },
        {
            id: 2,
            name: "InnovateCo",
            logo: "https://via.placeholder.com/150",
            industry: "Innovation",
            description: "Pioneering research and development company",
            icon: <Globe size={24} />
        },
        {
            id: 3,
            name: "SecureNet",
            logo: "https://via.placeholder.com/150",
            industry: "Cybersecurity",
            description: "Advanced security solutions provider",
            icon: <Shield size={24} />
        },
        {
            id: 4,
            name: "GrowthPartners",
            logo: "https://via.placeholder.com/150",
            industry: "Consulting",
            description: "Strategic business growth consultants",
            icon: <TrendingUp size={24} />
        },
        {
            id: 5,
            name: "EliteSolutions",
            logo: "https://via.placeholder.com/150",
            industry: "Enterprise",
            description: "Premium enterprise solutions provider",
            icon: <Award size={24} />
        },
        {
            id: 6,
            name: "TeamDynamics",
            logo: "https://via.placeholder.com/150",
            industry: "HR Tech",
            description: "Modern HR technology solutions",
            icon: <Users size={24} />
        }
    ];

    return (
        <section className="clients-section" id="clients">
            <div className="container">
                <h2 className="section-title">Our Clients</h2>
                <p className="section-description">
                    Trusted by industry leaders and innovative companies worldwide
                </p>

                <div className="clients-grid">
                    {clients.map(client => (
                        <div className="client-card" key={client.id}>
                            <div className="client-logo">
                                <img src={client.logo} alt={client.name} />
                            </div>
                            <div className="client-info">
                                <div className="client-icon">
                                    {client.icon}
                                </div>
                                <h3>{client.name}</h3>
                                <p className="client-industry">{client.industry}</p>
                                <p className="client-description">{client.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="clients-cta">
                    <h3>Ready to join our growing list of satisfied clients?</h3>
                    <button className="cta-button">Get Started</button>
                </div>
            </div>
        </section>
    );
}

export default Clients; 