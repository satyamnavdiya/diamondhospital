import Lottie from "lottie-react";
import heartbeatAnimation from "../assets/heartbrat.json"; // Ensure the correct path

const Heartbeat = () => {
    return (
        <div>
            <Lottie animationData={heartbeatAnimation} loop={true} className="w-1/4" />
        </div>
    );
};

export default Heartbeat;
