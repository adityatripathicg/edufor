import Image from "next/image";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

export default function Hero7() {
  return (
    <div className="relative bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 overflow-hidden">
      {/* Background gradient shapes */}
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-tr from-pink-400/20 to-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-bl from-purple-400/20 to-pink-500/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-10 w-64 h-64 bg-gradient-to-tl from-blue-400/15 to-purple-500/15 rounded-full blur-2xl"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Section - Contact Information */}
          <div className="space-y-8 animate-fadeInLeft">
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Let's Get your <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">Scholarship</span> Together!
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Want to study in top 100 best universities? Fill up the form and let us secure your admission!
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">Contact information:</h3>
              
              <div className="space-y-4">
                {/* Phone */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center group-hover:bg-pink-200 transition-colors duration-300">
                    <FaPhone className="w-5 h-5 text-pink-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-lg">+994 (12) 345 67 89</p>
                    <p className="text-gray-500 text-sm">Monday to Friday between 09:00 - 18:00</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-200 transition-colors duration-300">
                    <FaEnvelope className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-lg">hey@maharram.xyz</p>
                    <p className="text-gray-500 text-sm">We will reply within 24 hours.</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                    <FaMapMarkerAlt className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-lg">5 Yusuph Safarov, Bakı 1025, Azerbaijan</p>
                    <p className="text-gray-500 text-sm">Monday to Friday between 09:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="animate-fadeInRight">
            <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-10 border border-gray-100">
              <form className="space-y-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Full Name</label>
                  <input
                    type="text"
                    placeholder="Jane Smith"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-gray-700 placeholder-gray-400"
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+00 123 456 789"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-gray-700 placeholder-gray-400"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Email</label>
                  <input
                    type="email"
                    placeholder="hello@edufor.com"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-gray-700 placeholder-gray-400"
                  />
                </div>

                {/* Service Dropdown */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Service</label>
                  <div className="relative">
                    <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-gray-700 appearance-none bg-white">
                      <option value="">Select...</option>
                      <option value="university-placement">University Placement</option>
                      <option value="scholarships">Scholarships</option>
                      <option value="visa-support">Visa Support</option>
                      <option value="personal-statement">Personal Statement</option>
                      <option value="career-counseling">Career Counseling</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Type your message here..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-gray-700 placeholder-gray-400 resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-gray-900 to-black text-white py-4 px-6 rounded-xl font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 group"
                >
                  Submit
                  <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
