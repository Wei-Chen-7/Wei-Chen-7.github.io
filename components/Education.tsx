import SectionHead from "./SectionHead";
import Rows from "./Rows";
import { education, sectionNum } from "@/lib/content";

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <SectionHead
          num={sectionNum("education")}
          label="Education"
          title={education.lede}
        />
        <Rows items={education.items} />
      </div>
    </section>
  );
}
