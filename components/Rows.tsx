import Reveal from "./Reveal";
import type { Link, Row } from "@/lib/content";

/* Outbound links as mono "Label ↗" chips — shared by rows and cards. */
export function LinkList({ links }: { links?: Link[] }) {
  if (!links || links.length === 0) return null;
  return (
    <div className="link-list">
      {links.map((l) => (
        <a key={l.href} href={l.href} target="_blank" rel="noreferrer noopener">
          {l.label}
          <span className="arrow" aria-hidden="true">
            ↗
          </span>
        </a>
      ))}
    </div>
  );
}

/* The dated-row layout used by Research, Experience and Education:
 * when/where on the left, title + bullets in the middle, tags on the right. */
export default function Rows({ items }: { items: Row[] }) {
  return (
    <Reveal className="rows">
      {items.map((r, i) => (
        <div className="row" key={`${r.title}-${i}`}>
          <div>
            <div className="when">{r.when}</div>
            {r.where ? <div className="where">{r.where}</div> : null}
          </div>
          <div>
            <h3 className="title">
              {r.title}
              {r.at ? <span className="at">{r.at}</span> : null}
            </h3>
            <div className="body">
              <ul>
                {r.body.map((line, j) => (
                  <li key={j}>{line}</li>
                ))}
              </ul>
            </div>
            <LinkList links={r.links} />
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
  );
}
