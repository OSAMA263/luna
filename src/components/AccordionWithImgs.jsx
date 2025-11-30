import { Accordion } from "@chakra-ui/react";
import { useState } from "react";
import ShowInView from "./ShowInView";
import AccordionItem from "./AccordionItem";

export default function AccordionWithImgs({ data, className }) {
  const [service, setService] = useState(data[0].title);

  const serviceData = data.find((item) => item.title == service) ?? null;

  return (
    <div className={`grid lg:grid-cols-2 gap-4 ${className ?? ""}`}>
      <Accordion.Root
        variant={"plain"}
        multiple={false}
        defaultValue={service}
        onValueChange={(e) => setService(e.value)}
        className="space-y-2"
      >
        <AccordionItems data={data} />
      </Accordion.Root>

      {/* services images */}
      <ShowInView className="lg:max-h-full max-h-[50vh]">
        {serviceData?.service_bg && (
          <div className="h-full rounded-2xl relative overflow-hidden">
            <img
              src={serviceData.service_bg}
              className="h-full w-full object-cover"
              alt={serviceData.service_bg}
              loading="lazy"
            />
            {serviceData.service_img && (
              <img
                className="absolute max-xl:hidden z-10 size-[65%] rounded-xl top-1/2 left-1/2 -translate-1/2 object-cover"
                src={serviceData.service_img}
                alt={serviceData.service_img}
                loading="lazy"
              />
            )}
          </div>
        )}
      </ShowInView>
    </div>
  );
}

function AccordionItems({ data }) {
  return data.map(({ title, desc, icon: Icon, list }) => (
    <AccordionItem
      className="bg-Dark-green rounded-2xl"
      key={title}
      title={title}
      Icon={Icon}
    >
      <>
        <p>{desc}</p>
        <div className="flex items-center gap-3 flex-wrap">
          {list?.map((type) => (
            <span
              key={type}
              className="border border-Olive rounded-md text-sm px-2 py-1"
            >
              {type}
            </span>
          ))}
        </div>
      </>
    </AccordionItem>
  ));
}
