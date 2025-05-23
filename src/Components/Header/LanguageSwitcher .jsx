import React, { useState, useEffect, useRef } from 'react';
import { Globe } from 'lucide-react';
import { getCurrentLanguage, changeLanguage } from '../../utils/transletor';

const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिन्दी' },
    { code: 'gu', name: 'ગુજરાતી' }
];

const LanguageSwitcher = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState('English');
    const dropdownRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            const lang = getCurrentLanguage();
            if (lang !== currentLanguage) {
                setCurrentLanguage(lang);
            }
        }, 1000);

        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            clearInterval(interval);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [currentLanguage]);

    const handleLanguageChange = (code) => {
        changeLanguage(code);
        setIsOpen(false);
    };



    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-1 px-3 py-2 rounded-full bg-white text-blue-600 hover:bg-blue-50 transition-colors"
                aria-label="Select language"
            >
                <Globe size={18} />
                <span className="hidden md:inline">{currentLanguage}</span>
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                    <div className="py-1">
                        {languages.map((language) => (
                            <button
                                key={language.code}
                                onClick={() => handleLanguageChange(language.code)}
                                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                            >
                                {language.name}
                            </button>
                        ))}
                    </div>
                    <div className="border-t border-gray-100">
                        <p className="px-4 py-2 text-xs text-gray-500">Powered by Google Translate</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;
