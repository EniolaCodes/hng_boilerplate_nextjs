import Image from "next/image";

import CustomButton from "~/components/common/Button/button";
import { blogHero } from "../../../../public/images/blogPage/utils";

const HeroSection: React.FC = () => {
  return (
    <div className="relative h-[80vh] text-white">
      <Image
        src={blogHero}
        fill
        className="absolute inset-0 object-center"
        alt="Hero Background"
      />
      <div className="relative z-10 flex h-full flex-col items-start justify-end px-[5%] pb-16 text-center md:text-left">
        <div className="w-full py-5 md:w-[50%]">
          <h1 className="mb-4 text-left text-4xl font-bold leading-snug md:leading-[4.6rem] 2xl:text-6xl">
            Unlock Industry Insights: Get Essential Tips & Boilerplate Hacks
          </h1>
        </div>
        <CustomButton
          variant="primary"
          size="lg"
          ariaLabel="Read More"
          href="#"
        >
          Read More
        </CustomButton>
      </div>
    </div>
  );
};

export default HeroSection;
