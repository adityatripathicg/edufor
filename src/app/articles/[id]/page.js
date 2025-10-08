import Navbar from "../../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaCalendarAlt, FaUser, FaEye, FaTag, FaShare, FaBookmark, FaThumbsUp, FaArrowRight } from "react-icons/fa";

// This would typically come from a database or CMS
const getArticle = (id) => {
  const articles = {
    1: {
      id: 1,
      title: "Complete Guide to University Applications in 2024",
      content: `
        <h2>Introduction</h2>
        <p>Applying to universities can be one of the most challenging yet rewarding experiences in a student's academic journey. With the landscape of higher education constantly evolving, it's crucial to stay informed about the latest trends, requirements, and strategies for successful university applications.</p>
        
        <h2>Understanding the Application Process</h2>
        <p>The university application process varies significantly depending on the country and institution you're applying to. However, there are common elements that most applications share:</p>
        
        <h3>1. Academic Requirements</h3>
        <p>Most universities require:</p>
        <ul>
          <li>High school transcripts or equivalent academic records</li>
          <li>Standardized test scores (SAT, ACT, IELTS, TOEFL, etc.)</li>
          <li>Minimum GPA requirements</li>
          <li>Prerequisite courses for specific programs</li>
        </ul>
        
        <h3>2. Application Components</h3>
        <p>A typical university application includes:</p>
        <ul>
          <li>Personal statement or statement of purpose</li>
          <li>Letters of recommendation</li>
          <li>Resume or CV</li>
          <li>Portfolio (for creative programs)</li>
          <li>Interview (for some programs)</li>
        </ul>
        
        <h2>Choosing the Right Universities</h2>
        <p>Selecting universities to apply to is a critical decision that requires careful consideration of several factors:</p>
        
        <h3>Academic Fit</h3>
        <p>Ensure the universities you choose offer programs that align with your academic interests and career goals. Research the curriculum, faculty expertise, and available resources.</p>
        
        <h3>Location and Culture</h3>
        <p>Consider the geographical location, climate, cultural environment, and whether you'll thrive in that setting. International students should pay special attention to visa requirements and cultural adaptation.</p>
        
        <h3>Financial Considerations</h3>
        <p>Evaluate tuition costs, available scholarships, financial aid options, and living expenses. Create a realistic budget for your education.</p>
        
        <h2>Application Timeline</h2>
        <p>Starting early is crucial for a successful application process. Here's a recommended timeline:</p>
        
        <h3>12-18 Months Before Application Deadline</h3>
        <ul>
          <li>Research universities and programs</li>
          <li>Take standardized tests</li>
          <li>Build your extracurricular profile</li>
          <li>Start thinking about your personal statement</li>
        </ul>
        
        <h3>6-12 Months Before</h3>
        <ul>
          <li>Finalize your university list</li>
          <li>Request letters of recommendation</li>
          <li>Begin writing your personal statement</li>
          <li>Gather required documents</li>
        </ul>
        
        <h3>3-6 Months Before</h3>
        <ul>
          <li>Complete application forms</li>
          <li>Submit test scores</li>
          <li>Finalize and submit applications</li>
          <li>Prepare for interviews</li>
        </ul>
        
        <h2>Writing a Compelling Personal Statement</h2>
        <p>Your personal statement is your opportunity to showcase who you are beyond your grades and test scores. Here are key tips:</p>
        
        <h3>Tell Your Story</h3>
        <p>Share experiences that have shaped your academic interests and career goals. Be authentic and specific about your motivations.</p>
        
        <h3>Show, Don't Tell</h3>
        <p>Instead of simply stating that you're passionate about a subject, provide examples of how you've demonstrated this passion through projects, research, or activities.</p>
        
        <h3>Connect to Your Goals</h3>
        <p>Clearly articulate how the university and program will help you achieve your academic and career objectives.</p>
        
        <h2>Common Mistakes to Avoid</h2>
        <p>Many applicants make these common errors that can hurt their chances:</p>
        
        <ul>
          <li><strong>Procrastination:</strong> Starting the application process too late</li>
          <li><strong>Generic applications:</strong> Not tailoring applications to specific universities</li>
          <li><strong>Poor personal statements:</strong> Writing generic or clichéd statements</li>
          <li><strong>Ignoring requirements:</strong> Not following specific university guidelines</li>
          <li><strong>Weak recommendations:</strong> Choosing recommenders who don't know you well</li>
        </ul>
        
        <h2>International Student Considerations</h2>
        <p>International students face additional challenges and requirements:</p>
        
        <h3>Language Proficiency</h3>
        <p>Most universities require proof of English proficiency through tests like IELTS or TOEFL. Start preparing early and aim for scores above the minimum requirements.</p>
        
        <h3>Visa Requirements</h3>
        <p>Research visa requirements early, as the process can be lengthy. Gather all necessary documents and be prepared for interviews.</p>
        
        <h3>Financial Documentation</h3>
        <p>Many countries require proof of financial ability to cover tuition and living expenses. Prepare these documents well in advance.</p>
        
        <h2>Conclusion</h2>
        <p>Successfully navigating the university application process requires careful planning, thorough research, and authentic self-reflection. Start early, stay organized, and don't hesitate to seek guidance from counselors, teachers, or educational consultants. Remember, the goal is not just to get accepted, but to find the right fit for your academic and personal growth.</p>
        
        <p>With dedication and the right approach, you can submit compelling applications that showcase your potential and help you gain admission to universities that will support your educational and career goals.</p>
      `,
      author: "Dr. Sarah Johnson",
      date: "2024-01-15",
      readTime: "8 min read",
      views: "2.3k",
      category: "Application Guide",
      image: "/hero2.png",
      tags: ["University Applications", "Admissions", "Higher Education", "Study Abroad"],
      likes: 156
    }
  };
  
  return articles[id] || null;
};

export default function ArticlePage({ params }) {
  const article = getArticle(params.id);
  
  if (!article) {
    return (
      <main className="min-h-screen">
        <Navbar />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
            <p className="text-gray-600 mb-8">The article you&apos;re looking for doesn&apos;t exist.</p>
            <Link href="/articles" className="inline-flex items-center gap-2 text-[#B6D680] hover:text-[#A5C96B] transition-colors duration-300">
              <FaArrowLeft className="w-4 h-4" />
              Back to Articles
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Article Header */}
      <div className="py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link href="/articles" className="inline-flex items-center gap-2 text-[#B6D680] hover:text-[#A5C96B] transition-colors duration-300 mb-6">
              <FaArrowLeft className="w-4 h-4" />
              Back to Articles
            </Link>
          </div>
          
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-4 py-2 bg-[#B6D680] text-white text-sm font-semibold rounded-full">
              {article.category}
            </span>
            <span className="px-4 py-2 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
              Featured
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {article.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8">
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
          
          <div className="relative group mb-8">
            <Image 
              src={article.image} 
              alt={article.title} 
              width={800} 
              height={400} 
              className="w-full rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#B6D680]/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>
          
          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag, index) => (
                <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-[#B6D680] hover:text-white transition-colors duration-300 cursor-pointer">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          {/* Actions */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors duration-300">
                <FaThumbsUp className="w-4 h-4" />
                <span>{article.likes}</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors duration-300">
                <FaBookmark className="w-4 h-4" />
                <span>Save</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors duration-300">
                <FaShare className="w-4 h-4" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <div className="py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-12 text-center">
            Related <span className="gradient-text">Articles</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden">
              <div className="relative">
                <Image 
                  src="/hero2.png" 
                  alt="How to Write a Winning Personal Statement" 
                  width={400} 
                  height={250} 
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#B6D680] text-white text-sm font-semibold rounded-full">
                    Writing Tips
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#B6D680] transition-colors duration-300 leading-tight">
                  How to Write a Winning Personal Statement
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                  Learn the secrets to crafting a compelling personal statement that stands out to admissions committees.
                </p>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-2">
                    <FaUser className="w-4 h-4" />
                    <span>Michael Rodriguez</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt className="w-4 h-4" />
                    <span>Jan 12, 2024</span>
                  </div>
                  <span>6 min read</span>
                </div>
                
                <Link href="/articles/2" className="group/btn inline-flex gap-2 items-center text-[#B6D680] border-2 border-[#B6D680] bg-white rounded-full px-6 py-3 font-semibold hover:bg-[#B6D680] hover:text-white transition-all duration-300">
                  Read More
                  <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </article>

            <article className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden">
              <div className="relative">
                <Image 
                  src="/hero2.png" 
                  alt="Scholarship Opportunities for International Students" 
                  width={400} 
                  height={250} 
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#B6D680] text-white text-sm font-semibold rounded-full">
                    Scholarships
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#B6D680] transition-colors duration-300 leading-tight">
                  Scholarship Opportunities for International Students
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                  Discover the best scholarship opportunities available for international students in 2024.
                </p>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-2">
                    <FaUser className="w-4 h-4" />
                    <span>Emily Chen</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt className="w-4 h-4" />
                    <span>Jan 10, 2024</span>
                  </div>
                  <span>10 min read</span>
                </div>
                
                <Link href="/articles/3" className="group/btn inline-flex gap-2 items-center text-[#B6D680] border-2 border-[#B6D680] bg-white rounded-full px-6 py-3 font-semibold hover:bg-[#B6D680] hover:text-white transition-all duration-300">
                  Read More
                  <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </article>

            <article className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden">
              <div className="relative">
                <Image 
                  src="/hero2.png" 
                  alt="Visa Application Process: Step-by-Step Guide" 
                  width={400} 
                  height={250} 
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#B6D680] text-white text-sm font-semibold rounded-full">
                    Visa Support
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#B6D680] transition-colors duration-300 leading-tight">
                  Visa Application Process: Step-by-Step Guide
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                  A comprehensive guide to navigating the student visa application process for different countries.
                </p>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-2">
                    <FaUser className="w-4 h-4" />
                    <span>Dr. Sarah Johnson</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt className="w-4 h-4" />
                    <span>Jan 8, 2024</span>
                  </div>
                  <span>12 min read</span>
                </div>
                
                <Link href="/articles/4" className="group/btn inline-flex gap-2 items-center text-[#B6D680] border-2 border-[#B6D680] bg-white rounded-full px-6 py-3 font-semibold hover:bg-[#B6D680] hover:text-white transition-all duration-300">
                  Read More
                  <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </div>
    </main>
  );
}
