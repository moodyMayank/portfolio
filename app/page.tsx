import AboutSection from "@/components/common/AboutSection";
import Experience from "@/components/common/Experience";
import HeroSection from "@/components/common/heroSection";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import Technologies from "@/components/common/Technologies";

export default function Home() {
  return (
    <div className="text-white">
      <MaxWidthWrapper>
        <HeroSection />
        {/* <AboutSection /> */}
        <Technologies />
        <Experience />
      </MaxWidthWrapper>
    </div>
  );
}
