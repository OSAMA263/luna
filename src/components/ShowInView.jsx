import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";

export default function ShowInView(props) {
  const { children, ...rest } = props;

  return (
    <>
      {React.Children.map(children, (child, j) => {
        return (
          <MotionTag key={j} {...rest}>
            {child}
          </MotionTag>
        );
      })}
    </>
  );
}

function MotionTag(props) {
  const { children, y = 30, opa = 0, offset, i, className, ...rest } = props;

  const { ref, inView } = useInView({
    threshold: offset ?? 0.2,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ y: y, opacity: opa }}
      animate={{ y: inView ? 0 : y, opacity: inView ? 1 : opa }}
      transition={{ duration: 0.4, delay: i ? 0.15 * i : 0 }}
      className={className ?? ""}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
