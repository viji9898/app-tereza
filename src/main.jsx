import { StrictMode, useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import KuruluBayRetreat from "./KuruluBayRetreat";
import "./styles.css";

const HERO_VIDEO =
  "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-tereza/hero-video-over-layer-tereza-reel.mp4";

const INNER_CIRCLE_URL = "https://chat.whatsapp.com/H1KtTJdTBh16hhf4cAfDSu";

const pageMetadata = {
  home: {
    title: "Tereza Dos Santos | Travel Feather",
    description:
      "Music. Movement. Story. Human experience. Explore the work of Tereza Dos Santos across performance, film, education, immersive experiences, and wellness.",
    image: "ogImage-home-page.jpeg",
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
    title: "The Return Sri Lanka Edition | Tereza Dos Santos",
    description:
      "Explore The Return, a 10-day private Sri Lanka retreat curated by Tereza Dos Santos with Ayurveda, movement, sound, and immersive restoration.",
    image:
      "https://img.fitreisen.group/eyJidWNrZXQiOiJmaXRyZWlzZW4tY2RuLWltYWdlcyIsImtleSI6IjZEQjZFMzIyREU1MkFFNTlDQThCQkJCRTU3NjFEMDg2IiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxNjAwLCJoZWlnaHQiOjkwMCwiZml0IjoiY292ZXIiLCJwb3NpdGlvbiI6ImF0dGVudGlvbiJ9fX0=?signature=95da0fdc15dc80f60e1d8aeb14c35be56b56803999c229bbe68f306b1c677381",
    imageAlt: "Kurulu Bay retreat pool framed by tropical palms",
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

    video.defaultMuted = true;
    video.muted = true;

    const playVideo = () => {
      video.play().catch(() => {});
    };

    playVideo();
    video.addEventListener("canplay", playVideo, { once: true });

    return () => video.removeEventListener("canplay", playVideo);
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
    <main className="hero" aria-label="Tereza Dos Santos Costa Spirit Reel 2024">
      <video
        ref={videoRef}
        className="hero__video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
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
          <a
            className="hero__circle-link"
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
          <p className="section-label">Content</p>
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
  const metadata = pathname.startsWith("/kurulu-bay")
    ? pageMetadata.kuruluBay
    : pathname.startsWith("/content")
      ? pageMetadata.content
      : pageMetadata.home;

  usePageMetadata(metadata);

  if (pathname.startsWith("/kurulu-bay")) {
    return <KuruluBayRetreat />;
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