import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCalendarAlt, FaUser, FaEye, FaTag, FaBookOpen, FaLightbulb, FaGraduationCap, FaRocket, FaFileAlt } from "react-icons/fa";

const articles = [
  {
    id: 1,
    title: "Complete Guide to University Applications in 2024",
    excerpt: "Everything you need to know about applying to universities, from choosing the right schools to submitting your applications.",
    author: "Dr. Sarah Johnson",
    date: "2024-01-15",
    readTime: "8 min read",
    views: "2.3k",
    category: "Application Guide",
    image: "/hero2.png",
    featured: true
  },
  {
    id: 2,
    title: "How to Write a Winning Personal Statement",
    excerpt: "Learn the secrets to crafting a compelling personal statement that stands out to admissions committees.",
    author: "Michael Rodriguez",
    date: "2024-01-12",
    readTime: "6 min read",
    views: "1.8k",
    category: "Writing Tips",
    image: "/hero2.png",
    featured: false
  },
  {
    id: 3,
    title: "Scholarship Opportunities for International Students",
    excerpt: "Discover the best scholarship opportunities available for international students in 2024.",
    author: "Emily Chen",
    date: "2024-01-10",
    readTime: "10 min read",
    views: "3.1k",
    category: "Scholarships",
    image: "/hero2.png",
    featured: false
  },
  {
    id: 4,
    title: "Visa Application Process: Step-by-Step Guide",
    excerpt: "A comprehensive guide to navigating the student visa application process for different countries.",
    author: "Dr. Sarah Johnson",
    date: "2024-01-08",
    readTime: "12 min read",
    views: "2.7k",
    category: "Visa Support",
    image: "/hero2.png",
    featured: false
  },
  {
    id: 5,
    title: "Top 10 Universities for Engineering Programs",
    excerpt: "Explore the best universities worldwide for engineering programs and what makes them special.",
    author: "Michael Rodriguez",
    date: "2024-01-05",
    readTime: "7 min read",
    views: "1.9k",
    category: "University Rankings",
    image: "/hero2.png",
    featured: false
  },
  {
    id: 6,
    title: "Career Planning: Choosing the Right Major",
    excerpt: "How to choose a major that aligns with your career goals and interests.",
    author: "Emily Chen",
    date: "2024-01-03",
    readTime: "9 min read",
    views: "2.2k",
    category: "Career Guidance",
    image: "/hero2.png",
    featured: false
  }
];

const categories = [
  "All Articles",
  "Application Guide",
  "Writing Tips",
  "Scholarships",
  "Visa Support",
  "University Rankings",
  "Career Guidance"
];

export default function Articles() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="w-full min-h-screen bg-[url('/bghero.png')] bg-cover bg-center bg-no-repeat relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-white/85"></div>
        
        {/* Animated Article Icons */}
        <div className="absolute top-20 left-12 animate-float">
          <div className="w-18 h-18 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <FaFileAlt className="w-9 h-9 text-blue-600" />
          </div>
        </div>
        
        <div className="absolute top-40 right-16 animate-float" style={{animationDelay: '0.7s'}}>
          <div className="w-16 h-16 bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <FaBookOpen className="w-8 h-8 text-green-600" />
          </div>
        </div>
        
        <div className="absolute bottom-40 left-20 animate-float" style={{animationDelay: '1.4s'}}>
          <div className="w-20 h-20 bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <FaLightbulb className="w-10 h-10 text-purple-600" />
          </div>
        </div>
        
        <div className="absolute top-60 right-8 animate-float" style={{animationDelay: '2.1s'}}>
          <div className="w-14 h-14 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <FaGraduationCap className="w-7 h-7 text-orange-600" />
          </div>
        </div>
        
        <div className="absolute bottom-32 right-1/3 animate-float" style={{animationDelay: '2.8s'}}>
          <div className="w-12 h-12 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <FaRocket className="w-6 h-6 text-red-600" />
          </div>
        </div>
        
        <div className="relative z-10 flex flex-col justify-center items-center min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
          <div className="text-center max-w-6xl">
            {/* Article Badge */}
            <div className="inline-block mb-6 animate-fadeInUp">
              <span className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full text-[#B6D680] font-semibold text-sm shadow-lg border border-[#B6D680]/20">
                <FaBookOpen className="w-4 h-4 animate-pulse" />
                Latest Insights & Guides
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold pb-6 leading-tight animate-text-reveal">
              Articles & <span className="gradient-text relative">
                Resources
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#B6D680] to-[#A5C96B] rounded-full animate-pulse"></div>
              </span>
            </h1>
            
            <p className="text-gray-600 font-medium text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto animate-text-reveal animate-delay-200">
              Expert insights, guides, and tips to help you navigate your university application journey successfully.
            </p>
            
            {/* Article Categories */}
            <div className="flex flex-wrap justify-center items-center gap-4 mt-12 animate-fadeInUp animate-delay-500">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-gray-700 font-medium text-sm">Application Guides</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-700 font-medium text-sm">Scholarship Tips</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                <span className="text-gray-700 font-medium text-sm">Visa Support</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                <span className="text-gray-700 font-medium text-sm">Career Guidance</span>
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

      {/* Featured Article */}
      <div className="py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Featured <span className="gradient-text">Article</span>
            </h2>
          </div>
          
          {articles.filter(article => article.featured).map((article) => (
            <div key={article.id} className="bg-gradient-to-r from-gray-50 to-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-gray-100">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="px-4 py-2 bg-[#B6D680] text-white text-sm font-semibold rounded-full">
                      {article.category}
                    </span>
                    <span className="px-4 py-2 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
                      Featured
                    </span>
                  </div>
                  
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 font-medium text-lg sm:text-xl leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <FaUser className="w-4 h-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="w-4 h-4" />
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaEye className="w-4 h-4" />
                      <span>{article.views} views</span>
                    </div>
                    <span>{article.readTime}</span>
                  </div>
                  
                  <Link href={`/articles/${article.id}`} className="group inline-flex gap-2 items-center text-white bg-gradient-to-r from-gray-900 to-black rounded-full px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                    Read Full Article
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
                
                <div className="relative group">
                  <Image 
                    src={article.image} 
                    alt={article.title} 
                    width={600} 
                    height={400} 
                    className="w-full rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#B6D680]/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories Filter */}
      <div className="py-8 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  index === 0 
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

      {/* Articles Grid */}
      <div className="py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Latest <span className="gradient-text">Articles</span>
            </h2>
            <p className="text-gray-600 font-medium text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
              Stay updated with the latest insights and guidance for your university application journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.filter(article => !article.featured).map((article) => (
              <article key={article.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden">
                <div className="relative">
                  <Image 
                    src={article.image} 
                    alt={article.title} 
                    width={400} 
                    height={250} 
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#B6D680] text-white text-sm font-semibold rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#B6D680] transition-colors duration-300 leading-tight">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-2">
                      <FaUser className="w-4 h-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="w-4 h-4" />
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaEye className="w-4 h-4" />
                      <span>{article.views}</span>
                    </div>
                    <span>{article.readTime}</span>
                  </div>
                  
                  <Link href={`/articles/${article.id}`} className="group/btn inline-flex gap-2 items-center text-[#B6D680] border-2 border-[#B6D680] bg-white rounded-full px-6 py-3 font-semibold hover:bg-[#B6D680] hover:text-white transition-all duration-300">
                    Read More
                    <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Stay <span className="gradient-text">Updated</span>
          </h2>
          <p className="text-gray-600 font-medium text-lg sm:text-xl lg:text-2xl mb-8 leading-relaxed">
            Subscribe to our newsletter and never miss the latest articles, tips, and university application insights.
          </p>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#B6D680] focus:border-transparent text-gray-700"
              />
              <button className="bg-[#B6D680] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#A5C96B] transition-colors duration-300">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
