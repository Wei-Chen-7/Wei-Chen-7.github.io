/* Education — chronological-reverse rows. */

const EDU = [
  {
    when: '2025 — 2027 (expected)',
    where: 'Crawfordsville, IN',
    title: 'Wabash College',
    at: '',
    body: [
      'B.A. in Physics & Mathematics — 3–2 Dual-Degree Track → Columbia University, Computer Science',
      'Cumulative GPA: 4.0 / 4.0 · Dean\u2019s List, Fall 2025 & Spring 2026',
      'Presidential International Scholarship (merit-based, full tuition)',
      'Coursework: Quantum Mechanics, Computational Physics, Linear Algebra, Numerical Analysis, Number Theory, Data Structures',
    ],
    tags: ['Physics', 'Math', '3\u20132 to Columbia'],
  },
  {
    when: 'Jul 2025 — Jan 2026',
    where: 'Seoul, South Korea',
    title: 'Hanyang University',
    at: '',
    body: [
      'Summer & Winter School, Foreign Exchange Program',
      'GPA: 4.0+ / 4.0',
    ],
    tags: ['Exchange'],
  },
  {
    when: 'Sep 2024 — Mar 2025',
    where: 'Cork, Ireland',
    title: 'Munster Technological University',
    at: '',
    body: [
      'BEng (Hons) in Mechanical & Manufacturing Engineering — First-Class Standing (transferred)',
      '100 / 100 in Mathematical Methods for Engineers',
      'Global Citizenship Scholarship',
    ],
    tags: ['Transferred'],
  },
];

function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <SectionHead num={2} label="Education" title="Schooling, in chronological reverse." />
        <div className="rows">
          {EDU.map((r, i) => (
            <div className="row" key={i}>
              <div>
                <div className="when">{r.when}</div>
                {r.where && <div className="where">{r.where}</div>}
              </div>
              <div>
                <div className="title">{r.title}{r.at && <span className="at"> · {r.at}</span>}</div>
                <div className="body">
                  <ul>{r.body.map((line, j) => <li key={j}>{line}</li>)}</ul>
                </div>
              </div>
              <div className="tags">{r.tags.map((t) => <Tag key={t}>{t}</Tag>)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Education = Education;
