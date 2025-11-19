import Btn from "@/components/Btn";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import { useState } from "react";
import { Link } from "react-router-dom";
import Graph from "@/assets/steps-graph.svg";
import { motion } from "framer-motion";
import { FaFan } from "react-icons/fa";
import { TbCarFanFilled } from "react-icons/tb";
import { PiFanFill } from "react-icons/pi";

export default function HistorySteps() {
  const [step, setStep] = useState(0);

  return (
    <Layout className={"flex gap-4"} id="our-history" as="section">
      <div className="flex-1 space-y-4">
        <SectionTitle>Our method for strategic B2B growth</SectionTitle>
        <p className="text-Gray">
          Our streamlined 3-step approach ensures your business gets a focused
          strategy, practical solutions, and measurable outcomes.
        </p>
        <Btn variant="solid" className={"text-lg"}>
          <Link to="/services">
            <span>Explore our services</span>
          </Link>
        </Btn>
      </div>

      {/* setps graphs */}
      <div className="flex-2 flex flex-col justify-between gap-40">
        {/* steps indecator */}
        <StepIndecator {...{ step, setStep }} />
        {/* graphs */}
        <GraphsTimeLine step={step} />
      </div>
    </Layout>
  );
}

function StepIndecator({ step, setStep }) {
  return (
    <div className="rounded-full w-fit p-2 gap-1 bg-Dark-green flex items-center">
      {steps.map(({ title }, i) => (
        <span
          onClick={() => setStep(i)}
          className="relative cursor-pointer text-Gray text-gray text-sm rounded-full px-12 py-3 bg-black"
          key={title}
        >
          <span className="z-10 relative">Step {i + 1}</span>
          {i == step && (
            <motion.div
              layoutId="active"
              className="size-full rounded-full absolute bg-Olive z-1 top-0 left-0"
            />
          )}
        </span>
      ))}
    </div>
  );
}

function GraphsTimeLine({ step }) {
  return (
    <div className="bg-Dark-green relative">
      <div className="absolute size-full grid grid-cols-3 [&_div]:transition-all [&_div]:duration-300">
        {steps.map(({ title, height, icon: Icon }, i) => (
          <div
            className={`size-full flex items-end relative ${step == i ? "bg-Lime" : "bg-Dark-green"}`}
            key={i}
          >
            <div
              className={`absolute z-10 w-full border-r-2 border-Lime/35 border-dashed ${step == i ? "brightness-100" : "brightness-50"}`}
              style={{ height }}
            >
              <div
                className={`flex items-center gap-x-5 border-2 text-Lime rounded-lg border-Lime/35 rounded-br-none px-4 py-2 bg-black w-[85%] ms-auto translate-x-1 -translate-y-1 ${step == i ? "brightness-100" : "brightness-50"}`}
              >
                <Icon className="text-3xl" />
                {title}
              </div>
            </div>
          </div>
        ))}
      </div>
      <img src={Graph} alt="graphs" className="relative" />
    </div>
  );
}

const steps = [
  { title: "Understand your business", icon: FaFan, height: "70%" },
  { title: "Build the right strategy", icon: TbCarFanFilled, height: "110%" },
  { title: "Execute & deliver results", icon: PiFanFill, height: "150%" },
];
