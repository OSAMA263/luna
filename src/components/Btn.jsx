import React from "react";
import ShowInView from "./ShowInView";

export default function Btn({
  children,
  variant = "solid",
  btnClass,
  ...rest
}) {
  const variants = {
    solid: "rounded-lg md:py-3 text-Olive bg-Lime hover:text-Lime",
    outline:
      "border rounded-full border-Lime text-Lime hover:text-Olive [&::after]:bg-Lime!",
  };

  return (
    <ShowInView {...rest}>
      {React.cloneElement(children, {
        className: `block w-fit h-fit btn-bloom px-6 py-2 [&>span]:relative [&>span]:z-10 ${variants[variant]} ${btnClass ?? ""}`,
      })}
    </ShowInView>
  );
}
