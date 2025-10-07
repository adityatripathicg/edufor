import Image from "next/image";

const cards = [
    {
        title: "University Placement",
        description: "We help students identify suitable universities based on their academic profile and career goals.",
        icon: "/@.svg",
        gradient: "from-blue-500 to-blue-600",
        bgGradient: "from-blue-50 to-blue-100"
    },
    {
        title: "Scholarships",
        description: "We help students identify suitable universities based on their academic profile and career goals.",
        icon: "/linkedin.svg",
        gradient: "from-green-500 to-green-600",
        bgGradient: "from-green-50 to-green-100"
    },
    {
        title: "Visa Support",
        description: "We help students identify suitable universities based on their academic profile and career goals.",
        icon: "/insta.svg",
        gradient: "from-purple-500 to-purple-600",
        bgGradient: "from-purple-50 to-purple-100"
    },
    {
        title: "Personal Statement",
        description: "We help students identify suitable universities based on their academic profile and career goals.",
        icon: "/x.svg",
        gradient: "from-orange-500 to-orange-600",
        bgGradient: "from-orange-50 to-orange-100"
    },
    {
        title: "Career Counseling",
        description: "We help students identify suitable universities based on their academic profile and career goals.",
        icon: "/yt.svg",
        gradient: "from-red-500 to-red-600",
        bgGradient: "from-red-50 to-red-100"
    },
]

export default function Hero5() {
  return (
    <div className="bg-white">
     <div className="flex flex-col gap-6 items-center justify-center text-center mb-16 sm:mb-20 pt-12 sm:pt-16 md:pt-20 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 animate-fadeInUp">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
          Our <span className="gradient-text">Services</span>
        </h1>
        <p className="text-gray-600 font-medium text-lg sm:text-xl lg:text-2xl max-w-4xl leading-relaxed">
          Simplifying applications with tailored assistance.
        </p>
     </div>
     <div className="flex justify-center items-center pb-12 sm:pb-16 md:pb-20 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-6xl">
        {cards.map((card, index) => {
          return (
            <div key={index} className="group flex flex-col items-start justify-start border-2 rounded-2xl border-gray-100 h-80 sm:h-96 relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white">
              <div className={`absolute inset-0 bg-gradient-to-br ${card.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              <div className="relative z-10 p-6 w-full h-full flex flex-col">
                <div className={`w-16 h-16 bg-gradient-to-r ${card.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Image className="w-8 h-8" src={card.icon} alt={card.title} width={32} height={32} />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                  {card.title}
                </h2>
                <p className="text-gray-600 font-medium text-sm sm:text-base leading-relaxed flex-grow mb-6">
                  {card.description}
                </p>
                <button className="group/btn flex gap-2 items-center justify-center text-gray-700 border-2 border-gray-200 bg-white rounded-full px-4 py-3 w-fit text-sm sm:text-base font-semibold hover:border-[#B6D680] hover:text-[#B6D680] transition-all duration-300">
                  View Services 
                  <Image src="/rightarrow.svg" alt="arrowright" width={16} height={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          )
        })}
      </div>
     </div>
    </div>
  );
}