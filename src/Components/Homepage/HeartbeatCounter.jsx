import { useState, useEffect, useRef } from "react";
import { Heart } from "lucide-react";

const HeartbeatCounter = ({ targetNumber, label, description }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [countStarted, setCountStarted] = useState(false);
    const counterRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    setCountStarted(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.2 }
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            if (counterRef.current) {
                observer.unobserve(counterRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!countStarted) return;

        const duration = 2000; // 2 seconds
        const steps = 50;
        const increment = targetNumber / steps;
        let currentStep = 0;

        const interval = setInterval(() => {
            currentStep++;

            if (currentStep >= steps) {
                setCount(targetNumber);
                clearInterval(interval);
            } else {
                setCount(Math.floor(increment * currentStep));
            }
        }, duration / steps);

        return () => clearInterval(interval);
    }, [countStarted, targetNumber]);

    return (
        <div
            ref={counterRef}
            className={`text-center p-6 rounded-lg transition-all duration-1000 transform
                 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
            <div className="inline-block mb-4 relative">
                <Heart
                    size={48}
                    className={`text-pink-500 ${countStarted ? "animate-heartbeat" : ""}`}
                    fill={countStarted ? "#f472b6" : "none"}
                />
                <div className="absolute -top-1 -right-1 h-3 w-3 bg-pink-300 rounded-full animate-ping"></div>
            </div>

            <div className="text-4xl font-bold text-blue-900 mb-2">
                {count.toLocaleString()}
            </div>

            <h3 className="text-xl font-semibold text-blue-800 mb-1">{label}</h3>
            <p className="text-blue-600 max-w-xs mx-auto">{description}</p>
        </div>
    );
};

export default HeartbeatCounter;
