import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import Hero3 from "./components/Hero3";
import Hero4 from "./components/Hero4";
import Hero5 from "./components/Hero5";
import Hero6 from "./components/Hero6";
import Hero7 from "./components/Hero7";
import Hero8 from "./components/Hero8";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="w-full min-h-screen bg-[url('/bghero.png')] bg-cover bg-center bg-no-repeat relative">
        <div className=""></div>
        <div className="relative z-10">
          <Hero /> 
        </div>
      </div>
      <Hero2 />
      <Hero3 />
      <Hero4 />
      <Hero5 />
      <Hero6 />
      <Hero7 />
      <Hero8 />
    </main>
  );
}
