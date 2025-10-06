import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import Hero3 from "./components/Hero3";
import Hero4 from "./components/Hero4";
import Hero5 from "./components/Hero5";
import Hero6 from "./components/Hero6";

export default function Home() {
  return (
    <>
     <Navbar />
    <div className="w-full h-240 bg-[url('/bghero.png')] bg-cover bg-center">
      <Hero /> 
    </div>
    <Hero2 />
    <Hero3 />
    <Hero4 />
    <Hero5 />
    <Hero6 />
    </>
  );
}
