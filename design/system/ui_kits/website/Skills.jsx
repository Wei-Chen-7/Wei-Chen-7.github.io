/* Skills — four ordered columns. */

const SKILLS = [
  { num: 1, head: 'Programming', items: ['Python (NumPy, SciPy, Pandas)', 'C++', 'Java', 'R', 'SQL', 'MATLAB'] },
  { num: 2, head: 'Computational & Lab', items: ['Mathematica', 'ImageJ', 'SOLIDWORKS', 'Soft Lithography', 'Syringe Pumps', 'LaTeX'] },
  { num: 3, head: 'Methods', items: ['Statistical Modeling', 'Bayesian Inference', 'Numerical PDE / ODE', 'Signal Processing', 'Kinematic Analysis'] },
  { num: 4, head: 'Coursework', items: ['Quantum Mechanics', 'Computational Physics', 'Linear Algebra', 'Numerical Analysis', 'Number Theory', 'Data Structures'] },
];

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionHead num={5} label="Skills" title="What I reach for, ordered by how often." />
        <div className="skills-grid">
          {SKILLS.map((col) => (
            <div className="skills-col" key={col.num}>
              <div className="col-head"><span className="n">{String(col.num).padStart(2, '0')}</span><span>{col.head}</span></div>
              <ol>
                {col.items.map((item, i) => (
                  <li key={item}>
                    <span className="n">{String(i + 1).padStart(2, '0')}</span>
                    <span className="v">{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Skills = Skills;
