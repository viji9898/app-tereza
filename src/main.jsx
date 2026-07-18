import { StrictMode, useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const HERO_VIDEO =
  "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-tereza/hero-video-over-layer-tereza-reel.mp4";

const INNER_CIRCLE_URL = "https://chat.whatsapp.com/H1KtTJdTBh16hhf4cAfDSu";

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
  if (window.location.pathname.startsWith("/content")) {
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