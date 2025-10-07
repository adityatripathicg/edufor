import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Hero2() {
  return (
    <div id="about" className="flex flex-col lg:flex-row justify-between items-center min-h-[600px] px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">      
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-8 lg:mb-0 animate-fadeInLeft">
            <div className="relative group">
              <Image src="/hero2.png" alt="hero2" width={500} height={500} className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#B6D680]/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
        </div>
        <div className="flex flex-col gap-6 lg:gap-8 w-full lg:w-1/2 lg:pl-8 animate-fadeInRight">
          <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Welcome to <span className="gradient-text">EduFor!</span>
          </div>
          <div className="text-gray-600 font-medium text-base sm:text-lg lg:text-xl leading-relaxed">
            Helping students achieve their academic dreams with expert guidance. From university selection to application success, we make the journey smooth and stress-free. Your future starts here—let's make it happen together!
          </div>
          <Link href="/services" className="group flex gap-2 items-center justify-center text-white bg-gradient-to-r from-gray-900 to-black rounded-full px-8 py-4 w-fit text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            View Services 
            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 py-8 sm:py-12">
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent mb-2">200+</div>
                  <div className="text-sm sm:text-base font-medium text-gray-600">Students Accepted</div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent mb-2">50+</div>
                  <div className="text-sm sm:text-base font-medium text-gray-600">Partner Universities</div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2">$2M+</div>
                  <div className="text-sm sm:text-base font-medium text-gray-600">Scholarships Secured</div>
              </div>
          </div>
        </div>
    </div>
  );
}