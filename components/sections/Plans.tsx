import Image from "next/image";
import { LocateFixed } from 'lucide-react';
import { Users } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';





export default function WhyUsSection() {
  return (
    <section className="bg-[#f3f3f5] py-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center">
          <div className="w-64 h-64 rounded-full border-2 border-indigo-600 overflow-hidden">
            <Image
              src="/images/PundD_2.jpg"
              alt="Team photo"
              width={256}
              height={256}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Warum Unternehmen <br />
            <span className="text-gray-900">risikolos mit uns arbeiten</span>
          </h2>

          <ul className="mt-8 space-y-6">
            <li className="flex items-start gap-4">
              <ShoppingCart className="text-indigo-600 w-6 h-6 mt-1" />
              <div>
                <p className="font-semibold text-lg text-gray-900">
                  Simples, profitbasiertes Modell
                </p>
                <p className="text-gray-700">
                  Du bezahlst nicht im Voraus, sondern erst wenn du profitierst.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <LocateFixed className="text-indigo-600 w-6 h-6 mt-1" />
              <div>
                <p className="font-semibold text-lg text-gray-900">
                  Exklusive AI-Assistants
                </p>
                <p className="text-gray-700">
                  Niemals generisch. Sondern gezielt für deinen Use Case aufgebaut und trainiert.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Users className="text-indigo-600 w-6 h-6 mt-1" />
              <div>
                <p className="font-semibold text-lg text-gray-900">
                  Skalierung ab Tag 7
                </p>
                <p className="text-gray-700">
                  Von Demo zu Live in 7 Werktagen. Trustfully made in Frankfurt am Main.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

