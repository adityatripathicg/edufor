import Image from "next/image";


export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-4 sm:py-6 text-sm sm:text-base lg:text-lg fixed w-full top-0 z-10 border-b border-gray-100">
      <div className="flex-shrink-0">
        <Image src="/logonav.svg" alt="logo" width={120} height={80} className="w-24 sm:w-28 lg:w-32 h-auto"/>
      </div>
      <div className="hidden md:flex gap-6 lg:gap-8 xl:gap-12">
        <div className="hover:text-gray-600 cursor-pointer transition-colors duration-300">About us</div>
        <div className="hover:text-gray-600 cursor-pointer transition-colors duration-300">Services</div>
        <div className="hover:text-gray-600 cursor-pointer transition-colors duration-300">Articles</div>
        <div className="hover:text-gray-600 cursor-pointer transition-colors duration-300">FAQ</div>
        <div className="hover:text-gray-600 cursor-pointer transition-colors duration-300">Contact us</div>
      </div>
      <div className="md:hidden">
        <button className="text-xl">☰</button>
      </div>
    </div>
  );
}