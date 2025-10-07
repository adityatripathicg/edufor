import Navbar from "../../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCheckCircle, FaUser, FaGraduationCap, FaBriefcase, FaLightbulb, FaChartLine, FaUsers } from "react-icons/fa";

const services = [
  {
    title: "Career Assessment",
    description: "Comprehensive evaluation of your interests, skills, and values to identify suitable career paths.",
    features: ["Skills Analysis", "Interest Assessment", "Personality Testing", "Career Matching"],
    icon: FaUser,
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Academic Planning",
    description: "Strategic planning for your academic journey to align with your career goals.",
    features: ["Major Selection", "Course Planning", "Academic Timeline", "Goal Setting"],
    icon: FaGraduationCap,
    color: "from-green-500 to-green-600"
  },
  {
    title: "Industry Insights",
    description: "Expert knowledge about different industries, job markets, and career opportunities.",
    features: ["Market Research", "Industry Trends", "Salary Information", "Job Outlook"],
    icon: FaBriefcase,
    color: "from-purple-500 to-purple-600"
  },
  {
    title: "Skill Development",
    description: "Guidance on developing the skills and competencies needed for your chosen career path.",
    features: ["Skill Gap Analysis", "Learning Plan", "Resource Recommendations", "Progress Tracking"],
    icon: FaLightbulb,
    color: "from-orange-500 to-orange-600"
  }
];

const careerPaths = [
  {
    field: "Technology",
    description: "Software development, data science, cybersecurity, and emerging tech roles.",
    growth: "High",
    salary: "$70,000 - $150,000",
    icon: FaChartLine,
    color: "from-blue-500 to-blue-600"
  },
  {
    field: "Healthcare",
    description: "Medicine, nursing, public health, and allied health professions.",
    growth: "Very High",
    salary: "$60,000 - $200,000",
    icon: FaUser,
    color: "from-green-500 to-green-600"
  },
  {
    field: "Business",
    description: "Management, finance, marketing, consulting, and entrepreneurship.",
    growth: "High",
    salary: "$50,000 - $120,000",
    icon: FaBriefcase,
    color: "from-purple-500 to-purple-600"
  },
  {
    field: "Engineering",
    description: "Civil, mechanical, electrical, and specialized engineering disciplines.",
    growth: "High",
    salary: "$65,000 - $130,000",
    icon: FaChartLine,
    color: "from-orange-500 to-orange-600"
  },
  {
    field: "Education",
    description: "Teaching, administration, research, and educational technology roles.",
    growth: "Medium",
    salary: "$40,000 - $80,000",
    icon: FaGraduationCap,
    color: "from-red-500 to-red-600"
  },
  {
    field: "Creative Arts",
    description: "Design, media, entertainment, and creative industry positions.",
    growth: "Medium",
    salary: "$35,000 - $90,000",
    icon: FaLightbulb,
    color: "from-pink-500 to-pink-600"
  }
];

const processSteps = [
  {
    step: "1",
    title: "Initial Assessment",
    description: "Comprehensive evaluation of your interests, skills, values, and career aspirations.",
    icon: FaUser,
    color: "from-blue-500 to-blue-600"
  },
  {
    step: "2",
    title: "Career Exploration",
    description: "Research and exploration of various career options that match your profile.",
    icon: FaBriefcase,
    color: "from-green-500 to-green-600"
  },
  {
    step: "3",
    title: "Goal Setting",
    description: "Development of clear, achievable career goals and academic pathways.",
    icon: FaChartLine,
    color: "from-purple-500 to-purple-600"
  },
  {
    step: "4",
    title: "Action Planning",
    description: "Creation of a detailed action plan to achieve your career objectives.",
    icon: FaLightbulb,
    color: "from-orange-500 to-orange-600"
  }
];

export default function CareerCounseling() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="w-full min-h-screen bg-[url('/bghero.png')] bg-cover bg-center bg-no-repeat relative">
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-white/85"></div>
        <div className="relative z-10 flex flex-col justify-center items-center min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
          <div className="text-center max-w-6xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold pb-6 leading-tight">
              Career <span className="gradient-text">Counseling</span>
            </h1>
            <p className="text-gray-600 font-medium text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto">
              Discover your ideal career path with expert guidance and personalized career planning services.
            </p>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-gray-600 font-medium text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
              Comprehensive career guidance to help you make informed decisions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <FaCheckCircle className="w-3 h-3 text-[#B6D680] flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Career Paths */}
      <div className="py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Popular <span className="gradient-text">Career Paths</span>
            </h2>
            <p className="text-gray-600 font-medium text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
              Explore various career fields and their opportunities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {careerPaths.map((path, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${path.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <path.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{path.field}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500">Growth:</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        path.growth === 'Very High' ? 'bg-green-100 text-green-700' :
                        path.growth === 'High' ? 'bg-blue-100 text-blue-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>
                        {path.growth}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-4">{path.description}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-700">Salary Range</span>
                    <span className="font-bold text-gray-900">{path.salary}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Process */}
      <div className="py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-gray-600 font-medium text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
              How we help you discover and plan your ideal career
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
      <div className="py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Success <span className="gradient-text">Stories</span>
            </h2>
            <p className="text-gray-600 font-medium text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
              See how our career counseling has helped students find their perfect career path
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
                  <p className="text-[#B6D680] font-semibold">Software Engineer at Google</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                "EduFor's career counseling helped me discover my passion for technology and guided me toward computer science. Now I'm working at my dream company!"
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
                  <p className="text-[#B6D680] font-semibold">Doctor at Johns Hopkins</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                "The career assessment revealed my interest in medicine. EduFor helped me plan my pre-med journey and I'm now a practicing physician."
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
                  <p className="text-[#B6D680] font-semibold">Investment Banker at Goldman Sachs</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                "Career counseling helped me understand my analytical strengths and led me to finance. I'm now working in investment banking at a top firm."
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
            Ready to Discover Your <span className="bg-gradient-to-r from-[#B6D680] to-[#A5C96B] bg-clip-text text-transparent">Career Path?</span>
          </h2>
          <p className="text-gray-300 font-medium text-lg sm:text-xl lg:text-2xl mb-8 leading-relaxed">
            Let our career counselors help you find your ideal career and plan your academic journey accordingly.
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
