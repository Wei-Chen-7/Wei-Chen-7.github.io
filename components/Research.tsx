import SectionHead from "./SectionHead";
import Rows from "./Rows";
import { research, sectionNum } from "@/lib/content";

export default function Research() {
  return (
    <section className="section" id="research">
      <div className="container">
        <SectionHead num={sectionNum("research")} label="Research" title={research.lede} />
        <Rows items={research.items} />
      </div>
    </section>
  );
}
