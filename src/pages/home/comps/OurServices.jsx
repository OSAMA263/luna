import AccordionWithImgs from "@/components/AccordionWithImgs";
import Btn from "@/components/Btn";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import { home } from "@/data/accordion";
import { Link } from "react-router-dom";

export default function OurServices() {

  return (
    <Layout
      size={{ xl: "80%" }}
      as={"section"}
      id="our-services"
      className={"space-y-20"}
    >
      <div className="grid grid-cols-2 items-end">
        <SectionTitle>
          Expert services that move your business forward
        </SectionTitle>
        <Btn variant="outline" btnClass={"rounded-xl ms-auto py-4 px-8"}>
          <Link to="/contact">
            <span>Get started</span>
          </Link>
        </Btn>
      </div>

      {/* accordion */}
      <AccordionWithImgs data={home} />
    </Layout>
  );
}