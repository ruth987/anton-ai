'use client'
import Link from 'next/link';

export default function Footer() {

  return (
    <footer className="bg-section3-background text-white py-8 px-6 md:px-12 span-light">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="text-center md:text-left w-full md:w-auto">
          <h2 className="text-2xl span-semibold">
            Designers who geek out.
            <br />
            Not geeks who design.
          </h2>

        </div>

        {/* Right Section - Links */}
        <div className="flex md:text-sm text-[7px] space-x-10 mt-6 md:mt-20">
          <Link 
          href="mailto:hallo@studioanton.de"
          className="text-gray-400 hover:text-white hover:span-bold ">
            KONTAKT 
          </Link>
          <Link 
          href="/impressum"
          className="text-gray-400 hover:text-white hover:span-bold ">
            IMPRESSUM 
          </Link>
          <Link href="/datenschutz" className="text-gray-400 hover:text-white hover:span-bold ">
            DATENSCHUTZ 
          </Link>
          <Link href="/legal" className="text-gray-400 hover:text-white hover:span-bold ">
            LEGAL
          </Link>
        </div>
      </div>
    </footer>
  );
}
