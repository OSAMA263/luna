import Card from "@/components/Card";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import ShowInView from "@/components/ShowInView";

export default function Strategy() {
  return (
    <Layout className={"space-y-20!"} as="section" id="our-strategy">
      <div className="space-y-3">
        <ShowInView>
          <SectionTitle>Principles that shape our strategy</SectionTitle>
          <p className="text-Gray">
            At the heart of our consulting practice lies a set of core values
            that guide how we think, work, and lead.
          </p>
        </ShowInView>
      </div>

      {/* steps cards */}
      <ul className="grid grid-cols-6 gap-2 marker:bg-Lime list-disc">
        {strategy_steps.map(({ title, desc }, i) => {
          const lastRow = strategy_steps.length % 3;
          return (
            <ShowInView
              className={i > lastRow ? "col-span-3" : "col-span-2"}
              key={i}
              i={i - 1}
            >
              <Card className={"space-y-2 font-semibold text-base! h-full"}>
                <li className="text-Lime">{title}</li>
                <p className="text-Gray">{desc}</p>
              </Card>
            </ShowInView>
          );
        })}
      </ul>
    </Layout>
  );
}

const strategy_steps = [
  {
    title: "Integrity first",
    desc: "We operate with honesty and transparency.",
  },
  {
    title: "Client-Centric",
    desc: "Your success is our priority.",
  },
  {
    title: "Strategic thinking",
    desc: "Every decision is backed by data and insights.",
  },
  {
    title: "Collaboration",
    desc: "We believe in working together, not just consulting.",
  },
  {
    title: "Innovation",
    desc: "We challenge norms to find smarter solutions.",
  },
];
