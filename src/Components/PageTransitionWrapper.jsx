// PageTransitionWrapper.jsx
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const PageTransitionWrapper = ({ children }) => {
    const location = useLocation();

    return (
        <motion.div
            key={location.key} // Makes sure the transition triggers when the route changes
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    );
};

export default PageTransitionWrapper;
