import PageWrapper from "@/components/shared/PageWrapper";
import AboutUs from "./comps/AboutUs";
import Hero from "./comps/Hero";
import Industries from "./comps/Industries";
import { lazy } from "react";

export default function Home() {
  return (
    <PageWrapper title="Luna - base" description="">
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

const HistorySteps = lazy(() => import("./comps/HistorySteps"));
const BlogsSlider = lazy(() => import("./comps/BlogsSlider"));
const Achievements = lazy(() => import("./comps/Achievements"));
const OurServices = lazy(() => import("./comps/OurServices"));
const Contact = lazy(() => import("./comps/Contact"));
const Benefits = lazy(() => import("./comps/Benefits"));