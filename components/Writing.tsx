import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import { writing } from "@/lib/content";

export default function Writing() {
  return (
    <section className="section" id="writing">
      <div className="container">
        <SectionHead num={6} label="Writing" title={writing.lede} />
        <p className="placeholder-note">
          <span className="marker" aria-hidden="true">
            ◍
          </span>
          {writing.note}
        </p>
        <Reveal className="rows">
          {writing.items.map((w, i) => (
            <div className="row is-placeholder" key={i}>
              <div>
                <div className="when">{w.when}</div>
              </div>
              <div>
                <div className="title">{w.title}</div>
                <div className="body">{w.desc}</div>
              </div>
              <div className="tags">
                <span className="tag">{w.tag}</span>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
