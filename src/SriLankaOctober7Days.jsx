import { useState } from "react";
import "./SriLankaOctober7Days.css";
import SriLankaWhatsAppCta from "./SriLankaWhatsAppCta";

const images = {
  cover:
    "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-tereza/palms/hero-1.webp",
  reset:
    "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-tereza/palms/the-rest.webp",
  home: "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-tereza/palms/your-home.webp",
  practice:
    "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/tereza-holding-clarinet-darker.webp",
  journey:
    "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-kurulu-bay-retreat/women-wlaking-towards-koggala-lake.jpg",
  inBetween:
    "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-kurulu-bay-retreat/girl-opening-window-dark-room.jpg",
  investment:
    "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-tereza/palms/choose-your-home.webp",
  closing:
    "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-tereza/palms/the-rest.webp",
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

const investmentRooms = [
  {
    src: "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-tereza/palms/choose-home-02.webp",
    title: "",
  },
  {
    src: "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-tereza/palms/choose-home-01.webp",
    title: "",
  },
  {
    src: "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-tereza/palms/room-03.webp",
    title: "",
  },
  {
    src: "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-tereza/palms/choose-home-03.webp",
    title: "",
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
      "Local health shots and herbal teas",
      "Guided morning meditation exploring the day's theme",
      "Morning movement practice",
      "Nutritious vegetarian breakfast",
    ],
  },
  {
    title: "MIDDAY",
    image:
      "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-ahangama-demo/womoen-walking-along-the-pool.jpg",
    items: ["Free time", "Time to rest, swim, journal", " Read or simply be"],
  },
  {
    title: "GOLDEN HOUR",
    image:
      "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-kurulu-bay-retreat/man-in-boat-koggala-lanke.jpg",
    items: [
      "Tea Plantation Excursion",
      "Monk Blessing Ceremony",
      "Koggala Lake Boat Excursion",
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
      "Curated dinner experience",
    ],
  },
];

const included = [
  "7 nights accommodation at The Palms",
  "Round-trip airport transfers",
  "Daily vegetarian breakfast",
  "Water, herbal tea and fresh fruit throughout your stay",
  "Sunset dinner by the ocean",
  "All of Tereza's signature sessions and workshops throughout the retreat",
  "2 yoga classes with a renowned local guest facilitator",
  "Daily guided meditation and mindfulness practices",
  "3 Nature and Cultural Immersions",
  "Traditional Monk Blessing Ceremony*",
];

const optional = [
  "International flights to and from Sri Lanka",
  "Travel insurance (required)",
  "Visa fees (if applicable)",
  "Additional food & beverages ordered à la carte",
  "Optional excursions beyond the retreat programme",
  "Personal purchases and pocket money",
  "Alcoholic beverages",
];

const sections = [
  ["cover", "Cover"],
  ["welcome", "Welcome"],
  ["reset", "The RESET"],
  ["home", "Your Home"],
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
            A 8-Day | 7-Night Retreat curated by Tereza Dos Santos
          </p>
          <p className="sri-lanka-reset-page__meta">
            October 2 — October 9, 2026
          </p>
          <div className="sri-lanka-reset-page__hero-lines">
            <p>Less noise.</p>
            <p>More you.</p>
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
        <h1 className="sri-lanka-reset-page__headline">Axé família</h1>
        <div className="sri-lanka-reset-page__columns">
          <div>
            <p>If you’re reading this, welcome.</p>
            <p>
              My name is Tereza Dos Santos, and over the past two decades I’ve
              been exploring the ways breath, sound, movement and stillness can
              help us reconnect with ourselves. What began with classical music,
              performance and athletic movement growing up has slowly evolved
              into the work I feel most called to share today: creating spaces
              where people can slow down, breathe deeply, and create space for
              healing. Somewhere along the way, a dream began to take shape:
            </p>
            <p>
              I wanted to create something that couldn’t be experienced in just
              a single evening. A journey with enough space to slow down. Enough
              time to settle. Enough time for everything to unfold naturally.
              And enough time to integrate it before returning home.
            </p>
            <p>
              This retreat brings together everything that has shaped my work
              over the years: breath, sound, movement, nature, meaningful
              connection — and Sri Lanka, one of my favourite places in the
              world. Its lush landscapes, warm and devoted people, slower rhythm
              of life, and incredible natural beauty have deeply influenced the
              way this journey has been designed.
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
              way you live.
            </p>
            <p>
              Not something you simply understand with your mind. Something
              you’ve truly embodied. So if even one small part of this journey
              stays with you long after you’ve returned home, then I believe
              we’ve created something truly meaningful together.
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
            Hidden between lush palm groves and the ocean of Ahangama, THE PALM
            is a contemporary sanctuary where tropical nature and thoughtful
            design come together in perfect harmony.
          </p>
        </FullImage>
      </div>

      <section className="sri-lanka-reset-page__section">
        <p>
          Surrounded by jungle, open skies and the sounds of Sri Lanka’s south
          coast, it offers a peaceful place to slow down, reconnect and simply
          be. Throughout your stay, this extraordinary setting becomes just as
          much a part of the journey as the practices themselves.
        </p>
        <div className="sri-lanka-reset-page__gallery">
          {gallery.map((item) => (
            <figure key={item.alt}>
              <img src={item.src} alt={item.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </section>

      <div id="practice">
        <FullImage
          src={images.practice}
          alt="Tereza holding space during a breath and sound session"
          index="04"
          label="THE PRACTICE"
        >
          <p>
            Throughout the retreat, we'll explore the full spectrum of my
            signature work, including SONIC BREATH™️, SOUND TEMPLE™️, FLOATING
            TEMPLE™️, <br></br>and a series of BREATH LAB workshops.
          </p>
        </FullImage>
      </div>

      <section className="sri-lanka-reset-page__section">
        <div className="sri-lanka-reset-page__columns">
          <p>
            I'll also be introducing SUCO, an active meditation and global
            somatic movement practice that I'm so excited to finally share with
            you following my recent certification.
          </p>
          <p>
            Alongside my own work, you'll practise yoga with a renowned local
            guest facilitator, and we'll share traditional chanting together
            with a special opening blessing with the monks.
          </p>
        </div>
        <p>
          Together, these experiences combine breath, sound and movement through
          practices rooted in somatic experiencing, nervous system regulation
          and embodied awareness as you know them - creating shifts that are not
          only remembered, but deeply embodied.
        </p>
      </section>

      <div id="journey">
        <FullImage
          src={images.journey}
          alt="Guests walking towards Koggala Lake"
          index="05"
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
        <Eyebrow index="06">A TYPICAL DAY</Eyebrow>
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
          index="07"
          label="THE IN-BETWEEN"
        >
          <p>Not every moment is scheduled.</p>
        </FullImage>
      </div>

      <section className="sri-lanka-reset-page__section">
        <p className="sri-lanka-reset-page__lead">
          Some of the most meaningful parts of the retreat happen between the
          sessions.
        </p>
        <p>
          Swimming in the ocean. Reading beneath the palms. A soul-touching
          conversation over tea. Watching the sunset. Falling asleep after SOUND
          TEMPLE™️.
        </p>
        <p>
          Those quiet moments become just as much a part of the journey as the
          workshops and experiences themselves.
        </p>
      </section>

      <section id="immersions" className="sri-lanka-reset-page__section">
        <Eyebrow index="08">NATURE & CULTURAL IMMERSIONS</Eyebrow>
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
        <Eyebrow index="09">YOUR JOURNEY INCLUDES</Eyebrow>
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
          <p>
            <small>
              <sup>*</sup>⁠Donations to the monks are warmly welcomed.
            </small>
          </p>
        </div>
      </section>

      <section id="optional" className="sri-lanka-reset-page__section">
        <Eyebrow index="10">NOT INCLUDED</Eyebrow>
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
          index="11"
          label="INVESTMENT"
        >
          <p>Choose your home.</p>
        </FullImage>
      </div>

      <section className="sri-lanka-reset-page__section">
        <p className="sri-lanka-reset-page__lead">
          A limited number of beautifully designed rooms are available. Each has
          been thoughtfully selected to provide comfort, privacy, and a peaceful
          place to rest and integrate throughout the journey.
        </p>
        <div className="sri-lanka-reset-page__investment-grid">
          {investmentRooms.map((room) => (
            <figure key={room.title}>
              <img src={room.src} alt="" loading="lazy" />
              <figcaption>{room.title}</figcaption>
            </figure>
          ))}
        </div>
        <p className="sri-lanka-reset-page__room-note">
          A detailed room menu with photographs and layouts is available on
          request, so we can find the room that suits you best. Rooms are
          allocated in the order that bookings are received.
        </p>
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
      <SriLankaWhatsAppCta />
    </main>
  );
}
