'use client'
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Footer() {
  const router = useRouter();

  return (
    <footer className="bg-section3-background text-white py-8 px-6 md:px-12 span-light">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="text-center md:text-left w-full md:w-auto">
          <h2 className="text-xl span-bold">
            Designers who geek out.
            <br />
            Not geeks who design.
          </h2>
          <div className="flex justify-center md:justify-start">
            <p className="mt-4 text-primary flex items-center gap-1 cursor-pointer" onClick={() => router.push('/')}>
              <span className="span-bold">
                <Image 
                  src="/images/antonlogoprimary.svg"
                  alt="anton logo"
                  width={50}
                  height={50}
                  priority
                />
              </span> 
              <span className="text-primary text-sm">
                GenAI Studio
              </span>
            </p>
          </div>
        </div>

        {/* Right Section - Links */}
        <div className="flex md:text-sm text-[7px] space-x-1 mt-6 md:mt-20">
          <Link 
          href="mailto:hallo@studioanton.de"
          className="text-gray-400 hover:text-white hover:span-bold ">
            KONTAKT /
          </Link>
          <Link 
          href="/impressum"
          className="text-gray-400 hover:text-white hover:span-bold ">
            IMPRESSUM /
          </Link>
          <Link href="/datenschutz" className="text-gray-400 hover:text-white hover:span-bold ">
            DATENSCHUTZ /
          </Link>
          <Link href="/cookie-policy" className="text-gray-400 hover:text-white hover:span-bold ">
            COOKIE-RICHTLINIE /
          </Link>
          <Link href="/cookie-settings" className="text-gray-400 hover:text-white hover:span-bold ">
            COOKIE-EINSTELLUNGEN /
          </Link>
          <Link href="/legal" className="text-gray-400 hover:text-white hover:span-bold ">
            LEGAL
          </Link>
        </div>
      </div>
    </footer>
  );
}
