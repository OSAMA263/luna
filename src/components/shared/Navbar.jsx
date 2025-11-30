/* eslint-disable react-refresh/only-export-components */
import { NavLink, useLocation } from "react-router-dom";
import Layout from "../Layout";
import { motion } from "framer-motion";
import Logo from "../Logo";
import { useMediaQuery } from "@chakra-ui/react";
import Large from "./navbars/Large";
import Small from "./navbars/Small";

export const nav_links = [
  { url: "/", label: "Home" },
  { url: "/about", label: "About" },
  { url: "/contact", label: "Contact" },
  { url: "/services", label: "Services" },
  { url: "/blogs", label: "Blogs" },
];

export default function Navbar() {
  const [smallScreen] = useMediaQuery("(max-width: 1024px)");
  const { pathname } = useLocation();

  return (
    <div className="absolute w-full left-1/2 -translate-x-1/2 top-3 z-50 text-Lime">
      <Layout
        as="header"
        className={`flex max-lg:p-4! items-center justify-between`}
      >
        <Logo />

        {/* navigation links */}
        {smallScreen ? (
          <Small pathname={pathname} />
        ) : (
          <Large pathname={pathname} />
        )}
      </Layout>
    </div>
  );
}

export function Navlinks({ pathname, className }) {
  return (
    <ul className={`flex items-center gap-2 py-4 ${className ?? ""}`}>
      {nav_links.map(({ label, url }) => (
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
