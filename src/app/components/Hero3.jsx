import Image from "next/image";

const cards = [
  {
    title: "Trust",
    description: "Honest guidance for a secure and truly confident journey.",
    icon: "/1.png"
  },
  {
    title: "Excellence",
    description: "Dedicated to top-tier support and outstanding academic results.",
    icon: "/2.png"
  },
  {
    title: "Commitment",
    description: "Focused on your success, every step of the way forward.",
    icon: "/3.png"
  },
  {
    title: "Global Outlook",
    description: "Connecting you to endless learning opportunities.",
    icon: "/4.png"
  }
];


export default function Hero3() {
  return (
    <div className="flex flex-col gap-8 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-12 sm:py-16 md:py-20 items-center justify-center">
      <div className="flex flex-col gap-4 items-center justify-center text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Our Values</h1>
        <h4 className="text-gray-500 font-semibold text-sm sm:text-base lg:text-lg max-w-3xl">Trust, excellence, commitment, and a global outlook define our approach.</h4>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full max-w-6xl">
        {cards.map((card, index) => {
          return (
            <div key={index} className="flex flex-col items-start justify-start border-2 rounded-xl border-gray-100 h-80 sm:h-96 relative overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-start absolute top-4 left-4 z-10">{card.title}</h2>
              <p className="text-gray-500 font-semibold text-sm sm:text-base text-start absolute top-12 sm:top-14 left-4 right-4 z-10">{card.description}</p>
              <Image className="w-full h-full absolute bottom-0 object-cover" src={card.icon} alt={card.title} width={500} height={500} />
            </div>
          )
        })}
      </div>
    </div>
  );
}