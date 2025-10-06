import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function Hero4() {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-12 sm:py-16 md:py-20">
       <div className="flex flex-col gap-4 items-center justify-center text-center mb-12 sm:mb-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Why EduFor?</h1>
        <h4 className="text-gray-500 font-semibold text-sm sm:text-base lg:text-lg max-w-3xl">Expert guidance for a seamless study journey.</h4>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12">      
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <Image className="rounded-xl w-full max-w-md lg:max-w-lg" src="/hero2.png" alt="hero2" width={600} height={600} />
        </div>
        <div className="flex flex-col gap-6 w-full lg:w-1/2">
          <div className="flex flex-col gap-4 border-2 rounded-xl border-gray-100 p-4 sm:p-6 bg-[#ffffff] hover:shadow-lg transition-shadow duration-300">
            <div className="text-lg sm:text-xl font-semibold text-gray-500">Expert Guidance for Every Step</div>
            <div className="text-gray-500 font-semibold text-sm sm:text-base">Navigating university applications can be challenging, but our experienced advisors provide personalized support from start to finish. With EduFor, you get strategic planning, expert insights, and hands-on assistance to maximize your chances of success.</div>
            <button className="flex gap-2 items-center justify-center text-black border-gray-50 border-2 bg-white rounded-full px-4 py-2 w-fit text-sm sm:text-base hover:bg-gray-50 transition-colors duration-300">View Services <FaArrowRight /></button>
          </div>

          <div className="flex flex-col gap-4 border-2 rounded-xl border-gray-100 p-4 sm:p-6 bg-[#ffffff] hover:shadow-lg transition-shadow duration-300">
            <div className="text-lg sm:text-xl font-semibold text-gray-500">Tailored Solutions for Your Goals</div>
            <div className="text-gray-500 font-semibold text-sm sm:text-base">Every student is unique, and so are their academic aspirations. We provide customized guidance that aligns with your specific goals, interests, and career objectives.</div>
            <button className="flex gap-2 items-center justify-center text-black border-gray-50 border-2 bg-white rounded-full px-4 py-2 w-fit text-sm sm:text-base hover:bg-gray-50 transition-colors duration-300">Learn More <FaArrowRight /></button>
          </div>

          <div className="flex flex-col gap-4 border-2 rounded-xl border-gray-100 p-4 sm:p-6 bg-[#ffffff] hover:shadow-lg transition-shadow duration-300">
            <div className="text-lg sm:text-xl font-semibold text-gray-500">Hassle-Free Application & Visa Support</div>
            <div className="text-gray-500 font-semibold text-sm sm:text-base">From application submission to visa processing, we handle all the complex paperwork and requirements, ensuring a smooth and stress-free experience for you and your family.</div>
            <button className="flex gap-2 items-center justify-center text-black border-gray-50 border-2 bg-white rounded-full px-4 py-2 w-fit text-sm sm:text-base hover:bg-gray-50 transition-colors duration-300">Get Started <FaArrowRight /></button>
          </div>
        </div>
    </div>
    </div>
  );
}