import Image from "next/image";
import Link from "next/link";
import { CiCircleInfo } from "react-icons/ci";
import { FaRocket, FaGraduationCap, FaGlobe, FaStar, FaUsers, FaTrophy } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="relative flex flex-col gap-12 sm:gap-16 lg:gap-20 py-20 sm:py-24 lg:py-32 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 animate-fadeInUp"> 
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-bounce-slow">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-sm">
          <FaGraduationCap className="w-8 h-8 text-blue-600" />
        </div>
      </div>
      
      <div className="absolute top-40 right-16 animate-bounce-slow-delayed">
        <div className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-[#B6D680]/20 rounded-full flex items-center justify-center backdrop-blur-sm">
          <FaRocket className="w-6 h-6 text-green-600" />
        </div>
      </div>
      
      <div className="absolute bottom-32 left-20 animate-bounce-slow-reverse">
        <div className="w-14 h-14 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full flex items-center justify-center backdrop-blur-sm">
          <FaTrophy className="w-7 h-7 text-orange-600" />
        </div>
      </div>
      
      <div className="absolute top-60 right-8 animate-bounce-slow">
        <div className="w-10 h-10 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center backdrop-blur-sm">
          <FaStar className="w-5 h-5 text-purple-600" />
        </div>
      </div>

      {/* Animated Notification */}
      <div className="flex flex-col sm:flex-row gap-2 items-center bg-white/90 backdrop-blur-sm rounded-full text-xs w-fit mx-auto sm:mx-0 shadow-lg border border-gray-100 animate-pulse-slow relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#B6D680]/10 to-[#A5C96B]/10 animate-pulse"></div>
        <div className="flex gap-2 items-center bg-gradient-to-r from-[#B6D680] to-[#A5C96B] rounded-full px-4 py-2 text-white font-semibold relative z-10"> 
          <CiCircleInfo className="w-4 h-4 animate-spin-slow" /> 
          <span className="animate-pulse">Update</span>
        </div>
        <div className="flex gap-2 text-sm px-4 py-2 font-medium text-gray-700 relative z-10">
          Applications for 2025-2026 term is now open!
          <Image src="/rightarrow.svg" alt="arrowright" width={16} height={16} className="animate-pulse" />
        </div>
      </div>
      
      {/* Main Content with Enhanced Typography */}
      <div className="text-center sm:text-left relative z-10">
        <div className="inline-block mb-4">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#B6D680]/10 to-[#A5C96B]/10 rounded-full text-[#B6D680] font-semibold text-sm animate-fadeInUp">
            <FaUsers className="w-4 h-4" />
            Trusted by 200+ Students
          </span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold pb-6 leading-tight">
          We will help you to study <br className="hidden sm:block" /> 
          <span className="gradient-text relative">
            at your dream University.
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#B6D680] to-[#A5C96B] rounded-full animate-pulse"></div>
          </span>
        </h1>
        
        <p className="text-gray-600 font-medium text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-4xl">
          From choosing the right university to acing your application, we've got you 
          <br className="hidden sm:block" /> covered. Let's make your dream a reality—stress-free and hassle-free!
        </p>
        
        {/* Stats Row */}
        <div className="flex flex-wrap items-center gap-8 mt-8 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-gray-600">98% Success Rate</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-gray-600">50+ Partner Universities</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <span className="text-gray-600">$2M+ Scholarships Secured</span>
          </div>
        </div>
      </div>
      
      {/* Enhanced CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start relative z-10">
        <Link href="/services" className="group relative flex gap-2 items-center justify-center text-white bg-gradient-to-r from-gray-900 to-black rounded-full px-8 py-4 text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#B6D680] to-[#A5C96B] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <span className="relative z-10">View Services</span>
          <Image src="/rightarrow.svg" alt="arrowright" width={20} height={20} className="group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
        </Link>
        
        <Link href="/contact" className="group flex gap-2 items-center justify-center bg-white border-2 border-gray-200 text-gray-700 rounded-full px-8 py-4 text-sm sm:text-base font-semibold shadow-md hover:shadow-lg hover:border-[#B6D680] hover:text-[#B6D680] transition-all duration-300 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#B6D680]/5 to-[#A5C96B]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <span className="relative z-10">Contact us</span>
          <Image src="/rightarrow.svg" alt="arrowright" width={20} height={20} className="group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
        </Link>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}