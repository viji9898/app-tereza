import { useState } from "react";
import "./SriLankaOctober7Days.css";

const images = {
  cover:
    "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-tereza/palms/hero-1.webp",
  reset:
    "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-tereza/palms/the-rest.webp",
  home: "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-tereza/palms/your-home.webp",
  ayurveda:
    "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-kurulu-bay-retreat/shirodhara-treatment.jpg",
  practice:
    "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/tereza-holding-clarinet-darker.webp",
  journey:
    "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-kurulu-bay-retreat/women-wlaking-towards-koggala-lake.jpg",
  inBetween:
    "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-kurulu-bay-retreat/girl-opening-window-dark-room.jpg",
  investment:
    "https://images.squarespace-cdn.com/content/v1/613f1e9767023c65771d8a8f/92c414ec-5896-48d1-92a4-10dc10450838/KuruluBaySriLanka050424_NateleeCocks_062.jpg?format=2500w",
  closing:
    "https://img.fitreisen.group/eyJidWNrZXQiOiJmaXRyZWlzZW4tY2RuLWltYWdlcyIsImtleSI6IkYxNTAwODA4MzI2MEVEQTY5NTdDRURGNzBGODBFOUU4IiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozODQwLCJmaXQiOiJjb3ZlciIsInBvc2l0aW9uIjoiY2VudGVyIn0sImpwZWciOnsicXVhbGl0eSI6NzV9LCJ3ZWJwIjp7InF1YWxpdHkiOjc1fSwiYXZpZiI6eyJxdWFsaXR5Ijo1MH19fQ==?signature=4b16c3d5b0f27a963abbbf70955f763a75cb8b467c1255df7850e75f858fb9c1",
};

const journeyDays = [
  ["Day 1", "ARRIVE"],
  ["Day 2", "BE HERE NOW"],
  ["Day 3", "SELF LOVE"],
  ["Day 4", "METTA"],
  ["Day 5", "LET GO"],
  ["Day 6", "FEEL FULLY"],
  ["Day 7", "CREATE"],
  ["Day 8", "INTEGRATE | RETURN"],
];

const gallery = [
  {
    src: "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-tereza/palms/room-01-room-bed-light.webp",
    alt: "Sri Lanka retreat bedroom",
  },
  {
    src: "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-tereza/palms/room-03.webp",
    alt: "Open-air yoga shala in Sri Lanka",
  },
  {
    src: "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-tereza/palms/room-02-pool-view.webp",
    alt: "Retreat cottages overlooking Koggala Lake",
  },
  {
    src: "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-tereza/palms/room-04-common-areas.webp",
    alt: "Tropical treehouse exterior in Sri Lanka",
  },
];

const immersions = [
  {
    title: "Tea Plantation Excursion",
    image:
      "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-kurulu-bay-retreat/handunugoda-tea-estate.webp",
  },
  {
    title: "Koggala Lake Boat Excursion",
    image:
      "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-kurulu-bay-retreat/kogola-boat-trip.jpg",
  },
  {
    title: "Yatagala Temple Visit",
    image:
      "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-kurulu-bay-retreat/yatagala-temple.jpg",
  },
];

const dayBlocks = [
  {
    title: "MORNING RITUAL",
    image:
      "https://images.squarespace-cdn.com/content/v1/613f1e9767023c65771d8a8f/0fa4e121-b640-413b-9fd9-fa4200db4ac3/Foto+21-02-2025%2C+14+08+25.jpg?format=1000w",
    items: [
      "Ayurvedic health shot and herbal tea",
      "Guided meditation",
      "Morning movement practice",
      "Ayurvedic breakfast",
    ],
  },
  {
    title: "MIDDAY",
    image:
      "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-ahangama-demo/womoen-walking-along-the-pool.jpg",
    items: [
      "Free time",
      "Personal Ayurvedic treatments",
      "Time to rest, swim, journal or read",
    ],
  },
  {
    title: "GOLDEN HOUR",
    image:
      "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-kurulu-bay-retreat/man-in-boat-koggala-lanke.jpg",
    items: [
      "Nature or cultural immersion",
      "Monk blessing",
      "Koggala Lake",
      "Temple visit",
    ],
  },
  {
    title: "EVENING RITUAL",
    image:
      "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-kurulu-bay-retreat/dining-at-kurulu-bay.jpg",
    items: [
      "SONIC BREATH™",
      "SOUND TEMPLE™",
      "FLOATING TEMPLE™",
      "Ayurvedic dinner",
    ],
  },
];

const included = [
  "6 nights accommodation at The Palms",
  "Round-trip airport transfers",
  "Daily Ayurvedic breakfast, nourishing afternoon snacks and dinner",
  "Water, herbal tea and fresh fruit throughout your stay",
  "Private Ayurvedic consultation and Dosha assessment",
  "Personalised Ayurvedic nutrition programme",
  "One 120-minute signature Shirodhara treatment",
  "Complimentary Ayurvedic follow-up consultation",
  "All of Tereza's signature sessions and workshops",
  "Daily guided meditation and mindfulness practices",
  "Nature and cultural immersions",
  "Traditional monk blessing ceremony",
];

const optional = [
  "International flights to and from Sri Lanka",
  "Travel insurance (required)",
  "Visa fees (if applicable)",
  "Additional Ayurvedic treatments and spa therapies",
  "Optional excursions beyond the retreat programme",
  "Personal purchases and pocket money",
  "Alcoholic beverages",
];

const sections = [
  ["cover", "Cover"],
  ["welcome", "Welcome"],
  ["reset", "The RESET"],
  ["home", "Your Home"],
  ["ayurveda", "Ayurveda"],
  ["practice", "The Practice"],
  ["journey", "The Journey"],
  ["typical-day", "A Typical Day"],
  ["in-between", "The In-Between"],
  ["immersions", "Immersions"],
  ["included", "Your Journey Includes"],
  ["optional", "Not Included"],
  ["investment", "Investment"],
  ["closing", "Closing"],
];

function Eyebrow({ index, children }) {
  return (
    <p className="sri-lanka-reset-page__eyebrow">
      {index ? `${index} ` : ""}
      {children}
    </p>
  );
}

function FullImage({ src, alt, index, label, children }) {
  return (
    <section className="sri-lanka-reset-page__full-image">
      <img src={src} alt={alt} loading="lazy" />
      <div className="sri-lanka-reset-page__image-copy">
        <Eyebrow index={index}>{label}</Eyebrow>
        <div className="sri-lanka-reset-page__image-text">{children}</div>
      </div>
    </section>
  );
}

export default function SriLankaOctober7Days() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="sri-lanka-reset-page">
      <section id="cover" className="sri-lanka-reset-page__hero">
        <img
          className="sri-lanka-reset-page__hero-image"
          src={images.cover}
          alt="Sri Lanka retreat pool framed by tropical palms"
        />
        <div className="sri-lanka-reset-page__hero-copy">
          <p className="sri-lanka-reset-page__brand">THE RESET</p>
          <p className="sri-lanka-reset-page__edition">Sri Lanka Edition</p>
          <div className="sri-lanka-reset-page__rule" />
          <p className="sri-lanka-reset-page__meta">The Palms</p>
          <p className="sri-lanka-reset-page__meta">
            A 7-Day | 6-Night Retreat curated by Tereza Dos Santos
          </p>
          <p className="sri-lanka-reset-page__meta">
            October 3 — October 9, 2026
          </p>
          <div className="sri-lanka-reset-page__hero-lines">
            <p>A RESET to what matters.</p>
            <p>A RESET to yourself.</p>
          </div>
        </div>
      </section>

      <button
        className={`sri-lanka-reset-page__menu-button${menuOpen ? " sri-lanka-reset-page__menu-button--open" : ""}`}
        type="button"
        aria-label="Open contents menu"
        aria-expanded={menuOpen}
        aria-controls="sri-lanka-reset-menu"
        onClick={() => setMenuOpen(true)}
      />
      <div
        className={`sri-lanka-reset-page__menu-backdrop${menuOpen ? " sri-lanka-reset-page__menu-backdrop--open" : ""}`}
        onClick={() => setMenuOpen(false)}
      />
      <aside
        id="sri-lanka-reset-menu"
        className={`sri-lanka-reset-page__menu${menuOpen ? " sri-lanka-reset-page__menu--open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <p className="sri-lanka-reset-page__menu-title">Jump to section</p>
        <nav aria-label="Sri Lanka RESET retreat sections">
          {sections.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
      </aside>

      <section id="welcome" className="sri-lanka-reset-page__section">
        <Eyebrow index="01">WELCOME</Eyebrow>
        <h1 className="sri-lanka-reset-page__headline">Axé família,</h1>
        <div className="sri-lanka-reset-page__columns">
          <div>
            <p>If you’re reading this, welcome.</p>
            <p>
              My name is Tereza Dos Santos, and over the past two decades I’ve
              been exploring the ways breath, sound, movement and stillness can
              help us reconnect with ourselves. What began with classical music,
              performance and athletic movement growing up, has slowly evolved
              into the work I feel most called to share today: creating spaces
              where people can slow down, breathe deeply, and create space for
              healing.
            </p>
            <p>
              Somewhere along the way, a dream began to take shape: I wanted to
              create something that couldn’t be experienced in just a single
              evening. A journey with enough space to slow down. Enough time to
              settle. Enough time for everything to unfold naturally. And enough
              time to integrate it before returning home.
            </p>
            <p>
              This retreat brings together everything that has shaped my work
              over the years: breath, sound, movement, nature, meaningful
              connection, and the beautiful wisdom of Ayurveda, woven seamlessly
              throughout the experience through personalised treatments,
              nourishing food, and ancient healing practices. Sri Lanka’s rich
              healing traditions, warm and devoted people, and slower rhythm of
              life have deeply influenced the way this journey has been
              designed.
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
              new perspective, or one feeling that quietly becomes part of the
              way you live. Not something you simply understand with your mind.
              Something you’ve truly embodied.
            </p>
            <p>
              So if even one small part of this journey stays with you long
              after you’ve returned home, then I believe we’ve created something
              truly meaningful together.
            </p>
            <p>I can’t wait to welcome you to Sri Lanka.</p>
            <p className="sri-lanka-reset-page__signature">
              Com amor,
              <br />
              Tereza
            </p>
          </div>
        </div>
      </section>

      <div id="reset">
        <FullImage
          src={images.reset}
          alt="Tereza guiding a sound experience"
          index="02"
          label="THE RESET"
        >
          <p>Modern life asks us to be constantly available.</p>
          <p>To respond. To produce. To perform. To stay connected.</p>
        </FullImage>
      </div>

      <section className="sri-lanka-reset-page__section">
        <p className="sri-lanka-reset-page__lead">
          This journey asks something entirely different.
        </p>
        <p>
          To slow down. To breathe. To listen. To reconnect with yourself, with
          nature, and with one another.
        </p>
        <p>
          Over seven carefully curated days, we’ll move through practices rooted
          in nervous system regulation, somatic experiencing, movement, sound,
          nature and human connection.
        </p>
        <p>Give yourself permission to surrender to the mystery.</p>
      </section>

      <div id="home">
        <FullImage
          src={images.home}
          alt="Tropical retreat pool with lagoon beyond"
          index="03"
          label="YOUR HOME"
        >
          <p>
            Nestled between jungle and ocean, The Palms is a sanctuary where
            nature, thoughtful design and Sri Lankan hospitality come together.
          </p>
        </FullImage>
      </div>

      <section className="sri-lanka-reset-page__section">
        <div className="sri-lanka-reset-page__gallery">
          {gallery.map((item) => (
            <figure key={item.alt}>
              <img src={item.src} alt={item.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </section>

      <div id="ayurveda">
        <FullImage
          src={images.ayurveda}
          alt="Shirodhara treatment in Sri Lanka"
          index="04"
          label="AYURVEDA"
        >
          <p>Ayurveda’s wisdom is woven throughout your RESET.</p>
        </FullImage>
      </div>

      <section className="sri-lanka-reset-page__section">
        <div className="sri-lanka-reset-page__columns">
          <p>
            Upon arrival, each guest receives a private consultation and Dosha
            assessment with The Palms’ Ayurvedic doctor, who creates a
            personalised wellness plan.
          </p>
          <p>
            Your journey includes a signature Shirodhara treatment, personalised
            Ayurvedic nutritional guidance, and meals thoughtfully prepared
            throughout the retreat.
          </p>
        </div>
      </section>

      <div id="practice">
        <FullImage
          src={images.practice}
          alt="Tereza holding space during a breath and sound session"
          index="05"
          label="THE PRACTICE"
        >
          <p>
            Explore SONIC BREATH™, SOUND TEMPLE™, FLOATING TEMPLE™ and BREATH
            LAB workshops.
          </p>
        </FullImage>
      </div>

      <section className="sri-lanka-reset-page__section">
        <div className="sri-lanka-reset-page__columns">
          <p>
            Alongside Tereza’s signature work, you’ll practise movement,
            meditation and yoga, and share a traditional opening blessing with
            local monks.
          </p>
          <p>
            Together, these experiences weave breath, sound, movement, Ayurveda,
            nature and meaningful connection into one continuous journey.
          </p>
        </div>
      </section>

      <div id="journey">
        <FullImage
          src={images.journey}
          alt="Guests walking towards Koggala Lake"
          index="06"
          label="THE JOURNEY"
        >
          <p>
            Each day explores a theme designed to build upon the one before it.
          </p>
        </FullImage>
      </div>

      <section className="sri-lanka-reset-page__section">
        <p>
          Rather than revealing every experience in advance, we’ve intentionally
          left space for curiosity, spontaneity and surprise.
        </p>
        <div className="sri-lanka-reset-page__journey">
          {journeyDays.map(([day, theme]) => (
            <div key={day} className="sri-lanka-reset-page__journey-row">
              <span className="sri-lanka-reset-page__journey-day">{day}</span>
              <strong>{theme}</strong>
            </div>
          ))}
        </div>
      </section>

      <section id="typical-day" className="sri-lanka-reset-page__section">
        <Eyebrow index="07">A TYPICAL DAY</Eyebrow>
        <div className="sri-lanka-reset-page__cards">
          {dayBlocks.map((block) => (
            <article
              key={block.title}
              className="sri-lanka-reset-page__card sri-lanka-reset-page__day-card"
            >
              <img src={block.image} alt={block.title} loading="lazy" />
              <div className="sri-lanka-reset-page__day-copy">
                <h3>{block.title}</h3>
                {block.items.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <div id="in-between">
        <FullImage
          src={images.inBetween}
          alt="Quiet moment at the Sri Lanka retreat"
          index="08"
          label="THE IN-BETWEEN"
        >
          <p>Not every moment is scheduled.</p>
        </FullImage>
      </div>

      <section className="sri-lanka-reset-page__section">
        <p className="sri-lanka-reset-page__lead">
          Some of the most meaningful moments happen between sessions.
        </p>
        <p>
          Swimming in the ocean. Reading beneath the palms. A conversation over
          tea. Watching the sunset. Receiving an Ayurvedic massage.
        </p>
      </section>

      <section id="immersions" className="sri-lanka-reset-page__section">
        <Eyebrow index="09">NATURE & CULTURAL IMMERSIONS</Eyebrow>
        <div className="sri-lanka-reset-page__cards sri-lanka-reset-page__cards--three">
          {immersions.map((item) => (
            <figure key={item.title} className="sri-lanka-reset-page__card">
              <img src={item.image} alt={item.title} loading="lazy" />
              <figcaption>{item.title}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="included" className="sri-lanka-reset-page__section">
        <Eyebrow index="10">YOUR JOURNEY INCLUDES</Eyebrow>
        <div className="sri-lanka-reset-page__list-columns">
          <ul>
            {included.slice(0, 6).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <ul>
            {included.slice(6).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="optional" className="sri-lanka-reset-page__section">
        <Eyebrow index="11">NOT INCLUDED</Eyebrow>
        <div className="sri-lanka-reset-page__list-columns">
          <ul>
            {optional.slice(0, 4).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <ul>
            {optional.slice(4).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <div id="investment">
        <FullImage
          src={images.investment}
          alt="The Palms retreat accommodation"
          index="12"
          label="INVESTMENT"
        >
          <p>Choose your home.</p>
        </FullImage>
      </div>

      <section className="sri-lanka-reset-page__section">
        <p className="sri-lanka-reset-page__lead">
          A limited number of beautifully designed rooms are available, each
          selected for comfort, privacy and deep rest.
        </p>
        <div
          className="sri-lanka-reset-page__price-box"
          aria-label="All rooms pricing"
        >
          <h3>All Rooms</h3>
          <div className="sri-lanka-reset-page__price-row">
            <span>Single Occupancy</span>
            <strong>1,900 USD</strong>
          </div>
          <div className="sri-lanka-reset-page__price-row">
            <span>Double Occupancy</span>
            <strong>1,700 USD</strong>
          </div>
          <p>Rooms are allocated in the order that bookings are received.</p>
        </div>
      </section>

      <section id="closing" className="sri-lanka-reset-page__closing">
        <img
          className="sri-lanka-reset-page__closing-image"
          src={images.closing}
          alt="Closing scene from the Sri Lanka retreat"
          loading="lazy"
        />
        <div className="sri-lanka-reset-page__closing-copy">
          <p className="sri-lanka-reset-page__brand">THE RESET</p>
          <div className="sri-lanka-reset-page__rule" />
          <div className="sri-lanka-reset-page__hero-lines">
            <p>The journey doesn’t end when you leave Sri Lanka.</p>
            <p>It begins the moment you return.</p>
          </div>
          <a
            className="sri-lanka-reset-page__website"
            href="https://www.terezadossantos.com"
          >
            www.terezadossantos.com
          </a>
        </div>
      </section>
    </main>
  );
}
