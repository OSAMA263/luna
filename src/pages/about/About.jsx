import PageWrapper from "@/components/shared/PageWrapper";
import Hero from "./comps/Hero";
import Strategy from "./comps/Strategy";
import AccordionWithImgs from "@/components/AccordionWithImgs";
import { about } from "@/data/accordion";
import Layout from "@/components/Layout";
import AutoSlider from "@/components/AutoSlider";
import { home_sponsers } from "@/data/slider";
import Card from "@/components/Card";
import SectionTitle from "@/components/SectionTitle";
import Btn from "@/components/Btn";
import { Link } from "react-router-dom";
import ShowInView from "@/components/ShowInView";

export default function About() {
  return (
    <PageWrapper title="About">
      <Hero />
      <Strategy />

      {/* accordion with imgs changes */}
      <Layout>
        <AccordionWithImgs
          data={about}
          className={"[&>:nth-child(1)]:order-2!"}
        />
      </Layout>

      {/* auto slider logos */}
      <ShowInView>
        <Layout className={"flex items-center gap-8"}>
          <h2 className="text-Gray font-semibold">
            Trusted by Fast-Moving B2B Teams
          </h2>
          <AutoSlider
            array={home_sponsers}
            className="[&_img]:size-16"
            shadowSides="from-black to-transparent w-40"
          />
        </Layout>
      </ShowInView>

      {/* contact us big card */}
      <Layout size={{ xl: "60%" }}>
        <Card
          className={"flex py-20 px-28 items-center flex-col gap-6 text-center"}
        >
          <SectionTitle>
            Take the first step toward sustainable growth
          </SectionTitle>
          <ShowInView>
            <p className="text-Gray">
              Looking to scale your B2B business with clarity and confidence?
              Our consulting experts are ready to guide you every step of the
              way.
            </p>
          </ShowInView>
          <Btn>
            <Link to="/contact">
              <span>Book a free call</span>
            </Link>
          </Btn>
        </Card>
      </Layout>
    </PageWrapper>
  );
}
