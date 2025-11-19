import { NavLink, useLocation } from "react-router-dom";
import Layout from "../Layout";
import Btn from "../Btn";
import blackCurve from "@/assets/black-curve.svg";
import GreenCurve from "@/assets/green-curve.svg";
import { motion } from "framer-motion";

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <div className="absolute w-full left-1/2 -translate-x-1/2 top-3 z-50 text-Lime">
      <Layout as="header" className={`flex items-center justify-between`}>
        <NavLink to="/">logo</NavLink>

        {/* navigation links */}
        <nav
          className={`relative px-16 -top-px ${pathname === "/" ? "bg-Dark-green" : "bg-black"} `}
        >
          {/* curve imges */}
          <CurvesImgs pathname={pathname} />
          <Navlinks pathname={pathname} />
        </nav>

        <Btn variant="outline">
          <NavLink to="/contact">
            <span>Request a consulation</span>
          </NavLink>
        </Btn>
      </Layout>
    </div>
  );
}

function Navlinks({ pathname }) {
  const data = [
    { url: "/", label: "Home" },
    { url: "/about", label: "About" },
    { url: "/contact", label: "Contact" },
    { url: "/services", label: "Services" },
    { url: "/blogs", label: "Blogs" },
  ];

  return (
    <ul className="flex items-center gap-2 py-4">
      {data.map(({ label, url }) => (
        <li key={url}>
          <NavLink
            className={
              "z-10 relative px-6 py-1 [&:not(.active):hover]:text-Gray"
            }
            to={url}
          >
            {label}
            {pathname === url && (
              <motion.div
                className="absolute size-full top-0 bg-Olive rounded-full -z-1"
                layoutId="underline"
              />
            )}
          </NavLink>
        </li>
      ))}
    </ul>
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
