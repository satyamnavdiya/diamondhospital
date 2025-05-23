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
            targetNumber={11}
            label="Years of Service"
            description="Decade of caring for our community with heart"
          />

          <HeartbeatCounter
            targetNumber={250000}
            label="Patients Served"
            description="Lives touched annually through our compassionate care"
          />

          <HeartbeatCounter
            targetNumber={200000}
            label="Laboratory Checkups"
            description="Healthcare professionals committed to Serve"
          />

          <HeartbeatCounter
            targetNumber={98}
            label="Satisfaction Rate"
            description="Percentage of patients who recommend our care"
          />

          <HeartbeatCounter
            targetNumber={5000}
            label="Free Cataract Surgery"
            description="Free Cataract Surgery with Expert Care and Advanced Technology."
          />

          <HeartbeatCounter
            targetNumber={3500}
            label="Normal Deliveries"
            description="Compassionate care for smooth and natural childbirth."
          />

          <HeartbeatCounter
            targetNumber={200}
            label="Crore Saving"
            description="₹200 Cr Saved for Patients Through Free Healthcare Services."
          />


        </div>
      </div>
    </section>
  );
};

export default Achievement;
