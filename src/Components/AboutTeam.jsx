
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
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section className="aboutus-dimond">

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden mix-blend-multiply hero-section">
        <div className="absolute inset-0">
          <img
            src='./IMG/hospital.JPG'
            alt="Obstetic Professional medical care"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 mix-blend-multiply pedi-bg-div" />
        </div>
        <div className="container relative z-10 text-center text-white px-4">
          <motion.h1
            className="font-display text-5xl md:text-6xl mb-4 font-bold"
            {...fadeInUp}
          >
            <span className='spec-hero-heading'>The RTSV - Diamond Hosital <br /> and Reserach Center</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className='spec-sub-heading div-border'>Write Somthing about Hospital</span>
          </motion.p>
        </div>
      </section>


      <div>
        <div className="w-[80%] mx-auto div-info">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
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
