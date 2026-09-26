import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import { LinkList } from "./Rows";
import { projects, sectionNum } from "@/lib/content";

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHead num={sectionNum("projects")} label="Projects" title={projects.lede} />
        <Reveal className="projects-grid">
          {projects.items.map((p, i) => (
            <article className="project-card" key={p.title}>
              <div className="num">/ {String(i + 1).padStart(2, "0")}</div>
              <h3 className="title">{p.title}</h3>
              <p className="desc">{p.desc}</p>
              <div className="tags">
                {p.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              <LinkList links={p.links} />
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
