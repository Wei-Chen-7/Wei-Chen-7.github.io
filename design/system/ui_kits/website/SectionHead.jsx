/* SectionHead — `/ NN SECTION` + serif subtitle, strong rule under. */

function SectionHead({ num, label, title, id }) {
  return (
    <header className="section-head" id={id}>
      <div className="num">/ {String(num).padStart(2, '0')} &nbsp; {label}</div>
      <h2 className="title">{title}</h2>
    </header>
  );
}

window.SectionHead = SectionHead;
