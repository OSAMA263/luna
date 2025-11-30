import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import { plans } from "@/data/planPrices";
import PricingPlan from "./PricingPlan";
import { useState } from "react";
import ShowInView from "@/components/ShowInView";

export default function ServicePlansSection() {
  const [planType, setPlanType] = useState("month");
  const btnPlans = ["month", "year"];

  return (
    <Layout as="section" id="service-pricing" className="space-y-20">
      <SectionTitle className={"text-center"}>
        The right consulting plan for your business
      </SectionTitle>

      {/* btn tabs here */}
      <ShowInView>
        <div className="flex gap-2 items-center justify-center bg-Dark-green w-fit mx-auto rounded-3xl p-2">
          {btnPlans.map((btnPlan) => (
            <BtnTab
              key={btnPlan}
              onClick={() => setPlanType(btnPlan)}
              {...{ btnPlan, planType }}
            />
          ))}
        </div>
      </ShowInView>

      {/* service plans */}
      <div className="grid lg:grid-cols-3 lg:gap-6 gap-16">
        {plans.map((plan) => (
          <PricingPlan key={plan.type} {...plan} planType={planType} />
        ))}
      </div>
    </Layout>
  );
}
// {planType, btnPlan, ...rest }
function BtnTab({ planType, btnPlan, ...rest }) {
  return (
    <button
      className={`capitalize cursor-pointer rounded-2xl px-4 py-1 text-Lime font-semibold ${planType == btnPlan && "bg-Olive"}`}
      {...rest}
    >
      {btnPlan == "year" ? (
        <>
          {btnPlan}{" "}
          <span className="bg-black rounded-3xl px-2 py-xp text-sm">
            save up to 30%
          </span>
        </>
      ) : (
        btnPlan
      )}
    </button>
  );
}
