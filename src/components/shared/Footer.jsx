import { NavLink, Link } from "react-router-dom";
import Layout from "../Layout";
import { nav_links } from "./Navbar";
import { FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import blackCurve from "@/assets/footer-curve-corner.svg";
import FooterImg from "@/assets/blogs-footer.webp";
import Logo from "../Logo";

export default function Footer() {
  return (
    <footer className="bg-Dark-green pt-14 pb-4 rounded-t-4xl">
      <Layout className="grid grid-cols-2 gap-3 [&>div]:bg-black [&>div]:p-10 [&>div]:rounded-3xl relative">
        <div className="flex flex-col justify-between">
          {/* navigation links */}
          <ul className="space-y-2">
            {nav_links.map(({ label, url }, i) => (
              <li key={i}>
                <NavLink
                  className="[&.active]:text-Lime [&.active]:underline text-Gray"
                  to={url}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* social contact */}
          <div className="flex items-center gap-2">
            {social_links.map(({ Icon, url }) => (
              <Link
                to={url}
                key={url}
                target="_blank"
                className="text-lg text-Lime border border-Lime rounded-lg p-2 hover:bg-Olive hover:border-transparent"
              >
                <Icon />
              </Link>
            ))}
          </div>
          <Logo />
        </div>

        {/* contact info links */}
        <div className="space-y-10">
          <div className="flex justify-between items-start">
            <div className="space-y-4 *:block">
              <h2 className="text-Lime text-lg">Contact on</h2>
              <a
                href="mailto:osamaelseify2@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-Gray"
              >
                osamaelseify2@gmail.com
              </a>
              <a
                href="https://wa.me/01121451306?text=Hello"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-Gray"
              >
                +20 112 145 130 6
              </a>
            </div>
            <div className="space-y-4 *:block">
              <h2 className="text-Lime text-lg">Address</h2>
              <p className="text-Gray">Expert hobo.St, dakahlia,Egypt</p>
            </div>
          </div>
          <div className="pb-4 space-y-4">
            <h2 className="text-Lime text-lg">Check our blogs</h2>
            <Link
              to="/blogs"
              className="inline-block hover:[&>img]:scale-105 size-[35%] overflow-hidden rounded-2xl"
            >
              <img
                src={FooterImg}
                className="transition-all oject-cover size-full"
                alt="blogs-img"
              />
            </Link>
          </div>
        </div>

        {/* centered created by me */}
        <CreatedByme />
      </Layout>
    </footer>
  );
}

function CreatedByme() {
  return (
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 p-0!">
      <div className="font-semibold text-Gray relative py-2 px-10 bg-Dark-green rounded-t-3xl">
        Coded by{" "}
        <Link
          target="_blank"
          to="https://github.com/OSAMA263"
          className="underline"
        >
          me
        </Link>
        {/* curved corners  */}
        <>
          <img
            src={blackCurve}
            className="absolute left-0 -translate-x-[98%] bottom-0"
            alt="dark-curve"
          />
          <img
            src={blackCurve}
            className="absolute right-0 rotate-90 translate-x-full bottom-0"
            alt="dark-curve"
          />
          <img
            src={blackCurve}
            className="absolute bottom-full right-1/2 rotate-90 translate-x-full"
            alt="dark-curve"
          />
          <img
            src={blackCurve}
            className="absolute bottom-full left-1/2 -translate-x-full"
            alt="dark-curve"
          />
        </>
      </div>
    </div>
  );
}

const social_links = [
  { Icon: FaFacebookF, url: "https://www.facebook.com/share/v/1Ej4sHE66M/" },
  { Icon: FaYoutube, url: "https://youtu.be/KEoGrbKAyKE" },
  { Icon: FaLinkedinIn, url: "https://www.linkedin.com/in/osama00/" },
];
