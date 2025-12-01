import AutoSlider from "@/components/AutoSlider";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import { home_blogs } from "@/data/slider";
import { Link } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";
import Btn from "@/components/Btn";
import SwiperControls from "@/components/SwiperControls";
import ShowInView from "@/components/ShowInView";

export default function BlogsSlider() {
  return (
    <Layout className={"rounded-3xl bg-Dark-green p-12 space-y-10"}>
      {/* blogs swiper */}
      <Slider />

      {/* swiper controls and blogs btn */}
      <div className="flex justify-between items-center px-4">
        <Btn>
          <Link to="/blogs">
            <span>View Blogs</span>
          </Link>
        </Btn>

        {/* swiper navigator */}
        <ShowInView>
          <div className={`flex items-center justify-end gap-4`}>
            <SwiperControls
              id="prev"
              type="prev"
              className={"bg-black! hover:bg-Olive!"}
            />
            <SwiperControls
              id="next"
              type="next"
              className={"bg-black! hover:bg-Olive!"}
            />
          </div>
        </ShowInView>
      </div>
    </Layout>
  );
}

function Slider() {
  return (
    <ShowInView className="px-4">
      <AutoSlider
        shadowSides={"from-transparent"}
        autoSlide={false}
        speed={500}
        fade={true}
        effect={"fade"}
        slidesPerView={1}
        autoHeight={true}
        navigation={{ nextEl: "#next", prevEl: "#prev" }}
      >
        {home_blogs.map(({ title, type, url, img, desc, date }) => (
          <SwiperSlide
            className="flex! flex-col hover:[&_svg]:translate-x-2 h-full!"
            key={title}
          >
            <div className="bg-Dark-green pb-16">
              <span className="font-semibold text-sm mb-4 block w-fit bg-black rounded-lg px-2 py-1 text-Gray">
                {type}
              </span>
              <SectionTitle>{title}</SectionTitle>
            </div>
            {/* blog info */}
            <Link
              className="grid md:grid-cols-2 max-md:grid-rows-2 rounded-4xl overflow-hidden hover:[&_img]:scale-105"
              to={"/blogs/" + url}
            >
              <div className="overflow-hidden">
                <img
                  src={img}
                  alt={title}
                  className="size-full object-cover duration-500!"
                />
              </div>
              {/* description */}
              <div className="text-Lime bg-black font-semibold md:p-16 py-2 px-4 md:gap-16 gap-2 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-Gray text-sm block">{date}</span>
                  <h2>{desc}</h2>
                </div>
                <span className="ms-auto flex items-center gap-4">
                  <MdOutlineSubdirectoryArrowRight className="transition-all duration-500" />{" "}
                  <span>View detail</span>
                </span>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </AutoSlider>
    </ShowInView>
  );
}
