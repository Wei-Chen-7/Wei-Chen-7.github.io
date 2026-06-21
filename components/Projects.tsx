import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import { projects } from "@/lib/content";

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHead num={3} label="Projects" title={projects.lede} />
        <p className="placeholder-note">
          <span className="marker" aria-hidden="true">
            ◍
          </span>
          {projects.note}
        </p>
        <Reveal className="projects-grid">
          {projects.items.map((p) => (
            <article className="project-card is-placeholder" key={p.num}>
              <div className="num">/ {String(p.num).padStart(2, "0")}</div>
              <h3 className="title">{p.title}</h3>
              <p className="desc">{p.desc}</p>
              <div className="tags">
                {p.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
