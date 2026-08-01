import { useMemo, useState } from "react";
import "./KuruluBayRetreat.css";

const imageAssets = {
  villa:
    "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-kurulu-bay-retreat/2bedroom+villa.png",
  sonicBreath:
    "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-kurulu-bay-retreat/tereza-sonic-breath.jpg",
  cottages:
    "https://images.squarespace-cdn.com/content/v1/613f1e9767023c65771d8a8f/e996980f-77af-4ca1-ac1a-648b18a6941a/siriwanchmprn_KuruluBay_20220211-19.jpg?format=1500w",
  cover:
    "https://img.fitreisen.group/eyJidWNrZXQiOiJmaXRyZWlzZW4tY2RuLWltYWdlcyIsImtleSI6IjZEQjZFMzIyREU1MkFFNTlDQThCQkJCRTU3NjFEMDg2IiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxNjAwLCJoZWlnaHQiOjkwMCwiZml0IjoiY292ZXIiLCJwb3NpdGlvbiI6ImF0dGVudGlvbiJ9fX0=?signature=95da0fdc15dc80f60e1d8aeb14c35be56b56803999c229bbe68f306b1c677381",
  ayurvedaHero:
    "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-kurulu-bay-retreat/shirodhara-treatment.jpg",
  piano:
    "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-kurulu-bay-retreat/tereza-pionma.jpg",
  treehouse:
    "https://img.fitreisen.group/eyJidWNrZXQiOiJmaXRyZWlzZW4tY2RuLWltYWdlcyIsImtleSI6IkM0ODk0Rjc4QzJDOTBCMTJEQTM1OEM3MzMwRTYzQzY5IiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozODQwLCJmaXQiOiJjb3ZlciIsInBvc2l0aW9uIjoiY2VudGVyIn0sImpwZWciOnsicXVhbGl0eSI6NzV9LCJ3ZWJwIjp7InF1YWxpdHkiOjc1fSwiYXZpZiI6eyJxdWFsaXR5Ijo1MH19fQ==?signature=688e5c856c56497cec55c843a8571150b1e33e7165f2bed2c17a6022bfab6112",
  lakeView:
    "https://images.squarespace-cdn.com/content/v1/613f1e9767023c65771d8a8f/e996980f-77af-4ca1-ac1a-648b18a6941a/siriwanchmprn_KuruluBay_20220211-19.jpg?format=1500w",
  massage:
    "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-kurulu-bay-retreat/massage-face-down.png",
  bedroom:
    "https://img.fitreisen.group/eyJidWNrZXQiOiJmaXRyZWlzZW4tY2RuLWltYWdlcyIsImtleSI6IjBFNzc5MDdDMThGRDVDNzFCQ0Y2ODZEMzRFRDQyM0E4IiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozODQwLCJmaXQiOiJjb3ZlciIsInBvc2l0aW9uIjoiY2VudGVyIn0sImpwZWciOnsicXVhbGl0eSI6NzV9LCJ3ZWJwIjp7InF1YWxpdHkiOjc1fSwiYXZpZiI6eyJxdWFsaXR5Ijo1MH19fQ==?signature=58f3589df589cea11e0d3af09576a43f8b41c91f56fd31eaadc9fffc6326dfee",
  shala:
    "https://img.fitreisen.group/eyJidWNrZXQiOiJmaXRyZWlzZW4tY2RuLWltYWdlcyIsImtleSI6IkYxNTAwODA4MzI2MEVEQTY5NTdDRURGNzBGODBFOUU4IiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozODQwLCJmaXQiOiJjb3ZlciIsInBvc2l0aW9uIjoiY2VudGVyIn0sImpwZWciOnsicXVhbGl0eSI6NzV9LCJ3ZWJwIjp7InF1YWxpdHkiOjc1fSwiYXZpZiI6eyJxdWFsaXR5Ijo1MH19fQ==?signature=4b16c3d5b0f27a963abbbf70955f763a75cb8b467c1255df7850e75f858fb9c1",
  bathroom:
    "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-kurulu-bay-retreat/girl-opening-window-dark-room.jpg",
  handunugodaTeaEstate:
    "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-kurulu-bay-retreat/handunugoda-tea-estate.webp",
  koggalaBoatTrip:
    "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-kurulu-bay-retreat/kogola-boat-trip.jpg",
  yatalagaTemple:
    "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-kurulu-bay-retreat/yatagala-temple.jpg",
  lagoonPool:
    "https://img.fitreisen.group/eyJidWNrZXQiOiJmaXRyZWlzZW4tY2RuLWltYWdlcyIsImtleSI6IjJBRjAzMDIyMTIzRjk1QzZDQkJGMzUyMTMzNzlEMUNCIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozODQwLCJmaXQiOiJjb3ZlciIsInBvc2l0aW9uIjoiY2VudGVyIn0sImpwZWciOnsicXVhbGl0eSI6NzV9LCJ3ZWJwIjp7InF1YWxpdHkiOjc1fSwiYXZpZiI6eyJxdWFsaXR5Ijo1MH19fQ==?signature=7dbb579a087e444670fd4e1b525a01c7cbc0a10f24a90296963649186721ff0a",
};

const journeyDays = [
  ["Day 1", "ARRIVE"],
  ["Day 2", "BE HERE NOW"],
  ["Day 3", "SELF LOVE"],
  ["Day 4", "METTA"],
  ["Day 5", "LET GO"],
  ["Day 6", "FEEL FULLY"],
  ["Day 7", "CREATE"],
  ["Day 8", "GRATITUDE"],
  ["Day 9", "INTEGRATE"],
  ["Day 10", "RETURN"],
];

const includedItems = [
  "9 nights accommodation at Kurulu Bay",
  "Round-trip airport transfers",
  "Daily Ayurvedic breakfast, nourishing afternoon snacks and dinner",
  "Water, herbal tea and fresh fruit available throughout your stay",
  "Sunset dinner by the ocean",
  "Private Ayurvedic consultation and Dosha assessment",
  "Personalised Ayurvedic nutrition programme throughout the retreat",
  "One 120-minute signature Shirodhara treatment",
  "Complimentary Ayurvedic follow-up consultation",
  "All of Tereza's signature sessions and workshops throughout the retreat",
  "2 yoga classes with a renowned local guest facilitator",
  "Daily guided meditation and mindfulness practices",
  "3 Nature and Cultural Immersions",
  "Traditional Monk Blessing Ceremony*",
];

const optionalItems = [
  "International flights to and from Sri Lanka",
  "Travel insurance (required)",
  "Visa fees (if applicable)",
  "Additional Ayurvedic treatments and spa therapies",
  "Optional excursions and activities beyond the retreat programme including jungle safari, surfing, whale watching and local markets",
  "Personal purchases and pocket money",
  "Alcoholic beverages",
];

const roomGroups = [
  {
    title: "Treehouses · Garden Suites · Cottages",
    image:
      "https://images.squarespace-cdn.com/content/v1/613f1e9767023c65771d8a8f/e0b6e0dc-0fe2-475c-87dc-bc0cd804ac8d/siriwanchmprn_KuruluBay_20220211-31.jpg?format=1500w",
    entries: [
      ["Single Occupancy", "5,700 USD"],
      ["Double Occupancy", "4,700 USD"],
    ],
  },
  {
    title: "2-Bedroom Villa w/ Private Pool",
    image: imageAssets.villa,
    entries: [
      ["Single Occupancy", "6,100 USD"],
      ["Double Occupancy", "5,100 USD"],
    ],
  },
];

const galleryFrames = [
  { src: imageAssets.treehouse, alt: "Kurulu Bay treehouse exterior" },
  { src: imageAssets.shala, alt: "Yoga shala at Kurulu Bay" },
  { src: imageAssets.bedroom, alt: "Kurulu Bay bedroom" },
  {
    src: "https://images.squarespace-cdn.com/content/v1/613f1e9767023c65771d8a8f/e0b6e0dc-0fe2-475c-87dc-bc0cd804ac8d/siriwanchmprn_KuruluBay_20220211-31.jpg?format=1500w",
    alt: "Looking out over Koggala Lake",
  },
];

const immersionCards = [
  {
    title: "Tea Plantation Excursion",
    image: imageAssets.handunugodaTeaEstate,
    overlayTitle: "HANDUNUGODA TEA ESTATE",
    overlayText: "Virgin Silver tip tea",
  },
  {
    title: "Koggala Lake Boat Excursion",
    image: imageAssets.koggalaBoatTrip,
    overlayTitle: "Koggala Lake boat trip",
    overlayText: "(temple, cinnamon island, fish spa)",
    overlayClassName: "kurulu-bay-page__immersion-card-overlay--middle",
  },
  {
    title: "Temple Visit",
    image: imageAssets.yatalagaTemple,
    overlayTitle: "Yatagala Temple",
    overlayText: "ancient rock cave temple",
  },
];

const dayBlocks = [
  {
    title: "Morning Ritual",
    overlayTitle: "M O R N I N G R I T U A L",
    image:
      "https://images.squarespace-cdn.com/content/v1/613f1e9767023c65771d8a8f/0fa4e121-b640-413b-9fd9-fa4200db4ac3/Foto+21-02-2025%2C+14+08+25.jpg?format=1000w",
    items: [
      "Ayurvedic health shot and herbal tea",
      "Guided morning meditation exploring the day's theme",
      "Morning movement practice",
      "3-course Ayurvedic breakfast",
    ],
  },
  {
    title: "Midday",
    overlayTitle: "M I D D A Y",
    image:
      "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-ahangama-demo/womoen-walking-along-the-pool.jpg",
    items: [
      "Free time",
      "Personal Ayurvedic treatments",
      "Time to rest, swim, journal, read or simply be",
    ],
  },
  {
    title: "Golden Hour",
    overlayTitle: "G O L D E N H O U R",
    image:
      "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-kurulu-bay-retreat/man-in-boat-koggala-lanke.jpg",
    items: [
      "Nature or cultural immersion",
      "Tea Plantation Excursion",
      "Monk Blessing Ceremony",
      "Koggala Lake Boat Excursion",
      "Temple Visit",
    ],
  },
  {
    title: "Evening Ritual",
    overlayTitle: "E V E N I N G R I T U A L",
    image:
      "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-kurulu-bay-retreat/dining-at-kurulu-bay.jpg",
    items: [
      "Tereza's Signature Session:",
      "SONIC BREATH™",
      "SOUND TEMPLE™",
      "FLOATING TEMPLE™",
      "Curated Ayurvedic dinner experience",
    ],
  },
];

const sectionMenu = [
  ["cover", "Cover"],
  ["welcome", "Welcome"],
  ["return", "The Return"],
  ["home", "Your Home"],
  ["ayurveda", "Ayurveda"],
  ["practice", "The Practice"],
  ["journey", "The Journey"],
  ["typical-day", "A Typical Day"],
  ["in-between", "The In-Between"],
  ["immersions", "Immersions"],
  ["included", "Your Journey Includes"],
  ["optional", "Arranged Separately"],
  ["investment", "Investment"],
  ["closing", "Closing"],
];

const SectionLabel = ({ children, index }) => (
  <p className="kurulu-bay-page__eyebrow">
    {index ? `${index} ` : ""}
    {children}
  </p>
);

const FullImage = ({
  src,
  alt,
  priority,
  overlayIndex,
  overlayLabel,
  overlayTitle,
  overlayText,
}) => (
  <div
    className={`kurulu-bay-page__media${priority ? " kurulu-bay-page__media--hero" : ""}${overlayText ? " kurulu-bay-page__media--with-overlay" : ""}`}
  >
    <img src={src} alt={alt} loading={priority ? "eager" : "lazy"} />
    {overlayText ? (
      <div className="kurulu-bay-page__media-overlay">
        {overlayLabel ? (
          <SectionLabel index={overlayIndex}>{overlayLabel}</SectionLabel>
        ) : null}
        {overlayTitle ? (
          <h2 className="kurulu-bay-page__media-overlay-title">
            {overlayTitle}
          </h2>
        ) : null}
        {Array.isArray(overlayText) ? (
          <div className="kurulu-bay-page__media-overlay-text-group">
            {overlayText.map((line) => (
              <p key={line} className="kurulu-bay-page__media-overlay-text">
                {line}
              </p>
            ))}
          </div>
        ) : (
          <p className="kurulu-bay-page__media-overlay-text">{overlayText}</p>
        )}
      </div>
    ) : null}
  </div>
);

export default function KuruluBayRetreat() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuItems = useMemo(
    () => sectionMenu.map(([id, label]) => ({ id, label })),
    [],
  );

  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className="kurulu-bay-page">
      <section id="cover" className="kurulu-bay-page__hero">
        <div className="kurulu-bay-page__hero-image">
          <img
            src={imageAssets.cover}
            alt="Kurulu Bay pool framed by tropical palms"
            loading="eager"
          />
        </div>
        <div className="kurulu-bay-page__hero-copy">
          <p className="kurulu-bay-page__brand">THE RETURN</p>
          <p className="kurulu-bay-page__edition">Sri Lanka Edition</p>
          <div className="kurulu-bay-page__rule" />
          <p className="kurulu-bay-page__meta">
            A 10-Day Private Retreat curated by Tereza Dos Santos
          </p>
          <p className="kurulu-bay-page__meta kurulu-bay-page__meta--spaced">
            September 21 — September 30, 2026
          </p>
          <div className="kurulu-bay-page__hero-lines">
            <p>A return to what matters.</p>
            <p>A return to yourself.</p>
          </div>
        </div>
      </section>

      <button
        type="button"
        className={`kurulu-bay-page__contents-trigger${menuOpen ? " kurulu-bay-page__contents-trigger--open" : ""}`}
        onClick={() => setMenuOpen((current) => !current)}
        aria-expanded={menuOpen}
        aria-controls="kurulu-bay-contents-menu"
        aria-label="Open contents menu"
      >
        <span
          className="kurulu-bay-page__contents-trigger-line"
          aria-hidden="true"
        />
      </button>

      <div
        className={`kurulu-bay-page__contents-overlay${menuOpen ? " kurulu-bay-page__contents-overlay--open" : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden={!menuOpen}
      />

      <aside
        id="kurulu-bay-contents-menu"
        className={`kurulu-bay-page__contents-panel${menuOpen ? " kurulu-bay-page__contents-panel--open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <p className="kurulu-bay-page__contents-title">Jump to section</p>
        <nav
          className="kurulu-bay-page__contents-nav"
          aria-label="Kurulu Bay retreat sections"
        >
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="kurulu-bay-page__contents-link"
              onClick={handleMenuItemClick}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </aside>

      <section id="welcome" className="kurulu-bay-page__text-section">
        <SectionLabel index="01">WELCOME</SectionLabel>
        <h1 className="kurulu-bay-page__headline">Dear Friends,</h1>
        <div className="kurulu-bay-page__columns">
          <div>
            <p>
              Over the years, we've created beautiful moments and memories
              together through breath, sound, movement, conversation and shared
              silence. Somewhere along the way, the shared vision of this
              beautiful retreat began to take shape.
            </p>
            <p>
              I wanted to create something that couldn't be experienced in just
              a single evening. A journey with enough space to slow down. Enough
              time to settle. Enough time for everything to unfold naturally.
              And enough time to integrate it before returning home.
            </p>
            <p>
              This retreat brings together everything that has shaped my work
              over the past two decades: breath, sound, movement, nature,
              meaningful connection, and the beautiful wisdom of Ayurveda woven
              seamlessly throughout the experience through personalised
              treatments, nutrition and ancient healing practices.
            </p>
          </div>
          <div>
            <p>
              My intention was never to create another retreat packed with
              activities or a schedule to keep up with. Instead, I wanted to
              create something spacious and profound. Thoughtfully curated. A
              place to go deep, not wide.
            </p>
            <p>
              My greatest hope is not that you leave feeling inspired for a few
              days, but that you return home carrying one small practice, one
              new perspective, or one feeling that truly becomes a part of the
              way you live. Not something you simply understand with your mind,
              but something you've truly embodied.
            </p>
            <p>
              If even one small part of this journey stays with you long after
              we've said goodbye, then I believe we've created something truly
              meaningful together.
            </p>
            <p>I can't wait to share these ten days with you.</p>
            <p className="kurulu-bay-page__signature">
              Com amor,
              <br />
              Tereza
            </p>
          </div>
        </div>
      </section>

      <FullImage
        src={imageAssets.piano}
        alt="Tereza guiding a sound experience"
        overlayIndex="02"
        overlayLabel="THE RETURN"
        overlayText={[
          "Modern life, our jobs, and society ask us to be constantly available.",
          "To respond. To produce. To perform. To stay connected.",
        ]}
      />

      <section id="return" className="kurulu-bay-page__text-section">
        <div className="kurulu-bay-page__lede-group">
          <p>This journey asks something entirely different.</p>
          <p>
            To slow down. To breathe. To listen. To reconnect with yourself,
            with nature, and with one another.
          </p>
        </div>
        <div className="kurulu-bay-page__rule kurulu-bay-page__rule--wide" />
        <p>
          Over ten carefully curated days, we'll move through practices rooted
          in nervous system regulation, somatic experiencing, movement, sound,
          nature and human connection.
        </p>
        <p>
          Not everything will be revealed in advance. Some experiences are meant
          to be discovered only when the moment arrives.
        </p>
        <p>Give yourself permission to Surrender To The Mysterys.</p>
      </section>

      <FullImage
        src="https://images.squarespace-cdn.com/content/v1/613f1e9767023c65771d8a8f/4feb5084-87d9-4806-b522-5e8015f8a9e4/IMG_2033.jpg?format=2500w"
        alt="Kurulu Bay pool with lagoon beyond"
        overlayIndex="03"
        overlayLabel="YOUR HOME"
        overlayText="Nestled between jungle and ocean, Kurulu Bay offers a peaceful sanctuary where nature, thoughtful design and authentic Sri Lankan hospitality come together. Throughout your stay, this extraordinary setting becomes as much a part of the journey as the practices themselves."
      />

      <section
        id="home"
        className="kurulu-bay-page__text-section kurulu-bay-page__text-section--compact"
      >
        <div className="kurulu-bay-page__gallery-grid">
          {galleryFrames.map((item) => (
            <figure key={item.alt} className="kurulu-bay-page__gallery-card">
              <img src={item.src} alt={item.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </section>

      <FullImage
        src={imageAssets.ayurvedaHero}
        alt="Ayurveda at Kurulu Bay"
        overlayTitle="Shirodhara"
        overlayText="Ayurveda's most celebrated therapy."
      />

      <section id="ayurveda" className="kurulu-bay-page__text-section">
        <SectionLabel index="04">AYURVEDA</SectionLabel>
        <div className="kurulu-bay-page__columns kurulu-bay-page__columns--three">
          <p>
            One of the defining aspects of this journey is Kurulu Bay's fully
            integrated Ayurvedic programme. Upon arrival, each guest receives a
            complimentary private consultation and Dosha assessment with Kurulu
            Bay's third-generation Ayurvedic doctor, who will create a
            personalised wellness plan tailored to your individual constitution
            and needs.
          </p>
          <p>
            Your journey includes one signature Shirodhara treatment,
            personalised Ayurvedic nutritional guidance, and meals thoughtfully
            prepared according to your Dosha throughout the retreat. A
            complimentary follow-up consultation is also included to support
            your progress and refine your programme if needed.
          </p>
          <p>
            For those wishing to explore more deeply, additional Ayurvedic
            treatments, massages and therapies recommended by the resident
            doctor are available throughout your stay at an exclusive 10%
            retreat guest discount.
          </p>
        </div>
      </section>

      <FullImage
        src={imageAssets.sonicBreath}
        alt="Tereza holding space during a breath and sound session"
        overlayIndex="05"
        overlayLabel="THE PRACTICE"
        overlayText="Throughout the retreat, we'll explore the full spectrum of my signature work, including SONIC BREATH™, SOUND TEMPLE™, FLOATING TEMPLE™ and a series of BREATH LAB workshops."
      />

      <section id="practice" className="kurulu-bay-page__text-section">
        <div className="kurulu-bay-page__columns">
          <div>
            <p>
              I'll also be introducing SUCO, an active meditation and global
              somatic movement practice that I'm so excited to finally share
              with you following my recent certification.
            </p>
            <p>
              Alongside my own work, you'll practise yoga with a renowned local
              guest facilitator, and we'll share traditional chanting together
              with a special opening blessing with the monks.
            </p>
          </div>
          <div>
            <p>
              Together, these experiences combine breath, sound and movement
              through practices rooted in somatic experiencing, nervous system
              regulation and embodied awareness as you know them - creating
              shifts that are not only remembered, but deeply embodied.
            </p>
          </div>
        </div>
      </section>

      <FullImage
        src="https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-kurulu-bay-retreat/women-wlaking-towards-koggala-lake.jpg"
        alt="Kurulu Bay pool and cottages"
        overlayIndex="06"
        overlayLabel="THE JOURNEY"
        overlayText="Each day explores a different theme, thoughtfully designed to build upon the one before it - creating a journey that comes full circle before you return home."
      />

      <section id="journey" className="kurulu-bay-page__text-section">
        <div className="kurulu-bay-page__stack">
          <div>
            <p>
              Rather than revealing every experience in advance, we've
              intentionally left space for curiosity, spontaneity and surprise.
            </p>
            <p>I invite you to trust the process.</p>
          </div>
          <div className="kurulu-bay-page__journey-grid">
            {journeyDays.map(([day, theme]) => (
              <div key={day} className="kurulu-bay-page__journey-row">
                <span>{day}</span>
                <strong>{theme}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="typical-day"
        className="kurulu-bay-page__text-section kurulu-bay-page__text-section--compact"
      >
        <SectionLabel index="07">A TYPICAL DAY</SectionLabel>
        <div className="kurulu-bay-page__day-grid">
          {dayBlocks.map((block) => (
            <article key={block.title} className="kurulu-bay-page__day-card">
              <img src={block.image} alt={block.title} loading="lazy" />
              <div className="kurulu-bay-page__day-card-overlay">
                <h3>{block.overlayTitle}</h3>
                <div className="kurulu-bay-page__day-card-lines">
                  {block.items.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <FullImage
        src={imageAssets.bathroom}
        alt="Quiet moment in the in-between at Kurulu Bay"
        overlayIndex="08"
        overlayLabel="THE IN-BETWEEN"
        overlayText="Not every moment is scheduled."
      />

      <section id="in-between" className="kurulu-bay-page__text-section">
        <div className="kurulu-bay-page__lede-group">
          <p>
            Some of the most meaningful parts of the retreat happen between the
            sessions.
          </p>
        </div>
        <div className="kurulu-bay-page__inbetween-list">
          <p>Swimming in the ocean.</p>
          <p>Reading beneath the palms.</p>
          <p>A soul-touching conversation over tea.</p>
          <p>Watching the sunset.</p>
          <p>Receiving an Ayurvedic massage.</p>
          <p>Falling asleep after SOUND TEMPLE™.</p>
        </div>
        <p>
          Those quiet moments become just as much a part of the journey as the
          workshops and experiences themselves.
        </p>
      </section>

      <section
        id="immersions"
        className="kurulu-bay-page__text-section kurulu-bay-page__text-section--compact"
      >
        <SectionLabel index="09">NATURE & CULTURAL IMMERSIONS</SectionLabel>
        <p className="kurulu-bay-page__lead">
          Included throughout the retreat - moments to step outside the
          sanctuary and meet Sri Lanka itself.
        </p>
        <div className="kurulu-bay-page__immersion-grid">
          {immersionCards.map((item) => (
            <figure
              key={item.title}
              className="kurulu-bay-page__immersion-card"
            >
              <img src={item.image} alt={item.title} loading="lazy" />
              {item.overlayTitle ? (
                <div
                  className={`kurulu-bay-page__immersion-card-overlay${item.overlayClassName ? ` ${item.overlayClassName}` : ""}`}
                >
                  <strong>{item.overlayTitle}</strong>
                  <p>{item.overlayText}</p>
                </div>
              ) : null}
              <figcaption>{item.title}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section
        id="included"
        className="kurulu-bay-page__text-section kurulu-bay-page__text-section--compact"
      >
        <SectionLabel index="10">YOUR JOURNEY INCLUDES</SectionLabel>
        <div className="kurulu-bay-page__list-columns">
          <ul>
            {includedItems
              .slice(0, Math.ceil(includedItems.length / 2))
              .map((item) => (
                <li key={item}>{item}</li>
              ))}
          </ul>
          <ul>
            {includedItems
              .slice(Math.ceil(includedItems.length / 2))
              .map((item) => (
                <li key={item}>{item}</li>
              ))}
          </ul>
        </div>
        <p className="kurulu-bay-page__lead">
          * Donations to the monks are warmly welcomed.
        </p>
      </section>

      <section
        id="optional"
        className="kurulu-bay-page__text-section kurulu-bay-page__text-section--compact"
      >
        <SectionLabel index="11">NOT INCLUDED</SectionLabel>
        <div className="kurulu-bay-page__stack">
          {optionalItems.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      <FullImage
        src="https://images.squarespace-cdn.com/content/v1/613f1e9767023c65771d8a8f/92c414ec-5896-48d1-92a4-10dc10450838/KuruluBaySriLanka050424_NateleeCocks_062.jpg?format=2500w"
        alt="Kurulu Bay retreat accommodation exterior"
        overlayIndex="12"
        overlayLabel="INVESTMENT"
        overlayText="Choose your home"
      />

      <section
        id="investment"
        className="kurulu-bay-page__text-section kurulu-bay-page__text-section--compact"
      >
        <p className="kurulu-bay-page__lead">
          A limited number of beautifully designed rooms are available. Each has
          been thoughtfully selected to provide comfort, privacy, and a peaceful
          place to rest and integrate throughout the journey.
        </p>
        <div className="kurulu-bay-page__investment-grid">
          <figure className="kurulu-bay-page__investment-image">
            <img
              src={imageAssets.treehouse}
              alt="The Treehouses at Kurulu Bay"
              loading="lazy"
            />
            <figcaption>The Treehouses</figcaption>
          </figure>
          <figure className="kurulu-bay-page__investment-image">
            <img
              src={imageAssets.bedroom}
              alt="The Garden Suites at Kurulu Bay"
              loading="lazy"
            />
            <figcaption>The Garden Suites</figcaption>
          </figure>
          <figure className="kurulu-bay-page__investment-image">
            <img
              src={imageAssets.cottages}
              alt="The Cottages at Kurulu Bay"
              loading="lazy"
            />
            <figcaption>The Cottages</figcaption>
          </figure>
          <figure className="kurulu-bay-page__investment-image">
            <img
              src="https://images.squarespace-cdn.com/content/v1/613f1e9767023c65771d8a8f/f6f67f7e-f6d8-4233-8fff-c1e0a9fc7a3c/IMG_2046.jpg?format=1500w"
              alt="The two-bedroom villa with private pool at Kurulu Bay"
              loading="lazy"
            />
            <figcaption>The 2-Bedroom Villa w/ Private Pool</figcaption>
          </figure>
        </div>
        <div className="kurulu-bay-page__room-grid">
          {roomGroups.map((group) => (
            <article key={group.title} className="kurulu-bay-page__room-card">
              <h3>{group.title}</h3>
              <img src={group.image} alt={group.title} loading="lazy" />
              <dl>
                {group.entries.map(([label, value]) => (
                  <div key={label} className="kurulu-bay-page__room-row">
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
        <div className="kurulu-bay-page__pricing-summary">
          <div className="kurulu-bay-page__pricing-columns">
            <section
              className="kurulu-bay-page__pricing-group"
              aria-label="Treehouses, garden suites and cottages pricing"
            >
              <h3 className="kurulu-bay-page__pricing-heading kurulu-bay-page__pricing-heading--stacked">
                T R E E H O U S E S ·<br />C O T T A G E S ·<br />G A R D E N S
                U I T E S ·
              </h3>
              <div className="kurulu-bay-page__pricing-row">
                <span>Single Occupancy</span>
                <strong>5,700 USD</strong>
              </div>
              <div className="kurulu-bay-page__pricing-row">
                <span>Double Occupancy</span>
                <strong>4,700 USD</strong>
              </div>
            </section>
            <section
              className="kurulu-bay-page__pricing-group"
              aria-label="Two-bedroom villa with private pool pricing"
            >
              <h3 className="kurulu-bay-page__pricing-heading">
                2-BEDROOM VILLA W/ PRIVATE POOL
              </h3>
              <div className="kurulu-bay-page__pricing-row">
                <span>Single Occupancy</span>
                <strong>6,100 USD</strong>
              </div>
              <div className="kurulu-bay-page__pricing-row">
                <span>Double Occupancy</span>
                <strong>5,100 USD</strong>
              </div>
            </section>
          </div>
          <p className="kurulu-bay-page__pricing-note">
            A detailed room menu with photographs and layouts is available on
            request, so we can find the room that suits you best. Rooms are
            allocated in the order that bookings are received.
          </p>
        </div>
      </section>

      <section id="closing" className="kurulu-bay-page__closing">
        <div>
          <p className="kurulu-bay-page__brand kurulu-bay-page__brand--small">
            THE RETURN
          </p>
          <div className="kurulu-bay-page__rule" />
          <p className="kurulu-bay-page__closing-line">
            The journey doesn't end when you leave Sri Lanka.
          </p>
          <p className="kurulu-bay-page__closing-line">
            It begins the moment you return.
          </p>
          <a
            className="kurulu-bay-page__website"
            href="https://www.terezadossantos.com"
          >
            www.terezadossantos.com
          </a>
        </div>
        <div className="kurulu-bay-page__closing-image">
          <img
            src={imageAssets.shala}
            alt="Closing scene from Kurulu Bay retreat"
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
}
