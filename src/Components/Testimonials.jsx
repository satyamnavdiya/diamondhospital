import React, { useEffect } from 'react';
import './CSS/Testimonial.css'
import TestimonialCard from './TestimonialCard';

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Parent of Alex, Grade 5",
        content: "The dedicated teachers and innovative curriculum have made such a positive impact on my child's education. The school's commitment to excellence is evident in everything they do.",
        imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
        name: "Michael Chen",
        role: "Parent of Emily, Grade 3",
        content: "We couldn't be happier with the supportive learning environment. Our daughter has flourished here, developing both academically and socially in ways that exceed our expectations.",
        imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
        name: "Lisa Rodriguez",
        role: "Parent of twins Tom & Ana, Grade 6",
        content: "The individual attention each student receives is remarkable. The teachers truly understand and nurture each child's unique talents and learning style.",
        imageUrl: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?auto=format&fit=crop&q=80&w=200&h=200"
    }
];


function Testimonials() {

    useEffect(() => {
        const container = document.querySelector('.testimonials-container');

        const handleMouseEnter = () => {
            if (container) container.style.animationPlayState = 'paused';
        };

        const handleMouseLeave = () => {
            if (container) container.style.animationPlayState = 'running';
        };

        container?.addEventListener('mouseenter', handleMouseEnter);
        container?.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            container?.removeEventListener('mouseenter', handleMouseEnter);
            container?.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);


    return (
        <section className='mt-20 mb-20'>
            <h1 className='testimonial-heading'>What Patients Say About <span className="testi-gradient">Our Hospital</span></h1>
            <div className="testimonials-wrapper">
                <div className="testimonials-container">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={`testimonial-${index}`} {...testimonial} />
                    ))}
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={`testimonial-duplicate-${index}`} {...testimonial} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
