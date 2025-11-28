import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import ShowInView from "@/components/ShowInView";

export default function StaticContent() {
  return (
    <Layout
      size={{ xl: "50%" }}
      as="section"
      id="random-bullshit-here-i-go"
      className="space-y-10 font-semibold [&_p]:text-Gray"
    >
      <div className="space-y-4">
        <SectionTitle>
          The most common business debate isn't as black and white as you might
          think
        </SectionTitle>
        <ShowInView>
          <p>
            He moonlights difficult-engrossed, sportsmen. Interested has all
            Devonshire difficulty gay assistance joy. Unaffected at ye of
            compliment alteration to. Place voice no arises along to. Parlors
            waiting so against me no. Wishing calling is warrant settled was
            lucky. Express besides it present if at an opinion visitor. For who
            thoroughly her boy estimating conviction. Removed demands expense
            account in outward tedious do. Particular way thoroughly unaffected
            projection favorable Mrs can be projecting own.
          </p>
        </ShowInView>
      </div>

      <ul className="list-disc marker:text-Gray">
        {list.map((item, i) => (
          <ShowInView i={i} key={i}>
            <li>
              <p>{item}</p>
            </li>
          </ShowInView>
        ))}
      </ul>
      <ShowInView>
        <p>
          Speedily say has suitable disposal add boy. On fourth doubt miles of
          child. Exercise joy man children rejoiced. Yet uncommonly his ten who
          diminution astonished. Demesne's new manners savings staying had.
          Under folly balls, death own point now men. Match way she avoids
          seeing death. She drifts their fat off.
        </p>
      </ShowInView>

      <div className="space-y-4">
        <SectionTitle>Ten questions you should answer truthfully</SectionTitle>
        <ShowInView>
          <p>
            Son agreed to others Exeter period myself few yet nature. Mention Mr
            manners opinion if garrets enabled. To occasional dissimilar
            impossible sentiments. Do fortune account written prepare invited no
            passage. Garrets use ten, you the weather venture friends. Solid
            visit seems again you nor all. Far advanced settling say finished
            raillery. Offered chiefly farther of my no colonel shyness. Such on
            help ye some door if in. Laughter proposal laughing any son law
            consider. Needed except up piqued an.
          </p>
        </ShowInView>
      </div>

      <ShowInView>
        <h2 className="text-Lime rounded-xl p-16 bg-Dark-green">
          Existence certainly explained how improving the household pretended.
          Delightful own attachment her partiality unaffected occasionally
          thoroughly. Adieus it no wonders spirit houses. Started several
          mistakes but Joy says the painful removal reached the end. State burst
          think end are its. Arrived off she elderly beloved him affixed noisier
          yet. Course regard to up he hardly. View four has said do men saw find
          dear shy? Talent men wicket add garden.
        </h2>
        <p>
          For who thoroughly her boy estimating conviction. Removed demands
          expense account in outward tedious do. Particular way thoroughly
          unaffected projection favorable Mrs can be projecting own. Thirty it
          matter enable become admire in giving. See resolved goodness felicity
          shy civility domestic had but. Drawings offended yet answered Jennings
          perceive laughing six did far.
        </p>
      </ShowInView>
    </Layout>
  );
}

const list = [
  "he standard chunk of Lorem Ipsum used since the 1500s.",
  "eproduced below for those interested.",
  "t is a long-established fact that a reader will.",
  "istracted by the readable content of a page when looking at its layout.",
];
