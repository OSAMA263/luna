import Layout from "../Layout";

export default function Footer() {
  return (
    <footer className="bg-Dark-green pt-14 pb-4">
      <Layout
        className={
          "grid grid-cols-2 gap-2 [&>div]:bg-black [&>div]:rounded-3xl relative"
        }
      >
        <div></div>
        <div></div>

        {/* centered created by me */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-Dark-green rounded-3xl">
          <div className="relative size-full py-2 px-6">
            created by me
            {/* absolute curved imgs */}
            {/* absolute curved imgs */}
          </div>
        </div>
      </Layout>
    </footer>
  );
}
