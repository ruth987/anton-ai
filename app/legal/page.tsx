import Footer from "@/components/common/Footer";
import Header2 from "@/components/common/Header2";

export default function Legal() {
    return (
        <div className="bg-section3-tagborder span-light flex flex-col min-h-screen">
            <Header2 />
            <main className="flex-grow max-w-3xl mx-auto py-12 px-6 text-gray-800 mb-40">
                <h1 className="text-5xl mb-6 text-center">LEGAL</h1>

                <section className="mb-6">
                    <h2 className="text-xl">HAFTUNGSAUSSCHLUSS</h2>
                    <p>
                        ALLE INHALTE DIESER WEBSITE WURDEN MIT GRÖSSTMÖGLICHER SORGFALT ERSTELLT. DENNOCH ÜBERNEHMEN WIR KEINE GEWÄHR FÜR DIE RICHTIGKEIT, VOLLSTÄNDIGKEIT ODER AKTUALITÄT DER BEREITGESTELLTEN INFORMATIONEN.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl">EXTERNE LINKS</h2>
                    <p>
                        DIESE WEBSITE KANN LINKS ZU EXTERNEN WEBSEITEN ENTHALTEN. WIR ÜBERNEHMEN KEINE HAFTUNG FÜR DEREN INHALTE, DA SIE AUSSERHALB UNSERES VERANTWORTUNGSBEREICHS LIEGEN.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl">URHEBER- & LEISTUNGSSCHUTZRECHTE</h2>
                    <p>
                        ALLE INHALTE (TEXTE, BILDER, DESIGN) UNTERLIEGEN DEM DEUTSCHEN URHEBERRECHT. DIE VERVIELFÄLTIGUNG ODER VERWENDUNG IN ANDEREN MEDIEN IST NUR MIT AUSDRÜCKLICHER GENEHMIGUNG ERLAUBT.
                    </p>
                </section>
                
            </main>
            <div className="fixed bottom-0 w-full">
            <Footer />

            </div>
        </div>
    );
}