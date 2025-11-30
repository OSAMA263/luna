import AutoSlider from "@/components/AutoSlider";
import Btn from "@/components/Btn";
import Layout from "@/components/Layout";
import { home_sponsers } from "@/data/slider";
import { NavLink } from "react-router-dom";
import ZoomInImg from "@/components/ZoomInImg";
import SectionTitle from "@/components/SectionTitle";
import ShowInView from "@/components/ShowInView";

export default function AboutUs() {
  return (
    <>
      <Layout as={"section"} id="sponsers">
        <div className="space-y-10">
          <ShowInView>
            <p className="text-Gray text-center font-semibold text-lg">
              Trusted by fast-moving Corpo teams
            </p>
            <AutoSlider
              dir="rtl"
              spaceBetween={10}
              breakpoints={{
                1350: { slidesPerView: 6 },
              }}
              slidesPerView={4}
              array={home_sponsers}
              className="[&_img]:size-20 2xl:py-14 py-8 flex items-center justify-center rounded-2xl bg-[#0e100f]"
              shadowSides="from-black to-transparent w-32"
            />
          </ShowInView>
        </div>
      </Layout>

      {/* our stragegies steps */}
      <Layout
        as={"section"}
        id="strategies"
        className="flex max-lg:flex-col 2xl:gap-24 gap-10"
      >
        <div className="flex-[1.5] flex flex-col gap-y-20">
          <SectionTitle>
            Informed strategy, Operational strenght, and sustainable results.
          </SectionTitle>
          <ShowInView>
            <ZoomInImg
              loading="lazy"
              src={"home/about-img.webp"}
              alt="strategy placeholder"
            />
          </ShowInView>
        </div>

        {/* steps in lists */}
        <div className="flex-1 flex flex-col justify-between text-Gray font-semibold text-lg">
          <ShowInView>
            We specialize in empowering Corpo companies with results-driven
            consulting solutions tailored to modern business challenges.
          </ShowInView>
          <ul className="ps-6 2xl:text-lg list-disc divide-y divide-Gray/50 border-y border-Gray/50">
            {listSteps.map((step) => (
              <ShowInView key={step}>
                <li className="py-5">{step}</li>
              </ShowInView>
            ))}
          </ul>
          <Btn btnClass={"w-full text-center py-4"}>
            <NavLink to="/about">
              <span>More about us</span>
            </NavLink>
          </Btn>
        </div>
      </Layout>
    </>
  );
}

const listSteps = [
  "Deep experience across Corpo sectors",
  "Solutions aligned with your business goals",
  "Frameworks built for long-term success",
  "Working with you, not just for you",
];
