import Btn from "@/components/Btn";
import Card from "@/components/Card";
import ShowInView from "@/components/ShowInView";
import { AnimatePresence, motion } from "framer-motion";
import { IoFlowerSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function PricingPlan(props) {
  const { type, price, desc, btnText, benefits, planType } = props;

  return (
    <div className="space-y-10 font-semibold">
      {/* service details */}
      <Card className="border-none space-y-20 bg-Dark-green p-4">
        <div className="space-y-4">
          <ShowInView>
            <div className="text-Gray flex items-center gap-4">
              <IoFlowerSharp className="text-xl" />
              <span>{type}</span>
            </div>
            <h2 className="text-Lime text-2xl">
              $
              <AnimatePresence mode="wait">
                <motion.span
                  key={planType}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {price[planType].toLocaleString()}
                </motion.span>
              </AnimatePresence>
              <span className="text-sm!">/month</span>
            </h2>
            <p className="text-Gray">{desc}</p>
          </ShowInView>
        </div>
        <Btn btnClass="w-full text-center">
          <Link to="/contact">
            <span>{btnText}</span>
          </Link>
        </Btn>
      </Card>
      {/* service benefits */}
      <ul className="space-y-8 divide-y ms-6 divide-Gray list-disc marker:text-Gray text-Gray">
        {benefits.map((bene, i) => (
          <ShowInView key={i} i={i}>
            <li className="pb-4">{bene}</li>
          </ShowInView>
        ))}
      </ul>
    </div>
  );
}
