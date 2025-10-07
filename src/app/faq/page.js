"use client"
import Navbar from "../components/Navbar";
import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaQuestionCircle, FaSearch } from "react-icons/fa";

const faqCategories = [
  "All Questions",
  "General",
  "Applications",
  "Scholarships",
  "Visa Support",
  "University Selection"
];

const faqs = [
  {
    id: 1,
    question: "How do I choose the right university for me?",
    answer: "Choosing the right university involves considering several factors including your academic interests, career goals, location preferences, financial situation, and university rankings. We help you evaluate these factors through our comprehensive profile assessment and university matching process. Our experts will guide you through researching programs, understanding admission requirements, and finding universities that align with your aspirations.",
    category: "University Selection",
    featured: true
  },
  {
    id: 2,
    question: "When should I start preparing for university applications?",
    answer: "We recommend starting your university application preparation at least 12-18 months before your intended start date. This gives you enough time to research universities, prepare for standardized tests (SAT, ACT, IELTS, TOEFL), gather required documents, write personal statements, and meet application deadlines. Early preparation also allows you to improve your academic profile if needed.",
    category: "Applications",
    featured: true
  },
  {
    id: 3,
    question: "What documents do I need for university applications?",
    answer: "Common documents required include: academic transcripts, standardized test scores (SAT, ACT, IELTS, TOEFL), personal statement or statement of purpose, letters of recommendation, resume/CV, passport copy, and financial documents. Specific requirements vary by university and program. We provide a comprehensive checklist tailored to your chosen universities and programs.",
    category: "Applications",
    featured: false
  },
  {
    id: 4,
    question: "How can I find scholarships for international students?",
    answer: "There are various scholarship opportunities available including university-specific scholarships, government scholarships, private organization scholarships, and merit-based awards. We help you identify relevant scholarships based on your profile, country of origin, field of study, and financial need. Our scholarship specialists guide you through the application process and help you craft compelling scholarship essays.",
    category: "Scholarships",
    featured: true
  },
  {
    id: 5,
    question: "What is the visa application process like?",
    answer: "The visa application process varies by country but generally involves: obtaining admission to a university, gathering required documents (passport, admission letter, financial proof, medical certificates), completing visa application forms, paying application fees, scheduling and attending visa interviews, and waiting for approval. We provide step-by-step guidance and support throughout this process.",
    category: "Visa Support",
    featured: false
  },
  {
    id: 6,
    question: "How much does your service cost?",
    answer: "Our pricing varies based on the services you need and the complexity of your application. We offer different packages ranging from basic consultation to comprehensive full-service support. We also provide flexible payment plans to make our services accessible. Contact us for a personalized quote based on your specific requirements and goals.",
    category: "General",
    featured: false
  },
  {
    id: 7,
    question: "Do you guarantee admission to universities?",
    answer: "While we cannot guarantee admission to any specific university, we have a 98% success rate in helping students gain admission to universities that match their profile. Our success comes from thorough preparation, strategic application planning, and expert guidance. We work with you to maximize your chances of acceptance by presenting your application in the best possible light.",
    category: "General",
    featured: true
  },
  {
    id: 8,
    question: "How long does the application process take?",
    answer: "The timeline varies depending on the universities and programs you're applying to. Generally, the complete process takes 6-12 months from initial consultation to receiving admission decisions. This includes profile assessment, university research, test preparation, application submission, and waiting for decisions. We create a personalized timeline based on your specific situation and deadlines.",
    category: "Applications",
    featured: false
  },
  {
    id: 9,
    question: "Can you help with applications to any country?",
    answer: "Yes, we have expertise in university applications for major study destinations including the USA, UK, Canada, Australia, Germany, Netherlands, and many other countries. Our team includes specialists familiar with different education systems, admission requirements, and application processes across various countries. We tailor our approach based on your preferred destinations.",
    category: "General",
    featured: false
  },
  {
    id: 10,
    question: "What if I don't meet the minimum requirements?",
    answer: "If you don't meet the minimum requirements for your desired universities, we can help you explore alternative options such as pathway programs, foundation courses, or universities with more flexible admission criteria. We also provide guidance on how to improve your profile through additional courses, work experience, or retaking standardized tests.",
    category: "University Selection",
    featured: false
  }
];

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All Questions");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === "All Questions" || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="w-full min-h-screen bg-[url('/bghero.png')] bg-cover bg-center bg-no-repeat relative">
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-white/85"></div>
        <div className="relative z-10 flex flex-col justify-center items-center min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
          <div className="text-center max-w-6xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold pb-6 leading-tight">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h1>
            <p className="text-gray-600 font-medium text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto">
              Find answers to common questions about university applications, scholarships, visas, and our services.
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="py-8 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#B6D680] focus:border-transparent text-gray-700"
              />
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center">
            {faqCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category 
                    ? 'bg-[#B6D680] text-white shadow-lg' 
                    : 'bg-white text-gray-700 hover:bg-[#B6D680] hover:text-white hover:shadow-lg'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured FAQs */}
      <div className="py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Most <span className="gradient-text">Popular</span> Questions
            </h2>
            <p className="text-gray-600 font-medium text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
              Questions our students ask most frequently
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.filter(faq => faq.featured).map((faq) => (
              <div key={faq.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#B6D680] to-[#A5C96B] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <FaQuestionCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{faq.question}</h3>
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm font-semibold rounded-full">
                        {faq.category}
                      </span>
                    </div>
                  </div>
                  {openFAQ === faq.id ? (
                    <FaChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  ) : (
                    <FaChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                
                {openFAQ === faq.id && (
                  <div className="px-6 pb-6">
                    <div className="ml-12 border-l-2 border-[#B6D680] pl-6">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* All FAQs */}
      <div className="py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              All <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-gray-600 font-medium text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
              Browse through all our frequently asked questions
            </p>
          </div>
          
          <div className="space-y-4">
            {filteredFAQs.map((faq) => (
              <div key={faq.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <FaQuestionCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm font-semibold rounded-full">
                        {faq.category}
                      </span>
                    </div>
                  </div>
                  {openFAQ === faq.id ? (
                    <FaChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  ) : (
                    <FaChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                
                {openFAQ === faq.id && (
                  <div className="px-6 pb-6">
                    <div className="ml-12 border-l-2 border-blue-500 pl-6">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Still Have <span className="bg-gradient-to-r from-[#B6D680] to-[#A5C96B] bg-clip-text text-transparent">Questions?</span>
          </h2>
          <p className="text-gray-300 font-medium text-lg sm:text-xl lg:text-2xl mb-8 leading-relaxed">
            Can't find the answer you're looking for? Our team is here to help you with any questions about your university application journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="group inline-flex gap-2 items-center justify-center text-white bg-gradient-to-r from-[#B6D680] to-[#A5C96B] rounded-full px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Contact Us
            </a>
            <a href="/services" className="group inline-flex gap-2 items-center justify-center bg-white border-2 border-gray-200 text-gray-700 rounded-full px-8 py-4 text-lg font-semibold shadow-md hover:shadow-lg hover:border-[#B6D680] hover:text-[#B6D680] transition-all duration-300">
              View Our Services
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
