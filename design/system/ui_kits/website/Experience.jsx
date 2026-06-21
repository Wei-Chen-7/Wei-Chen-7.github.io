/* Experience — places that paid me or trusted me. */

const EXP = [
  {
    when: 'Apr 2026 — Jun 2026',
    where: 'Toronto, ON',
    title: 'Machine Learning REU Researcher',
    at: 'University of Toronto',
    body: [
      'Density estimation for Bayesian posterior approximation in high-dimensional parameter spaces (d > 50), using normalizing flows and transport-map techniques.',
      'Benchmarked inference algorithms on synthetic likelihood problems — convergence in KL divergence, effective sample size — methods that carry directly into parameter estimation for physical models.',
      'Supervised by Dr. Ricardo Baptista.',
    ],
    tags: ['Python', 'Normalizing Flows', 'Bayesian'],
  },
  {
    when: 'Oct 2025 — Present',
    where: 'Remote',
    title: 'AI & Experimental Data Research Assistant',
    at: 'Shanghai Jiao Tong University',
    body: [
      'Designed Wizard-of-Oz experiments for multimodal human\u2013AI interaction; collected and modeled time-series sensor data into quantitative evaluation metrics for publication.',
      'Built automated data pipelines integrating real-time API streams with signal-processing filters (FFT-based noise reduction, event detection) to produce clean experimental datasets.',
      'Supervised by Dr. Ren.',
    ],
    tags: ['Python', 'Signal Processing', 'HCI'],
  },
  {
    when: 'May 2025 — Aug 2025',
    where: 'Crawfordsville, IN',
    title: 'Microfluidics Research Assistant',
    at: 'Wabash College',
    body: [
      'Measured open-circuit potential differences during precipitate formation when metal-salt solutions (CoCl\u2082, NiCl\u2082, FeCl\u2083 at 0.10 M) contacted NaOH inside a laser-etched PDMS device at 1 mm\u00B3/hr.',
      'Identified V(t) \u221D \u221At scaling in transient voltage data across repeated trials, consistent with diffusion-limited charge redistribution.',
      'Fabricated chips via soft lithography \u2014 hands-on cleanroom-adjacent work relevant to experimental optics. Supervised by Dr. Tompkins.',
    ],
    tags: ['Soft Lithography', 'PDMS', 'Statistical Analysis'],
  },
  {
    when: 'Apr 2026 — Present',
    where: 'Remote',
    title: 'Section Leader, Code In Place',
    at: 'Stanford University',
    body: [
      'Lead instructional sections teaching foundational programming concepts to a global cohort.',
    ],
    tags: ['Python', 'Teaching'],
  },
  {
    when: 'May 2025 — Aug 2025',
    where: 'Hong Kong',
    title: 'Investment & Analytics Intern',
    at: 'AIA Group Limited',
    body: [
      'Built quantitative financial models and performed time-series market analysis.',
      'Maintained 100% data accuracy across large-scale portfolio databases.',
    ],
    tags: ['Python', 'Time-Series', 'Finance'],
  },
];

function Experience() {
  return (
    <section className="section" id="work">
      <div className="container">
        <SectionHead num={3} label="Experience" title="Places that paid me — or trusted me." />
        <div className="rows">
          {EXP.map((r, i) => (
            <div className="row" key={i}>
              <div>
                <div className="when">{r.when}</div>
                {r.where && <div className="where">{r.where}</div>}
              </div>
              <div>
                <div className="title">{r.title} <span className="at">· {r.at}</span></div>
                <div className="body">
                  <ul>{r.body.map((line, j) => <li key={j}>{line}</li>)}</ul>
                </div>
              </div>
              <div className="tags">{r.tags.map((t, j) => <Tag key={`${i}-${j}-${t}`}>{t}</Tag>)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Experience = Experience;
