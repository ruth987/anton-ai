"use client";

import Footer from "@/components/common/Footer";
import Header2 from "@/components/common/Header2";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function CookieSettings() {
  const [cookiePreferences, setCookiePreferences] = useState({
    functional: false,
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    // Load existing cookie preferences if they exist
    const existingPreferences = document.cookie.split(';')
      .find(row => row.trim().startsWith('yourAppCookieConsent='));
    
    if (existingPreferences) {
      try {
        const preferences = JSON.parse(existingPreferences.split('=')[1]);
        // Ensure all required properties exist with default values
        setCookiePreferences({
          functional: preferences.functional ?? false,
          analytics: preferences.analytics ?? false,
          marketing: preferences.marketing ?? false
        });
      } catch (e) {
        console.error('Error parsing cookie preferences:', e);
        // Reset to default values if parsing fails
        setCookiePreferences({
          functional: false,
          analytics: false,
          marketing: false
        });
      }
    }
  }, []);

  const handleSaveSettings = () => {
    document.cookie = `yourAppCookieConsent=${JSON.stringify(cookiePreferences)};max-age=${365*24*60*60};path=/`;
    alert('Ihre Cookie-Einstellungen wurden gespeichert!');
  };

  return (
    <div className="span-light min-h-screen ">
      <Header2 />
      <div className="max-w-2xl mx-auto p-6 space-y-6 mb-40">
        <h1 className="text-3xl font-bold">Cookie-Einstellungen</h1>
        <p className="uppercase">
          SIE KÖNNEN IHRE COOKIE-PRÄFERENZEN HIER ANPASSEN ODER IHRE EINWILLIGUNG JEDERZEIT WIDERRUFEN.
        </p>

        <div className="space-y-6">
          <div className="p-4 border rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium">ESSENZIELLE COOKIES</span>
              <span className="text-sm text-gray-500">(IMMER AKTIV)</span>
            </div>
            <p className="text-sm text-gray-600">
              DIESE COOKIES SIND NOTWENDIG, UM DIE WEBSITE FUNKTIONSFÄHIG ZU HALTEN UND KÖNNEN NICHT DEAKTIVIERT WERDEN.
            </p>
          </div>

          <div className="p-4 border rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium">FUNKTIONALE COOKIES</span>
              <div>
                <input
                  type="checkbox"
                  checked={cookiePreferences.functional}
                  onChange={(e) => setCookiePreferences({
                    ...cookiePreferences,
                    functional: e.target.checked
                  })}
                  className="mr-2"
                />
                <span className="text-sm">AKTIVIEREN</span>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              SPEICHERN EINSTELLUNGEN WIE SPRACHE ODER LOGIN-STATUS.
            </p>
          </div>

          <div className="p-4 border rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium">ANALYSE & PERFORMANCE-COOKIES</span>
              <div>
                <input
                  type="checkbox"
                  checked={cookiePreferences.analytics}
                  onChange={(e) => setCookiePreferences({
                    ...cookiePreferences,
                    analytics: e.target.checked
                  })}
                  className="mr-2"
                />
                <span className="text-sm">AKTIVIEREN</span>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              ERFASSEN ANONYME DATEN, UM DIE WEBSITE-LEISTUNG ZU VERBESSERN.
            </p>
          </div>

          <div className="p-4 border rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium">MARKETING- & TRACKING-COOKIES</span>
              <div>
                <input
                  type="checkbox"
                  checked={cookiePreferences.marketing}
                  onChange={(e) => setCookiePreferences({
                    ...cookiePreferences,
                    marketing: e.target.checked
                  })}
                  className="mr-2"
                />
                <span className="text-sm">AKTIVIEREN</span>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              WERDEN VON DRITTANBIETERN VERWENDET, UM PERSONENALISIERTE WERBUNG ANZUZEIGEN.
            </p>
          </div>
        </div>

        <div className="text-center">
          <button 
            onClick={handleSaveSettings}
            className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark"
          >
            EINSTELLUNGEN SPEICHERN
          </button>
        </div>

        <p className="text-sm">
          ➡ MEHR INFORMATIONEN IN UNSERER{" "}
          <Link href="/cookie-policy" className="text-primary underline">
            COOKIE-RICHTLINIE
          </Link>
        </p>
      </div>
      <div className="fixed bottom-0 w-full">
            <Footer />

            </div>
    </div>
  );
}
