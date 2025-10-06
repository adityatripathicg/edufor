import Image from "next/image";


const cards = [

    {
        title: "University Placement",
        description: "We help students identify suitable universities based on their academic profile and career goals.",
        icon: "/@.svg"
    },
    {
        title: "Scholarships",
        description: "We help students identify suitable universities based on their academic profile and career goals.",
        icon: "/linkedin.svg"
    },
    
    {
        title: "Visa Support",
        description: "We help students identify suitable universities based on their academic profile and career goals.",
        icon: "/insta.svg"
    },
    
    {
        title: "Personal Statement",
        description: "We help students identify suitable universities based on their academic profile and career goals.",
        icon: "/x.svg"
    },
    
    
    {
        title: "Career Counseling",
        description: "We help students identify suitable universities based on their academic profile and career goals.",
        icon: "/yt.svg"
    },
    
    
]

export default function Hero5() {
  return (
    <div>
     <div className="flex flex-col gap-4 items-center justify-center text-center mb-12 sm:mb-16 pt-12 sm:pt-16 md:pt-20">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Our Services</h1>
        <h4 className="text-gray-500 font-semibold text-sm sm:text-base lg:text-lg max-w-3xl">Simplifying applications with tailored assistance.</h4>
     </div>
<div className="flex justify-center items-center pb-12 sm:pb-16 md:pb-20">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-350">
        {cards.map((card, index) => {
          return (
            <div key={index} className="flex flex-col items-start justify-start border-2 rounded-xl border-gray-100 h-65 sm:h-75 relative overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <Image className="absolute top-4 left-4 bg-gray-200 rounded-full p-2" src={card.icon} alt={card.title} width={40} height={40} />
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-start absolute top-22 left-4 z-10">{card.title}</h2>
              <p className="text-gray-500 font-semibold text-sm sm:text-base text-start absolute top-55 sm:top-35 left-4 right-4 z-10">{card.description}</p>
              <button className="text-black border-gray-50 border-2 bg-white rounded-full px-4 py-2 absolute bottom-4 left-4 z-10 flex gap-2 items-center">View Services <div className="">
                <Image src="/rightarrow.svg" alt="arrowright" width={20} height={20} />
              </div></button>
            </div>
          )
        })}
      </div>
</div>
    </div>
  );
}