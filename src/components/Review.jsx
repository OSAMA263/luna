import SectionTitle from "./SectionTitle";

export default function Review() {
  return (
    <div className="relative rounded-3xl overflow-hidden">
      <img
        src="home/review-bg-img.webp"
        className="object-cover w-full h-full brightness-60 absolute"
        alt="bg"
        loading="lazy"
      />

      <div className="flex items-start gap-8 py-20 w-[75%] mx-auto relative z-10">
        <img
          src="home/review-avatar.jpg"
          alt="reviewer"
          className="rounded-xl size-24"
          loading="lazy"
        />
        <div>
          <SectionTitle className={"text-2xl! mb-4"}>
            Working with Corpos was a game-changer for our B2B strategy. Their
            team didn’t just offer advice — they became an extension of our
            leadership. Their insights, professionalism, and tailored approach
            helped us unlock new growth and streamline our operations.
          </SectionTitle>
          <span className="text-Olive">McLovin</span>
        </div>
      </div>
    </div>
  );
}
