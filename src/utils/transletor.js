/**
 * Utility for implementing Google Translate functionality
 */

// Initialize Google Translate script
export const setupTranslation = () => {
    // Remove any existing translate elements
    const existingElement = document.getElementById('google_translate_element');
    if (existingElement) {
        existingElement.remove();
    }

    // Create a new div for Google Translate
    const translateDiv = document.createElement('div');
    translateDiv.id = 'google_translate_element';
    document.body.appendChild(translateDiv);

    // Create Google Translate script
    const googleTranslateScript = document.createElement('script');
    googleTranslateScript.type = 'text/javascript';
    googleTranslateScript.async = true;
    googleTranslateScript.src =
        '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';

    // Add the callback function to window
    window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
            {
                pageLanguage: 'en',
                includedLanguages: 'en,guj,hi',
                layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
                autoDisplay: false,
            },
            'google_translate_element'
        );
    };

    // Append script to the document
    document.getElementsByTagName('head')[0].appendChild(googleTranslateScript);
};

// Change language programmatically
export const changeLanguage = (languageCode) => {
    if (window.google && window.google.translate) {
        const select = document.querySelector('.goog-te-combo');
        if (select) {
            select.value = languageCode;
            select.dispatchEvent(new Event('change'));
        }
    }
};

// Get currently selected language
export const getCurrentLanguage = () => {
    const frame = document.querySelector('.goog-te-menu-frame');
    if (!frame) return 'English';

    const cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith('googtrans='))
        ?.split('=')[1];

    if (!cookieValue || cookieValue === '/auto/en') return 'English';

    const langCode = cookieValue.split('/')[2];
    const languageMap = {
        'en': 'English',
        'hi': 'Hindi', 
        'gu': 'gujarati'
    };

    return languageMap[langCode] || 'English';
};