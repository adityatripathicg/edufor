import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCheckCircle, FaUsers, FaGraduationCap, FaGlobe, FaFileAlt, FaHandshake, FaRocket, FaDollarSign, FaPassport } from "react-icons/fa";

const services = [
  {
    title: "University Placement",
    description: "We help students identify suitable universities based on their academic profile and career goals.",
    icon: "/@.svg",
    gradient: "from-blue-500 to-blue-600",
    bgGradient: "from-blue-50 to-blue-100",
    features: ["University Selection", "Application Strategy", "Profile Matching", "Deadline Management"],
    href: "/services/university-placement"
  },
  {
    title: "Scholarships",
    description: "Comprehensive scholarship search and application support to secure funding for your education.",
    icon: "/linkedin.svg",
    gradient: "from-green-500 to-green-600",
    bgGradient: "from-green-50 to-green-100",
    features: ["Scholarship Search", "Application Support", "Essay Writing", "Financial Planning"],
    href: "/services/scholarships"
  },
  {
    title: "Visa Support",
    description: "Complete visa application assistance for smooth international study experience.",
    icon: "/insta.svg",
    gradient: "from-purple-500 to-purple-600",
    bgGradient: "from-purple-50 to-purple-100",
    features: ["Visa Application", "Document Preparation", "Interview Coaching", "Timeline Management"],
    href: "/services/visa-support"
  },
  {
    title: "Personal Statement",
    description: "Expert guidance in crafting compelling personal statements that stand out.",
    icon: "/x.svg",
    gradient: "from-orange-500 to-orange-600",
    bgGradient: "from-orange-50 to-orange-100",
    features: ["Statement Writing", "Review & Editing", "Story Development", "Proofreading"],
    href: "/services/personal-statement"
  },
  {
    title: "Career Counseling",
    description: "Professional career guidance to align your academic choices with future goals.",
    icon: "/yt.svg",
    gradient: "from-red-500 to-red-600",
    bgGradient: "from-red-50 to-red-100",
    features: ["Career Assessment", "Path Planning", "Industry Insights", "Skill Development"],
    href: "/services/career-counseling"
  }
];

export default function Services() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="w-full min-h-screen bg-[url('/bghero.png')] bg-cover bg-center bg-no-repeat relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-white/85"></div>
        
        {/* Animated Service Icons */}
        <div className="absolute top-20 left-16 animate-float">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <FaGraduationCap className="w-10 h-10 text-blue-600" />
          </div>
        </div>
        
        <div className="absolute top-40 right-20 animate-float" style={{animationDelay: '0.5s'}}>
          <div className="w-16 h-16 bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <FaDollarSign className="w-8 h-8 text-green-600" />
          </div>
        </div>
        
        <div className="absolute bottom-40 left-20 animate-float" style={{animationDelay: '1s'}}>
          <div className="w-18 h-18 bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <FaPassport className="w-9 h-9 text-purple-600" />
          </div>
        </div>
        
        <div className="absolute top-60 right-10 animate-float" style={{animationDelay: '1.5s'}}>
          <div className="w-14 h-14 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <FaFileAlt className="w-7 h-7 text-orange-600" />
          </div>
        </div>
        
        <div className="absolute bottom-32 right-1/4 animate-float" style={{animationDelay: '2s'}}>
          <div className="w-12 h-12 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <FaUsers className="w-6 h-6 text-red-600" />
          </div>
        </div>
        
        <div className="relative z-10 flex flex-col justify-center items-center min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
          <div className="text-center max-w-6xl">
            {/* Service Badge */}
            <div className="inline-block mb-6 animate-fadeInUp">
              <span className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full text-[#B6D680] font-semibold text-sm shadow-lg border border-[#B6D680]/20">
                <FaRocket className="w-4 h-4 animate-spin-slow" />
                Complete Application Support
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold pb-6 leading-tight animate-text-reveal">
              Our <span className="gradient-text relative">
                Services
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#B6D680] to-[#A5C96B] rounded-full animate-pulse"></div>
              </span>
            </h1>
            
            <p className="text-gray-600 font-medium text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto animate-text-reveal animate-delay-200">
              Comprehensive support for your entire university application journey, from initial planning to successful enrollment.
            </p>
            
            {/* Service Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 animate-fadeInUp animate-delay-500">
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-gray-700 font-semibold">University Placement</span>
              </div>
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-700 font-semibold">Scholarship Support</span>
              </div>
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                <span className="text-gray-700 font-semibold">Visa Assistance</span>
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

      {/* Services Grid */}
      <div className="py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              What We <span className="gradient-text">Offer</span>
            </h2>
            <p className="text-gray-600 font-medium text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
              Tailored solutions designed to maximize your chances of success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link key={index} href={service.href} className="group">
                <div className="group flex flex-col items-start justify-start border-2 rounded-2xl border-gray-100 h-96 relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <div className="relative z-10 p-6 w-full h-full flex flex-col">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Image className="w-8 h-8" src={service.icon} alt={service.title} width={32} height={32} />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 font-medium text-sm sm:text-base leading-relaxed flex-grow mb-6">
                      {service.description}
                    </p>
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <FaCheckCircle className="w-4 h-4 text-[#B6D680] flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="group/btn flex gap-2 items-center justify-center text-gray-700 border-2 border-gray-200 bg-white rounded-full px-4 py-3 w-fit text-sm sm:text-base font-semibold hover:border-[#B6D680] hover:text-[#B6D680] transition-all duration-300">
                      Learn More 
                      <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-gray-600 font-medium text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
              A structured approach to ensure your success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Initial Consultation</h3>
              <p className="text-gray-600 leading-relaxed">
                We start with a comprehensive assessment of your academic background, interests, and goals.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Strategy Development</h3>
              <p className="text-gray-600 leading-relaxed">
                Based on your profile, we create a personalized strategy and timeline for your applications.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Application Support</h3>
              <p className="text-gray-600 leading-relaxed">
                We guide you through every step of the application process, from essays to interviews.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-2xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Success & Beyond</h3>
              <p className="text-gray-600 leading-relaxed">
                We celebrate your acceptance and provide ongoing support for your academic journey.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
                Why Choose <span className="gradient-text">EduFor?</span>
              </h2>
              <p className="text-gray-600 font-medium text-lg sm:text-xl leading-relaxed">
                Our comprehensive approach and proven track record make us the ideal partner for your educational journey.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#B6D680] to-[#A5C96B] rounded-full flex items-center justify-center flex-shrink-0">
                    <FaUsers className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Team</h3>
                    <p className="text-gray-600">Our advisors have years of experience in university admissions and international education.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaGraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Results</h3>
                    <p className="text-gray-600">98% success rate with over 200 students placed in top universities worldwide.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaHandshake className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Personalized Approach</h3>
                    <p className="text-gray-600">Every student receives customized guidance tailored to their unique goals and circumstances.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaGlobe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Global Network</h3>
                    <p className="text-gray-600">Strong partnerships with 50+ universities across 15+ countries worldwide.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <Image 
                src="/hero2.png" 
                alt="Why Choose EduFor" 
                width={600} 
                height={500} 
                className="w-full rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#B6D680]/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready to Start Your <span className="bg-gradient-to-r from-[#B6D680] to-[#A5C96B] bg-clip-text text-transparent">Journey?</span>
          </h2>
          <p className="text-gray-300 font-medium text-lg sm:text-xl lg:text-2xl mb-8 leading-relaxed">
            Let's work together to make your dream university a reality. Get started with a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="group flex gap-2 items-center justify-center text-white bg-gradient-to-r from-[#B6D680] to-[#A5C96B] rounded-full px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Get Free Consultation
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link href="/about" className="group flex gap-2 items-center justify-center bg-white border-2 border-gray-200 text-gray-700 rounded-full px-8 py-4 text-lg font-semibold shadow-md hover:shadow-lg hover:border-[#B6D680] hover:text-[#B6D680] transition-all duration-300">
              Learn More About Us
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
