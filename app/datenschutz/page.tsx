import Footer from "@/components/common/Footer";
import Header2 from "@/components/common/Header2";
import Link from "next/link";

export default function Datenschutz() {
    return (
        <div className="bg-section3-tagborder span-light flex flex-col min-h-screen">
            <Header2 />
            <main className="flex-grow max-w-3xl mx-auto py-12 px-6 text-gray-800 mb-40">
                <h1 className="text-5xl mb-6 text-center">DATENSCHUTZ</h1>

                <section className="mb-6">
                    <h2 className="text-xl">ALLGEMEINE HINWEISE</h2>
                    <p>
                        DIESE DATENSCHUTZERKLÄRUNG INFORMIERT SIE ÜBER DIE ART, DEN UMFANG UND DEN ZWECK DER VERARBEITUNG PERSONENBEZOGENER DATEN AUF DIESER WEBSITE. PERSONENBEZOGENE DATEN SIND ALLE INFORMATIONEN, DIE SICH AUF EINE IDENTIFIZIERTE ODER IDENTIFIZIERBARE PERSON BEZIEHEN.
                    </p>
                    <h2 className="text-xl mt-4">WER IST VERANTWORTLICH FÜR DIE DATENERFASSUNG AUF DIESER WEBSITE?</h2>
                    <p>
                        DIE DATENVERARBEITUNG AUF DIESER WEBSITE ERFOLGT DURCH:<br />
                        STUDIO ANTON OHG<br />
                        SCHAUMAINKAI 39<br />
                        60594 FRANKFURT AM MAIN<br />
                        E-MAIL: <Link href="mailto:HALLO@STUDIOANTON.DE" className="text-blue-600">HALLO@STUDIOANTON.DE</Link>
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl">2. DATENERFASSUNG AUF UNSERER WEBSITE</h2>
                    <h3 className="text-lg mt-4">WIE ERFASSEN WIR IHRE DATEN?</h3>
                    <ul className="list-disc ml-5">
                        <li>DURCH IHRE AKTIVE EINGABE (Z. B. ÜBER DAS KONTAKTFORMULAR ODER PER E-MAIL).</li>
                        <li>AUTOMATISCH DURCH TECHNISCHE SYSTEME (Z. B. IP-ADRESSE, BROWSERINFORMATIONEN).</li>
                    </ul>
                    <h3 className="text-lg mt-4">WOFÜR NUTZEN WIR IHRE DATEN?</h3>
                    <ul className="list-disc ml-5">
                        <li>ZUR BEREITSTELLUNG UND OPTIMIERUNG UNSERER WEBSITE.</li>
                        <li>ZUR ANALYSE DES NUTZERVERHALTENS (NUR MIT IHRER ZUSTIMMUNG).</li>
                        <li>ZUR KOMMUNIKATION MIT IHNEN, FALLS SIE UNS KONTAKTIEREN.</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl">3. IHRE DATENSCHUTZRECHTE</h2>
                    <p>SIE HABEN DAS RECHT AUF:</p>
                    <ul className="list-disc ml-5">
                        <li>AUSKUNFT ÜBER IHRE GESPEICHERTEN DATEN</li>
                        <li>BERICHTIGUNG UNRICHTIGER DATEN</li>
                        <li>LÖSCHUNG IHRER DATEN (SOFERN KEINE GESETZLICHEN PFLICHTEN DAGEGENSPRECHEN)</li>
                        <li>WIDERSPRUCH GEGEN DIE VERARBEITUNG IHRER DATEN</li>
                        <li>BESCHWERDE BEI DER ZUSTÄNDIGEN DATENSCHUTZBEHÖRDE</li>
                    </ul>
                    <p className="mt-2">FÜR ANFRAGEN NUTZEN SIE BITTE <Link href="mailto:HALLO@STUDIOANTON.DE" className="text-blue-600">HALLO@STUDIOANTON.DE</Link>.</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl">4. HOSTING & SICHERHEIT</h2>
                    <p>
                        UNSERE WEBSITE WIRD BEI EINEM EUROPÄISCHEN ANBIETER GEHOSTET, DER DSGVO-KONFORME SICHERHEITSSTANDARDS EINHÄLT. DIE DATENÜBERTRAGUNG ERFOLGT ÜBER EINE SSL-/TLS-VERSCHLÜSSELTE VERBINDUNG.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl">5. COOKIES & TRACKING-TECHNOLOGIEN</h2>
                    <p>WIR VERWENDEN:</p>
                    <ul className="list-disc ml-5">
                        <li>TECHNISCH NOTWENDIGE COOKIES (FÜR DIE FUNKTIONALITÄT DER WEBSITE)</li>
                        <li>ANALYSE- & MARKETING-COOKIES (NUR MIT IHRER ZUSTIMMUNG)</li>
                    </ul>
                    <p className="mt-2">BEIM ERSTEN BESUCH UNSERER WEBSITE KÖNNEN SIE IHRE COOKIE-EINSTELLUNGEN INDIVIDUELL ANPASSEN.</p>
                    
                    <h3 className="text-lg mt-4">GOOGLE ANALYTICS & GA4 (GEPLANT)</h3>
                    <p>
                        FALLS WIR GOOGLE ANALYTICS ODER GA4 NUTZEN, GESCHIEHT DIES AUF BASIS IHRER EINWILLIGUNG (ART. 6 ABS. 1 LIT. A DSGVO). DIE ERFASSTEN DATEN WERDEN ANONYMISIERT. SIE KÖNNEN DER NUTZUNG JEDERZEIT WIDERSPRECHEN.
                    </p>

                    <h3 className="text-lg mt-4">META-WERBEANZEIGEN & GOOGLE ADS (GEPLANT)</h3>
                    <p>
                        FALLS WIR ZUKÜNFTIG GOOGLE ADS ODER META-WERBUNG (FACEBOOK/INSTAGRAM) NUTZEN, ERFASSEN WIR KEINE PERSONENBEZOGENEN DATEN DIREKT, SONDERN MESSEN NUR AGGREGIERTE KAMPAGNEN-PERFORMANCE.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl">6. KONTAKTAUFNAHME & KOMMUNIKATION</h2>
                    <p>
                        WENN SIE UNS ÜBER DAS KONTAKTFORMULAR ODER PER E-MAIL ERREICHEN, SPEICHERN WIR IHRE ANGABEN ZUR BEARBEITUNG DER ANFRAGE. DIESE DATEN WERDEN NICHT AN DRITTE WEITERGEGEBEN UND NUR SOLANGE GESPEICHERT, WIE ES FÜR DIE BEARBEITUNG NÖTIG IST.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl">7. ÄNDERUNGEN DIESER DATENSCHUTZERKLÄRUNG</h2>
                    <p>
                        WIR BEHALTEN UNS VOR, DIESE DATENSCHUTZERKLÄRUNG ANZUPASSEN, FALLS SICH TECHNISCHE ODER RECHTLICHE RAHMENBEDINGUNGEN ÄNDERN. DIE AKTUELLE VERSION IST STETS AUF UNSERER WEBSITE ABRUFBAR.
                    </p>
                </section>
            </main>
            <div className="fixed bottom-0 w-full">
            <Footer />

            </div>
            
        </div>
    );
}