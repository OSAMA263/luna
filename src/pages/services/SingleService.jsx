import Btn from "@/components/Btn";
import Layout from "@/components/Layout";
import Review from "@/components/Review";
import SectionTitle from "@/components/SectionTitle";
import PageWrapper from "@/components/shared/PageWrapper";
import { home_service } from "@/data/accordion";
import { Link, useParams } from "react-router-dom";
import BlogCard from "../blogs/BlogCard";
import { BookACall } from "../about/About";
import ServiceDetail from "./comps/ServiceDetail";
import Hero from "./comps/Hero";
import ServicePlansSection from "./comps/ServicePlansSection";

export default function SingleService() {
  const { id } = useParams();

  const serviceData = home_service.find(({ url }) => url == id);

  return (
    <PageWrapper
      key={id}
      title={serviceData.title}
      className="[&_p]:text-Gray [&_p]:font-smeibold"
    >
      <Hero serviceData={serviceData} />

      {/* more details about the service */}
      <ServiceDetail serviceData={serviceData} />

      {/* the service prising */}
      <ServicePlansSection />

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
        <div className="grid lg:grid-cols-3 gap-4">
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
