import Image from "next/image";

const cards = [
    {
        title: "Hawthrone International University",
        description: "A globally recognized institution specializing in business and technology programs with a strong emphasis on entrepreneurship.",
        icon: "/l1.svg",
        gradient: "from-blue-500 to-blue-600"
    },
    {
        title: "Summit Heights University",
        description: "A tech-driven university with a reputation for nurturing the next generation of startup founders and venture capitalists.",
        icon: "/l2.svg",
        gradient: "from-green-500 to-green-600"
    },
    {
        title: "Celestia Global University",
        description: "A leading destination for international students, offering multilingual programs in diplomacy, business, and cultural studies.",
        icon: "/l3.svg",
        gradient: "from-purple-500 to-purple-600"
    },
    {
        title: "Northbridge University",
        description: "A prestigious Ivy League-style university offering world-class law and medical programs that offers nearly everything.",
        icon: "/l4.svg",
        gradient: "from-orange-500 to-orange-600"
    },
    {
        title: "Everhart School of Engineering & Design",
        description: "Famous for its hands-on approach to engineering education, producing top-tier architects and product designers.",
        icon: "/l5.svg",
        gradient: "from-red-500 to-red-600"
    },
    {
        title: "Sablewood University",
        description: "A renowned creative arts and media school known for producing award-winning filmmakers, writers, and musicians.",
        icon: "/l6.svg",
        gradient: "from-indigo-500 to-indigo-600"
    },
]

export default function Hero6() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white">
     <div className="flex flex-col gap-6 items-center justify-center text-center mb-16 sm:mb-20 pt-12 sm:pt-16 md:pt-20 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 animate-fadeInUp">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
          Our <span className="gradient-text">Partners</span>
        </h1>
        <p className="text-gray-600 font-medium text-lg sm:text-xl lg:text-2xl max-w-4xl leading-relaxed">
          Trusted collaborations with top universities.
        </p>
     </div>
     <div className="flex justify-center items-center pb-12 sm:pb-16 md:pb-20 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-6xl">
        {cards.map((card, index) => {
          return (
            <div key={index} className="group flex flex-col items-start justify-start border-2 rounded-2xl border-gray-100 h-80 sm:h-96 relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white">
              <div className="relative z-10 p-6 w-full h-full flex flex-col">
                <div className={`w-20 h-20 bg-gradient-to-r ${card.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Image className="w-12 h-12" src={card.icon} alt={card.title} width={48} height={48} />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300 leading-tight">
                  {card.title}
                </h2>
                <p className="text-gray-600 font-medium text-sm sm:text-base leading-relaxed flex-grow">
                  {card.description}
                </p>
              </div>
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
            </div>
          )
        })}
      </div>
     </div>
    </div>
  );
}