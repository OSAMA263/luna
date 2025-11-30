import HeroPage from "@/components/HeroPage";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import ShowInView from "@/components/ShowInView";
import ContactForm from "./ContactForm";
import Card from "@/components/Card";
import { MdEmail, MdLocalPhone, MdHome } from "react-icons/md";

export default function Hero() {
  return (
    <section id="contact-form">
      <HeroPage className={"pb-20"}>
        <Layout className="gap-10 flex flex-col items-center text-center font-semibold">
          {/* title and shit */}
          <ShowInView className="w-full">
            <div className="space-y-3">
              <SectionTitle>Contact with us</SectionTitle>
              <p className="text-Gray">
                Let’s start a conversation that moves your business forward.
              </p>
            </div>
          </ShowInView>

          {/* contact info cards*/}
          <div className="grid md:grid-cols-3 gap-3">
            {contact_info.map(({ Icon, title, url, label }, i) => (
              <ShowInView key={title} i={i}>
                <Card className={"space-y-6 font-semibold h-full text-start lg:p-12 p-6"}>
                  <div className="flex items-center gap-4 text-Lime">
                    <Icon className="text-2xl" />
                    <h2 className="text-lg">{title}</h2>
                  </div>
                  {url ? (
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-Gray"
                    >
                      {label}
                    </a>
                  ) : (
                    <span className="text-Gray">{label}</span>
                  )}
                </Card>
              </ShowInView>
            ))}
          </div>

          {/* contact form inp */}
          <ShowInView className="w-full">
            <ContactForm />
          </ShowInView>
        </Layout>
      </HeroPage>
    </section>
  );
}

const contact_info = [
  {
    Icon: MdEmail,
    title: "Email",
    label: "osamaelseify2@gmail.com",
    url: "mailto:osamaelseify2@gmail.com",
  },
  {
    Icon: MdLocalPhone,
    title: "Phone",
    label: "+20 112 145 130 6",
    url: "https://wa.me/01121451306?text=Hello",
  },
  { Icon: MdHome, title: "Address", label: "Expert hobo.St, dakahlia,Egypt" },
];
