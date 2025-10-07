import Image from "next/image";
import Link from "next/link";

export default function Hero8() {
  return (
    <footer className="bg-gradient-to-br from-gray-50 to-gray-100 border-t border-gray-200">
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-12 sm:py-16 md:py-20">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Image src="/logonav.svg" alt="EduFor Logo" width={140} height={90} className="w-32 sm:w-36 lg:w-40 h-auto mb-4" />
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-md">
                Empowering students to achieve their academic dreams with expert guidance, 
                personalized support, and seamless university application processes.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <Image src="/linkedin.svg" alt="LinkedIn" width={20} height={20} />
              </div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <Image src="/insta.svg" alt="Instagram" width={20} height={20} />
              </div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <Image src="/x.svg" alt="Twitter" width={20} height={20} />
              </div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <Image src="/yt.svg" alt="YouTube" width={20} height={20} />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-600 hover:text-[#B6D680] transition-colors duration-300 text-sm sm:text-base">About Us</Link></li>
              <li><Link href="/services" className="text-gray-600 hover:text-[#B6D680] transition-colors duration-300 text-sm sm:text-base">Our Services</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-[#B6D680] transition-colors duration-300 text-sm sm:text-base">Success Stories</Link></li>
              <li><Link href="/articles" className="text-gray-600 hover:text-[#B6D680] transition-colors duration-300 text-sm sm:text-base">Blog & Articles</Link></li>
              <li><Link href="/faq" className="text-gray-600 hover:text-[#B6D680] transition-colors duration-300 text-sm sm:text-base">FAQ</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services/university-placement" className="text-gray-600 hover:text-[#B6D680] transition-colors duration-300 text-sm sm:text-base">University Placement</Link></li>
              <li><Link href="/services/scholarships" className="text-gray-600 hover:text-[#B6D680] transition-colors duration-300 text-sm sm:text-base">Scholarship Assistance</Link></li>
              <li><Link href="/services/visa-support" className="text-gray-600 hover:text-[#B6D680] transition-colors duration-300 text-sm sm:text-base">Visa Support</Link></li>
              <li><Link href="/services/personal-statement" className="text-gray-600 hover:text-[#B6D680] transition-colors duration-300 text-sm sm:text-base">Personal Statement</Link></li>
              <li><Link href="/services/career-counseling" className="text-gray-600 hover:text-[#B6D680] transition-colors duration-300 text-sm sm:text-base">Career Counseling</Link></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 mb-12 shadow-lg">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Stay Updated</h3>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              Get the latest updates on university applications, scholarships, and study abroad opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#B6D680] focus:border-transparent text-sm sm:text-base"
              />
              <button className="bg-[#B6D680] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#A5C96B] transition-colors duration-300 text-sm sm:text-base">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-gray-600 text-sm sm:text-base">
              © 2024 EduFor. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm sm:text-base">
              <a href="#" className="text-gray-600 hover:text-[#B6D680] transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-[#B6D680] transition-colors duration-300">Terms of Service</a>
              <Link href="/contact" className="text-gray-600 hover:text-[#B6D680] transition-colors duration-300">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
