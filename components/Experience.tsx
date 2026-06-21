import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import { experience } from "@/lib/content";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionHead num={4} label="Experience" title={experience.lede} />
        <p className="placeholder-note">
          <span className="marker" aria-hidden="true">
            ◍
          </span>
          {experience.note}
        </p>
        <Reveal className="rows">
          {experience.items.map((r, i) => (
            <div className="row is-placeholder" key={i}>
              <div>
                <div className="when">{r.when}</div>
                {r.where ? <div className="where">{r.where}</div> : null}
              </div>
              <div>
                <div className="title">
                  {r.title}
                  {r.at ? <span className="at"> · {r.at}</span> : null}
                </div>
                <div className="body">
                  <ul>
                    {r.body.map((line, j) => (
                      <li key={j}>{line}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="tags">
                {r.tags.map((t, j) => (
                  <span className="tag" key={`${i}-${j}`}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
