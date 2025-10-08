import Navbar from "../../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCheckCircle, FaGraduationCap, FaUsers, FaGlobe, FaFileAlt, FaClock, FaStar } from "react-icons/fa";

const universities = [
  {
    name: "Harvard University",
    country: "USA",
    ranking: "1",
    programs: ["Business", "Medicine", "Law", "Engineering"],
    acceptanceRate: "3.4%",
    icon: "/l1.svg"
  },
  {
    name: "Oxford University",
    country: "UK",
    ranking: "2",
    programs: ["Humanities", "Sciences", "Medicine", "Social Sciences"],
    acceptanceRate: "17%",
    icon: "/l2.svg"
  },
  {
    name: "Stanford University",
    country: "USA",
    ranking: "3",
    programs: ["Engineering", "Business", "Medicine", "Computer Science"],
    acceptanceRate: "4.3%",
    icon: "/l3.svg"
  },
  {
    name: "MIT",
    country: "USA",
    ranking: "4",
    programs: ["Engineering", "Computer Science", "Physics", "Mathematics"],
    acceptanceRate: "6.7%",
    icon: "/l4.svg"
  },
  {
    name: "Cambridge University",
    country: "UK",
    ranking: "5",
    programs: ["Natural Sciences", "Engineering", "Medicine", "Humanities"],
    acceptanceRate: "21%",
    icon: "/l5.svg"
  },
  {
    name: "ETH Zurich",
    country: "Switzerland",
    ranking: "6",
    programs: ["Engineering", "Natural Sciences", "Architecture", "Mathematics"],
    acceptanceRate: "27%",
    icon: "/l6.svg"
  }
];

const processSteps = [
  {
    step: "1",
    title: "Profile Assessment",
    description: "Comprehensive evaluation of your academic background, test scores, extracurricular activities, and career goals.",
    icon: FaFileAlt,
    color: "from-blue-500 to-blue-600"
  },
  {
    step: "2",
    title: "University Research",
    description: "Extensive research to identify universities that match your profile, interests, and career aspirations.",
    icon: FaGlobe,
    color: "from-green-500 to-green-600"
  },
  {
    step: "3",
    title: "Application Strategy",
    description: "Development of a personalized application strategy including timeline, requirements, and deadlines.",
    icon: FaClock,
    color: "from-purple-500 to-purple-600"
  },
  {
    step: "4",
    title: "Application Support",
    description: "Complete support throughout the application process, from essays to recommendation letters.",
    icon: FaUsers,
    color: "from-orange-500 to-orange-600"
  }
];

export default function UniversityPlacement() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="w-full min-h-screen bg-[url('/bghero.png')] bg-cover bg-center bg-no-repeat relative">
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-white/85"></div>
        <div className="relative z-10 flex flex-col justify-center items-center min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
          <div className="text-center max-w-6xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold pb-6 leading-tight">
              University <span className="gradient-text">Placement</span>
            </h1>
            <p className="text-gray-600 font-medium text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto">
              Find your perfect university match with our expert guidance and personalized approach to university selection and application.
            </p>
          </div>
        </div>
      </div>

      {/* What We Offer */}
      <div className="py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              What We <span className="gradient-text">Offer</span>
            </h2>
            <p className="text-gray-600 font-medium text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
              Comprehensive university placement services tailored to your unique profile and aspirations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaFileAlt className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Profile Analysis</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Comprehensive evaluation of your academic background, test scores, extracurricular activities, and career goals to identify your strengths and areas for improvement.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="w-4 h-4 text-[#B6D680] flex-shrink-0" />
                  <span className="text-sm text-gray-600">Academic record analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="w-4 h-4 text-[#B6D680] flex-shrink-0" />
                  <span className="text-sm text-gray-600">Test score evaluation</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="w-4 h-4 text-[#B6D680] flex-shrink-0" />
                  <span className="text-sm text-gray-600">Extracurricular assessment</span>
                </li>
              </ul>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaGlobe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">University Research</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Extensive research to identify universities that match your profile, interests, and career aspirations across different countries and programs.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="w-4 h-4 text-[#B6D680] flex-shrink-0" />
                  <span className="text-sm text-gray-600">Program-specific research</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="w-4 h-4 text-[#B6D680] flex-shrink-0" />
                  <span className="text-sm text-gray-600">Admission requirements analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="w-4 h-4 text-[#B6D680] flex-shrink-0" />
                  <span className="text-sm text-gray-600">Cultural fit assessment</span>
                </li>
              </ul>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaUsers className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Application Strategy</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Development of a personalized application strategy including timeline, requirements, and deadlines to maximize your chances of acceptance.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="w-4 h-4 text-[#B6D680] flex-shrink-0" />
                  <span className="text-sm text-gray-600">Timeline planning</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="w-4 h-4 text-[#B6D680] flex-shrink-0" />
                  <span className="text-sm text-gray-600">Application prioritization</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="w-4 h-4 text-[#B6D680] flex-shrink-0" />
                  <span className="text-sm text-gray-600">Risk assessment</span>
                </li>
              </ul>
            </div>
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
              A structured approach to ensure your university placement success
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

      {/* Featured Universities */}
      <div className="py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Featured <span className="gradient-text">Universities</span>
            </h2>
            <p className="text-gray-600 font-medium text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
              Partner universities where our students have achieved remarkable success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {universities.map((university, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Image className="w-8 h-8" src={university.icon} alt={university.name} width={32} height={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{university.name}</h3>
                    <p className="text-gray-600">{university.country}</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-700">World Ranking</span>
                    <div className="flex items-center gap-1">
                      <FaStar className="w-4 h-4 text-yellow-500" />
                      <span className="font-bold text-gray-900">#{university.ranking}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-700">Acceptance Rate</span>
                    <span className="font-bold text-gray-900">{university.acceptanceRate}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Popular Programs</h4>
                  <div className="flex flex-wrap gap-2">
                    {university.programs.map((program, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        {program}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-[#B6D680] to-[#A5C96B] text-white py-3 px-4 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                  Learn More
                </button>
              </div>
            ))}
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
              Real students, real results - see how we&apos;ve helped others achieve their dreams
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
                  <p className="text-[#B6D680] font-semibold">Harvard University</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                &quot;EduFor helped me navigate the complex application process and secure admission to Harvard Business School. Their personalized approach made all the difference.&quot;
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
                  <p className="text-[#B6D680] font-semibold">Oxford University</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                &quot;The team&apos;s expertise in UK university applications was invaluable. I couldn&apos;t have gotten into Oxford without their guidance and support.&quot;
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
                  <p className="text-[#B6D680] font-semibold">Stanford University</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                &quot;From profile assessment to final application, EduFor provided comprehensive support. I&apos;m now pursuing my dream at Stanford!&quot;
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
            Ready to Find Your <span className="bg-gradient-to-r from-[#B6D680] to-[#A5C96B] bg-clip-text text-transparent">Perfect University?</span>
          </h2>
          <p className="text-gray-300 font-medium text-lg sm:text-xl lg:text-2xl mb-8 leading-relaxed">
            Let our experts help you identify and apply to universities that match your profile and aspirations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="group flex gap-2 items-center justify-center text-white bg-gradient-to-r from-[#B6D680] to-[#A5C96B] rounded-full px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Start Your Journey
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
