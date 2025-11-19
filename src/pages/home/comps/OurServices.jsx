import Btn from "@/components/Btn";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import { home } from "@/data/accordion";
import { Accordion } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function OurServices() {
  const [service, setService] = useState(home[0].title);

  const serviceData = home.find((item) => item.title == service) ?? null;
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
        <Btn variant="outline" className={"rounded-xl ms-auto py-4 px-8"}>
          <Link to="/contact">
            <span>Get started</span>
          </Link>
        </Btn>
      </div>

      {/* accordion */}
      <div className="grid grid-cols-2 gap-4">
        <Accordion.Root
          variant={"plain"}
          defaultValue={service}
          onValueChange={(e) => setService(e.value)}
          className="space-y-2"
        >
          <AccordionItems home={home} />
        </Accordion.Root>

        {/* services images */}
        {serviceData?.service_bg && (
          <div className="h-full rounded-2xl relative overflow-hidden">
            <img
              src={serviceData.service_bg}
              className="h-full w-full object-cover"
              alt={serviceData.service_bg}
            />
            <img
              className="absolute z-10 size-[75%] rounded-xl top-1/2 left-1/2 -translate-1/2 object-cover"
              src={serviceData.service_img}
              alt={serviceData.service_img}
            />
          </div>
        )}
      </div>
    </Layout>
  );
}

function AccordionItems({ home }) {
  return home.map(({ title, desc, icon: Icon, list }) => (
    <Accordion.Item
      className="bg-Dark-green rounded-2xl"
      value={title}
      key={title}
    >
      <Accordion.ItemTrigger className="py-5! px-8 flex flex-col items-start! cursor-pointer">
        <span className="text-xl text-Lime flex items-center gap-2">
          <Icon className="text-[#eeeeee] text-3xl!" />
          {title}
        </span>
        <Accordion.ItemContent>
          <Accordion.ItemBody className="text-Gray space-y-14">
            <p>{desc}</p>
            <div className="flex items-center gap-3">
              {list.map((type) => (
                <span
                  key={type}
                  className="border border-Olive rounded-md text-sm px-2 py-1"
                >
                  {type}
                </span>
              ))}
            </div>
          </Accordion.ItemBody>
        </Accordion.ItemContent>
      </Accordion.ItemTrigger>
    </Accordion.Item>
  ));
}
