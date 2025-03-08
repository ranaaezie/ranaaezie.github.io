import React, { useEffect } from 'react';

const WhatsAppButton = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://path-to-whatsapp-widget.js'; // Replace with the actual URL of the WhatsApp widget script
    script.async = true;
    script.onload = () => {
      // Initialize the WhatsApp widget here
      // Example: WhatsAppWidget.init({ phone: '1234567890', message: 'Hello!' });
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="fixed bottom-4 left-4">
      <a
        href="https://wa.me/+923106623463?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 ease-in-out flex items-center"
      >
        <svg
          className="w-6 h-6 mr-2"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.106 1.514 5.84L0 24l6.293-1.66A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm6.29 17.29c-.26.73-1.52 1.34-2.1 1.42-.56.08-1.24.12-2-.12-.46-.15-1.06-.35-1.82-.68-3.2-1.4-5.28-4.6-5.45-4.82-.16-.22-1.3-1.73-1.3-3.3 0-1.56.82-2.33 1.12-2.65.3-.32.66-.4.88-.4.22 0 .44.002.63.01.2.01.47-.08.74.56.28.64.95 2.22 1.03 2.38.08.16.14.34.03.55-.1.2-.15.34-.3.52-.15.18-.3.4-.43.54-.15.15-.3.3-.13.58.16.28.7 1.15 1.5 1.86 1.03.92 1.9 1.2 2.18 1.34.28.14.44.12.6-.08.16-.2.7-.82.88-1.1.18-.28.36-.23.6-.14.24.08 1.52.72 1.78.85.26.12.44.2.5.32.06.12.06.7-.2 1.42z" />
        </svg>
        WhatsApp
      </a>
    </div>
  );
};

export default WhatsAppButton;