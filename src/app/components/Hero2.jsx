import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function Hero2() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center min-h-[600px] px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-12 sm:py-16 md:py-20">      
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-8 lg:mb-0">
            <Image src="/hero2.png" alt="hero2" width={500} height={500} className="w-full max-w-md lg:max-w-lg" />
        </div>
        <div className="flex flex-col gap-6 lg:gap-8 w-full lg:w-1/2 lg:pl-8">
          <div className="text-2xl sm:text-3xl lg:text-4xl font-bold">Welcome to EduFor!</div>
          <div className="text-gray-400 font-semibold text-sm sm:text-base lg:text-lg">Helping students achieve their academic dreams with expert guidance. From university selection to application success, we make the journey smooth and stress-free. Your future starts here—let's make it happen together!</div>
          <button className="flex gap-2 items-center justify-center text-white bg-black rounded-full px-6 py-3 w-fit text-sm sm:text-base">View Services <FaArrowRight /></button>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 py-6 sm:py-8">
              <div className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-500">200+</div>
                  <div className="text-sm sm:text-base">Students Accepted</div>
              </div>
              <div className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-500">50+</div>
                  <div className="text-sm sm:text-base">Partner Universities</div>
              </div>
              <div className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-500">$2M+</div>
                  <div className="text-sm sm:text-base">Scholarships Secured</div>
              </div>
          </div>
        </div>
    </div>
  );
}