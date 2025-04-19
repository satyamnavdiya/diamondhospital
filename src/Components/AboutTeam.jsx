
import { motion } from "framer-motion";
import './CSS/About.css'
const teamMembers = [
  {
    name: "Dr. Sarah Johnson",
    role: "Chief Medical Officer",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1000&q=80",
    description: "With over 15 years of experience in internal medicine and healthcare management.",
  },
  {
    name: "Dr. Michael Chen",
    role: "Head of Surgery",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=80",
    description: "Board-certified surgeon specializing in minimally invasive procedures.",
  },
  {
    name: "Dr. Emily Williams",
    role: "Head of Pediatrics",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=1000&q=80",
    description: "Dedicated to providing compassionate care for our youngest patients.",
  },
  // Add more team members as needed
];

const AboutTeam = () => {
  return (
      <section className="pt-24 max-sm:pt-[3.5rem]">
        <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
          <div className="w-[80%] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20}}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-7"
            >
              <h1 className="text-4xl font-bold text-gray-900 mb-4"><span className="Team-heading Team-gradient">Our Trustees</span></h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto dimond-text">
                Meet our team of dedicated healthcare professionals committed to providing
                exceptional patient care.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
                >
                  <div className="relative h-64">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-teal-600 mb-4 dimond-text">{member.role}</p>
                    <p className="text-gray-600 dimond-text">{member.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
};

export default AboutTeam;
