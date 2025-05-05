"use client";

import Footer from "@/components/common/Footer";
import Header2 from "@/components/common/Header2";
import Link from "next/link";

export default function CookiePolicy() {
  return (
    <div className="span-light min-h-screen">
      <Header2 />
      <div className="max-w-4xl mx-auto p-6 space-y-6 mb-40">
        <h1 className="text-3xl font-bold">COOKIE-RICHTLINIE</h1>
        <p className="text-sm text-gray-500">ZULETZT AKTUALISIERT: 24.02.2025</p>

        <section>
          <h2 className="text-xl font-semibold">1. EINLEITUNG</h2>
          <p>
            DIESE COOKIE-RICHTLINIE ERLÄUTERT, WIE STUDIO ANTON OHG COOKIES UND ÄHNLICHE TECHNOLOGIEN VERWENDET, UM DIE WEBSITE FUNKTIONAL ZU HALTEN UND IHRE ERFAHRUNG ZU VERBESSERN.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">2. WAS SIND COOKIES?</h2>
          <p>
            COOKIES SIND KLEINE TEXTDATEIEN, DIE AUF IHREM GERÄT GESPEICHERT WERDEN, WENN SIE UNSERE WEBSITE BESUCHEN. SIE HELFEN UNS, DIE WEBSITE TECHNISCH ZU BETREIBEN, INHALTE ZU PERSONALISIEREN UND DIE NUTZUNG ZU ANALYSIEREN.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">3. WELCHE COOKIES VERWENDEN WIR?</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">ESSENZIELLE COOKIES</h3>
              <p>NOTWENDIG, UM DIE WEBSITE FUNKTIONSFÄHIG ZU HALTEN. SIE KÖNNEN NICHT DEAKTIVIERT WERDEN.</p>
            </div>
            <div>
              <h3 className="font-semibold">FUNKTIONALE COOKIES</h3>
              <p>SPEICHERN EINSTELLUNGEN WIE SPRACHE ODER LOGIN-STATUS, UM IHR NUTZUNGSERLEBNIS ZU VERBESSERN.</p>
            </div>
            <div>
              <h3 className="font-semibold">ANALYSE- & PERFORMANCE-COOKIES</h3>
              <p>HELFEN UNS ZU VERSTEHEN, WIE BESUCHER UNSERE WEBSITE NUTZEN, UM SIE ZU OPTIMIEREN. WIR VERWENDEN DAFÜR:</p>
              <p>GOOGLE ANALYTICS (DATENSCHUTZERKLÄRUNG)</p>
            </div>
            <div>
              <h3 className="font-semibold">MARKETING- & DRITTANBIETER-COOKIES</h3>
              <p>DIESE COOKIES ERMÖGLICHEN WERBE- UND TRACKING-FUNKTIONEN DURCH DRITTANBIETER. WIR VERWENDEN:</p>
              <ul className="list-none space-y-1">
                <li>FACEBOOK PIXEL (DATENSCHUTZERKLÄRUNG)</li>
                <li>GOOGLE ADS (policies.google.com/technologies/ads)</li>
                <li>INSTAGRAM EMBEDS (DATENSCHUTZERKLÄRUNG)</li>
                <li>YOUTUBE VIDEOS (policies.google.com/privacy)</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold">4. COOKIE-EINSTELLUNGEN VERWALTEN</h2>
          <p>SIE KÖNNEN IHRE COOKIE-PRÄFERENZEN JEDERZEIT ÄNDERN ODER IHRE EINWILLIGUNG WIDERRUFEN:</p>
          <p>
            ➡ <Link href="/cookie-settings" className="text-blue-600 underline">COOKIE-EINSTELLUNGEN VERWALTEN</Link>
          </p>
          <p>ZUSÄTZLICH KÖNNEN SIE COOKIES DIREKT IN IHREM BROWSER DEAKTIVIEREN ODER LÖSCHEN.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">5. ÄNDERUNGEN DIESER RICHTLINIE</h2>
          <p>
            DIESE COOKIE-RICHTLINIE KANN SICH ÄNDERN. BITTE ÜBERPRÜFEN SIE SIE REGELMÄSSIG AUF AKTUALISIERUNGEN.
          </p>
        </section>

        <p className="text-sm">
          WEITERE INFORMATIONEN FINDEN SIE IN UNSERER{" "}
          <Link href="/privacy-policy" className="text-blue-600 underline">DATENSCHUTZERKLÄRUNG</Link>
        </p>
      </div>
      <div className="fixed bottom-0 w-full">
            <Footer />

            </div>
    </div>
  );
}
