import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import { education } from "@/lib/content";

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <SectionHead num={5} label="Education" title={education.lede} />
        <Reveal className="rows">
          {education.items.map((r, i) => (
            <div className="row" key={i}>
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
        <p className="placeholder-note" style={{ marginTop: "28px", marginBottom: 0 }}>
          <span className="marker" aria-hidden="true">
            ◍
          </span>
          {education.note}
        </p>
      </div>
    </section>
  );
}
