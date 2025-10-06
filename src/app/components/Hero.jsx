import Image from "next/image";
import { CiCircleInfo } from "react-icons/ci";

export default function Hero() {
  return (
    <div className="flex-col gap-18 inline-flex py-45 pl-90"> 
       <div className="gap-2 items-center bg-white rounded-full inline-flex text-xs w-105">
        <div className="gap-2 items-center bg-[#B6D680] rounded-full px-4 py-2 inline-flex"> <CiCircleInfo /> Update</div>
        <div className="flex gap-2 text-sm">Applications for 2025-2026 term is now open!
            <Image src="/rightarrow.svg" alt="arrowright" width={20} height={20} />
        </div>
       </div>
       <div className="">
        <div className="text-6xl font-bold pb-5">We will help you to study <br /> at your dream University.</div>
        <div className="text-gray-500 font-semibold">From choosing the right university to acing your application, we’ve got you <br /> covered. Let’s make your dream a reality—stress-free and hassle-free! </div>
       </div>
       <div className="flex gap-4">
        <button className="flex gap-2 items-center text-white bg-black rounded-full px-4 py-2">View Services <Image className="text-white" src="/rightarrow.svg" alt="arrowright" width={20} height={20} /></button>
        <button className="flex gap-2 items-center bg-white rounded-full px-4 py-2">Contact us <Image src="/rightarrow.svg" alt="arrowright" width={20} height={20} /></button>
       </div>
    </div>
  );
}