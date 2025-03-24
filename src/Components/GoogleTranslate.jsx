import react, { useEffect, useState } from "react";
import './CSS/Header.css'


const GoogleTranslate = () => {
    const [selectedLang, setSelectedLang] = useState("en"); // Default English

    useEffect(() => {
        const addScript = document.createElement("script");
        addScript.src =
            "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        addScript.async = true;
        document.body.appendChild(addScript);

        window.googleTranslateElementInit = () => {
            new window.google.translate.TranslateElement(
                {
                    pageLanguage: "en",
                    includedLanguages: "en,gu,hi",
                    autoDisplay: true,
                },
                "google_translate_element"
            );

            // Hide unwanted Google Translate elements
            setTimeout(hideGoogleElements, 1000);
        };
    }, []);

    // // Function to hide the Google Translate bar and other elements
    // const hideGoogleElements = () => {
    //     const googleFrame = document.querySelector(".goog-te-banner-frame");
    //     if (googleFrame) googleFrame.style.display = "none";

    //     const googleToolbar = document.querySelector(".goog-te-gadget");
    //     if (googleToolbar) googleToolbar.style.display = "none";

    //     document.body.style.top = "0px"; // Fix shifting issue
    // };

    // Function to change language
    const changeLanguage = (lang) => {
        setSelectedLang(lang);
        const selectEl = document.querySelector(".goog-te-combo");
        if (selectEl) {
            selectEl.value = lang;
            selectEl.dispatchEvent(new Event("change"));
        }

        // Hide the bar after a short delay
        setTimeout(hideGoogleElements, 500);
    };

    return (
        <div className="translator-container">
            {/* Custom Dropdown */}
            <select
                value={selectedLang}
                onChange={(e) => changeLanguage(e.target.value)}
                className="custom-dropdown"
            >
                <option value="en">English</option>
                <option value="gu">Gujarati</option>
                <option value="hi">Hindi</option>
            </select>

            {/* Hidden Google Translate Widget */}
            {/* <div id="google_translate_element" style={{ display: "none" }}></div> */}
        </div>
    );
};

export default GoogleTranslate;
