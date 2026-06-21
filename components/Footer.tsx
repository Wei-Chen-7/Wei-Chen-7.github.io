import Logo from "./Logo";
import { colophon, identity } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="colophon-mark">
          <Logo size={56} className="mark" title="Wei Chen monogram" />
          <span className="said">
            A printed object you can scroll. {colophon.tagline}
          </span>
        </div>

        <div className="meta-stack">
          <div className="meta-row">
            <span>{colophon.copyright}</span>
            <span className="sep">·</span>
            <span>{colophon.name}</span>
            <span className="sep">·</span>
            <span>{colophon.tagline}</span>
          </div>
          <div className="meta-row">
            <span>{identity.domain}</span>
            <span className="sep">·</span>
            <span>Set in {colophon.fonts.join(" · ")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
