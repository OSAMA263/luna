import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function SwiperControls({ type = "prev", className, ...rest }) {
  return (
    <button
      aria-label={"swap-" + type}
      className={`swiper-control-btn ${className ?? ""}`}
      {...rest}
    >
      {type == "prev" ? <IoIosArrowBack /> : <IoIosArrowForward />}
    </button>
  );
}
