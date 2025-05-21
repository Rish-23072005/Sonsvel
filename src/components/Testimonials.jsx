import React, { useState, useEffect } from 'react';
import './Testimonials.css';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

function Testimonials() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const testimonials = [
        {
            id: 1,
            name: "Sarah Johnson",
            position: "CTO, TechCorp",
            image: "https://via.placeholder.com/100",
            rating: 5,
            text: "Working with Sonsvel has been transformative for our business. Their team delivered a cutting-edge solution that exceeded our expectations."
        },
        {
            id: 2,
            name: "Michael Chen",
            position: "Founder, StartupX",
            image: "https://via.placeholder.com/100",
            rating: 5,
            text: "The level of expertise and professionalism demonstrated by the Sonsvel team is outstanding. They truly understand the needs of modern businesses."
        },
        {
            id: 3,
            name: "Emily Rodriguez",
            position: "Product Manager, InnovateCo",
            image: "https://via.placeholder.com/100",
            rating: 5,
            text: "Sonsvel's innovative approach to problem-solving and their attention to detail made all the difference in our project's success."
        },
        {
            id: 4,
            name: "David Kim",
            position: "Director of Technology, GlobalTech",
            image: "https://via.placeholder.com/100",
            rating: 5,
            text: "The team at Sonsvel consistently delivers high-quality solutions. Their technical expertise and collaborative approach are unmatched."
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="testimonials-section" id="testimonials">
            <div className="container">
                <h2 className="section-title">Client Testimonials</h2>
                <p className="section-description">
                    Hear what our clients have to say about their experience working with us
                </p>

                <div className="testimonials-carousel">
                    <button className="carousel-btn prev" onClick={prevSlide}>
                        <ChevronLeft size={24} />
                    </button>

                    <div className="testimonials-slider">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={testimonial.id}
                                className={`testimonial-card ${index === currentSlide ? 'active' : ''
                                    }`}
                            >
                                <div className="testimonial-content">
                                    <div className="testimonial-rating">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} size={20} fill="currentColor" />
                                        ))}
                                    </div>
                                    <p className="testimonial-text">{testimonial.text}</p>
                                    <div className="testimonial-author">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="author-image"
                                        />
                                        <div className="author-info">
                                            <h4>{testimonial.name}</h4>
                                            <p>{testimonial.position}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="carousel-btn next" onClick={nextSlide}>
                        <ChevronRight size={24} />
                    </button>
                </div>

                <div className="testimonials-dots">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => setCurrentSlide(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials; 