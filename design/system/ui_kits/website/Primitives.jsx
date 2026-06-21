/* Primitives — small shared atoms used across the kit. */

const Eyebrow = ({ children, className = '' }) => (
  <span className={`eyebrow ${className}`}>{children}</span>
);

const Tag = ({ children }) => <span className="tag">{children}</span>;

const StatusPill = ({ available = true, children }) => (
  <span className="status-pill" role="status">
    <span className="marker" aria-hidden="true">{available ? '◍' : '●'}</span>
    {children}
  </span>
);

const Button = ({ children, variant = 'primary', href, onClick }) => {
  const cls = variant === 'ghost' ? 'btn-ghost' : 'btn';
  if (href) return <a className={cls} href={href} onClick={onClick}>{children}</a>;
  return <button className={cls} onClick={onClick}>{children}</button>;
};

const LinkArrow = ({ external = false }) => (
  <span className="arrow" aria-hidden="true">{external ? '↗' : '→'}</span>
);

Object.assign(window, { Eyebrow, Tag, StatusPill, Button, LinkArrow });
