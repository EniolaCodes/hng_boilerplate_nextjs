import Hero from "~/components/layouts/homepage/Hero";
import HowItWorks from "~/components/layouts/homepage/HowItWorks";
import PerfectFit from "~/components/layouts/homepage/PerfectFit";
import Testimonials from "~/components/layouts/homepage/Testimonials";
import UserSection from "~/components/layouts/homepage/UserSection";
import WaitListTabFeature from "~/components/common/waitlistTabFeature/Index";

export default function Home() {
  return (
    <>
      <Hero />
      <UserSection />
      <HowItWorks />
      <WaitListTabFeature />
      <Testimonials />
      <PerfectFit />
    </>
  );
}
