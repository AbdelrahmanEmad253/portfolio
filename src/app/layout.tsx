import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/Shell";
import { Effects } from "@/components/Effects";
import { site } from "@/data/site";

const head = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-head", axes: ["opsz", "wdth"] });
const body = Instrument_Sans({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: { default: `${site.name}: ${site.role}`, template: `%s · ${site.name}` },
  description: site.intro,
  openGraph: { title: `${site.name}: ${site.role}`, description: site.tagline, type: "website" },
};

const themeScript = `try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark")t=matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";document.documentElement.setAttribute("data-theme",t)}catch(e){document.documentElement.setAttribute("data-theme","dark")}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${head.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <Effects />
      </body>
    </html>
  );
}
