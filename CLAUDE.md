# Risan – Olav Risan musikerside

## Stack
- Next.js 16.2.2 (Turbopack), React 19.2.4, TypeScript
- Tailwind CSS v4 (`@import "tailwindcss"` i globals.css)
- Fonter: Oswald + Source Serif 4 via `next/font/google`

## Viktig – Windows/WSL lightningcss-feil
`npm install` fra WSL installerer Linux-binaries. Hvis du får feil om manglende `.node`-fil:
1. Kjør `npm install` fra Windows cmd (ikke WSL)
2. Kopier `lightningcss.win32-x64-msvc.node` fra `node_modules/lightningcss-win32-x64-msvc/` til `node_modules/lightningcss/`
3. Slett `.next`-mappen: `rmdir /s /q .next` (fra Windows cmd)
4. Start dev-server på nytt fra Windows: `npm run dev`

## Struktur
- `app/page.tsx` – hele siden (én side)
- `app/layout.tsx` – fonter, metadata, Open Graph, JSON-LD
- `app/globals.css` – CSS-variabler og Tailwind-import
- `public/olavbilde.jpg` – hero-bilde (artist)
- `public/album-artwork.jpg` – albumcover

## Design
- Farger: `#1C1C1C` (mørk bakgrunn), `#2F6E7C` (teal innholdsseksjon), `#3E8E9E` (teal lys/aksent), hvit tekst i innhold
- Hero: fast bakgrunnsbilde (`position: fixed`) med overlay-tekst — innhold scroller over bildet
- Tittel "OLAV / RISAN" stablet vertikalt, venstrejustert internt, mobil: nederst i hero / desktop: øverst til høyre
- "Making Up For Last Time" undertittel i `#3E8E9E`, klart underordnet h1
- Nedoverpil (bounce-animasjon) med ankerlenke `#innhold` for scroll
- "Book nå"-banner: `fixed top-5 right-5`, glass-morfisme stil med backdrop-blur
- Innholdsseksjon: `bg-[#2F6E7C]`, `max-w-3xl`, seksjoner separert med `border-t border-white/15`

## Seksjoner i innhold
1. **Intro** – tre avsnitt om albumet
2. **Album** – cover + "Tilgjengelig på vinyl & cd" + Spotify- og YouTube-knapper (ghost-stil)
3. **Anmeldelser** – to sitater med lenker til anmeldelsene
4. **Kontakt** – epost, telefon (ikon), Facebook (sirkulær knapp + tekst)

## SEO / Metadata (layout.tsx)
- `metadataBase`: `https://olavrisan.no`
- Title: "Olav Risan – Americana-artist fra Hønefoss | Making Up For Last Time"
- Open Graph: `type: "website"`, albumcover-bilde
- Twitter Card: `summary_large_image`
- JSON-LD: `MusicArtist` med sjanger, album, sameAs (Spotify/Facebook/YouTube), bookingkontakt

## Innhold / Lenker
- Albumtittel: *Making Up for Last Time*
- Spotify: https://open.spotify.com/artist/0hSiuxLYerbqDcySdrxrlo
- YouTube: https://www.youtube.com/watch?v=dhKJeSGq-HY
- Facebook: https://www.facebook.com/OlavRisanArtist
- Anmeldelse 1: https://www.musikkbloggen.no/2024/10/olav-risan-making-up-for-last-time/
- Anmeldelse 2: https://knutobloggen.blogspot.com/2024/10/olav-risan-making-up-for-last-time.html?m=0
- Kontakt: post@olavrisan.no / 47 25 91 26
- Foto: AKS Media
- Web: Lilit Labs
