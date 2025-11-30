import { useEffect, useState } from "react";

export default function LoaderPage() {
  const [dots, setDots] = useState(".");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (dots.length > 3 ? "." : (prev += ".")));
    }, 500);

    return () => clearInterval(interval);
  }, [dots]);

  return (
    <div className="h-dvh font-semibold w-full flex items-center justify-center text-6xl text-Lime">
      {dots}
    </div>
  );
}
