import Btn from "@/components/Btn";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import ShowInView from "@/components/ShowInView";
import ZoomInImg from "@/components/ZoomInImg";
import { Link } from "react-router-dom";

export default function ServiceDetail({ serviceData }) {
  return (
    <Layout
      as="section"
      id="service-details"
      className="grid lg:grid-cols-2 gap-20"
    >
      {/* img */}
      <ZoomInImg
        src={"services/service-detail-img.webp"}
        alt={serviceData.title}
      />

      <div className="space-y-10 max-lg:-order-1!">
        <div className="space-y-6">
          <SectionTitle>{serviceData.title}</SectionTitle>
          <ShowInView>
            <p>{serviceData.desc}</p>
          </ShowInView>
        </div>
        <ul className="list-disc marker:text-Gray space-y-4 ms-6">
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
  );
}
