import '../styles/globals.css'
import type { AppProps } from 'next/app'
import CalendlyBadgeWidget from "../components/CalendlyBadgeWidget";
import WhatsAppButton from "../components/WahtsAppBadgeWidget";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
        <Component {...pageProps} />
        <CalendlyBadgeWidget />
        <WhatsAppButton />
      </>
  );
}

export default MyApp
