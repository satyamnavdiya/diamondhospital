import { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const timelineEvents = [
    { year: 1975, title: "Our Humble Beginning", description: "Established as a small community clinic with just 10 dedicated staff members." },
    { year: 1988, title: "First Major Expansion", description: "Opened our first specialized cardiac care unit, serving over 1,000 patients in the first year." },
    { year: 1995, title: "State-of-the-Art Technology", description: "Introduced the region's first MRI machine, revolutionizing our diagnostic capabilities." },
    { year: 2006, title: "Research Center Launch", description: "Established our research department, committed to medical innovation and discovery." },
    { year: 2015, title: "National Recognition", description: "Received prestigious national accreditation for excellence in patient care and safety standards." },
    { year: 2023, title: "Modern Era", description: "Completed a comprehensive digital transformation, enhancing patient experience and care quality." }
];

const TimelineEvent = ({ event, index, onComplete }) => {
    const controls = useAnimation();
    const ref = useRef();

    useEffect(() => {
        const timeout = setTimeout(() => {
            controls.start({
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.8 }
            }).then(onComplete);
        }, index * 1000); // Delay based on index

        return () => clearTimeout(timeout);
    }, [controls, index, onComplete]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={controls}
            className="mb-12 max-w-2xl mx-auto"
        >
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
                <p className="text-sm text-blue-600 font-bold">{event.year}</p>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{event.title}</h3>
                <p className="text-gray-600">{event.description}</p>
            </div>
        </motion.div>
    );
};

const Aboutus = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [scrollEnabled, setScrollEnabled] = useState(false);
    const wrapperRef = useRef();

    useEffect(() => {
        const handleScroll = (e) => {
            if (!scrollEnabled) e.preventDefault();
        };
        document.body.style.overflow = scrollEnabled ? "auto" : "hidden";
        window.addEventListener("scroll", handleScroll, { passive: false });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [scrollEnabled]);

    const handleAnimationComplete = () => {
        if (currentStep < timelineEvents.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            setScrollEnabled(true);
        }
    };

    return (
        <section ref={wrapperRef} className="min-h-screen bg-blue-50 py-20">
            {/* Progress Bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-blue-400" style={{ width: `${(currentStep / timelineEvents.length) * 100}%` }}></div>

            <h2 className="text-4xl font-bold text-center text-blue-900 mb-16">
                Our Journey of Care
            </h2>
            <div className="flex flex-col items-center">
                {timelineEvents.map((event, index) => (
                    index <= currentStep && (
                        <TimelineEvent
                            key={event.year}
                            event={event}
                            index={index}
                            onComplete={handleAnimationComplete}
                        />
                    )
                ))}
            </div>

            {/* Click Navigation (Optional) */}
            <div className="fixed bottom-8 left-0 right-0 text-center">
                <button
                    onClick={() => setCurrentStep(timelineEvents.length - 1)}
                    className="bg-blue-500 text-white py-2 px-6 rounded-full"
                >
                    View All Events
                </button>
            </div>

            {/* Optional Timeline Sidebar Navigation */}
            <div className="fixed top-1/2 left-0 transform -translate-y-1/2 bg-blue-500 text-white p-4 rounded-r-lg shadow-lg">
                <ul>
                    {timelineEvents.map((event, index) => (
                        <li key={event.year}>
                            <button
                                onClick={() => setCurrentStep(index)}
                                className="text-white hover:text-gray-800 py-2 px-4 block"
                            >
                                {event.year}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Aboutus;
