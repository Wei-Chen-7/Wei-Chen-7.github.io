import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import { writing, sectionNum } from "@/lib/content";

export default function Writing() {
  return (
    <section className="section" id="writing">
      <div className="container">
        <SectionHead num={sectionNum("writing")} label="Writing" title={writing.lede} />
        <Reveal className="rows">
          {writing.items.map((w, i) => (
            <div className="row" key={i}>
              <div>
                <div className="when">{w.when}</div>
              </div>
              <div>
                <h3
                  className="title title-paper"
                  dangerouslySetInnerHTML={{ __html: w.title }}
                />
                <div className="body">{w.desc}</div>
              </div>
              <div className="tags">
                <span className="tag">{w.tag}</span>
              </div>
            </div>
          ))}
        </Reveal>
        <p className="quiet-note">
          <span className="marker" aria-hidden="true">
            ◍
          </span>
          {writing.note}
        </p>
      </div>
    </section>
  );
}
