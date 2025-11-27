import Btn from "@/components/Btn";
import Layout from "@/components/Layout";
import { Toaster, toaster } from "@/components/ui/toaster";
import { Button } from "@chakra-ui/react";
import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      e.target.reset();
      toaster.create({
        description: "Thank you for your message!",
        type: "success",
        duration:3000
      });
    }, 3000);
  };

  return (
    <Layout size={{ xl: "69%" }}>
      <Toaster />

      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-2">
        <input
          required
          name="name"
          autoComplete="name"
          id="name"
          type="text"
          placeholder="Name"
        />
        <div className="grid grid-cols-2 gap-2">
          <input
            required
            name="email"
            autoComplete="email"
            id="email"
            type="email"
            placeholder="example@gmail.com"
          />
          <input
            required
            name="phone"
            autoComplete="phone"
            id="phone"
            type="tel"
            placeholder="01234567891"
          />
        </div>
        <textarea
          required
          name="message"
          id="message"
          placeholder="Your message"
          rows={6}
        ></textarea>
        <Btn btnClass="cursor-pointer w-full mt-6  border-none!">
          <Button variant={""} disabled={loading} type="submit" className="!">
            <span>{loading ? "Please wait..." : "Submit"}</span>
          </Button>
        </Btn>
      </form>
    </Layout>
  );
}
