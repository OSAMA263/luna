import HeroPage from "@/components/HeroPage";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import PageWrapper from "@/components/shared/PageWrapper";
import ShowInView from "@/components/ShowInView";
import ZoomInImg from "@/components/ZoomInImg";
import { home_blogs } from "@/data/slider";
import { Link, useParams } from "react-router-dom";
import StaticContent from "./StaticContent";
import BlogCard from "./BlogCard";
import Btn from "@/components/Btn";

export default function SingleBlog() {
  const { id } = useParams();
  const blogData = home_blogs.find(({ url }) => url == id);

  return (
    <PageWrapper
      key={id}
      title={blogData.title}
      description="How to Build a Repeatable Go-to-Market — Key takeaways and practical steps for B2B teams to build repeatable GTM and scale faster."
    >
      <section id={blogData.title}>
        <HeroPage className={"px-2"}>
          <Layout className="flex flex-col items-center gap-8 text-center md:pb-20 pb-6">
            {/* data */}
            <div className="text-xs flex font-normal items-center gap-4">
              <ShowInView>
                <span className="text-Lime bg-black rounded-2xl px-2 py-px">
                  {blogData.type}
                </span>
                <span className="text-Gray">{blogData.date}</span>
              </ShowInView>
            </div>

            <SectionTitle as="h1">{blogData.title}</SectionTitle>
            <ShowInView i={1}>
              <p className="text-Lime font-semibold mx-auto w-[75%]">
                {blogData.desc}
              </p>
            </ShowInView>

            {/* img */}
            <ShowInView i={2}>
              <ZoomInImg src={blogData.img} alt={blogData.title} />
            </ShowInView>
          </Layout>
        </HeroPage>
      </section>

      <StaticContent />

      {/* other blogs */}

      <Layout as="section" id="other-blogs" className="space-y-10">
        <div className="flex items-center justify-between">
          <SectionTitle>Check other blogs</SectionTitle>
          <Btn>
            <Link to="/blogs">
              <span>See all blogs</span>
            </Link>
          </Btn>
        </div>
        <div className="grid lg:grid-cols-3 gap-4">
          {home_blogs
            .filter((blog) => blog.url !== id)
            .slice(0, 3)
            .map((data, i) => (
              <BlogCard key={i} i={i + 1} {...data} />
            ))}
        </div>
      </Layout>
    </PageWrapper>
  );
}
