import "./globals.css";
import { concept } from "../lib/concept";
import TopBarTemplate1 from "../components/TopBarTemplate1";
import NavTemplate1 from "../components/NavTemplate1";
import FooterTemplate1 from "../components/FooterTemplate1";

export const metadata = {
  title: "Spetter & Paint Room Rotterdam | Unieke Paint Experiences & Blacklight Schilderen",
  description: "Ontdek Rotterdam's meest kleurrijke creatieve hotspot! Spetter & Paint experiences, blacklight paint & sip en ouder-kind sessies. Boek nu je ultieme art experience.",
};

export default function RootLayout({ children }) {
  const c = concept.colors || {};
  const themeStyle = {
    "--t1-accent": c.primary || "#9e8c7b",
    "--t1-accent-2": c.accent || c.primary || "#9e8c7b",
    "--t1-bg": c.background || "#eeeeee",
    "--t1-dark": c.text || "#151515",
    "--t1-text": c.text || "#000000",
  };
  return (
    <html lang="nl">
      <body className="bg-[var(--t1-bg)]" style={themeStyle}>
        <TopBarTemplate1 />
        <NavTemplate1 />
        {children}
        <FooterTemplate1 />
      </body>
    </html>
  );
}
