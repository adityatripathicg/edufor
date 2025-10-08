import Navbar from "../components/Navbar";
import Image from "next/image";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowRight, FaClock, FaGlobe, FaUser, FaGraduationCap } from "react-icons/fa";

const contactInfo = [
  {
    icon: FaPhone,
    title: "Phone",
    details: "+994 (12) 345 67 89",
    subtitle: "Monday to Friday between 09:00 - 18:00",
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-pink-100"
  },
  {
    icon: FaEnvelope,
    title: "Email",
    details: "hey@edufor.com",
    subtitle: "We will reply within 24 hours",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-100"
  },
  {
    icon: FaMapMarkerAlt,
    title: "Address",
    details: "5 Yusuph Safarov, Bakı 1025, Azerbaijan",
    subtitle: "Visit us during business hours",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-100"
  }
];

const teamMembers = [
  {
    name: "Dr. Sarah Johnson",
    role: "Chief Education Officer",
    email: "sarah@edufor.com",
    phone: "+994 (12) 345 67 90",
    image: "AS"
  },
  {
    name: "Michael Rodriguez",
    role: "Head of University Relations",
    email: "michael@edufor.com",
    phone: "+994 (12) 345 67 91",
    image: "MR"
  },
  {
    name: "Emily Chen",
    role: "Scholarship Specialist",
    email: "emily@edufor.com",
    phone: "+994 (12) 345 67 92",
    image: "EC"
  }
];

const services = [
  "University Placement",
  "Scholarship Assistance",
  "Visa Support",
  "Personal Statement Writing",
  "Career Counseling",
  "Application Review"
];

export default function Contact() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="w-full min-h-screen bg-[url('/bghero.png')] bg-cover bg-center bg-no-repeat relative">
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-white/85"></div>
        <div className="relative z-10 flex flex-col justify-center items-center min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
          <div className="text-center max-w-6xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold pb-6 leading-tight">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-gray-600 font-medium text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto">
              Ready to start your university application journey? Contact us today for expert guidance and personalized support.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Contact <span className="gradient-text">Information</span>
            </h2>
            <p className="text-gray-600 font-medium text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
              Multiple ways to reach us - choose what works best for you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 text-center">
                <div className={`w-20 h-20 bg-gradient-to-r ${info.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <info.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{info.title}</h3>
                <p className="text-lg font-semibold text-gray-900 mb-2">{info.details}</p>
                <p className="text-gray-500 text-sm">{info.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form and Map */}
      <div className="py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-10 border border-gray-100">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Send Us a <span className="gradient-text">Message</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">First Name</label>
                    <input
                      type="text"
                      placeholder="John"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B6D680] focus:border-transparent transition-all duration-300 text-gray-700 placeholder-gray-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">Last Name</label>
                    <input
                      type="text"
                      placeholder="Smith"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B6D680] focus:border-transparent transition-all duration-300 text-gray-700 placeholder-gray-400"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Email Address</label>
                  <input
                    type="email"
                    placeholder="john.smith@example.com"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B6D680] focus:border-transparent transition-all duration-300 text-gray-700 placeholder-gray-400"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+994 12 345 67 89"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B6D680] focus:border-transparent transition-all duration-300 text-gray-700 placeholder-gray-400"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Service Interested In</label>
                  <div className="relative">
                    <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B6D680] focus:border-transparent transition-all duration-300 text-gray-700 appearance-none bg-white">
                      <option value="">Select a service...</option>
                      {services.map((service, index) => (
                        <option key={index} value={service.toLowerCase().replace(/\s+/g, '-')}>
                          {service}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your goals and how we can help you..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B6D680] focus:border-transparent transition-all duration-300 text-gray-700 placeholder-gray-400 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#B6D680] to-[#A5C96B] text-white py-4 px-6 rounded-xl font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 group"
                >
                  Send Message
                  <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Location</h3>
                <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center">
                  <div className="text-center">
                    <FaMapMarkerAlt className="w-12 h-12 text-[#B6D680] mx-auto mb-4" />
                    <p className="text-gray-600 font-medium">Interactive Map</p>
                    <p className="text-sm text-gray-500">5 Yusuph Safarov, Bakı 1025, Azerbaijan</p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Business Hours</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 font-medium">Monday - Friday</span>
                    <span className="text-gray-900 font-semibold">09:00 - 18:00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 font-medium">Saturday</span>
                    <span className="text-gray-900 font-semibold">10:00 - 16:00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 font-medium">Sunday</span>
                    <span className="text-gray-900 font-semibold">Closed</span>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-[#B6D680] to-[#A5C96B] rounded-2xl shadow-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Need Immediate Help?</h3>
                <p className="text-white/90 mb-6">
                  For urgent inquiries, call us directly or send us a WhatsApp message.
                </p>
                <div className="space-y-4">
                  <a href="tel:+994123456789" className="flex items-center gap-3 text-white hover:text-white/80 transition-colors duration-300">
                    <FaPhone className="w-5 h-5" />
                    <span className="font-semibold">+994 (12) 345 67 89</span>
                  </a>
                  <a href="mailto:hey@edufor.com" className="flex items-center gap-3 text-white hover:text-white/80 transition-colors duration-300">
                    <FaEnvelope className="w-5 h-5" />
                    <span className="font-semibold">hey@edufor.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-gray-600 font-medium text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
              Get to know the experts who will guide you through your university application journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-2xl">{member.image}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-[#B6D680] font-semibold mb-4">{member.role}</p>
                <div className="space-y-2">
                  <a href={`mailto:${member.email}`} className="flex items-center justify-center gap-2 text-gray-600 hover:text-[#B6D680] transition-colors duration-300">
                    <FaEnvelope className="w-4 h-4" />
                    <span className="text-sm">{member.email}</span>
                  </a>
                  <a href={`tel:${member.phone}`} className="flex items-center justify-center gap-2 text-gray-600 hover:text-[#B6D680] transition-colors duration-300">
                    <FaPhone className="w-4 h-4" />
                    <span className="text-sm">{member.phone}</span>
                  </a>
                </div>
              </div>
            ))}
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
            Don&apos;t wait - the sooner you start, the better your chances of success. Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+994123456789" className="group inline-flex gap-2 items-center justify-center text-white bg-gradient-to-r from-[#B6D680] to-[#A5C96B] rounded-full px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Call Us Now
              <FaPhone className="group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a href="#contact-form" className="group inline-flex gap-2 items-center justify-center bg-white border-2 border-gray-200 text-gray-700 rounded-full px-8 py-4 text-lg font-semibold shadow-md hover:shadow-lg hover:border-[#B6D680] hover:text-[#B6D680] transition-all duration-300">
              Send Message
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
