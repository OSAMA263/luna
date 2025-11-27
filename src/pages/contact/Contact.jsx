import PageWrapper from "@/components/shared/PageWrapper";
import Hero from "./comps/Hero";
import FAQ from "./comps/FAQ";

export default function Contact() {
  return (
    <PageWrapper title={"Contact us"}>
      <Hero />
      <FAQ />
    </PageWrapper>
  );
}
