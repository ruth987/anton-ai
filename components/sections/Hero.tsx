'use client'
import Script from 'next/script';
import Header from '../common/Header';
import { useEffect, useState } from 'react';

// Define a more specific type for the D-ID agent
interface DIDAgent {
  init: () => void;
  destroy: () => void;
  // Add other methods as needed
}

declare global {
  interface Window {
    didAgent?: DIDAgent;
  }
}

const Hero = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [scriptError, setScriptError] = useState(false);

  useEffect(() => {
    const checkScript = () => {
      if (window.didAgent) {
        setScriptLoaded(true);
      }
    };

    const timer = setTimeout(checkScript, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='min-h-screen bg-[#f3f3f5]'>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-[80vh]">
        {scriptError && (
          <div className="text-red-500 p-4 bg-red-50 rounded-lg mb-4">
            Error loading D-ID Agent. Please check your credentials.
          </div>
        )}
        
        <Script
          id="d-id-agent"
          type="module"
          src="https://agent.d-id.com/v1/index.js"
          data-name="did-agent"
          data-mode="fabio"
          data-client-key="Z29vZ2xlLW9hdXRoMnwxMDQzOTQ4MjI1MTIzNjE4MjEwNTY6WjhJbHlnbVlOSUw3eEZRTDZtbThw"
          data-agent-id="agt_4iSMawFK"
          data-monitor="true"
          strategy="lazyOnload"
          onError={(e) => {
            console.error('Script load error:', e);
            setScriptError(true);
          }}
          onLoad={() => {
            console.log('Script loaded successfully');
            setScriptLoaded(true);
          }}
        />
        
        {!scriptLoaded && !scriptError && (
          <div className="text-gray-500">
            Loading D-ID Agent...
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;