import AccordionItem from "@/components/AccordionItem";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import ShowInView from "@/components/ShowInView";
import { Q_A } from "@/data/accordion";
import { Accordion } from "@chakra-ui/react";

export default function FAQ() {
  return (
    <Layout as={"section"} id="most-asked-questions" className={"space-y-16"}>
      {/* title */}
      <div className="space-y-3 md:w-[75%] ms-0">
        <SectionTitle>Frequently asked questions</SectionTitle>
        <ShowInView>
          <p className="text-Gray">
            Got questions about our B2B consulting services, process, or working
            together? Here are some of the most common things clients ask us,
            with clear, helpful answers.
          </p>
        </ShowInView>
      </div>

      {/* questions & image */}
      <div className="grid md:grid-cols-2 gap-2">
        {/* accordion questions and answers */}
        <Accordion.Root
          defaultValue={[Q_A[0].title]}
          variant={"plain"}
          className="space-y-2"
          multiple
        >
          {Q_A.map(({ title, desc }) => (
            <AccordionItem key={title} title={title}>
              <span>{desc}</span>
            </AccordionItem>
          ))}
        </Accordion.Root>

        {/* img */}
        <ShowInView className="max-md:hidden rounded-2xl overflow-hidden">
          <img
            src="contact/faqs-img.webp"
            className="size-full object-cover"
            alt="image"
          />
        </ShowInView>
      </div>
    </Layout>
  );
}
