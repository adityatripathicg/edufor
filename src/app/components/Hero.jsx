import Image from "next/image";
import { CiCircleInfo } from "react-icons/ci";

export default function Hero() {
  return (
    <div className="flex flex-col gap-12 sm:gap-16 lg:gap-20 py-20 sm:py-24 lg:py-32 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 animate-fadeInUp"> 
       <div className="flex flex-col sm:flex-row gap-2 items-center bg-white/90 backdrop-blur-sm rounded-full text-xs w-fit mx-auto sm:mx-0 shadow-lg border border-gray-100 animate-pulse-slow">
        <div className="flex gap-2 items-center bg-gradient-to-r from-[#B6D680] to-[#A5C96B] rounded-full px-4 py-2 text-white font-semibold"> 
          <CiCircleInfo className="w-4 h-4" /> 
          Update
        </div>
        <div className="flex gap-2 text-sm px-4 py-2 font-medium text-gray-700">
          Applications for 2025-2026 term is now open!
          <Image src="/rightarrow.svg" alt="arrowright" width={16} height={16} className="animate-pulse" />
        </div>
       </div>
       
       <div className="text-center sm:text-left">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold pb-6 leading-tight">
          We will help you to study <br className="hidden sm:block" /> 
          <span className="gradient-text">at your dream University.</span>
        </h1>
        <p className="text-gray-600 font-medium text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-4xl">
          From choosing the right university to acing your application, we've got you 
          <br className="hidden sm:block" /> covered. Let's make your dream a reality—stress-free and hassle-free!
        </p>
       </div>
       
       <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
        <button className="group flex gap-2 items-center justify-center text-white bg-gradient-to-r from-gray-900 to-black rounded-full px-6 py-4 text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
          View Services 
          <Image src="/rightarrow.svg" alt="arrowright" width={20} height={20} className="group-hover:translate-x-1 transition-transform duration-300" />
        </button>
        <button className="group flex gap-2 items-center justify-center bg-white border-2 border-gray-200 text-gray-700 rounded-full px-6 py-4 text-sm sm:text-base font-semibold shadow-md hover:shadow-lg hover:border-[#B6D680] hover:text-[#B6D680] transition-all duration-300">
          Contact us 
          <Image src="/rightarrow.svg" alt="arrowright" width={20} height={20} className="group-hover:translate-x-1 transition-transform duration-300" />
        </button>
       </div>
    </div>
  );
}