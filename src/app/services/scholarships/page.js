import Navbar from "../../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCheckCircle, FaDollarSign, FaGraduationCap, FaUsers, FaFileAlt, FaClock, FaStar } from "react-icons/fa";

const scholarshipTypes = [
  {
    title: "Merit-Based Scholarships",
    description: "Awarded based on academic excellence, test scores, and achievements.",
    amount: "Up to $50,000",
    requirements: ["High GPA", "Strong Test Scores", "Academic Achievements"],
    icon: FaStar,
    color: "from-yellow-500 to-orange-500"
  },
  {
    title: "Need-Based Scholarships",
    description: "Financial assistance for students with demonstrated financial need.",
    amount: "Up to $30,000",
    requirements: ["Financial Need Documentation", "Income Verification", "FAFSA"],
    icon: FaDollarSign,
    color: "from-green-500 to-green-600"
  },
  {
    title: "Athletic Scholarships",
    description: "For students with exceptional athletic abilities and achievements.",
    amount: "Up to $40,000",
    requirements: ["Athletic Performance", "Sports Achievements", "Physical Fitness"],
    icon: FaUsers,
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "International Scholarships",
    description: "Special scholarships designed for international students.",
    amount: "Up to $25,000",
    requirements: ["International Status", "English Proficiency", "Academic Merit"],
    icon: FaGraduationCap,
    color: "from-purple-500 to-purple-600"
  }
];

const processSteps = [
  {
    step: "1",
    title: "Scholarship Research",
    description: "Comprehensive search for scholarships that match your profile, field of study, and financial needs.",
    icon: FaFileAlt,
    color: "from-blue-500 to-blue-600"
  },
  {
    step: "2",
    title: "Application Preparation",
    description: "Help with gathering documents, writing essays, and preparing application materials.",
    icon: FaFileAlt,
    color: "from-green-500 to-green-600"
  },
  {
    step: "3",
    title: "Essay Writing",
    description: "Expert guidance in crafting compelling scholarship essays that stand out.",
    icon: FaFileAlt,
    color: "from-purple-500 to-purple-600"
  },
  {
    step: "4",
    title: "Application Submission",
    description: "Complete support in submitting applications and following up on results.",
    icon: FaClock,
    color: "from-orange-500 to-orange-600"
  }
];

export default function Scholarships() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="w-full min-h-screen bg-[url('/bghero.png')] bg-cover bg-center bg-no-repeat relative">
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-white/85"></div>
        <div className="relative z-10 flex flex-col justify-center items-center min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
          <div className="text-center max-w-6xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold pb-6 leading-tight">
              Scholarship <span className="gradient-text">Assistance</span>
            </h1>
            <p className="text-gray-600 font-medium text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto">
              Secure funding for your education with our comprehensive scholarship search and application support services.
            </p>
          </div>
        </div>
      </div>

      {/* Scholarship Types */}
      <div className="py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Types of <span className="gradient-text">Scholarships</span>
            </h2>
            <p className="text-gray-600 font-medium text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
              We help you find and apply for various types of scholarships
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {scholarshipTypes.map((scholarship, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${scholarship.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <scholarship.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{scholarship.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{scholarship.description}</p>
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-[#B6D680]">{scholarship.amount}</span>
                      <span className="text-gray-500 ml-2">per year</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Requirements:</h4>
                      <ul className="space-y-1">
                        {scholarship.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <FaCheckCircle className="w-3 h-3 text-[#B6D680] flex-shrink-0" />
                            <span className="text-sm text-gray-600">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
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
              How we help you secure scholarships
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

      {/* Success Stories */}
      <div className="py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Success <span className="gradient-text">Stories</span>
            </h2>
            <p className="text-gray-600 font-medium text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
              See how we've helped students secure significant scholarship funding
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">AS</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Ahmed Sultan</h3>
                  <p className="text-[#B6D680] font-semibold">$45,000 Scholarship</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                "EduFor helped me secure a $45,000 merit-based scholarship to Harvard. Their guidance on essay writing and application strategy was invaluable."
              </p>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="w-4 h-4 text-yellow-500" />
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">MR</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Maria Rodriguez</h3>
                  <p className="text-[#B6D680] font-semibold">$30,000 Scholarship</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                "With EduFor's help, I secured multiple scholarships totaling $30,000. Their research and application support made all the difference."
              </p>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="w-4 h-4 text-yellow-500" />
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">EC</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Emily Chen</h3>
                  <p className="text-[#B6D680] font-semibold">$25,000 Scholarship</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                "EduFor's scholarship specialists helped me find and apply for the perfect scholarship. I'm now studying at Stanford with full funding!"
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
            Ready to Secure Your <span className="bg-gradient-to-r from-[#B6D680] to-[#A5C96B] bg-clip-text text-transparent">Scholarship?</span>
          </h2>
          <p className="text-gray-300 font-medium text-lg sm:text-xl lg:text-2xl mb-8 leading-relaxed">
            Let our scholarship experts help you find and apply for the perfect funding opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="group flex gap-2 items-center justify-center text-white bg-gradient-to-r from-[#B6D680] to-[#A5C96B] rounded-full px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Get Started Today
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
