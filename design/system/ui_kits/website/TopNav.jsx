/* TopNav — sticky masthead. Theme toggle is controlled by index.html. */

const NAV_ITEMS = ['About', 'Education', 'Work', 'Projects', 'Skills', 'Writing', 'Contact'];

function TopNav({ active, onNav, theme, onToggleTheme }) {
  return (
    <nav className="topnav">
      <div className="container topnav-inner">
        <a href="#top" className="brand" onClick={(e) => { e.preventDefault(); onNav('Top'); }}>
          Wei<span className="dot">.</span>
        </a>
        <div className="nav-links">
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={active === item ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); onNav(item); }}
            >
              {item}
            </a>
          ))}
        </div>
        <button className="theme-toggle" onClick={onToggleTheme} aria-label="Toggle theme">
          <span aria-hidden="true">{theme === 'dark' ? '☾' : '◐'}</span>
          {theme === 'dark' ? 'Dark' : 'Light'}
        </button>
      </div>
    </nav>
  );
}

window.TopNav = TopNav;
