import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import { strengths, sectionNum } from "@/lib/content";

export default function Strengths() {
  return (
    <section className="section section-red" id="strengths">
      <div className="container">
        <SectionHead
          num={sectionNum("strengths")}
          label="Strengths"
          title={strengths.title}
          lede={strengths.lede}
        />
        <Reveal className="strengths-grid">
          {strengths.items.map((s) => (
            <article className="strength-card" key={s.num}>
              <div className="head">
                <span className="num">/ {String(s.num).padStart(2, "0")}</span>
                <h3 className="name">{s.name}</h3>
              </div>
              <span className="metaphor">{s.metaphor}</span>
              <p className="at-best">{s.atBest}</p>
              <p className="edge">
                <span className="edge-label">Growth edge</span>
                {s.edge}
              </p>
            </article>
          ))}

          {/* 6th cell — a quiet pull-quote closing the poster spread */}
          <article className="strength-card closing">
            <span className="num">/ —</span>
            <p className="quote">
              {strengths.closing.lead}{" "}
              <span className="soft">{strengths.closing.soft}</span>
            </p>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
