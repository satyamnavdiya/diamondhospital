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

    const columnClass = items.length > 6 ? 'grid grid-cols-2' : 'grid grid-cols-1';

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.ul
                    className={`absolute mt-2 min-w-[15rem] overflow-y-auto ${columnClass}  bg-teal-50 border-t-4 border-teal-900 rounded-lg shadow-md z-50 ${parentClass}`}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={dropdownVariants}
                >
                    {items.map((item, index) => (
                        <li key={index} className="mx-2 my-1">
                            <Link
                                to={item.to}
                                className="block px-4 py-2 bg-teal-500 text-white rounded hover:bg-red-600 hover:text-white"
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </motion.ul>
            )}
        </AnimatePresence>
    );
}
