import type { Metadata, Viewport } from "next";
import { Alfa_Slab_One, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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

const SITE_DESCRIPTION =
  "Wei Chen — math and computer science at Wabash College, drawn to the math behind the code. Building things that think.";

export const metadata: Metadata = {
  metadataBase: new URL("https://weichen.studio"),
  title: {
    default: "Wei Chen — building things that think",
    template: "%s · Wei Chen",
  },
  description: SITE_DESCRIPTION,
  applicationName: "weichen.studio",
  authors: [{ name: "Wei Chen" }],
  keywords: [
    "Wei Chen",
    "Wabash College",
    "mathematics",
    "computer science",
    "AI",
    "quantum computing",
  ],
  openGraph: {
    title: "Wei Chen — building things that think",
    description: SITE_DESCRIPTION,
    url: "https://weichen.studio",
    siteName: "weichen.studio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Wei Chen — building things that think",
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
