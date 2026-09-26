import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import { contact, sectionNum } from "@/lib/content";

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <SectionHead
          num={sectionNum("contact")}
          label="Contact"
          title={contact.title}
        />
        <Reveal className="contact-grid">
          <div>
            <p className="contact-prose">{contact.cta}</p>
            <p className="contact-sub">{contact.sub}</p>
          </div>
          <dl className="contact-rows">
            {contact.rows.map((row) => (
              <div className="row" key={row.k}>
                <dt className="k">{row.k}</dt>
                <dd className="v">
                  {row.href ? (
                    <a
                      href={row.href}
                      {...(row.external
                        ? { target: "_blank", rel: "noreferrer noopener" }
                        : {})}
                    >
                      {row.v}
                      <span className="arrow" aria-hidden="true">
                        {row.external ? "↗" : "→"}
                      </span>
                    </a>
                  ) : (
                    row.v
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
