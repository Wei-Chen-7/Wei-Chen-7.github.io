import { hero, identity } from "@/lib/content";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <span className="status-pill" role="status">
          <span className="marker" aria-hidden="true">
            ◍
          </span>
          {identity.status}
        </span>

        <h1>
          {hero.lines[0]}
          <br />
          {hero.lines[1]}
          <br />
          {hero.lines[2]}
          <span className="red-dot">.</span>
        </h1>

        <p
          className="hero-lede"
          dangerouslySetInnerHTML={{ __html: hero.lede }}
        />

        <div className="hero-actions">
          <a className="btn" href={hero.primary.href}>
            {hero.primary.label} <span aria-hidden="true">→</span>
          </a>
          <a className="btn-ghost" href={hero.secondary.href}>
            {hero.secondary.label} <span aria-hidden="true">→</span>
          </a>
        </div>

        <dl className="currently">
          {hero.currently.map((item) => (
            <div className="item" key={item.key}>
              <dt className="item-key">{item.key}</dt>
              <dd className="item-val">{item.val}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
