/* Projects — four bordered tiles + archive link. */

const PROJECTS = [
  {
    num: 1,
    title: 'Wave Mechanics & Precision Optics',
    desc: 'Measured single-slit diffraction minima and fit intensity profiles to the sinc² model — recovering λ = 648 ± 3 nm across slit widths from 0.02 to 0.16 mm, consistent with the 650 nm laser spec.',
    tags: ['Mathematica', 'ImageJ', 'Nonlinear Fitting'],
  },
  {
    num: 2,
    title: 'Modular Dynamics Digraphs',
    desc: 'Constructed functional digraphs of f(x) = xᵏ mod n in Python; computed cycle lengths, tree depths, and fixed-point counts as a function of (k, n) — turning number theory into eigenvalue-flavored conjectures.',
    tags: ['Python', 'Number Theory', 'Dynamical Systems'],
  },
  {
    num: 3,
    title: 'In-Pipe Climbing Robot',
    desc: 'Derived force-balance equations for a self-powered robot ascending 1000 mm vertical pipes; validated the analytical model against SOLIDWORKS FEA within a 5% deviation margin.',
    tags: ['SOLIDWORKS', 'Statics', 'FEA'],
  },
  {
    num: 4,
    title: '3D Vessel Volume Optimization',
    desc: 'Lagrange-multiplier formulation of a constrained optimization problem — minimize surface area subject to volume ≥ V₀ — with the analytical solution verified against CAD geometry.',
    tags: ['Calculus', 'Optimization', 'CAD'],
  },
];

function Projects() {
  return (
    <section className="section section-red" id="projects">
      <div className="container">
        <SectionHead num={4} label="Selected Projects" title="Things I built, mostly because I wanted them to exist." />
        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <article className="project-card" key={p.num}>
              <div className="num">/ {String(p.num).padStart(2, '0')}</div>
              <h3 className="title">{p.title}</h3>
              <p className="desc">{p.desc}</p>
              <div className="tags">{p.tags.map((t) => <Tag key={t}>{t}</Tag>)}</div>
            </article>
          ))}
        </div>
        <a href="#" className="archive-link" onClick={(e) => e.preventDefault()}>Archive of older work <LinkArrow /></a>
      </div>
    </section>
  );
}

window.Projects = Projects;
