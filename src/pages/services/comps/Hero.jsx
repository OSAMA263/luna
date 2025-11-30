import Btn from "@/components/Btn";
import HeroPage from "@/components/HeroPage";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import ShowInView from "@/components/ShowInView";
import { Link } from "react-router-dom";

export default function Hero({ serviceData }) {
  return (
    <section id="service-hero">
      <HeroPage className={"px-2"}>
        <Layout className="lg:grid flex flex-col grid-cols-2 gap-16 md:pb-20 pb-6">
          {/* title and btn link */}
          <div className="space-y-6">
            <SectionTitle>{serviceData.title}</SectionTitle>
            <ShowInView i={1}>
              <p>
                Conversion-focused websites are built for speed, trust, and lead
                generation.
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
              className="rounded-3xl w-full max-lg:h-[40vh] object-cover"
              src={serviceData.service_bg}
              alt={serviceData.title}
            />
          </ShowInView>
        </Layout>
      </HeroPage>
    </section>
  );
}
