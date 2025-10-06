import Image from "next/image";


const cards = [

    {
        title: "Hawthrone International Yniversity",
        description: "A globally recognized institution specializing in business and technology programs with a strong emphasis on entrepreneurship.",
        icon: "/l1.svg"
    },
    {
        title: "Summit Heights University",
        description: "A tech-driven university with a reputation for nurturing the next generation of startup founders and venture capitalists.",
        icon: "/l2.svg"
    },
    
    {
        title: "Celestia Global University",
        description: "A leading destination for international students, offering multilingual programs in diplomacy, business, and cultural studies.",
        icon: "/l3.svg"
    },
    
    {
        title: "Northbridge University",
        description: "A prestigious Ivy League-style university offering world-class law and medical programs that offers nearly everything.",
        icon: "/l4.svg"
    },
    
    
    {
        title: "Everhart School of Engineering & Design",
        description: "Famous for its hands-on approach to engineering education, producing top-tier architects and product designers.",
        icon: "/l5.svg"
    },
    {
        title: "Sablewood University",
        description: "A renowned creative arts and media school known for producing award-winning filmmakers, writers, and musicians.",
        icon: "/l6.svg"
    },
    
    
]

export default function Hero5() {
  return (
    <div>
     <div className="flex flex-col gap-4 items-center justify-center text-center mb-12 sm:mb-16 pt-12 sm:pt-16 md:pt-20">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Our Partners</h1>
        <h4 className="text-gray-500 font-semibold text-sm sm:text-base lg:text-lg max-w-3xl">Trusted collaborations with top universities.</h4>
     </div>
<div className="flex justify-center items-center pb-12 sm:pb-16 md:pb-20">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-350">
        {cards.map((card, index) => {
          return (
            <div key={index} className="flex flex-col items-start justify-start border-2 rounded-xl border-gray-100 h-65 sm:h-65 relative overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <Image className="absolute top-4 left-4 bg-gray-50 rounded-2xl p-2" src={card.icon} alt={card.title} width={70} height={70} />
              <h2 className="text-lg sm:text-lg lg:text-xl font-bold text-start absolute top-22 left-4 z-10">{card.title}</h2>
              <p className="text-gray-500 text-sm sm:text-base text-start absolute top-55 sm:top-35 left-4 right-4 z-10">{card.description}</p>

            </div>
          )
        })}
      </div>
</div>
    </div>
  );
}