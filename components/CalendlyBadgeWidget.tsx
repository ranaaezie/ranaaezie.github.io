import React, { useEffect } from 'react';

const CalendlyBadgeWidget = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => {
      // @ts-ignore
      Calendly.initBadgeWidget({
        url: 'https://calendly.com/ranaaezie',
        text: 'Book Meeting Now',
        color: '#edb716',
        textColor: '#111010',
        branding: true,
      });
    };
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default CalendlyBadgeWidget;