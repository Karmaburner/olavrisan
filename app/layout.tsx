import type { Metadata } from "next";
import { Oswald, Inter, Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import ThemeToggle from "./ThemeToggle";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-oswald",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-manrope",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://olavrisan.no"),
  title: "Olav Risan – Americana-artist fra Hønefoss | Making Up For Last Time",
  description: "Olav Risan debuterer med albumet Making Up For Last Time — en reise gjennom country, folk og blues. Norsk Americana fra Hønefoss på sitt beste.",
  openGraph: {
    title: "Olav Risan – Making Up For Last Time",
    description: "Olav Risan debuterer med albumet Making Up For Last Time — en reise gjennom country, folk og blues. Norsk Americana fra Hønefoss på sitt beste.",
    type: "website",
    locale: "nb_NO",
    images: [
      {
        url: "/album-artwork.jpg",
        width: 1200,
        height: 1200,
        alt: "Olav Risan – Making Up For Last Time albumcover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Olav Risan – Making Up For Last Time",
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
    <html lang="no" className={`${oswald.variable} ${inter.variable} ${manrope.variable} ${playfair.variable}`}>
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
