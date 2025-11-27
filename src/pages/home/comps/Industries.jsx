import AutoSlider from "@/components/AutoSlider";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import ShowInView from "@/components/ShowInView";
import SwiperControls from "@/components/SwiperControls";
import { Industrie } from "@/data/slider";

export default function Industries() {
  return (
    <section id="industire" className="space-y-20">
      <Layout className={"grid grid-cols-2"}>
        <SectionTitle>
          Accelerating Corpo growth across diverse industries
        </SectionTitle>

        {/* swiper controls */}
        <ShowInView>
          <div className="flex items-center justify-end gap-4">
            <SwiperControls id="prev-img" type="prev" />
            <SwiperControls id="next-img" type="next" />
          </div>
        </ShowInView>
      </Layout>
      {/* imgs swiper */}
      <ShowInView>
        <AutoSlider
          autoSlide={false}
          array={Industrie}
          slidesPerView={3.5}
          speed={600}
          spaceBetween={20}
          shadowSides="from-transparent"
          className="rounded-xl overflow-hidden relative [&_img]:brightness-75 [&_img]:rounded-3xl"
          navigation={{ nextEl: "#next-img", prevEl: "#prev-img" }}
        />
      </ShowInView>
    </section>
  );
}
