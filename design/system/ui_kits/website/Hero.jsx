/* Hero — status pill, three-line headline, two buttons, currently strip. */

function Hero({ available, onScrollTo }) {
  return (
    <section className="hero" id="top">
      <div className="container">
        <StatusPill available={available}>
          {available ? 'Available for summer 2026 research' : 'Currently heads-down'}
        </StatusPill>

        <h1>
          Wei Chen,<br />
          fitting equations<br />
          to the world<span className="red-dot">.</span>
        </h1>

        <p className="lede" style={{ maxWidth: '52ch', fontFamily: 'var(--font-sans)', fontSize: '20px', color: 'var(--fg-2)', lineHeight: 1.45, marginTop: '8px' }}>
          Undergraduate in physics and applied mathematics at Wabash College, on a 3–2 dual-degree track to Columbia for computer science. I work on wave optics, computational modeling, and statistical inference — and I write small programs about the patterns underneath.
        </p>

        <div className="hero-actions">
          <Button onClick={() => onScrollTo('Projects')}>See the work <LinkArrow /></Button>
          <Button variant="ghost" onClick={() => onScrollTo('Contact')}>Get in touch <LinkArrow /></Button>
        </div>

        <div className="currently">
          <div className="item">
            <span className="item-key">Studying</span>
            <span className="item-val">Physics, Math, CS</span>
          </div>
          <div className="item">
            <span className="item-key">Based in</span>
            <span className="item-val">Crawfordsville, IN</span>
          </div>
          <div className="item">
            <span className="item-key">Currently</span>
            <span className="item-val">ML REU, UofT</span>
          </div>
          <div className="item">
            <span className="item-key">Open to</span>
            <span className="item-val">Max Planck '26</span>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
