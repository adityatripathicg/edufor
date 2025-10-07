import Navbar from "../../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCheckCircle, FaPassport, FaFileAlt, FaClock, FaGlobe, FaUser, FaPhone } from "react-icons/fa";

const visaTypes = [
  {
    country: "United States",
    type: "F-1 Student Visa",
    processingTime: "3-5 months",
    requirements: ["I-20 Form", "SEVIS Fee", "Financial Documents", "Interview"],
    icon: "/l1.svg",
    color: "from-blue-500 to-blue-600"
  },
  {
    country: "United Kingdom",
    type: "Student Visa (Tier 4)",
    processingTime: "3-8 weeks",
    requirements: ["CAS Letter", "Financial Evidence", "English Test", "Biometrics"],
    icon: "/l2.svg",
    color: "from-red-500 to-red-600"
  },
  {
    country: "Canada",
    type: "Study Permit",
    processingTime: "4-6 weeks",
    requirements: ["Letter of Acceptance", "Financial Proof", "Medical Exam", "Biometrics"],
    icon: "/l3.svg",
    color: "from-red-500 to-red-600"
  },
  {
    country: "Australia",
    type: "Student Visa (Subclass 500)",
    processingTime: "1-4 months",
    requirements: ["COE", "Financial Capacity", "English Proficiency", "Health Insurance"],
    icon: "/l4.svg",
    color: "from-green-500 to-green-600"
  },
  {
    country: "Germany",
    type: "Student Visa",
    processingTime: "2-3 months",
    requirements: ["University Admission", "Financial Proof", "Health Insurance", "Language Certificate"],
    icon: "/l5.svg",
    color: "from-yellow-500 to-orange-500"
  },
  {
    country: "Netherlands",
    type: "Student Visa (MVV)",
    processingTime: "2-4 months",
    requirements: ["Admission Letter", "Financial Guarantee", "Health Insurance", "Biometrics"],
    icon: "/l6.svg",
    color: "from-orange-500 to-red-500"
  }
];

const processSteps = [
  {
    step: "1",
    title: "Document Preparation",
    description: "Help you gather and prepare all required documents for your visa application.",
    icon: FaFileAlt,
    color: "from-blue-500 to-blue-600"
  },
  {
    step: "2",
    title: "Application Form",
    description: "Assistance with filling out visa application forms accurately and completely.",
    icon: FaFileAlt,
    color: "from-green-500 to-green-600"
  },
  {
    step: "3",
    title: "Interview Preparation",
    description: "Mock interviews and coaching to help you succeed in your visa interview.",
    icon: FaUser,
    color: "from-purple-500 to-purple-600"
  },
  {
    step: "4",
    title: "Follow-up Support",
    description: "Ongoing support throughout the process and assistance with any issues.",
    icon: FaPhone,
    color: "from-orange-500 to-orange-600"
  }
];

export default function VisaSupport() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="w-full min-h-screen bg-[url('/bghero.png')] bg-cover bg-center bg-no-repeat relative">
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-white/85"></div>
        <div className="relative z-10 flex flex-col justify-center items-center min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
          <div className="text-center max-w-6xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold pb-6 leading-tight">
              Visa <span className="gradient-text">Support</span>
            </h1>
            <p className="text-gray-600 font-medium text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto">
              Complete visa application assistance for smooth international study experience across multiple countries.
            </p>
          </div>
        </div>
      </div>

      {/* Visa Types */}
      <div className="py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Student Visas by <span className="gradient-text">Country</span>
            </h2>
            <p className="text-gray-600 font-medium text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
              We provide comprehensive visa support for major study destinations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visaTypes.map((visa, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${visa.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Image className="w-8 h-8" src={visa.icon} alt={visa.country} width={32} height={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{visa.country}</h3>
                    <p className="text-[#B6D680] font-semibold">{visa.type}</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-700">Processing Time</span>
                    <span className="font-bold text-gray-900">{visa.processingTime}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Requirements:</h4>
                  <ul className="space-y-2">
                    {visa.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <FaCheckCircle className="w-3 h-3 text-[#B6D680] flex-shrink-0" />
                        <span className="text-sm text-gray-600">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="w-full bg-gradient-to-r from-[#B6D680] to-[#A5C96B] text-white py-3 px-4 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Process */}
      <div className="py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-gray-600 font-medium text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
              How we guide you through the visa application process
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-gray-700 font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Our Visa Support */}
      <div className="py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
                Why Choose Our <span className="gradient-text">Visa Support?</span>
              </h2>
              <p className="text-gray-600 font-medium text-lg sm:text-xl leading-relaxed">
                Our experienced team ensures a smooth and successful visa application process with personalized guidance and support.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#B6D680] to-[#A5C96B] rounded-full flex items-center justify-center flex-shrink-0">
                    <FaFileAlt className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Document Expertise</h3>
                    <p className="text-gray-600">We know exactly what documents you need and how to prepare them correctly for each country.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaUser className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Interview Preparation</h3>
                    <p className="text-gray-600">Comprehensive interview coaching to help you answer questions confidently and professionally.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaClock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Timeline Management</h3>
                    <p className="text-gray-600">We help you plan and manage your application timeline to meet all deadlines.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaPhone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Ongoing Support</h3>
                    <p className="text-gray-600">We're with you every step of the way, providing support and answering questions throughout the process.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <Image 
                src="/hero2.png" 
                alt="Visa Support" 
                width={600} 
                height={500} 
                className="w-full rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#B6D680]/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Success <span className="gradient-text">Stories</span>
            </h2>
            <p className="text-gray-600 font-medium text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
              Real students who successfully obtained their visas with our help
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">AS</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Ahmed Sultan</h3>
                  <p className="text-[#B6D680] font-semibold">F-1 Visa to USA</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                "EduFor's visa support team made the complex F-1 visa process so much easier. I got my visa approved on the first try!"
              </p>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="w-4 h-4 text-yellow-500" />
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">MR</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Maria Rodriguez</h3>
                  <p className="text-[#B6D680] font-semibold">Tier 4 Visa to UK</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                "The interview preparation was excellent. I felt confident and prepared, and my visa was approved without any issues."
              </p>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="w-4 h-4 text-yellow-500" />
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">EC</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Emily Chen</h3>
                  <p className="text-[#B6D680] font-semibold">Study Permit to Canada</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                "EduFor's document preparation service was outstanding. Everything was organized perfectly and my application was processed quickly."
              </p>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="w-4 h-4 text-yellow-500" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready to Get Your <span className="bg-gradient-to-r from-[#B6D680] to-[#A5C96B] bg-clip-text text-transparent">Student Visa?</span>
          </h2>
          <p className="text-gray-300 font-medium text-lg sm:text-xl lg:text-2xl mb-8 leading-relaxed">
            Let our visa experts guide you through the application process and help you secure your student visa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="group flex gap-2 items-center justify-center text-white bg-gradient-to-r from-[#B6D680] to-[#A5C96B] rounded-full px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Start Your Application
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link href="/services" className="group flex gap-2 items-center justify-center bg-white border-2 border-gray-200 text-gray-700 rounded-full px-8 py-4 text-lg font-semibold shadow-md hover:shadow-lg hover:border-[#B6D680] hover:text-[#B6D680] transition-all duration-300">
              View All Services
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
