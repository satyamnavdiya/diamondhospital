import { useRef } from "react";
import HeartbeatCounter from "./HeartbeatCounter";
import '../CSS/Achievement.css'
const Achievement = () => {
  const statsRef = useRef(null);

  return (
    <section className="py-10 w-[80%] div-center">
      <div className="div-center" ref={statsRef}>
        <h2 className="achievement-heading achievement-gradient">
          Our Impact in Numbers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <HeartbeatCounter 
            targetNumber={45000} 
            label="Patients Served" 
            description="Lives touched annually through our compassionate care"
          />
          
          <HeartbeatCounter 
            targetNumber={250} 
            label="Dedicated Staff" 
            description="Healthcare professionals committed to excellence"
          />
          
          <HeartbeatCounter 
            targetNumber={98} 
            label="Satisfaction Rate" 
            description="Percentage of patients who recommend our care"
          />
          
          <HeartbeatCounter 
            targetNumber={48} 
            label="Years of Service" 
            description="Decades of caring for our community with heart"
          />
        </div>
      </div>
    </section>
  );
};

export default Achievement;
