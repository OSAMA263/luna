import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ZoomInImg({ src, alt, ...rest }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 .3"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div ref={ref} className="overflow-hidden rounded-2xl h-full">
      <motion.img
        style={{ scale }}
        src={src}
        alt={alt}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        {...rest}
        className="object-cover w-full h-full transition duration-500 ease-[emphasized]"
      />
    </div>
  );
}
