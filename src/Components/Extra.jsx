import React, { useEffect, useRef, useState } from "react";

const MessagesPage = () => {
    const [activeSection, setActiveSection] = useState("chairman");
    const secretaryRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection("secretary");
                    } else {
                        setActiveSection("chairman");
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (secretaryRef.current) {
            observer.observe(secretaryRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div className="min-h-screen">
            <section className="h-screen flex items-center justify-center p-4 sticky top-0">
                <div className={`max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center transition-opacity duration-1000 ${activeSection === "chairman" ? "opacity-100" : "opacity-0"}`}>
                    <div className="rounded-lg overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
                            alt="Chairman"
                            className="w-full h-[400px] object-cover"
                        />
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold">Chairman's Message</h2>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Driving innovation and growth with a commitment to excellence and sustainable practices.
                        </p>
                    </div>
                </div>
            </section>

            <section ref={secretaryRef} className="h-screen flex items-center justify-center p-4">
                <div className={`max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center transition-opacity duration-1000 ${activeSection === "secretary" ? "opacity-100" : "opacity-0"}`}>
                    <div className="rounded-lg overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                            alt="Secretary"
                            className="w-full h-[400px] object-cover"
                        />
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold">Secretary's Message</h2>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Ensuring strong governance and transparent communication across all organizational levels.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MessagesPage;
