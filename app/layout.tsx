import type { Metadata, Viewport } from "next";
import { Alfa_Slab_One, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { identity } from "@/lib/content";

/* Free, OFL-licensed Google Fonts — the production type stack.
 * Display — Alfa Slab One · Body — Hanken Grotesk · Mono — JetBrains Mono.
 * The licensed Girga / Untitled Sans files are intentionally not shipped. */
const alfa = Alfa_Slab_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-alfa",
});

const hanken = Hanken_Grotesk({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-hanken",
});

const jetbrains = JetBrains_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
});

const SITE_TITLE = "Wei Chen · building things that think";
const SITE_DESCRIPTION =
  "Wei Chen is a physics and math double major at Wabash College, headed to Columbia for computer science, with research in machine learning, zero-field NMR, and number theory.";

export const metadata: Metadata = {
  metadataBase: new URL(identity.siteUrl),
  title: {
    default: SITE_TITLE,
    template: "%s · Wei Chen",
  },
  description: SITE_DESCRIPTION,
  applicationName: "Wei Chen",
  authors: [{ name: "Wei Chen", url: identity.siteUrl }],
  alternates: { canonical: "/" },
  keywords: [
    "Wei Chen",
    "Wabash College",
    "mathematics",
    "physics",
    "Columbia University",
    "machine learning",
    "quantum computing",
    "ZULF NMR",
    "number theory",
  ],
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: identity.siteUrl,
    siteName: "Wei Chen",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${alfa.variable} ${hanken.variable} ${jetbrains.variable}`}
    >
      <head>
        {/* Set the theme before paint to avoid a flash. Respects a saved
            choice, otherwise follows the OS preference. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var d=document.documentElement;d.classList.add('js');try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}d.setAttribute('data-theme',t);}catch(e){d.setAttribute('data-theme','light');}})();`,
          }}
        />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
