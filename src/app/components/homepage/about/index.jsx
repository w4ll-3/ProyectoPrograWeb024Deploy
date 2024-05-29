import { personalData } from "../../../../../utils/data/personal-data";
import Image from "next/image";

function AboutSection() {
  return (
    
    <div id="about" className="my-12 lg:my-16 relative">

      <div className="flex justify-center my-5 lg:py-4">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Sobre Mi
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        
        <div className="order-2 lg:order-1">
          <p className="text-gray-200 text-base lg:text-lg">
            {personalData.description}
          </p>
        </div>
        
        <div className="flex justify-center items-center order-1 lg:order-2">
          <Image
            src={personalData.profile}
            width={400}
            height={400}
            alt="w4ll-3"
            className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
          />
        </div>

      </div>
    </div>
  );
};

export default AboutSection;