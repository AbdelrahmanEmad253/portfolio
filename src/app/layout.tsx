import type { Metadata } from "next";
import "./globals.css";
import { Header, Footer } from "@/components/Shell";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: { default: `${site.name}: ${site.role}`, template: `%s · ${site.name}` },
  description: site.intro,
  openGraph: { title: `${site.name}: ${site.role}`, description: site.tagline, type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
