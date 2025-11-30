import { NavLink } from "react-router-dom";
import { Navlinks } from "../Navbar";
import Btn from "@/components/Btn";
import blackCurve from "@/assets/black-curve.svg";
import GreenCurve from "@/assets/green-curve.svg";

export default function Large({ pathname }) {
  return (
    <>
      <nav
        className={`relative xl:px-16 px-2 -top-px ${pathname === "/" ? "bg-Dark-green" : "bg-black"} `}
      >
        {/* curve imges */}
        <CurvesImgs pathname={pathname} />
        <Navlinks pathname={pathname} />
      </nav>

      <Btn variant="outline" y={0} opa={1}>
        <NavLink to="/contact">
          <span>Request a consulation</span>
        </NavLink>
      </Btn>
    </>
  );
}

function CurvesImgs({ pathname }) {
  return (
    <>
      <div className="absolute h-full z-50 left-0.5 -translate-x-full">
        <img
          className="h-full"
          src={pathname == "/" ? GreenCurve : blackCurve}
          alt="curve img"
        />
      </div>
      <div className="absolute h-full z-50 right-0.5 translate-x-full rotate-y-180">
        <img
          className="h-full"
          src={pathname === "/" ? GreenCurve : blackCurve}
          alt="curve img"
        />
      </div>
    </>
  );
}
