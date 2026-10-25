
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

export default function Home() {
  return (
    <main className="bg-[#1C1C1C] font-[family-name:var(--font-inter)]">

      {/* Bakgrunnsbilde — mobil kun */}
      <div className="fixed inset-0 z-0 lg:hidden">
        <Image
          src="/olavbilde.jpg"
          alt="Olav Risan – Americana-artist fra Hønefoss"
          fill
          priority
          className="object-cover object-[center_20%]"
          style={{ filter: "grayscale(15%) contrast(1.05)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-[#1C1C1C]" />
      </div>

      {/* Desktop: to kolonner | Mobil: normal flow */}
      <div className="lg:grid lg:grid-cols-2 lg:max-w-[1700px] lg:mx-auto">

        {/* Venstre kolonne — bilde (desktop) / full hero (mobil) */}
        <div className="lg:sticky lg:top-0 lg:h-screen lg:relative">
          {/* Desktop bilde — normalt block-element, fyller grid-cellen */}
          <Image
            src="/olavbilde.jpg"
            alt="Olav Risan – Americana-artist fra Hønefoss"
            fill
            priority
            className="hidden lg:block object-cover object-[center_42%]"
            style={{ filter: "grayscale(15%) contrast(1.05)" }}
          />
          {/* Gradient overlay — kun desktop */}
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#111111]" />
          <div className="hidden lg:block absolute inset-y-0 right-0 w-32 bg-gradient-to-r from-transparent to-[#111111]" />

          {/* Mobil hero */}
          <section className="lg:hidden relative z-10 h-screen flex flex-col justify-end items-end px-5 pb-14 md:px-10 hero-section">
            <div className="flex flex-col items-end px-5 md:px-10">
              <h1 className="font-[family-name:var(--font-oswald)] font-bold text-[clamp(3.5rem,14vw,6.5rem)] text-white uppercase tracking-[-0.08em] leading-[0.85] flex flex-col items-end lg:items-center">
                <span>Olav</span>
                <span>Risan</span>
              </h1>
              <span className="font-[family-name:var(--font-oswald)] font-light text-sm md:text-base text-[#3E8E9E] uppercase tracking-[0.25em] mt-6">
                Making Up For Last Time
              </span>
              <a
                href="mailto:post@olavrisan.no?subject=Booking%20–%20Olav%20Risan"
                className="book-link font-[family-name:var(--font-oswald)] mt-5"
                style={{ transform: 'translateY(-5px)' }}
              >
                Book nå<span className="arrow">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
              </a>
            </div>
            <a href="#innhold" aria-label="Til innholdet" className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 animate-bounce">
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-50">
                <path d="M12 5v14M5 12l7 7 7-7"/>
              </svg>
            </a>
          </section>
        </div>

        {/* Høyre kolonne — innhold (desktop) / under hero (mobil) */}
        <div className="lg:flex lg:items-start lg:bg-[#111111]">
          <section id="innhold" className="relative z-10 w-full lg:min-h-screen">
          <div className="bg-[#1E1E1E] rounded-2xl overflow-hidden lg:rounded-none lg:min-h-screen px-0 mx-0 md:mx-4 lg:mx-0">

            {/* Tittel — kun desktop */}
            <div className="hidden lg:block px-5 md:px-10 pt-12 pb-0">
              <h1 className="font-[family-name:var(--font-oswald)] font-bold text-[clamp(3.5rem,6vw,5rem)] text-white uppercase tracking-[-0.08em] leading-[0.85]">
                <span className="block">Olav</span>
                <span className="block">Risan</span>
              </h1>
              <span className="font-[family-name:var(--font-oswald)] font-light text-sm text-[#3E8E9E] uppercase tracking-[0.25em] mt-4 block">
                Making Up For Last Time
              </span>
            </div>

            {/* Intro */}
            <div className="px-5 md:px-10 py-12 md:py-16 flex flex-col gap-4">
              <p className="font-[family-name:var(--font-oswald)] text-xs uppercase tracking-[0.12em] text-white/50">
                Om
              </p>
              <p className="font-[family-name:var(--font-playfair)] text-lg leading-snug text-white italic">
                Sterke melodier. Ærlige tekster. Musikk som setter seg.
              </p>
              <p className="text-base leading-relaxed text-white/80 max-w-[60ch]">
                Olav Risan fra Hønefoss debuterer med «Making Up For Last Time», et album som tar deg med gjennom country, folk, blues og rock. Med det fremragende backingbandet <strong className="text-white font-semibold">The Way To Go</strong> i ryggen har han skapt noe som føles både personlig og tidløst. Et friskt pust fra Ringerike i Americana-sjangeren!
              </p>
            </div>

            {/* Albumcover + Spotify */}
            <div className="border-t border-[#3E8E9E]/30 flex flex-col md:flex-row md:items-center lg:px-10 lg:py-10 lg:gap-8">
              <Image
                src="/album-artwork.jpg"
                alt="Olav Risan – Making Up For Last Time albumcover"
                width={512}
                height={512}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 256px, 192px"
                className="w-full md:w-64 md:h-64 md:shrink-0 lg:w-48 lg:h-48 lg:shrink-0 aspect-square object-cover shadow-[0_6px_24px_rgba(0,0,0,0.35)]"
              />
              <div className="flex flex-col gap-4 px-5 md:px-10 py-8 md:py-0 lg:py-8">
                <div>
                  <p className="font-[family-name:var(--font-oswald)] text-xs uppercase tracking-[0.12em] text-white/50 mb-1">
                    Making Up For Last Time
                  </p>
                  <p className="font-[family-name:var(--font-oswald)] text-sm uppercase tracking-[0.06em] text-white/80">
                    Tilgjengelig på <strong className="text-white">vinyl &amp; cd</strong>
                  </p>
                </div>
                <a
                  href="mailto:post@olavrisan.no?subject=Bestilling%20–%20Making%20Up%20For%20Last%20Time"
                  className="book-link font-[family-name:var(--font-oswald)] self-start"
                >
                  Bestill her<span className="arrow">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </span>
                </a>
                <div className="flex flex-wrap items-center gap-3">
                  {/* Primær — Spotify */}
                  <a
                    href="https://open.spotify.com/artist/0hSiuxLYerbqDcySdrxrlo?si=bMXfVJn_ScaS-_tyD50twQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#1DB954] hover:bg-[#1aa34a] transition-colors px-4 py-2.5 rounded-full w-fit"
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                    </svg>
                    <span className="text-white text-xs font-[family-name:var(--font-oswald)] tracking-[0.05em] uppercase font-semibold">
                      Hør på Spotify
                    </span>
                  </a>
                  {/* Sekundær — YouTube, hvit pille */}
                  <a
                    href="https://www.youtube.com/watch?v=dhKJeSGq-HY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 bg-white hover:bg-[#f0f0f0] active:bg-[#e0e0e0] transition-colors px-3 py-1.5 rounded-full w-fit"
                    aria-label="Se på YouTube"
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="#CD201F">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    <span className="text-[#1C1C1C] text-xs font-[family-name:var(--font-oswald)] tracking-[0.03em] uppercase font-semibold">
                      YouTube
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Anmeldelser */}
            <div className="border-t border-[#3E8E9E]/30 px-5 md:px-10 py-10 flex flex-col gap-6">
              <p className="font-[family-name:var(--font-oswald)] text-xs uppercase tracking-[0.12em] text-white/50">
                Anmeldelser
              </p>
              <blockquote className="border-l-[2px] border-white/30 pl-5 flex flex-col gap-2">
                <p className="font-[family-name:var(--font-oswald)] font-light text-base leading-relaxed italic text-white">
                  «Tilbring litt tid med Olav Risan og Making Up For Last Time – det tror jeg du kommer til å sette pris på.»
                </p>
                <cite className="block text-sm not-italic font-[family-name:var(--font-oswald)] tracking-[0.04em] text-white/50 uppercase">
                  Rune Letrud – Musikkbloggen
                </cite>
                <a href="https://www.musikkbloggen.no/2024/10/olav-risan-making-up-for-last-time/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-1.5 w-fit">
                  <span className="font-[family-name:var(--font-oswald)] text-[10px] uppercase tracking-[0.12em] text-[#3E8E9E]/70 group-hover:text-[#3E8E9E] transition-colors">
                    Les hele anmeldelsen
                  </span>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#3E8E9E]/50 group-hover:text-[#3E8E9E] group-hover:translate-x-0.5 transition-all">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </blockquote>
              <blockquote className="border-l-[2px] border-white/30 pl-5 flex flex-col gap-2">
                <p className="font-[family-name:var(--font-oswald)] font-light text-base leading-relaxed italic text-white">
                  «Dette er musikalitet, humør og spilleglede på høyt nivå.»
                </p>
                <cite className="block text-sm not-italic font-[family-name:var(--font-oswald)] tracking-[0.04em] text-white/50 uppercase">
                  Knut O – knutobloggen.blogspot.com
                </cite>
                <a href="https://knutobloggen.blogspot.com/2024/10/olav-risan-making-up-for-last-time.html?m=0" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-1.5 w-fit">
                  <span className="font-[family-name:var(--font-oswald)] text-[10px] uppercase tracking-[0.12em] text-[#3E8E9E]/70 group-hover:text-[#3E8E9E] transition-colors">
                    Les hele anmeldelsen
                  </span>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#3E8E9E]/50 group-hover:text-[#3E8E9E] group-hover:translate-x-0.5 transition-all">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </blockquote>
            </div>

            {/* Book nå */}
            <div className="border-t border-[#3E8E9E]/30 px-5 md:px-10 py-8 flex flex-col items-center gap-4 text-center">
              <div>
                <p className="font-[family-name:var(--font-oswald)] text-base tracking-[0.04em] text-white">
                  Vil du ha Olav Risan på scenen?
                </p>
                <p className="font-[family-name:var(--font-oswald)] font-light italic text-sm text-white/60 mt-1">
                  Ta kontakt, så finner vi en dato.
                </p>
              </div>
              <a
                href="mailto:post@olavrisan.no?subject=Booking%20–%20Olav%20Risan"
                className="book-link font-[family-name:var(--font-oswald)] text-2xl"
              >
                Book nå<span className="arrow">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
              </a>
            </div>

            {/* Kontakt */}
            <footer className="border-t border-[#3E8E9E]/30 px-5 md:px-10 py-6 flex flex-col items-center gap-4">
              <ul className="flex flex-col md:flex-row md:flex-wrap items-center gap-x-5 gap-y-3">
                <li>
                  <a href="mailto:post@olavrisan.no" className="flex items-center gap-2 text-sm font-[family-name:var(--font-oswald)] text-white/80 hover:text-white transition-colors">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2"/>
                      <path d="m2 7 10 7 10-7"/>
                    </svg>
                    post@olavrisan.no
                  </a>
                </li>
                <li>
                  <a href="tel:+4747259126" className="flex items-center gap-2 text-sm font-[family-name:var(--font-oswald)] text-white/80 hover:text-white transition-colors">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z"/>
                    </svg>
                    47 25 91 26
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/OlavRisanArtist" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-[family-name:var(--font-oswald)] text-white/80 hover:text-white transition-colors">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.791-4.697 4.533-4.697 1.313 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                    </svg>
                    Følg på Facebook
                  </a>
                </li>
              </ul>
              <div className="flex flex-wrap justify-center gap-x-5 gap-y-1 items-center">
                <span className="text-xs font-[family-name:var(--font-oswald)] tracking-[0.04em] text-white/30">
                  Foto: AKS Media
                </span>
                <a href="https://lilitlabs.no" target="_blank" rel="noopener noreferrer" className="text-xs font-[family-name:var(--font-oswald)] tracking-[0.04em] text-white/30 hover:text-white/60 transition-colors">
                  Nettside av: Lilit Labs™
                </a>
                <ThemeToggle />
              </div>
            </footer>

          </div>
          </section>
        </div>

      </div>
    </main>
  );
}
