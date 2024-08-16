import { PORTFOLIO_PERSON_NAME } from "@/constants/Portfolio";

const HeroSection = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      Hero Section
      <div>
        <h1>{PORTFOLIO_PERSON_NAME}</h1>
      </div>
    </div>
  );
};

export default HeroSection;
