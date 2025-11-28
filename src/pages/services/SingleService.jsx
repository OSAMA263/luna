import Btn from "@/components/Btn";
import HeroPage from "@/components/HeroPage";
import Layout from "@/components/Layout";
import Review from "@/components/Review";
import SectionTitle from "@/components/SectionTitle";
import PageWrapper from "@/components/shared/PageWrapper";
import ShowInView from "@/components/ShowInView";
import ZoomInImg from "@/components/ZoomInImg";
import { home_service } from "@/data/accordion";
import { Link, useParams } from "react-router-dom";
import BlogCard from "../blogs/BlogCard";
import { BookACall } from "../about/About";

export default function SingleService() {
  const { id } = useParams();
  const serviceData = home_service.find(({ url }) => url == id);

  return (
    <PageWrapper
      title={serviceData.title}
      className="[&_p]:text-Gray [&_p]:font-smeibold"
    >
      <section id="service-hero">
        <HeroPage>
          <Layout className="grid grid-cols-2 gap-10 pb-20">
            {/* title and btn link */}
            <div className="space-y-6">
              <SectionTitle>{serviceData.title}</SectionTitle>
              <ShowInView i={1}>
                <p>
                  Conversion-focused websites are built for speed, trust, and
                  lead generation.
                </p>
              </ShowInView>
              <Btn i={3}>
                <Link to={"/contact"}>
                  <span>Get Started</span>
                </Link>
              </Btn>
            </div>

            {/* right img */}
            <ShowInView>
              <img
                className="rounded-3xl w-full object-cover"
                src={serviceData.bg}
                alt={serviceData.title}
              />
            </ShowInView>
          </Layout>
        </HeroPage>
      </section>

      {/* more details about the service */}
      <Layout as="section" id="service-details" className="flex gap-8">
        {/* img */}
        {/* <ZoomInImg src={} alt={serviceData.title}/> */}

        <div className="space-y-4">
          <ShowInView>
            <p>{serviceData.desc}</p>
          </ShowInView>
          <ul className="list-disc marker:text-Gray">
            {serviceData.list.map((benefit, i) => (
              <ShowInView key={i} i={i}>
                <li>
                  <p>{benefit}</p>
                </li>
              </ShowInView>
            ))}
          </ul>
          <Btn>
            <Link to={"/contact"}>
              <span>Get Started</span>
            </Link>
          </Btn>
        </div>
      </Layout>

      {/* the service prising */}
      <Layout className="space-y-8">
        <SectionTitle>The right consulting plan for your business</SectionTitle>
        {/* btn tabs here */}
      </Layout>

      {/* review? */}
      <Layout>
        <Review />
      </Layout>

      {/* other services */}
      <Layout as="section" id="other-blogs" className="space-y-10">
        <div className="flex items-center justify-between">
          <SectionTitle>Other services</SectionTitle>
          <Btn>
            <Link to="/services">
              <span>Check all services</span>
            </Link>
          </Btn>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {home_service
            .filter((blog) => blog.url !== id)
            .slice(0, 3)
            .map((data, i) => (
              <BlogCard key={i} i={i + 1} other {...data} />
            ))}
        </div>
      </Layout>

      <BookACall />
    </PageWrapper>
  );
}
