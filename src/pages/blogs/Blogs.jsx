import HeroPage from "@/components/HeroPage";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import PageWrapper from "@/components/shared/PageWrapper";
import ShowInView from "@/components/ShowInView";
import { home_blogs } from "@/data/slider";
import BlogCard from "./BlogCard";

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
        {home_blogs.map((data, i) => (
          <BlogCard key={data.title} {...{ ...data, i }} />
        ))}
      </Layout>
    </PageWrapper>
  );
}
