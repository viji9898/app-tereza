import { StrictMode, useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import BaliRetreat from "./BaliRetreat";
import BaliInvestmentPage from "./BaliInvestmentPage";
import BaliSeptemberRetreat from "./BaliSeptemberRetreat";
import BaliSeptember7Days from "./BaliSeptember7Days";
import BaliSeptember7DaysVillaBeji from "./BaliSeptember7DaysVillaBeji";
import BaliImagesPage from "./BaliImagesPage";
import ContractsPage from "./ContractsPage";
import CorporateWellness from "./CorporateWellness";
import KuruluBayRetreat from "./KuruluBayRetreat";
import PalmsImagesPage from "./PalmsImagesPage";
import RetreatsPage from "./RetreatsPage";
import RetreatsDirectoryPage from "./RetreatsDirectoryPage";
import SriLankaInvestmentPage from "./SriLankaInvestmentPage";
import SriLankaOctober7Days from "./SriLankaOctober7Days";
import "./styles.css";

const HERO_VIDEO =
  "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-tereza/hero-video-over-layer-tereza-reel.mp4";

const HERO_POSTER = "/video-thumbnail.jpg";

const INNER_CIRCLE_URL = "https://chat.whatsapp.com/H1KtTJdTBh16hhf4cAfDSu";

const WHATSAPP_BALI_URL =
  "https://wa.me/201010001133?text=Tell%20me%20more%20about%20the%20Bali%20retreat";

const WHATSAPP_SRI_LANKA_URL =
  "https://wa.me/201010001133?text=Tell%20me%20more%20about%20the%20Sri%20Lanka%20retreat";

const pageMetadata = {
  home: {
    title: "Tereza Dos Santos | Travel Feather",
    description:
      "Music. Movement. Story. Human experience. Explore the work of Tereza Dos Santos across performance, film, education, immersive experiences, and wellness.",
    image: "/ogImage-home-page.jpeg",
    imageAlt: "Travel Feather by Tereza Dos Santos",
  },
  content: {
    title: "Tereza Reels | Travel Feather",
    description:
      "Watch Tereza Dos Santos performance reels, trailers, and curated video work in a compact playlist experience.",
    image: "/og-content-page.png",
    imageAlt: "Preview of the Tereza reels playlist page",
  },
  kuruluBay: {
    title:
      "The Return Sri Lanka Edition | September 21-30, 2026 | 10 Days, 9 Nights | Tereza Dos Santos",
    description:
      "Explore The Return Sri Lanka Edition, a private retreat running September 21-30, 2026 with 10 days and 9 nights of Ayurveda, movement, sound, and immersive restoration curated by Tereza Dos Santos.",
    image:
      "https://img.fitreisen.group/eyJidWNrZXQiOiJmaXRyZWlzZW4tY2RuLWltYWdlcyIsImtleSI6IjZEQjZFMzIyREU1MkFFNTlDQThCQkJCRTU3NjFEMDg2IiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxNjAwLCJoZWlnaHQiOjkwMCwiZml0IjoiY292ZXIiLCJwb3NpdGlvbiI6ImF0dGVudGlvbiJ9fX0=?signature=95da0fdc15dc80f60e1d8aeb14c35be56b56803999c229bbe68f306b1c677381",
    imageAlt: "Kurulu Bay retreat pool framed by tropical palms",
  },
  sriLankaOctober7Days: {
    title:
      "The RESET Sri Lanka Retreat | October 2-9, 2026 | 8 Days, 7 Nights | Tereza Dos Santos",
    description:
      "Join The RESET Sri Lanka at The Palms, an open retreat running October 2-9, 2026 with 8 days and 7 nights of movement, sound, and immersive restoration curated by Tereza Dos Santos.",
    image:
      "https://img.fitreisen.group/eyJidWNrZXQiOiJmaXRyZWlzZW4tY2RuLWltYWdlcyIsImtleSI6IjZEQjZFMzIyREU1MkFFNTlDQThCQkJCRTU3NjFEMDg2IiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxNjAwLCJoZWlnaHQiOjkwMCwiZml0IjoiY292ZXIiLCJwb3NpdGlvbiI6ImF0dGVudGlvbiJ9fX0=?signature=95da0fdc15dc80f60e1d8aeb14c35be56b56803999c229bbe68f306b1c677381",
    imageAlt: "Sri Lanka retreat pool framed by tropical palms",
  },
  sriLankaOctober7DaysInvestment: {
    title: "Investment | The RESET Sri Lanka Retreat | Tereza Dos Santos",
    description:
      "Investment and room information for The RESET Sri Lanka retreat, October 2-9, 2026.",
    image:
      "https://images.squarespace-cdn.com/content/v1/613f1e9767023c65771d8a8f/92c414ec-5896-48d1-92a4-10dc10450838/KuruluBaySriLanka050424_NateleeCocks_062.jpg?format=2500w",
    imageAlt: "The Palms retreat accommodation in Sri Lanka",
  },
  bali: {
    title:
      "The Return Bali Edition | October 3-12, 2026 | 10 Days, 9 Nights | Tereza Dos Santos",
    description:
      "Explore The Return Bali Edition, a private retreat running October 3-12, 2026 with 10 days and 9 nights of breathwork, movement, ritual, and immersive restoration curated by Tereza Dos Santos.",
    image:
      "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/paddy-field-bali-women-standing.jpg",
    imageAlt: "Women standing in a Bali paddy field",
  },
  baliSeptember: {
    title:
      "The Return Bali Edition | September 23-29, 2026 | 7 Days, 6 Nights | Tereza Dos Santos",
    description:
      "Explore The Return Bali September Edition, a private retreat running September 23-29, 2026 with 7 days and 6 nights of breathwork, movement, ritual, and immersive restoration curated by Tereza Dos Santos.",
    image:
      "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/paddy-field-bali-women-standing.jpg",
    imageAlt: "Women standing in a Bali paddy field",
  },
  baliSeptember7Days: {
    title:
      "The RESET Bali Retreat | September 23-29, 2026 | 7 Days, 6 Nights | Tereza Dos Santos",
    description:
      "Join The RESET Bali, an open retreat running September 23-29, 2026 with 7 days and 6 nights of breathwork, movement, ritual, and immersive restoration curated by Tereza Dos Santos.",
    image:
      "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/paddy-field-bali-women-standing.jpg",
    imageAlt: "Women standing in a Bali paddy field",
  },
  baliSeptember7DaysVillaBeji: {
    title:
      "The RESET Bali Retreat at Villa Beji | September 23-29, 2026 | Tereza Dos Santos",
    description:
      "Join The RESET Bali at Villa Beji, running September 23-29, 2026 with 7 days and 6 nights of breathwork, movement, ritual, and immersive restoration curated by Tereza Dos Santos.",
    image:
      "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/paddy-field-bali-women-standing.jpg",
    imageAlt: "Women standing in a Bali paddy field",
  },
  baliSeptember7DaysInvestment: {
    title: "Investment | The RESET Bali Retreat | Tereza Dos Santos",
    description:
      "Investment and room information for The RESET Bali retreat, September 23-29, 2026.",
    image:
      "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/8e62810a-84fe-4678-b93a-bc0c2be71c54/dwa+chandra+villa+1.jpg",
    imageAlt: "Dwa Chandra villa in Bali",
  },
  retreats: {
    title: "Retreats | Tereza Dos Santos",
    description:
      "Browse the Kurulu Bay and Bali retreat experiences curated by Tereza Dos Santos.",
    image:
      "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/paddy-field-bali-women-standing.jpg",
    imageAlt: "Retreat selection preview for Bali and Kurulu Bay",
  },
  retreatsDirectory: {
    title: "Retreats Directory | Tereza Dos Santos",
    description:
      "Administrative directory of Bali and Sri Lanka retreats curated by Tereza Dos Santos.",
    image:
      "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/paddy-field-bali-women-standing.jpg",
    imageAlt: "Retreat directory for Bali and Sri Lanka",
  },
  baliImages: {
    title: "Bali Image Collection | Tereza Dos Santos",
    description:
      "Temporary Bali image library for selecting Dwa Chandra and retreat assets.",
    image:
      "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/paddy-field-bali-women-standing.jpg",
    imageAlt: "Preview of the Bali image collection",
  },
  palmsImages: {
    title: "The Palms Image Collection | Tereza Dos Santos",
    description:
      "Image library for The Palms Sri Lanka venue, brand, and retreat assets with resolution and file-size details.",
    image:
      "https://cdn.prod.website-files.com/66f278307a717e3092522530/67206d1467066b0d7a1b4d88_67206b417a66087aa5195e36_Main-image_C.webp",
    imageAlt: "Preview of The Palms image collection",
  },
  contracts: {
    title: "Contracts | Tereza Dos Santos",
    description:
      "A working checklist of key commercial, media, cancellation, and attribution terms to include in event agreements involving Tereza Dos Santos.",
    image:
      "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/paddy-field-bali-women-standing.jpg",
    imageAlt: "Contracts checklist page for Tereza Dos Santos",
  },
  corporate: {
    title: "Corporate Wellness | Tereza Dos Santos",
    description:
      "Science-backed corporate wellness programs for team resilience, sustainable performance, recovery, and human connection with Tereza Dos Santos.",
    image: "/corporate/cover.jpg",
    imageAlt: "Corporate wellness with Tereza Dos Santos",
  },
};

function setMetaContent(name, content, attribute = "name") {
  const selector = `meta[${attribute}="${name}"]`;
  const element = document.head.querySelector(selector);

  if (element) {
    element.setAttribute("content", content);
  }
}

function usePageMetadata(metadata) {
  useEffect(() => {
    document.title = metadata.title;
    setMetaContent("description", metadata.description);
    setMetaContent("og:title", metadata.title, "property");
    setMetaContent("og:description", metadata.description, "property");
    setMetaContent("og:image", metadata.image, "property");
    setMetaContent("og:image:alt", metadata.imageAlt, "property");
    setMetaContent("twitter:title", metadata.title);
    setMetaContent("twitter:description", metadata.description);
    setMetaContent("twitter:image", metadata.image);
  }, [metadata]);
}

const tracks = [
  {
    title: "Tereza Piano Reel",
    meta: "Piano reel",
    src: "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-tereza/tereza_piano_reel+(1080p).mp4",
  },
  {
    title: "Spirit Reel Edit",
    meta: "Spirit reel",
    src: "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-tereza/Spirit+Reel+Edit_JZ+NEW_123024.mp4",
  },
  {
    title: "Tereza Dos Santos Costa Spirit Reel 2024",
    meta: "Performance reel",
    src: "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-tereza/tereza_dos_santos_costa_spirit_reel_2024+(1080p).mp4",
  },
  {
    title: "Skywalkers June Trailer",
    meta: "Trailer",
    src: "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-tereza/skywalkers_june_trailer_jz_cut+(1080p).mp4",
  },
  {
    title: "Crush Trailer",
    meta: "Trailer",
    src: "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-tereza/crush_trailer_jz_edit+(1080p).mp4",
  },
];

function HomePage() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return undefined;
    }

    let rafId = 0;
    let retryTimeoutId = 0;
    let retryCount = 0;
    let playbackStarted = false;

    const tryPlay = () => {
      video.defaultMuted = true;
      video.muted = true;

      if (document.hidden || !video.paused) {
        return;
      }

      video.play().catch(() => {});
    };

    const scheduleRetry = () => {
      if (
        playbackStarted ||
        document.hidden ||
        !video.paused ||
        retryCount >= 12
      ) {
        return;
      }

      retryTimeoutId = window.setTimeout(() => {
        retryCount += 1;
        tryPlay();
        scheduleRetry();
      }, 300);
    };

    const handleCanPlay = () => {
      tryPlay();
      scheduleRetry();
    };

    const handlePlaying = () => {
      playbackStarted = true;
      window.clearTimeout(retryTimeoutId);
    };

    const handleVisibilityChange = () => {
      if (!document.hidden) {
        tryPlay();
        scheduleRetry();
      }
    };

    tryPlay();
    rafId = requestAnimationFrame(tryPlay);
    scheduleRetry();

    video.addEventListener("loadeddata", handleCanPlay);
    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("playing", handlePlaying);
    window.addEventListener("pageshow", tryPlay);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      cancelAnimationFrame(rafId);
      window.clearTimeout(retryTimeoutId);
      video.removeEventListener("loadeddata", handleCanPlay);
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("playing", handlePlaying);
      window.removeEventListener("pageshow", tryPlay);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  function togglePlayback() {
    if (!videoRef.current) {
      return;
    }

    if (videoRef.current.paused) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  }

  function toggleSound() {
    if (!videoRef.current) {
      return;
    }

    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  }

  return (
    <main
      className="hero"
      aria-label="Tereza Dos Santos Costa Spirit Reel 2024"
    >
      <video
        ref={videoRef}
        className="hero__video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={HERO_POSTER}
        aria-label="Tereza Dos Santos Costa Spirit Reel 2024"
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
        onVolumeChange={(event) => setIsMuted(event.currentTarget.muted)}
      >
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>
      <div className="hero__overlay">
        <h1 className="hero__name">
          <span className="hero__name-main">TEREZA</span>
          <span className="hero__name-sub">DOS SANTOS</span>
        </h1>
        <div className="hero__socials" aria-label="Social links">
          <div className="hero__socials-row">
            <a
              className="hero__circle-link hero__circle-link--retreat"
              href={WHATSAPP_BALI_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="hero__retreat-card-copy">
                <span className="hero__retreat-card-title">Bali</span>
                <span className="hero__retreat-card-meta">
                  Ask about the retreat →
                </span>
              </span>
            </a>
            <a
              className="hero__circle-link hero__circle-link--retreat"
              href={WHATSAPP_SRI_LANKA_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="hero__retreat-card-copy">
                <span className="hero__retreat-card-title">Sri Lanka</span>
                <span className="hero__retreat-card-meta">
                  Ask about the retreat →
                </span>
              </span>
            </a>
          </div>
          <a
            className="hero__circle-link hero__circle-link--secondary"
            href={INNER_CIRCLE_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Join The Inner Circle
          </a>
        </div>
        <div className="hero__video-controls" aria-label="Video controls">
          <button type="button" onClick={togglePlayback}>
            {isPlaying ? "Pause" : "Play"}
          </button>
          <button type="button" onClick={toggleSound}>
            {isMuted ? "Sound On" : "Sound Off"}
          </button>
        </div>
      </div>
    </main>
  );
}

function ContentPage() {
  const [activeTrack, setActiveTrack] = useState(0);
  const playerRef = useRef(null);
  const currentTrack = tracks[activeTrack];

  function selectTrack(index, shouldPlay = false) {
    setActiveTrack((index + tracks.length) % tracks.length);
    if (shouldPlay) {
      requestAnimationFrame(() => playerRef.current?.play().catch(() => {}));
    }
  }

  return (
    <main className="page">
      <div className="shell">
        <nav className="topbar" aria-label="Primary navigation">
          <a className="brand" href="/">
            T&amp;V
          </a>
          <span className="topbar__divider" aria-hidden="true" />
        </nav>

        <section className="intro" aria-labelledby="page-title">
          <h1 id="page-title">Tereza reels</h1>
          <p className="intro__copy">
            A compact player for piano, Spirit, and performance reels.
          </p>
        </section>

        <section className="player" aria-label="Video playlist">
          <div className="stage">
            <video
              ref={playerRef}
              controls
              playsInline
              preload="metadata"
              src={currentTrack.src}
              onEnded={() => selectTrack(activeTrack + 1, true)}
            />
            <div className="controls">
              <div className="track-title" aria-live="polite">
                <p>Now playing</p>
                <h2>{currentTrack.title}</h2>
              </div>
              <div className="transport" aria-label="Playlist controls">
                <button
                  className="icon-button"
                  type="button"
                  aria-label="Previous video"
                  onClick={() => selectTrack(activeTrack - 1, true)}
                >
                  &lt;
                </button>
                <button
                  className="icon-button"
                  type="button"
                  aria-label="Next video"
                  onClick={() => selectTrack(activeTrack + 1, true)}
                >
                  &gt;
                </button>
              </div>
            </div>
          </div>

          <aside className="playlist" aria-label="Playlist">
            <div className="playlist__header">
              <p className="section-label">Playlist</p>
              <h2>Video reels</h2>
            </div>
            <div className="playlist__items">
              {tracks.map((track, index) => (
                <button
                  className="playlist__item"
                  type="button"
                  aria-current={index === activeTrack}
                  key={track.src}
                  onClick={() => selectTrack(index, true)}
                >
                  <span className="playlist__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="playlist__name">{track.title}</span>
                    <span className="playlist__meta">{track.meta}</span>
                  </span>
                </button>
              ))}
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}

function App() {
  const pathname = window.location.pathname;
  const metadata = pathname.startsWith("/sri-lanka-october-7-days/investment")
    ? pageMetadata.sriLankaOctober7DaysInvestment
    : pathname.startsWith("/sri-lanka-october-7-days")
      ? pageMetadata.sriLankaOctober7Days
      : pathname.startsWith("/sri-lanka")
        ? pageMetadata.kuruluBay
        : pathname.startsWith("/retreats-directory")
          ? pageMetadata.retreatsDirectory
          : pathname.startsWith("/retreats")
            ? pageMetadata.retreats
            : pathname.startsWith("/palms-image")
              ? pageMetadata.palmsImages
              : pathname.startsWith("/bali-images")
                ? pageMetadata.baliImages
                : pathname.startsWith("/corporate")
                  ? pageMetadata.corporate
                : pathname.startsWith("/contracts")
                  ? pageMetadata.contracts
                  : pathname.startsWith("/bali-september-7-days/investment")
                    ? pageMetadata.baliSeptember7DaysInvestment
                    : pathname.startsWith(
                          "/bali-september-7-days-villa-beji",
                        )
                      ? pageMetadata.baliSeptember7DaysVillaBeji
                    : pathname.startsWith("/bali-september-7-days")
                      ? pageMetadata.baliSeptember7Days
                      : pathname.startsWith("/bali-september")
                        ? pageMetadata.baliSeptember
                        : pathname.startsWith("/bali-october")
                          ? pageMetadata.bali
                          : pathname.startsWith("/content")
                            ? pageMetadata.content
                            : pageMetadata.home;

  usePageMetadata(metadata);

  if (pathname.startsWith("/sri-lanka-october-7-days/investment")) {
    return <SriLankaInvestmentPage />;
  }

  if (pathname.startsWith("/sri-lanka-october-7-days")) {
    return <SriLankaOctober7Days />;
  }

  if (pathname.startsWith("/sri-lanka")) {
    return <KuruluBayRetreat />;
  }

  if (pathname.startsWith("/retreats-directory")) {
    return <RetreatsDirectoryPage />;
  }

  if (pathname.startsWith("/retreats")) {
    return <RetreatsPage />;
  }

  if (pathname.startsWith("/palms-image")) {
    return <PalmsImagesPage />;
  }

  if (pathname.startsWith("/bali-images")) {
    return <BaliImagesPage />;
  }

  if (pathname.startsWith("/corporate")) {
    return <CorporateWellness />;
  }

  if (pathname.startsWith("/contracts")) {
    return <ContractsPage />;
  }

  if (pathname.startsWith("/bali-september-7-days/investment")) {
    return <BaliInvestmentPage />;
  }

  if (pathname.startsWith("/bali-september-7-days-villa-beji")) {
    return <BaliSeptember7DaysVillaBeji />;
  }

  if (pathname.startsWith("/bali-september-7-days")) {
    return <BaliSeptember7Days />;
  }

  if (pathname.startsWith("/bali-september")) {
    return <BaliSeptemberRetreat />;
  }

  if (pathname.startsWith("/bali-october")) {
    return <BaliRetreat />;
  }

  if (pathname.startsWith("/content")) {
    return <ContentPage />;
  }

  return <HomePage />;
}

const rootElement = document.getElementById("root");
const root = window.__travelFeatherRoot ?? createRoot(rootElement);
window.__travelFeatherRoot = root;

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
