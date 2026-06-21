/* Contact — closing paragraph + rows. */

const CONTACT = [
  { k: 'Email',    v: 'wchen29@wabash.edu',     href: 'mailto:wchen29@wabash.edu' },
  { k: 'Phone',    v: '+1 (765) 225-8150',      href: 'tel:+17652258150' },
  { k: 'LinkedIn', v: 'linkedin.com/in/wei-chen', href: 'https://www.linkedin.com/in/wei-chen/' },
  { k: 'Based in', v: 'Crawfordsville, IN',     href: '#' },
];

function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <SectionHead num={7} label="Contact" title="Say hello, or send a strange link." />
        <div className="contact-grid">
          <p className="contact-prose">
            The fastest way to reach me is <em>email</em>. I read it daily, and reply within a few. Especially open to summer 2026 research positions at the Max Planck Institutes — experimental or computational physics.
          </p>
          <div className="contact-rows">
            {CONTACT.map((c) => (
              <div className="row" key={c.k}>
                <div className="k">{c.k}</div>
                <div className="v"><a href={c.href}>{c.v} <span className="arrow">↗</span></a></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

window.Contact = Contact;
