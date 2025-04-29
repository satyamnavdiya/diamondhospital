import { useEffect, useState } from "react";

const AmbientParticles = () => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        const baseCount = window.innerWidth < 768 ? 6 : 12;
        const particleCount = baseCount + Math.floor(Math.random() * 4); // Adds 0–3 more
        const particleTypes = ["❤", , "🩺", "🩸", "🔬", "🧬", "🦷", "💊", "💉", "☤", "🧠"];
        const particleColors = ["#f9a8d4", "#93c5fd", "#fcd34d", "#a5b4fc", "#a78bfa"];

        const generateParticles = () => {
            const newParticles = [];

            for (let i = 0; i < particleCount; i++) {
                newParticles.push({
                    id: i,
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    size: 0.6 + Math.random() * 1.2,
                    color: particleColors[Math.floor(Math.random() * particleColors.length)],
                    speed: 3 + Math.random() * 10,
                    delay: Math.random() * 5,
                    type: particleTypes[Math.floor(Math.random() * particleTypes.length)]
                });
            }

            setParticles(newParticles);
        };

        generateParticles();

        const handleResize = () => {
            generateParticles();
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {particles.map((particle) => (
                <div
                    key={particle.id}
                    className="absolute opacity-60"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        fontSize: `${particle.size}rem`,
                        color: particle.color,
                        animation: `floatParticle ${particle.speed}s ease-in-out ${particle.delay}s infinite`,
                        transform: 'translateY(0)'
                    }}
                >
                    {particle.type}
                </div>
            ))}
        </div>
    );
};

export default AmbientParticles;
