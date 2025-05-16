import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function DropdownMenu({ isOpen, items = [], parentClass = '' }) {
    const dropdownVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.2, ease: 'easeOut' }
        },
        exit: {
            opacity: 0,
            y: -10,
            transition: { duration: 0.2, ease: 'easeIn' }
        }
    };



    return (
        <AnimatePresence>
            {isOpen && (
                <motion.ul
                    className={`absolute mt-2 min-w-[15rem] text-justifyx bg-teal-50  border-t-3 border-teal-900 rounded-lg shadow-md z-50 ${parentClass}`}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={dropdownVariants}
                >
                    {items.map((item, index) => (
                        <li key={index} className="px-4 py-2 hover:bg-red-600 rounded mx-2 my-1 bg-teal-500 text-white  hover:text-white cursor-pointer">
                            <Link to={item.to}>{item.label}</Link>
                        </li>
                    ))}
                </motion.ul>
            )}
        </AnimatePresence>
    );
}
