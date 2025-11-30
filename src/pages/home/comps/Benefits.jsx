import Card from "@/components/Card";
import Layout from "@/components/Layout";
import Review from "@/components/Review";
import SectionTitle from "@/components/SectionTitle";
import ShowInView from "@/components/ShowInView";
import { GiTireIronCross, GiOrbital, GiSelect } from "react-icons/gi";

export default function Benefits() {
  return (
    <Layout as={"section"} id="benefits" className="space-y-16">
      <div className="space-y-4 text-center mb-20 w-[70%] mx-auto">
        <SectionTitle>What makes us the right partner</SectionTitle>
        <ShowInView>
          <p className="text-xl text-Gray">
            Choosing the right consulting partner can define the future of your
            business. At Corpr, we don’t just advise — we collaborate, innovate,
            and deliver.
          </p>
        </ShowInView>
      </div>

      {/* three cards */}
      <div className="grid lg:grid-cols-3 gap-4">
        {benefitsCards.map(({ icon: Icon, title, text }, i) => (
          <ShowInView key={title} y={0} offset={0.7} i={i}>
            <Card className={"space-y-8 2xl:p-6 lg:p-4 h-full"}>
              <div className="flex items-center gap-4 font-semibold text-Lime">
                <Icon className="text-4xl" />
                <h2 className="text-xl">{title}</h2>
              </div>
              <p className="text-Gray text-base">{text}</p>
            </Card>
          </ShowInView>
        ))}
      </div>

      {/* review */}
      <Review />
    </Layout>
  );
}

const benefitsCards = [
  {
    icon: GiOrbital,
    title: "B2B expertise that matters",
    text: "Deep expertise in navigating B2B challenges and opportunities.",
  },
  {
    icon: GiSelect,
    title: "End-to-End consulting",
    text: "From planning to execution, we cover every step.",
  },
  {
    icon: GiTireIronCross,
    title: "Data-Driven decisions",
    text: "We use data and experience to drive smart business moves.",
  },
];
