import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/effect-fade";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import React, { useEffect, useState } from "react";

function AutoSlider(props) {
  const {
    className = "",
    shadowSides = "",
    array,
    autoSlide = true,
    fade = false,
    children,
    ...rest
  } = props;

  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  if (!ready) return null;

  return (
    <Swiper
      slidesPerView={5}
      observer
      observeParents
      freeMode
      speed={6000}
      allowTouchMove={false}
      loop
      autoplay={{
        delay: 1,
        disableOnInteraction: false,
      }}
      modules={
        autoSlide ? [Autoplay] : fade ? [Navigation, EffectFade] : [Navigation]
      }
      {...rest}
      className={"w-full!"}
    >
      {children
        ? children
        : array?.map((item, i) => (
            <SwiperSlide
              className={"flex! items-center gap-2 " + className}
              key={i}
            >
              <img loading="lazy" src={item.icon} alt={item.icon} />
              <span
                className={`text-Gray text-lg font-semibold ${!autoSlide ? "instuery-swiper-title" : ""}`}
              >
                {item.title ?? null}
              </span>
            </SwiperSlide>
          ))}

      {/* shadows on the slider both sides */}

      <div
        className={`absolute left-0 top-0 h-full w-14 bg-linear-to-r from-Dark-green to-transparent z-10 ${shadowSides}`}
      />
      <div
        className={`absolute right-0 top-0 h-full w-14 bg-linear-to-l from-Dark-green to-transparent z-10 ${shadowSides}`}
      />
    </Swiper>
  );
}

export default React.memo(AutoSlider);