import SectionHead from "./SectionHead";
import Rows from "./Rows";
import { experience, sectionNum } from "@/lib/content";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionHead
          num={sectionNum("experience")}
          label="Experience"
          title={experience.lede}
        />
        <Rows items={experience.items} />
      </div>
    </section>
  );
}
