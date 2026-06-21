"use client";

import { useCallback, useEffect, useState } from "react";
import Logo from "./Logo";
import { nav } from "@/lib/content";

export default function TopNav() {
  const [active, setActive] = useState<string>("about");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [menuOpen, setMenuOpen] = useState(false);

  // Adopt the theme the pre-paint script already set on <html>.
  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    setTheme(current === "dark" ? "dark" : "light");
  }, []);

  // Scrollspy — highlight the section currently under the masthead.
  useEffect(() => {
    const els = nav
      .map((n) => ({ id: n.id, el: document.getElementById(n.id) }))
      .filter((s): s is { id: string; el: HTMLElement } => Boolean(s.el));
    if (els.length === 0) return;

    const onScroll = () => {
      const y = window.scrollY + 140;
      let current = els[0].id;
      for (const s of els) {
        if (s.el.offsetTop <= y) current = s.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((t) => {
      const next = t === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", next);
      try {
        localStorage.setItem("theme", next);
      } catch {
        /* storage may be unavailable — the toggle still works for the session */
      }
      return next;
    });
  }, []);

  return (
    <nav className="topnav" aria-label="Primary">
      <div className="container topnav-inner">
        <a
          href="#top"
          className="brand"
          aria-label="Wei Chen — home"
          onClick={() => setMenuOpen(false)}
        >
          <Logo size={30} className="brand-mark" title="" />
          <span className="brand-word" aria-hidden="true">
            Wei<span className="dot">.</span>
          </span>
        </a>

        <div className={`nav-links ${menuOpen ? "open" : ""}`} id="nav-menu">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={active === item.id ? "active" : ""}
              aria-current={active === item.id ? "true" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              <span className="num" aria-hidden="true">
                / {String(item.num).padStart(2, "0")}
              </span>
              {item.label}
            </a>
          ))}
        </div>

        <div className="nav-controls">
          <button
            className="nav-toggle"
            aria-expanded={menuOpen}
            aria-controls="nav-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="glyph" aria-hidden="true">
              {menuOpen ? "×" : "≡"}
            </span>
            Index
          </button>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            <span className="glyph" aria-hidden="true">
              {theme === "dark" ? "☾" : "◐"}
            </span>
            <span className="toggle-label">
              {theme === "dark" ? "Dark" : "Light"}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}
