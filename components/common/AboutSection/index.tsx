import { ABOUT_CONTENT } from "@/constants/Portfolio";
import Image from "next/image";

const AboutSection = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl ">
        About&nbsp;
        <span className="text-neutral-500">Me</span>
      </h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <Image
              src={"/about.jpg"}
              alt="about-image"
              width={200}
              height={200}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 ">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">{ABOUT_CONTENT}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
