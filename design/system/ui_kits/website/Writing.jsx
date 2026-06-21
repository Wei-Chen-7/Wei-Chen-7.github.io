/* Writing — repurposed as "Honors & Outputs": patent, awards, leadership. */

const WRITING = [
  { when: '2025', title: 'Intelligent Early Warning System for Drug Expiry Date', desc: 'Granted patent — a system for predicting and flagging pharmaceutical expiry before it becomes a safety issue.', tag: 'Patent' },
  { when: '2025',      title: 'Presidential International Scholarship', desc: 'Merit-based, full tuition. Wabash College.', tag: 'Award' },
  { when: '2024',      title: 'Global Citizenship Scholarship', desc: 'Awarded at Munster Technological University during the BEng (Hons) program.', tag: 'Award' },
  { when: '2018 — present', title: 'Way Volunteer Association', desc: 'Founder & president of a community health organization in Pingjiang, China — currently serving 100+ members.', tag: 'Service' },
  { when: '2019, 2022, 2023, 2025', title: 'Annual Community Contribution Award', desc: 'Recognized four times for sustained community work in Pingjiang.', tag: 'Award' },
];

function Writing() {
  return (
    <section className="section" id="writing">
      <div className="container">
        <SectionHead num={6} label="Honors & Outputs" title="Things on record — patents, awards, the work that has a date attached." />
        <div className="rows">
          {WRITING.map((w, i) => (
            <div className="row" key={i}>
              <div>
                <div className="when">{w.when}</div>
              </div>
              <div>
                <div className="title">{w.title}</div>
                <div className="body">{w.desc}</div>
              </div>
              <div className="tags"><Tag>{w.tag}</Tag></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Writing = Writing;
