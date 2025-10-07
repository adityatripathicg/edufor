import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function Hero4() {
  return (
    <div id="services" className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
       <div className="flex flex-col gap-6 items-center justify-center text-center mb-16 sm:mb-20 animate-fadeInUp">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
          Why <span className="gradient-text">EduFor?</span>
        </h1>
        <p className="text-gray-600 font-medium text-lg sm:text-xl lg:text-2xl max-w-4xl leading-relaxed">
          Expert guidance for a seamless study journey.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-16">      
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start animate-fadeInLeft">
            <div className="relative group">
              <Image className="rounded-2xl w-full max-w-md lg:max-w-lg shadow-2xl group-hover:scale-105 transition-transform duration-500" src="/hero2.png" alt="hero2" width={600} height={600} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#B6D680]/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
        </div>
        <div className="flex flex-col gap-8 w-full lg:w-1/2 animate-fadeInRight">
          <div className="group flex flex-col gap-6 border-2 rounded-2xl border-gray-100 p-6 sm:p-8 bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#B6D680] to-[#A5C96B] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">1</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Expert Guidance for Every Step</h3>
            </div>
            <p className="text-gray-600 font-medium text-base sm:text-lg leading-relaxed">
              Navigating university applications can be challenging, but our experienced advisors provide personalized support from start to finish. With EduFor, you get strategic planning, expert insights, and hands-on assistance to maximize your chances of success.
            </p>
            <button className="group/btn flex gap-2 items-center justify-center text-[#B6D680] border-2 border-[#B6D680] bg-white rounded-full px-6 py-3 w-fit text-sm sm:text-base font-semibold hover:bg-[#B6D680] hover:text-white transition-all duration-300">
              View Services 
              <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          <div className="group flex flex-col gap-6 border-2 rounded-2xl border-gray-100 p-6 sm:p-8 bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">2</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Tailored Solutions for Your Goals</h3>
            </div>
            <p className="text-gray-600 font-medium text-base sm:text-lg leading-relaxed">
              Every student is unique, and so are their academic aspirations. We provide customized guidance that aligns with your specific goals, interests, and career objectives.
            </p>
            <button className="group/btn flex gap-2 items-center justify-center text-blue-600 border-2 border-blue-600 bg-white rounded-full px-6 py-3 w-fit text-sm sm:text-base font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">
              Learn More 
              <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          <div className="group flex flex-col gap-6 border-2 rounded-2xl border-gray-100 p-6 sm:p-8 bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">3</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Hassle-Free Application & Visa Support</h3>
            </div>
            <p className="text-gray-600 font-medium text-base sm:text-lg leading-relaxed">
              From application submission to visa processing, we handle all the complex paperwork and requirements, ensuring a smooth and stress-free experience for you and your family.
            </p>
            <button className="group/btn flex gap-2 items-center justify-center text-purple-600 border-2 border-purple-600 bg-white rounded-full px-6 py-3 w-fit text-sm sm:text-base font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300">
              Get Started 
              <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
    </div>
    </div>
  );
}