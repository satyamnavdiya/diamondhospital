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

            <div className='div-center grid grid-cols-2 w-[12%] text-center'>
                <div className='review-btn'>Reviews</div>
                <div className='review-btn'>Video</div>
            </div>
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


            <section className="tw-text-gray-600 tw-body-font">
                <div className="tw-container tw-mx-auto tw-flex tw-px-5 tw-py-24 md:tw-flex-row tw-flex-col tw-items-center">
                    {/* <div className="lg:tw-max-w-lg lg:tw-w-full md:tw-w-1/2 tw-w-5/6 tw-mb-10 md:tw-mb-0">
                    <img className="tw-object-cover tw-object-left tw-rounded max-sm:tw-min-w-full custom-img" alt="hero" src={img3} />
                </div> */}
                    <div id="carouselExampleAutoplaying" className="carousel slide tw-w-full" data-bs-ride="carousel">
                        <div className="carousel-inner tw-overflow-hidden tw-w-full">
                            <div className="carousel-item active">
                                <section className="tw-text-gray-600 tw-body-font">
                                    <div className="tw-container tw-px-5 tw-py-24 tw-mx-auto">
                                        <div className="tw-flex tw-flex-wrap -tw-m-4">
                                            <div className="lg:tw-w-1/3 lg:tw-mb-0 tw-mb-6 tw-p-4">
                                                <div className="tw-h-full tw-text-center">
                                                    <img alt="testimonial" className="tw-w-20 tw-h-20 tw-mb-8 tw-object-cover tw-object-center tw-rounded-full tw-inline-block tw-border-2 tw-border-gray-200 tw-bg-gray-100" src="https://dummyimage.com/302x302" />
                                                    <p className="tw-leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                                    <span className="tw-inline-block tw-h-1 tw-w-10 tw-rounded tw-bg-indigo-500 tw-mt-6 tw-mb-4"></span>
                                                    <h2 className="tw-text-gray-900 tw-font-medium tw-title-font tw-tracking-wider tw-text-sm">HOLDEN CAULFIELD</h2>
                                                    <p className="tw-text-gray-500">Senior Product Designer</p>
                                                </div>
                                            </div>
                                            <div className="lg:tw-w-1/3 lg:tw-mb-0 tw-mb-6 tw-p-4">
                                                <div className="tw-h-full tw-text-center">
                                                    <img alt="testimonial" className="tw-w-20 tw-h-20 tw-mb-8 tw-object-cover tw-object-center tw-rounded-full tw-inline-block tw-border-2 tw-border-gray-200 tw-bg-gray-100" src="https://dummyimage.com/300x300" />
                                                    <p className="tw-leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                                    <span className="tw-inline-block tw-h-1 tw-w-10 tw-rounded tw-bg-indigo-500 tw-mt-6 tw-mb-4"></span>
                                                    <h2 className="tw-text-gray-900 tw-font-medium tw-title-font tw-tracking-wider tw-text-sm">ALPER KAMU</h2>
                                                    <p className="tw-text-gray-500">UI Developer</p>
                                                </div>
                                            </div>
                                            <div className="lg:tw-w-1/3 lg:tw-mb-0 tw-p-4">
                                                <div className="tw-h-full tw-text-center">
                                                    <img alt="testimonial" className="tw-w-20 tw-h-20 tw-mb-8 tw-object-cover tw-object-center tw-rounded-full tw-inline-block tw-border-2 tw-border-gray-200 tw-bg-gray-100" src="https://dummyimage.com/305x305" />
                                                    <p className="tw-leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                                    <span className="tw-inline-block tw-h-1 tw-w-10 tw-rounded tw-bg-indigo-500 tw-mt-6 tw-mb-4"></span>
                                                    <h2 className="tw-text-gray-900 tw-font-medium tw-title-font tw-tracking-wider tw-text-sm">HENRY LETHAM</h2>
                                                    <p className="tw-text-gray-500">CTO</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>

                            <div className="carousel-item">
                                <section className="tw-text-gray-600 tw-body-font">
                                    <div className="tw-container tw-px-5 tw-py-24 tw-mx-auto">
                                        <div className="tw-flex tw-flex-wrap -tw-m-4">
                                            <div className="lg:tw-w-1/3 lg:tw-mb-0 tw-mb-6 tw-p-4">
                                                <div className="tw-h-full tw-text-center">
                                                    <img alt="testimonial" className="tw-w-20 tw-h-20 tw-mb-8 tw-object-cover tw-object-center tw-rounded-full tw-inline-block tw-border-2 tw-border-gray-200 tw-bg-gray-100" src="https://dummyimage.com/302x302" />
                                                    <p className="tw-leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                                    <span className="tw-inline-block tw-h-1 tw-w-10 tw-rounded tw-bg-indigo-500 tw-mt-6 tw-mb-4"></span>
                                                    <h2 className="tw-text-gray-900 tw-font-medium tw-title-font tw-tracking-wider tw-text-sm">HOLDEN CAULFIELD</h2>
                                                    <p className="tw-text-gray-500">Senior Product Designer</p>
                                                </div>
                                            </div>
                                            <div className="lg:tw-w-1/3 lg:tw-mb-0 tw-mb-6 tw-p-4">
                                                <div className="tw-h-full tw-text-center">
                                                    <img alt="testimonial" className="tw-w-20 tw-h-20 tw-mb-8 tw-object-cover tw-object-center tw-rounded-full tw-inline-block tw-border-2 tw-border-gray-200 tw-bg-gray-100" src="https://dummyimage.com/300x300" />
                                                    <p className="tw-leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                                    <span className="tw-inline-block tw-h-1 tw-w-10 tw-rounded tw-bg-indigo-500 tw-mt-6 tw-mb-4"></span>
                                                    <h2 className="tw-text-gray-900 tw-font-medium tw-title-font tw-tracking-wider tw-text-sm">ALPER KAMU</h2>
                                                    <p className="tw-text-gray-500">UI Developer</p>
                                                </div>
                                            </div>
                                            <div className="lg:tw-w-1/3 lg:tw-mb-0 tw-p-4">
                                                <div className="tw-h-full tw-text-center">
                                                    <img alt="testimonial" className="tw-w-20 tw-h-20 tw-mb-8 tw-object-cover tw-object-center tw-rounded-full tw-inline-block tw-border-2 tw-border-gray-200 tw-bg-gray-100" src="https://dummyimage.com/305x305" />
                                                    <p className="tw-leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                                    <span className="tw-inline-block tw-h-1 tw-w-10 tw-rounded tw-bg-indigo-500 tw-mt-6 tw-mb-4"></span>
                                                    <h2 className="tw-text-gray-900 tw-font-medium tw-title-font tw-tracking-wider tw-text-sm">HENRY LETHAM</h2>
                                                    <p className="tw-text-gray-500">CTO</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>

                            <div className="carousel-item">
                                <section className="tw-text-gray-600 tw-body-font">
                                    <div className="tw-container tw-px-5 tw-py-24 tw-mx-auto">
                                        <div className="tw-flex tw-flex-wrap -tw-m-4">
                                            <div className="lg:tw-w-1/3 lg:tw-mb-0 tw-mb-6 tw-p-4">
                                                <div className="tw-h-full tw-text-center">
                                                    <img alt="testimonial" className="tw-w-20 tw-h-20 tw-mb-8 tw-object-cover tw-object-center tw-rounded-full tw-inline-block tw-border-2 tw-border-gray-200 tw-bg-gray-100" src="https://dummyimage.com/302x302" />
                                                    <p className="tw-leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                                    <span className="tw-inline-block tw-h-1 tw-w-10 tw-rounded tw-bg-indigo-500 tw-mt-6 tw-mb-4"></span>
                                                    <h2 className="tw-text-gray-900 tw-font-medium tw-title-font tw-tracking-wider tw-text-sm">HOLDEN CAULFIELD</h2>
                                                    <p className="tw-text-gray-500">Senior Product Designer</p>
                                                </div>
                                            </div>
                                            <div className="lg:tw-w-1/3 lg:tw-mb-0 tw-mb-6 tw-p-4">
                                                <div className="tw-h-full tw-text-center">
                                                    <img alt="testimonial" className="tw-w-20 tw-h-20 tw-mb-8 tw-object-cover tw-object-center tw-rounded-full tw-inline-block tw-border-2 tw-border-gray-200 tw-bg-gray-100" src="https://dummyimage.com/300x300" />
                                                    <p className="tw-leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                                    <span className="tw-inline-block tw-h-1 tw-w-10 tw-rounded tw-bg-indigo-500 tw-mt-6 tw-mb-4"></span>
                                                    <h2 className="tw-text-gray-900 tw-font-medium tw-title-font tw-tracking-wider tw-text-sm">ALPER KAMU</h2>
                                                    <p className="tw-text-gray-500">UI Developer</p>
                                                </div>
                                            </div>
                                            <div className="lg:tw-w-1/3 lg:tw-mb-0 tw-p-4">
                                                <div className="tw-h-full tw-text-center">
                                                    <img alt="testimonial" className="tw-w-20 tw-h-20 tw-mb-8 tw-object-cover tw-object-center tw-rounded-full tw-inline-block tw-border-2 tw-border-gray-200 tw-bg-gray-100" src="https://dummyimage.com/305x305" />
                                                    <p className="tw-leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                                    <span className="tw-inline-block tw-h-1 tw-w-10 tw-rounded tw-bg-indigo-500 tw-mt-6 tw-mb-4"></span>
                                                    <h2 className="tw-text-gray-900 tw-font-medium tw-title-font tw-tracking-wider tw-text-sm">HENRY LETHAM</h2>
                                                    <p className="tw-text-gray-500">CTO</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Testimonials
