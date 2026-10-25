import type { Metadata } from "next";
import { Oswald, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import ThemeToggle from "./ThemeToggle";

// Oswald: navnet og overskriftene. Lastes først, siden navnet er det største på mobil.
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-oswald",
});

// Inter: brødteksten. Kursiv brukes ikke, så den lastes ikke.
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
});

// Playfair: bare «Sterke melodier ...» i kursiv, langt nede på siden.
// preload: false, så den ikke konkurrerer med navnet og bildet på mobil.
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  variable: "--font-playfair",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://olavrisan.no"),
  title: "Olav Risan · Americana-artist fra Hønefoss · Making Up For Last Time",
  description: "Olav Risan debuterer med albumet Making Up For Last Time, en reise gjennom country, folk og blues. Norsk Americana fra Hønefoss på sitt beste.",
  openGraph: {
    title: "Olav Risan · Making Up For Last Time",
    description: "Olav Risan debuterer med albumet Making Up For Last Time, en reise gjennom country, folk og blues. Norsk Americana fra Hønefoss på sitt beste.",
    type: "website",
    locale: "nb_NO",
    images: [
      {
        url: "/album-artwork.jpg",
        width: 1200,
        height: 1200,
        alt: "Albumcoveret til Making Up For Last Time av Olav Risan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Olav Risan · Making Up For Last Time",
    description: "Norsk Americana fra Hønefoss. Debutalbum ute nå.",
    images: ["/album-artwork.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  name: "Olav Risan",
  genre: ["Americana", "Country", "Folk", "Blues"],
  url: "https://olavrisan.no",
  description: "Olav Risan er en Americana-artist fra Hønefoss som debuterer med albumet Making Up For Last Time.",
  album: {
    "@type": "MusicAlbum",
    name: "Making Up For Last Time",
    byArtist: { "@type": "MusicGroup", name: "Olav Risan" },
  },
  sameAs: [
    "https://open.spotify.com/artist/0hSiuxLYerbqDcySdrxrlo",
    "https://www.facebook.com/OlavRisanArtist",
    "https://www.youtube.com/watch?v=dhKJeSGq-HY",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "post@olavrisan.no",
    telephone: "+4747259126",
    contactType: "booking",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="no" className={`${oswald.variable} ${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
