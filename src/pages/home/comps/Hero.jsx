import HeroPage from "@/components/HeroPage";
import vidPlaceholder from "@/assets/home/home-hero-placeholder.png";
import vid from "@/assets/home/home-hero-vid.mp4";
import AutoSlider from "@/components/AutoSlider";
import Layout from "@/components/Layout";
import { home_services } from "../../../data/slider";
import Btn from "@/components/Btn";
import { Link } from "react-router-dom";
import SectionTitle from "@/components/SectionTitle";

export default function Hero() {
  return (
    <section id="home-hero">
      <HeroPage className={"rounded-t-none p-3! m-0!"}>
        <div className="overflow-hidden relative rounded-4xl h-[85dvh] w-full flex">
          {/* bg video player */}
          <video
            src={vid}
            autoPlay
            loop
            muted
            poster={vidPlaceholder}
            className="w-full h-full object-cover absolute"
          />

          {/* text on the videpo */}
          <Layout className="mt-auto grid lg:grid-cols-2 gap-4 justify-between pb-20">
            <SectionTitle as={"h1"} className="2xl:text-6xl lg:text-5xl text-4xl">
              Built for Corpo, focused on results.
            </SectionTitle>

            {/* link btn */}
            <div className="flex lg:ms-auto mt-auto">
              <Btn i={2} btnClass="text-lg py-4 px-8 w-fit">
                <Link to="/services">
                  <span>Explore our services</span>
                </Link>
              </Btn>
            </div>
          </Layout>
        </div>

        {/* services auto sliding */}
        <AutoSlider
          array={home_services}
          breakpoints={{
            1350: { slidesPerView: 5 },
            900: { slidesPerView: 3 },
          }}
          className="py-5"
          spaceBetween={5}
        />
      </HeroPage>
    </section>
  );
}
