import Card from "@/components/Card";
import ShowInView from "@/components/ShowInView";
import { Link } from "react-router-dom";

export default function BlogCard(props) {
  const { i, type, date, title, desc, img, url, service_bg, other } = props;

  return (
    <ShowInView className={`h-full  ${i == 0 && "col-span-2"}`} i={i}>
      <Link
        to={`${service_bg ? "/services/" : "/blogs/"}${url}`}
        className={`rounded-3xl h-full block`}
      >
        <Card
          className={`p-4! h-full border-none hover:[&_img]:scale-105 bg-Dark-green hover:bg-Dark-green/60 gap-6 ${other ? "h-auto!" : "grid"} ${i == 0 ? "grid-cols-2" : "grid-rows-2"}`}
        >
          <div className="rounded-3xl h-full overflow-hidden">
            <img
              src={img ?? service_bg}
              alt={title}
              className="h-full object-cover"
            />
          </div>

          {/* card information */}
          <div className="flex flex-col gap-4 justify-between h-full">
            <div className="space-y-2">
              {type && (
                <div className="flex items-center gap-4 text-Gray text-xs font-normal">
                  <span className="bg-black rounded-2xl px-2 py-px">
                    {type}
                  </span>
                  <span>{date}</span>
                </div>
              )}
              <h2 className="text-Lime text-xl font-semibold">{title}</h2>
            </div>
            <p className="text-Gray font-normal">{desc}</p>
          </div>
        </Card>
      </Link>
    </ShowInView>
  );
}
