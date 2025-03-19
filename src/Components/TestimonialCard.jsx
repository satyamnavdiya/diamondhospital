import React from 'react'
import './CSS/Testimonial.css'

function TestimonialCard({ name, role, content}) {
    return (
        <div className="testimonial-card">
            <div className="testimonial-image">
                {/* <img src={imageUrl} alt={`${name}'s portrait`} /> */}
            </div>
            <div className="testimonial-content">
                <p>"{content}"</p>
                <div className="testimonial-author">
                    <strong>{name}</strong>
                    <span>{role}</span>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard
