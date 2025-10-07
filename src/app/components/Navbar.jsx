import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-4 sm:py-6 text-sm sm:text-base lg:text-lg fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <Link href="/" className="flex-shrink-0 animate-fadeInLeft">
        <Image src="/logonav.svg" alt="logo" width={120} height={80} className="w-24 sm:w-28 lg:w-32 h-auto hover:scale-105 transition-transform duration-300"/>
      </Link>
      <div className="hidden md:flex gap-6 lg:gap-8 xl:gap-12 animate-fadeInUp">
        <Link href="/about" className="relative group hover:text-[#B6D680] cursor-pointer transition-colors duration-300 font-medium">
          About us
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#B6D680] group-hover:w-full transition-all duration-300"></span>
        </Link>
        <Link href="/services" className="relative group hover:text-[#B6D680] cursor-pointer transition-colors duration-300 font-medium">
          Services
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#B6D680] group-hover:w-full transition-all duration-300"></span>
        </Link>
        <Link href="/articles" className="relative group hover:text-[#B6D680] cursor-pointer transition-colors duration-300 font-medium">
          Articles
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#B6D680] group-hover:w-full transition-all duration-300"></span>
        </Link>
        <Link href="/faq" className="relative group hover:text-[#B6D680] cursor-pointer transition-colors duration-300 font-medium">
          FAQ
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#B6D680] group-hover:w-full transition-all duration-300"></span>
        </Link>
        <Link href="/contact" className="relative group hover:text-[#B6D680] cursor-pointer transition-colors duration-300 font-medium">
          Contact us
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#B6D680] group-hover:w-full transition-all duration-300"></span>
        </Link>
      </div>
      <div className="md:hidden animate-fadeInRight">
        <button className="text-xl p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#B6D680]">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}