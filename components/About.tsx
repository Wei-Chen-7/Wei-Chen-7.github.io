import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import { about, sectionNum } from "@/lib/content";

export default function About() {
  return (
    <section className="section section-warm" id="about">
      <div className="container">
        <SectionHead
          num={sectionNum("about")}
          label="About"
          title={about.title}
        />
        <Reveal className="about-grid">
          <div className="about-prose">
            {about.paragraphs.map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </div>
          <dl className="about-meta">
            {about.meta.map((row) => (
              <div className="row" key={row.k}>
                <dt className="k">{row.k}</dt>
                <dd className="v">{row.v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
