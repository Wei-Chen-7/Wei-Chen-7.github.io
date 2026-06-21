/* About — prose + side metadata. */

function About() {
  return (
    <section className="section section-warm" id="about">
      <div className="container">
        <SectionHead num={1} label="About" title="Some background, a few obsessions, the parts that matter." />
        <div className="about-grid">
          <div />
          <div className="about-prose">
            <p>
              I'm an undergraduate who keeps finding the same shape in different places: an inverse problem inside a microfluidic chip, a recurrence relation behind a fitting routine, a probability density humming in the gap between two measurements.
            </p>
            <p>
              My coursework lives at the intersection of <em>physics</em>, <em>applied mathematics</em>, and <em>computer science</em>. I like that the three keep arguing with each other — quantum mechanics borrows from linear algebra, which lends itself to inference, which talks back to the lab bench.
            </p>
            <p>
              Outside the syllabus I sing second bass in the Wabash Glee Club, run a small community-health volunteer group back home in Pingjiang, and try to keep my lab notebook honest.
            </p>
          </div>
          <div className="about-meta">
            <div className="row">
              <span className="k">Languages</span>
              <span className="v">Chinese, English, Cantonese</span>
            </div>
            <div className="row">
              <span className="k">Pronouns</span>
              <span className="v">he/him</span>
            </div>
            <div className="row">
              <span className="k">GPA</span>
              <span className="v">4.0 / 4.0</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.About = About;
