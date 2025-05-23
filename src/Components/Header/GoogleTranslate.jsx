import { useEffect } from "react";

const GoogleTranslate = () => {
    useEffect(() => {
        const addGoogleTranslateScript = () => {
            if (document.getElementById("google-translate-script")) return;

            const script = document.createElement("script");
            script.id = "google-translate-script";
            script.src =
                "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
            document.body.appendChild(script);

            window.googleTranslateElementInit = () => {
                new window.google.translate.TranslateElement(
                    {
                        pageLanguage: "en",
                        includedLanguages: "en,gu,hi",
                        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
                    },
                    "google_translate_element"
                );
            };
        };

        addGoogleTranslateScript();
    }, []);

    return (
        <div id="google_translate_element" className="translate-dropdown"></div>
    );
};

export default GoogleTranslate;
