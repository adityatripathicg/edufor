import Image from "next/image";

const cards = [
  {
    title: "Trust",
    description: "Honest guidance for a secure and truly confident journey.",
    icon: "/1.png",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    title: "Excellence",
    description: "Dedicated to top-tier support and outstanding academic results.",
    icon: "/2.png",
    gradient: "from-green-500 to-green-600"
  },
  {
    title: "Commitment",
    description: "Focused on your success, every step of the way forward.",
    icon: "/3.png",
    gradient: "from-purple-500 to-purple-600"
  },
  {
    title: "Global Outlook",
    description: "Connecting you to endless learning opportunities.",
    icon: "/4.png",
    gradient: "from-orange-500 to-orange-600"
  }
];

export default function Hero3() {
  return (
    <div className="flex flex-col gap-12 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-12 sm:py-16 md:py-20 items-center justify-center bg-white">
      <div className="flex flex-col gap-6 items-center justify-center text-center animate-fadeInUp">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
          Our <span className="gradient-text">Values</span>
        </h1>
        <p className="text-gray-600 font-medium text-lg sm:text-xl lg:text-2xl max-w-4xl leading-relaxed">
          Trust, excellence, commitment, and a global outlook define our approach.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 w-full max-w-7xl">
        {cards.map((card, index) => {
          return (
            <div key={index} className="group flex flex-col items-start justify-start border-2 rounded-2xl border-gray-100 h-80 sm:h-96 relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white">
              <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-white/70 z-10 group-hover:from-white/80 group-hover:to-white/60 transition-all duration-300"></div>
              <h2 className={`text-xl sm:text-2xl lg:text-3xl font-bold text-start absolute top-6 left-6 z-20 bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent`}>
                {card.title}
              </h2>
              <p className="text-gray-600 font-medium text-sm sm:text-base text-start absolute top-16 sm:top-20 left-6 right-6 z-20 leading-relaxed">
                {card.description}
              </p>
              <Image 
                className="w-full h-full absolute bottom-0 object-cover group-hover:scale-110 transition-transform duration-700" 
                src={card.icon} 
                alt={card.title} 
                width={500} 
                height={500} 
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${card.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-5`}></div>
            </div>
          )
        })}
      </div>
    </div>
  );
}