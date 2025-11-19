import PageWrapper from "@/components/shared/PageWrapper";
import AboutUs from "./comps/AboutUs";
import Achievements from "./comps/Achievements";
import Benefits from "./comps/Benefits";
import BlogsSlider from "./comps/BlogsSlider";
import Hero from "./comps/Hero";
import HistorySteps from "./comps/HistorySteps";
import Industries from "./comps/Industries";
import OurServices from "./comps/OurServices";
import Contact from "./comps/Contact";

export default function Home() {
  return (
    <PageWrapper
      title="Corps - base"
      description=""
      className="bg-black space-y-52"
    >
      <Hero />
      <AboutUs />
      <Industries />
      <Benefits />
      <OurServices />
      <Achievements />
      <BlogsSlider />
      <HistorySteps />
      <Contact />
    </PageWrapper>
  );
}
