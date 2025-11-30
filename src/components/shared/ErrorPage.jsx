import { FaFaceSadTear } from "react-icons/fa6";

export default function ErrorPage() {
  return (
    <div className="h-dvh w-full flex font-semibold flex-col text-center items-center justify-center text-2xl text-Lime">
      <FaFaceSadTear className="text-Lime/60 text-4xl" />
      The Page Your looking for doesnt exits
    </div>
  );
}
