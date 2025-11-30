import Btn from "@/components/Btn";
import HeroPage from "@/components/HeroPage";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import ShowInView from "@/components/ShowInView";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section id="hero">
      <HeroPage>
        <Layout size={{ xl: "80%" }} className={"space-y-16 pb-20"}>
          <div className="flex flex-col items-center gap-4">
            <SectionTitle i={1}>Get to know B2bizz B2B consulting</SectionTitle>
            <ShowInView i={2} y={40}>
              <p className="text-Gray font-semibold mx-auto text-center">
                We’re your long-term growth partners. Discover who we are and
                how we help B2B companies unlock their full potential.
              </p>
            </ShowInView>
            <Btn i={3}>
              <Link to="/services">
                <span>Explore our services</span>
              </Link>
            </Btn>
          </div>

          {/* imgs */}
          <div className="flex gap-2 items-center [&_img]:w-full">
            <ShowInView i={4} className="rounded-3xl overflow-hidden">
              <img className="max-md:hidden" src="about/about-img1.webp" alt="img-1" />
              <img  src="about/about-img2.webp" alt="img-2" />
              <img className="max-md:hidden" src="about/about-img3.webp" alt="img-3" />
            </ShowInView>
          </div>
        </Layout>
      </HeroPage>
    </section>
  );
}
