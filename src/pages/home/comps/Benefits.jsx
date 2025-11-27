import Card from "@/components/Card";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import ShowInView from "@/components/ShowInView";
import { GiTireIronCross, GiOrbital, GiSelect } from "react-icons/gi";

export default function Benefits() {
  return (
    <Layout as={"section"} id="benefits" className="space-y-6">
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
      <div className="grid grid-cols-3 gap-4">
        {benefitsCards.map(({ icon: Icon, title, text }, i) => (
          <ShowInView key={title} y={0} offset={0.7} i={i}>
            <Card className={"space-y-8"}>
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
      <div className="relative rounded-3xl overflow-hidden">
        <img
          src="home/review-bg-img.webp"
          className="object-cover w-full h-full brightness-60 absolute"
          alt="bg"
          loading="lazy"
        />

        <div className="flex items-start gap-8 py-20 w-[75%] mx-auto relative z-10">
          <img
            src="home/review-avatar.jpg"
            alt="reviewer"
            className="rounded-xl size-24"
            loading="lazy"
          />
          <div>
            <SectionTitle className={"text-2xl! mb-4"}>
              Working with Corpos was a game-changer for our B2B strategy. Their
              team didn’t just offer advice — they became an extension of our
              leadership. Their insights, professionalism, and tailored approach
              helped us unlock new growth and streamline our operations.
            </SectionTitle>
            <span className="text-Olive">McLovin</span>
          </div>
        </div>
      </div>
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
