import PageWrapper from "@/components/shared/PageWrapper";
import Hero from "./comps/Hero";
import FAQ from "./comps/FAQ";

export default function Contact() {
  return (
    <PageWrapper
      title={"Contact us"}
      description="Talk to B2bizz — book a discovery call to discuss your B2B growth challenges and receive a tailored action plan."
    >
      <Hero />
      <FAQ />
    </PageWrapper>
  );
}
