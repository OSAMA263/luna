import Card from "@/components/Card";
import HeroPage from "@/components/HeroPage";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import PageWrapper from "@/components/shared/PageWrapper";
import ShowInView from "@/components/ShowInView";
import { home_blogs } from "@/data/slider";
import { Link } from "react-router-dom";

export default function Blogs() {
  return (
    <PageWrapper title={"Blogs"}>
      <section id="blogs-hero">
        <HeroPage>
          <Layout className={"flex flex-col items-center text-center gap-6"}>
            <SectionTitle>Our blogs</SectionTitle>
            <ShowInView i={1}>
              <p className="text-Gray">
                Learn more about our adventures and most popular topics, new
                technologies that you can use in your project.
              </p>
            </ShowInView>
          </Layout>
        </HeroPage>
      </section>

      {/* blogs cards */}
      <Layout as="section" id="blogs-cards" className="grid grid-cols-3 gap-4">
        {home_blogs.map(({ type, date, title, desc, img, url }, i) => (
          <ShowInView
            className={`h-full  ${i == 0 && "col-span-2"}`}
            key={title}
            i={i}
          >
            <Link className={`rounded-3xl h-full block`}>
              <Card
                className={`p-4! h-full border-none hover:[&_img]:scale-105 bg-Dark-green hover:bg-Dark-green/60 gap-6 ${i == 0 ? "grid grid-cols-2" : "flex flex-col"}`}
              >
                <div className="rounded-3xl h-full overflow-hidden">
                  <img
                    src={img}
                    alt={title}
                    className="h-full object-cover"
                  />
                </div>

                {/* card information */}
                <div className="flex flex-col gap-4 justify-between h-full">
                  <div className="space-y-2">
                    <div className="flex items-center gap-4 text-Gray text-xs font-normal">
                      <span className="bg-black rounded-2xl px-2 py-px">
                        {type}
                      </span>
                      <span>{date}</span>
                    </div>
                    <h2 className="text-Lime text-xl font-semibold">{title}</h2>
                  </div>
                  <p className="text-Gray font-normal">{desc}</p>
                </div>
              </Card>
            </Link>
          </ShowInView>
        ))}
      </Layout>
    </PageWrapper>
  );
}
