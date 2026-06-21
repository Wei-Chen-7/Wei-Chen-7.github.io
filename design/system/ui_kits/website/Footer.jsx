/* Footer — © MMXXVI · WEI CHEN · BUILT WITH CARE */

function Footer() {
  return (
    <footer className="footer">
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', width: '100%', flexWrap: 'wrap', gap: '18px' }}>
        <div className="row">
          <span>© MMXXVI</span>
          <span className="sep">·</span>
          <span>Wei Chen</span>
          <span className="sep">·</span>
          <span>Built with care</span>
        </div>
        <div className="row">
          <span>Alfa Slab One</span>
          <span className="sep">·</span>
          <span>Hanken Grotesk</span>
          <span className="sep">·</span>
          <span>JetBrains Mono</span>
        </div>
      </div>
    </footer>
  );
}

window.Footer = Footer;
