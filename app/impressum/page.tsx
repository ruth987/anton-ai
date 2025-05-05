import Footer from "@/components/common/Footer";
import Header2 from "@/components/common/Header2";

export default function Impressum() {
    return (
        <div className="bg-section3-tagborder min-h-screen">
            <Header2 />
            <div className="max-w-3xl mx-auto py-12 px-6 text-gray-800 span-light mb-40">
                <h1 className="text-5xl mb-6 text-center">IMPRESSUM</h1>

                <p className="mb-4 text-2xl">ANGABEN GEMÄSS § 5 TMG</p>

                <p>
                    STUDIO ANTON OHG <br />
                    SCHAUMAINKAI 39 <br />
                    60594 FRANKFURT AM MAIN
                </p>

                <p className="mt-4">
                    GESCHÄFTSFÜHRER: <br />
                    PIA BUCK, DANIEL BUCK
                </p>

                <p className="mt-4">
                    REGISTERGERICHT: AMTSGERICHT FRANKFURT <br />
                    REGISTERNUMMER: HRA 50961
                </p>

                <p className="mt-4">
                    KUNDENKONTAKT: <br />
                    BITTE NUTZEN SIE UNSER KONTAKTFORMULAR ODER SCHREIBEN SIE AN: <br />
                    ✉ <a href="mailto:hallo@studioanton.de" className="text-blue-600">HALLO@STUDIOANTON.DE</a>
                </p>

                <p className="mt-4">
                    UMSATZSTEUER-ID: <br />
                    UST-ID: DE274673119
                </p>

                <p className="mt-4">
                    VERANTWORTLICH FÜR DEN INHALT NACH § 55 RSTV: <br />
                    DANIEL BUCK <br />
                    C/O STUDIO ANTON OHG <br />
                    SCHAUMAINKAI 39 <br />
                    60594 FRANKFURT AM MAIN
                </p>
            </div>
            <div className="fixed bottom-0 w-full">
            <Footer />

            </div>
        </div>
    );
}
