import HeroPage from "@/components/HeroPage";
import Layout from "@/components/Layout";
import Review from "@/components/Review";
import SectionTitle from "@/components/SectionTitle";
import PageWrapper from "@/components/shared/PageWrapper";
import FAQ from "../contact/comps/FAQ";
import { home_service } from "@/data/accordion";
import { Link } from "react-router";
import Card from "@/components/Card";
import ShowInView from "@/components/ShowInView";

export default function Services() {
  return (
    <PageWrapper
      title="Services"
      description="Explore our B2B consulting services — go-to-market strategy, pricing, sales enablement, and implementation tailored to your industry."
    >
      <section id="hero-title">
        <HeroPage>
          <Layout as="h1" className={"flex items-center flex-col gap-5 text-center"}>
            <SectionTitle>Our services</SectionTitle>
            <ShowInView i={1}>
              <p className="font-semibold text-Gray mx-auto w-[75%]">
                Crafted digital solutions that drive results. Explore our full
                suite of services designed to elevate your brand and grow your
                business.
              </p>
            </ShowInView>
          </Layout>
        </HeroPage>
      </section>

      <FAQ />

      {/* services cards */}
      <Layout
        as="section"
        id="services-cards"
        className={"grid lg:grid-cols-3 sm:grid-cols-2 gap-4"}
      >
        {home_service.map(({ desc, title, service_bg, list, url }, i) => (
          <ShowInView className="size-full" key={title} i={i}>
            <Link to={"/services/" + url} className="rounded-3xl block h-full">
              <Card className="p-4! h-full flex flex-col gap-4 border-none bg-Dark-green hover:bg-Olive hover:[&_img]:scale-105 hover:[&_span]:bg-Dark-green">
                <div className="rounded-3xl overflow-hidden">
                  <img
                    src={service_bg}
                    alt={title}
                    className="size-full object-cover"
                  />
                </div>
                <h2 className="text-xl text-Lime">{title}</h2>
                <p className="text-Gray">{desc}</p>
                <div className="flex items-center gap-2 flex-wrap">
                  {list.map((item, j) => (
                    <span
                      className="rounded-md text-xs px-2 py-1 font-normal text-Gray bg-Olive"
                      key={j}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Card>
            </Link>
          </ShowInView>
        ))}
      </Layout>

      <Layout as="section" id="review">
        <Review />
      </Layout>
    </PageWrapper>
  );
}
