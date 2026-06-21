/* `/ NN  Section` eyebrow + heavy ink rule + display title, with an
 * optional sentence-cased subtitle (the section's "thought"). */
export default function SectionHead({
  num,
  label,
  title,
  lede,
}: {
  num: number;
  label: string;
  title: string;
  lede?: string;
}) {
  return (
    <header className="section-head">
      <div className="num">
        / {String(num).padStart(2, "0")}&nbsp;&nbsp;{label}
      </div>
      <div>
        <h2 className="title">{title}</h2>
        {lede ? <p className="lede">{lede}</p> : null}
      </div>
    </header>
  );
}
