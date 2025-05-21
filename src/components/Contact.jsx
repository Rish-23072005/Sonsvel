import React, { useState } from 'react';
import './Contact.css';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
    };

    return (
        <section className="contact-section" id="contact">
            <div className="container">
                <h2 className="section-title">Get in Touch</h2>
                <p className="section-description">
                    Have a question or want to work together? We'd love to hear from you.
                </p>

                <div className="contact-container">
                    <div className="contact-info">
                        <div className="info-card">
                            <div className="info-icon">
                                <Mail size={24} />
                            </div>
                            <h3>Email Us</h3>
                            <p>info@sonsvel.com</p>
                            <p>support@sonsvel.com</p>
                        </div>

                        <div className="info-card">
                            <div className="info-icon">
                                <Phone size={24} />
                            </div>
                            <h3>Call Us</h3>
                            <p>+1 (555) 123-4567</p>
                            <p>+1 (555) 987-6543</p>
                        </div>

                        <div className="info-card">
                            <div className="info-icon">
                                <MapPin size={24} />
                            </div>
                            <h3>Visit Us</h3>
                            <p>123 Tech Street</p>
                            <p>San Francisco, CA 94107</p>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Your Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Your Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                            ></textarea>
                        </div>

                        <button type="submit" className="submit-button">
                            <Send size={20} />
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact; 