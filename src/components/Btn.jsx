import React from "react";

export default function Btn({ children, variant = "solid", className }) {
  const variants = {
    solid: "rounded-lg py-3 text-Olive bg-Lime hover:text-Lime",
    outline:
      "border rounded-full border-Lime text-Lime hover:text-Olive [&::after]:bg-Lime!",
  };

  return React.cloneElement(children, {
    className: `block w-fit h-fit btn-bloom px-6 py-2 [&>span]:relative [&>span]:z-10 ${variants[variant]} ${className ?? ""}`,
  });
}
