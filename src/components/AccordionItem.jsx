import { Accordion } from "@chakra-ui/react";
import ShowInView from "./ShowInView";

export default function AccordionItem({ title, Icon, children }) {
  return (
    <ShowInView>
      <Accordion.Item className="bg-Dark-green rounded-2xl" value={title}>
        <Accordion.ItemTrigger className="py-5! px-8 flex flex-col items-start! cursor-pointer">
          <div className="flex items-center gap-4">
            {Icon && <Icon className="text-[#eeeeee] text-3xl!" />}
            <span className="text-xl text-Lime flex items-center gap-2">
              {title}
            </span>
          </div>
          <Accordion.ItemContent>
            <Accordion.ItemBody className="text-Gray space-y-14">
              {children}
            </Accordion.ItemBody>
          </Accordion.ItemContent>
        </Accordion.ItemTrigger>
      </Accordion.Item>
    </ShowInView>
  );
}
