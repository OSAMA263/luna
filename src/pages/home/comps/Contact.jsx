import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { TbCircleDotFilled } from "react-icons/tb";
import { HiMiniViewfinderCircle } from "react-icons/hi2";
import { IoIosArrowForward } from "react-icons/io";
import ShowInView from "@/components/ShowInView";

export default function Contact() {
  return (
    <Layout id="contact-us" as="section" className={"space-y-2 font-semibold"}>
      <div className="text-Lime text-center bg-center bg-[url('/src/assets/home/contact-bg.webp')] rounded-3xl space-y-10 py-10">
        <ShowInView>
          <h2 className="text-3xl w-1/2 mx-auto">
            Is your B2B business ready for the next level?
          </h2>
          <Link to="/contact" className="text-sm text-Lime">
            Book a Free Call
          </Link>
        </ShowInView>
      </div>

      {/* tow links for the contact page */}
      <div className="grid grid-cols-2 gap-2">
        <ShowInView>
          {contact_links.map(({ title, par, icon: Icon }) => (
            <Link
              to="/contact"
              key={title}
              className="flex items-center hover:[&_#arrow]:translate-x-2 [&_svg]:text-Lime justify-between rounded-3xl bg-Dark-green py-10 px-8"
            >
              <div className="flex items-center gap-4">
                <Icon className="text-4xl!" />
                <div className="space-y-2">
                  <h2 className="text-2xl text-Lime">{title}</h2>
                  <p className="text-Gray">{par}</p>
                </div>
              </div>
              <IoIosArrowForward
                className="text-2xl transition-all"
                id="arrow"
              />
            </Link>
          ))}
        </ShowInView>
      </div>
    </Layout>
  );
}

const contact_links = [
  {
    title: "Time to level up ypur B2B game?",
    par: "You wont get scammed",
    icon: TbCircleDotFilled,
  },
  {
    title: "Need expert help to scale fast?",
    par: "Trust me bro lule",
    icon: HiMiniViewfinderCircle,
  },
];
