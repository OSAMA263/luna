import Layout from "@/components/Layout";
import EarthImg from "@/assets/home/earth-map.png";
import SectionTitle from "@/components/SectionTitle";
import ShowInView from "@/components/ShowInView";
export default function Achievements() {
  return (
    <Layout as="section" id="our-achievment">
      <div className="grid grid-cols-2 gap-10">
        <ShowInView>
          <img
            src={EarthImg}
            alt="our-impact-across-wolrd"
            className="w-[80%] object-cover"
          />
        </ShowInView>
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <SectionTitle>Proven performance, Measurable results</SectionTitle>
            <ShowInView>
              <p className="text-Gray">
                Our work is backed by measurable results. These numbers reflect
                the trust, success, and outcomes we've delivered for our B2B
                partners across industries and regions.
              </p>
            </ShowInView>
          </div>

          <div className="flex justify-between items-center">
            <div className="divide-y space-y-4 divide-Lime/30">
              <SectionTitle className={"pb-4"}>4X</SectionTitle>
              <ShowInView>
                <p className="text-Gray">
                  Average ROI on digital strategy projects
                </p>
              </ShowInView>
            </div>
            <div className="divide-y space-y-4 divide-Lime/30">
              <SectionTitle className={"pb-4"}>5</SectionTitle>
              <ShowInView>
                <p className="text-Gray">Countries served with B2B services</p>
              </ShowInView>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
