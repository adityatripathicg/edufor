import Navbar from "../components/Navbar";
import Image from "next/image";
import { FaCheckCircle, FaUsers, FaAward, FaGlobe, FaHandshake, FaLightbulb, FaGraduationCap, FaTrophy, FaStar } from "react-icons/fa";

export default function About() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="w-full min-h-screen bg-[url('/bghero.png')] bg-cover bg-center bg-no-repeat relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-white/85"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full animate-bounce-slow"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-green-500/20 to-[#B6D680]/20 rounded-full animate-bounce-slow-delayed"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full animate-bounce-slow-reverse"></div>
        <div className="absolute top-60 right-10 w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full animate-float"></div>
        
        {/* Floating Icons */}
        <div className="absolute top-32 left-1/4 animate-float">
          <div className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
            <FaUsers className="w-8 h-8 text-[#B6D680]" />
          </div>
        </div>
        
        <div className="absolute top-48 right-1/4 animate-float" style={{animationDelay: '1s'}}>
          <div className="w-14 h-14 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
            <FaGraduationCap className="w-7 h-7 text-blue-600" />
          </div>
        </div>
        
        <div className="absolute bottom-48 left-1/3 animate-float" style={{animationDelay: '2s'}}>
          <div className="w-18 h-18 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
            <FaTrophy className="w-9 h-9 text-orange-600" />
          </div>
        </div>
        
        <div className="relative z-10 flex flex-col justify-center items-center min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
          <div className="text-center max-w-6xl">
            {/* Trust Badge */}
            <div className="inline-block mb-6 animate-fadeInUp">
              <span className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full text-[#B6D680] font-semibold text-sm shadow-lg border border-[#B6D680]/20">
                <FaStar className="w-4 h-4" />
                Trusted by 200+ Students Worldwide
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold pb-6 leading-tight animate-text-reveal">
              About <span className="gradient-text relative">
                EduFor
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#B6D680] to-[#A5C96B] rounded-full animate-pulse"></div>
              </span>
            </h1>
            
            <p className="text-gray-600 font-medium text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto animate-text-reveal animate-delay-200">
              Your trusted partner in achieving academic excellence and realizing your dream of studying at top universities worldwide.
            </p>
            
            {/* Animated Stats */}
            <div className="flex flex-wrap justify-center items-center gap-8 mt-12 animate-fadeInUp animate-delay-500">
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-700 font-semibold">98% Success Rate</span>
              </div>
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-gray-700 font-semibold">50+ Partner Universities</span>
              </div>
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
                <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                <span className="text-gray-700 font-semibold">$2M+ Scholarships</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                Our <span className="gradient-text">Mission</span>
              </h2>
              <p className="text-gray-600 font-medium text-lg sm:text-xl leading-relaxed">
                To democratize access to world-class education by providing expert guidance, personalized support, and seamless application processes that help students achieve their academic dreams regardless of their background.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <FaCheckCircle className="w-6 h-6 text-[#B6D680] mt-1 flex-shrink-0" />
                  <p className="text-gray-600">Personalized guidance for every student</p>
                </div>
                <div className="flex items-start gap-4">
                  <FaCheckCircle className="w-6 h-6 text-[#B6D680] mt-1 flex-shrink-0" />
                  <p className="text-gray-600">Transparent and honest communication</p>
                </div>
                <div className="flex items-start gap-4">
                  <FaCheckCircle className="w-6 h-6 text-[#B6D680] mt-1 flex-shrink-0" />
                  <p className="text-gray-600">End-to-end support throughout the journey</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                Our <span className="gradient-text">Vision</span>
              </h2>
              <p className="text-gray-600 font-medium text-lg sm:text-xl leading-relaxed">
                To become the leading education consultancy that transforms lives by connecting talented students with their ideal universities, creating a global community of successful graduates who make meaningful contributions to society.
              </p>
              <div className="relative group">
                <Image 
                  src="/hero2.png" 
                  alt="Our Vision" 
                  width={500} 
                  height={400} 
                  className="w-full rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#B6D680]/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-gray-600 font-medium text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaHandshake className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Trust</h3>
              <p className="text-gray-600 leading-relaxed">
                We build lasting relationships based on honesty, transparency, and reliability. Every interaction is grounded in trust and mutual respect.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaAward className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                We strive for the highest standards in everything we do, continuously improving our services to deliver exceptional results for our students.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaUsers className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Commitment</h3>
              <p className="text-gray-600 leading-relaxed">
                We are fully dedicated to our students&apos; success, providing unwavering support and guidance throughout their entire academic journey.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaGlobe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Outlook</h3>
              <p className="text-gray-600 leading-relaxed">
                We embrace diversity and global perspectives, connecting students with opportunities across different cultures and educational systems.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaLightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                We continuously adapt and innovate our approach to stay ahead of changing educational landscapes and application requirements.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaUsers className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Integrity</h3>
              <p className="text-gray-600 leading-relaxed">
                We maintain the highest ethical standards, ensuring that all our advice and recommendations are in the best interest of our students.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="gradient-text">Impact</span>
            </h2>
            <p className="text-gray-600 font-medium text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
              Numbers that speak to our success and commitment
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent mb-4">200+</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Students Accepted</div>
              <div className="text-gray-600">To top universities worldwide</div>
            </div>
            
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent mb-4">50+</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Partner Universities</div>
              <div className="text-gray-600">Across 15+ countries</div>
            </div>
            
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-4">$2M+</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Scholarships Secured</div>
              <div className="text-gray-600">For our students</div>
            </div>
            
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent mb-4">98%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Success Rate</div>
              <div className="text-gray-600">Application acceptance rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-gray-600 font-medium text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
              Experienced professionals dedicated to your success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-2xl">AS</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-2">Dr. Sarah Johnson</h3>
              <p className="text-[#B6D680] font-semibold text-center mb-4">Chief Education Officer</p>
              <p className="text-gray-600 text-center leading-relaxed">
                PhD in Education with 15+ years of experience in university admissions and student counseling.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-2xl">MR</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-2">Michael Rodriguez</h3>
              <p className="text-[#B6D680] font-semibold text-center mb-4">Head of University Relations</p>
              <p className="text-gray-600 text-center leading-relaxed">
                Former admissions officer at top universities with extensive network of international partnerships.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-2xl">EC</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-2">Emily Chen</h3>
              <p className="text-[#B6D680] font-semibold text-center mb-4">Scholarship Specialist</p>
              <p className="text-gray-600 text-center leading-relaxed">
                Expert in financial aid and scholarship opportunities with proven track record of securing funding.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
