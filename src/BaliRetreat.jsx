import { useMemo, useState } from "react";
import "./BaliRetreat.css";

const placeholder = (size, text) =>
  `https://placehold.co/${size}?text=${encodeURIComponent(text)}`;

const imageAssets = {
  cover:
    "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/paddy-field-bali-women-standing.jpg",
  returnHero:
    "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/view-from-room-of-ubud-resort.jpg",
  homeHero:
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/ce95e139-6fb5-4bc9-8cee-11fb1d046dc5/dwa+chandra.jpeg",
  practiceHero:
    "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/tezera-edge-inifity.webp",
  journeyHero: placeholder("1600x2200", "The Journey"),
  morning:
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/438d4804-2bad-4edd-a652-45f18a8453eb/Bali+Hai_UpperShala1.jpg",
  midday:
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/c234d272-a808-4c82-83dc-9144a685d060/DSC01089.jpg",
  goldenHour:
    "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/tereza-bali-sunet-temple.webp",
  evening:
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/3641c094-9ce7-4c7d-a908-39817f93e989/ENG00624.jpg",
  inBetweenHero:
    "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/terereza-seatitng-by-the-river.webp",
  investmentHero: placeholder("1600x2200", "Investment"),
  closing: placeholder("1600x2200", "The Return"),
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

const homeFrames = [
  {
    src: "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/chair-room-view.jpg",
    alt: "Chair and room view at Dwa Chandra",
  },
  {
    src: "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/twin-room-view.jpg",
    alt: "Twin room view at Dwa Chandra",
  },
  {
    src: "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/firts-view-looking-into-room.jpg",
    alt: "View looking into a room at Dwa Chandra",
  },
  {
    src: "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/view-from+the+-pool-looking-at-resort-house.jpg",
    alt: "View from the pool looking at the resort house",
  },
];

const spaceCards = [
  {
    title: "The Glass Shala",
    image:
      "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/1724831548844-OO1ETH1UNT9VQL55D54I/dwa+chandra+yoga+shala.JPG",
  },
  {
    title: "The Open Pavilion",
    image:
      "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/1e9fbf4f-586d-4322-a80d-a5a22f923dfb/65d41b51-39ba-4f88-abd1-7b7deedb4b70+2.jpg",
  },
  {
    title: "The Pool",
    image:
      "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/ed5f095e-fe24-4316-b1b6-4a19b04db449/DSC00376.jpeg",
  },
  {
    title: "The River Gorge",
    image:
      "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/d7b70eff-992e-427e-83cd-b9b3a31ca15d/people+community+river.jpeg",
  },
];

const guideCards = [
  {
    title: "Bex Tyrer",
    image:
      "https://www.balispiritfestival.com/wp-content/uploads/2019/07/BSF23-Bex-Tyrer-Headshot.jpg",
    overlayTitle: "BEX TYRER",
  },
  {
    title: "Jordi Jules",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpdMnJPCj4_QXmCYAz5z5xkyRjIzBzxBh8un9PCbgtIA&s=10",
    overlayTitle: "JORDI JULES",
  },
  {
    title: "Francie La Flow",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhOBgiFERtnXITvYrcCHREfUPN9NcgAseiiJkJoNh5KA&s=10",
    overlayTitle: "FRANCIE LA FLOW",
  },
  {
    title: "Tereza Dos Santos",
    image:
      "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/Bali+Singing+Bowls+close+up.png",
    overlayTitle: "TEREZA DOS SANTOS",
  },
];

const dayBlocks = [
  {
    title: "Morning Ritual",
    overlayTitle: "M O R N I N G  R I T U A L",
    image: imageAssets.morning,
    items: [
      "Homemade Jamu and herbal tea",
      "Guided morning meditation exploring the day's theme",
      "Morning movement practice",
      "Floating breakfast",
    ],
  },
  {
    title: "Midday",
    overlayTitle: "M I D D A Y",
    image: imageAssets.midday,
    items: [
      "Free time",
      "Bodywork and treatments",
      "Time to rest, swim, journal, read or simply be",
    ],
  },
  {
    title: "Golden Hour",
    overlayTitle: "G O L D E N  H O U R",
    image: imageAssets.goldenHour,
    items: [
      "Nature & Cultural Immersions:",
      "Melukat water blessing at the river gorge",
      "Hidden-gem jungle waterfall",
      "Ecstatic Dance at the iconic Yoga Barn",
      "Goa Gajah and a walk through the rice fields",
    ],
  },
  {
    title: "Evening Ritual",
    overlayTitle: "E V E N I N G  R I T U A L",
    image: imageAssets.evening,
    items: [
      "Tereza's Signature Session:",
      "SONIC BREATH™",
      "SOUND TEMPLE™",
      "FLOATING TEMPLE™",
      "Curated dinner experience",
    ],
  },
];

const immersionCards = [
  {
    title: "Melukat Water Blessing",
    image:
      "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/tereza-at-water-temple.webp",
    overlayTitle: "Balinese priest blessing",
    overlayText: "At the river gorge",
  },
  {
    title: "Hidden-Gem Waterfall",
    image:
      "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/Waterfall+Tereza+Jump+2.webp",
    overlayTitle: "Nature immersion",
    overlayText: "Jungle waterfall experience",
  },
  {
    title: "Ecstatic Dance",
    image:
      "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/yoga-barn-ecstatic-dance.webp",
    overlayTitle: "Yoga Barn",
    overlayText: "A renowned Bali ritual",
  },
  {
    title: "Goa Gajah & Rice Fields",
    image:
      "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/9th-century+sites-goa-gajah.webp",
    overlayTitle: "9th-century sites",
    overlayText: "Guided walk through the rice fields",
  },
];

const includedItems = [
  "9 nights accommodation at Dwa Chandra",
  "Round-trip airport transfers",
  "Daily chef-prepared vegetarian breakfast",
  "Daily dinner experiences throughout the retreat",
  "Signature dinner experience at Merlin",
  "Free-flowing herbal tea, black coffee & fresh tropical fruit",
  "Traditional Balinese welcome massage (60 min)",
  "All of Tereza's signature sessions and workshops throughout the retreat",
  "Daily guided meditation & mindfulness practices",
  "2 yoga classes with Bex Tyrer",
  "Qi Gong with Jordi Jules",
  "Vocal Activation Experience with Francie La Flow",
  "Ecstatic Dance experience at the world-renowned Yoga Barn",
  "All Nature & Cultural Immersions",
  "Traditional Balinese Water Blessing Ceremony",
];

const optionalItems = [
  "International flights to and from Bali",
  "Travel insurance (required)",
  "Visa fees (if applicable)",
  "Lunches (available a la carte at Dwa Chandra)",
  "Additional food & beverages ordered a la carte",
  "Optional excursions and activities beyond the retreat programme",
  "Personal purchases & pocket money",
  "Alcoholic beverages",
];

const sectionMenu = [
  ["cover", "Cover"],
  ["welcome", "Welcome"],
  ["return", "The Return"],
  ["home", "Your Home"],
  ["spaces", "The Spaces"],
  ["practice", "The Practice"],
  ["journey", "The Journey"],
  ["typical-day", "A Typical Day"],
  ["in-between", "The In-Between"],
  ["immersions", "Immersions"],
  ["included", "What's Included"],
  ["optional", "What's Not Included"],
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
    className={`kurulu-bay-page__media${priority ? " kurulu-bay-page__media--hero" : ""}${overlayLabel || overlayTitle || overlayText ? " kurulu-bay-page__media--with-overlay" : ""}`}
  >
    <img src={src} alt={alt} loading={priority ? "eager" : "lazy"} />
    {overlayLabel || overlayTitle || overlayText ? (
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
        ) : overlayText ? (
          <p className="kurulu-bay-page__media-overlay-text">{overlayText}</p>
        ) : null}
      </div>
    ) : null}
  </div>
);

export default function BaliRetreat() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuItems = useMemo(
    () => sectionMenu.map(([id, label]) => ({ id, label })),
    [],
  );

  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className="bali-retreat-page">
      <div className="kurulu-bay-page">
      <section id="cover" className="kurulu-bay-page__hero">
        <div className="kurulu-bay-page__hero-image">
          <img
            src={imageAssets.cover}
            alt="The Return Bali Edition cover"
            loading="eager"
          />
        </div>
        <div className="kurulu-bay-page__hero-copy">
          <p className="kurulu-bay-page__brand">THE RETURN</p>
          <p className="kurulu-bay-page__edition">Bali Edition</p>
          <div className="kurulu-bay-page__rule" />
          <p className="kurulu-bay-page__meta">
            A 10-Day Private Retreat curated by Tereza Dos Santos
          </p>
          <p className="kurulu-bay-page__meta kurulu-bay-page__meta--spaced">
            October 3 — October 12, 2026
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
        aria-controls="bali-contents-menu"
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
        id="bali-contents-menu"
        className={`kurulu-bay-page__contents-panel${menuOpen ? " kurulu-bay-page__contents-panel--open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <p className="kurulu-bay-page__contents-title">Jump to section</p>
        <nav
          className="kurulu-bay-page__contents-nav"
          aria-label="Bali retreat sections"
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
              meaningful connection - and Mama Bali, my second home and my most
              profound teacher. Her culture, her warm and devoted people, and
              the rituals we are so generously invited into.
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
        src={imageAssets.returnHero}
        alt="The Return Bali Edition hero"
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
        <p>Give yourself permission to Surrender To The Mystery.</p>
      </section>

      <FullImage
        src={imageAssets.homeHero}
        alt="Dwa Chandra retreat sanctuary"
        overlayIndex="03"
        overlayLabel="YOUR HOME"
        overlayText="Dwa Chandra is a sanctuary where jungle, architecture and nature exist in perfect harmony."
      />

      <section
        id="home"
        className="kurulu-bay-page__text-section kurulu-bay-page__text-section--compact"
      >
        <p className="kurulu-bay-page__lead">
          Just outside Ubud, tucked above a private river gorge in the ancient
          village of Pejeng, Dwa Chandra is a sanctuary where jungle,
          architecture and nature exist in perfect harmony. Two private villas,
          three open-air yoga shalas, a meditation deck suspended above the
          river, and ninth-century temple carvings hidden within the cliffs
          create a setting that feels both timeless and deeply connected to the
          land. Throughout your stay, this extraordinary sanctuary becomes as
          much a part of the journey as the practices themselves.
        </p>
        <div className="kurulu-bay-page__gallery-grid">
          {homeFrames.map((item) => (
            <figure key={item.alt} className="kurulu-bay-page__gallery-card">
              <img src={item.src} alt={item.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </section>

      <section
        id="spaces"
        className="kurulu-bay-page__text-section kurulu-bay-page__text-section--compact"
      >
        <SectionLabel index="04">THE SPACES</SectionLabel>
        <p className="kurulu-bay-page__lead">
          Every practice has its own room here. Not one hall we return to each
          day, but a collection of spaces and platforms. Each one is built for a
          different kind of attention, practice and energy, and each one opens
          onto the breathtaking valley.
        </p>
        <div className="kurulu-bay-page__spaces-row">
          {spaceCards.map((item) => (
            <figure
              key={item.title}
              className="kurulu-bay-page__immersion-card"
            >
              <img src={item.image} alt={item.title} loading="lazy" />
              <figcaption>{item.title}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <FullImage
        src={imageAssets.practiceHero}
        alt="The Practice at The Return Bali Edition"
        overlayIndex="05"
        overlayLabel="THE PRACTICE"
        overlayText="Throughout the retreat, we'll explore the full spectrum of my signature work, including SONIC BREATH™, SOUND TEMPLE™, FLOATING TEMPLE™, and a series of BREATH LAB workshops. I'll also be introducing SUCO, an active meditation and global somatic movement practice that I'm so excited to finally share with you following my recent certification."
      />

      <section id="practice" className="kurulu-bay-page__text-section">
        <div className="kurulu-bay-page__columns">
          <div>
            <p>
              And because no retreat is created alone, I can't wait to introduce
              you to a few of the beautiful humans who have shaped my own
              journey over the years - my longtime mentor, teacher and dear
              friend Bex Tyrer for yoga, Jordi Jules for Qi Gong, Francie La
              Flow for a powerful vocal activation experience, and a traditional
              opening water blessing led by a local Balinese priest.
            </p>
          </div>
          <div>
            <p>
              Together, these experiences weave breath, sound, movement, nature
              and meaningful connection into one continuous journey - rooted in
              nervous system regulation, somatic practice and embodied
              awareness. My hope is that you leave not only with beautiful
              memories, but with practices that become part of your everyday
              life.
            </p>
          </div>
        </div>
        <div className="kurulu-bay-page__investment-grid">
          {guideCards.map((item) => (
            <figure
              key={item.title}
              className="kurulu-bay-page__investment-image"
            >
              <img src={item.image} alt={item.title} loading="lazy" />
              {item.overlayTitle ? (
                <div className="kurulu-bay-page__investment-image-overlay">
                  <strong>{item.overlayTitle}</strong>
                </div>
              ) : null}
              <figcaption>{item.title}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <FullImage
        src={imageAssets.journeyHero}
        alt="The Journey at The Return Bali Edition"
        overlayIndex="06"
        overlayLabel="THE JOURNEY"
        overlayText="Each day we explore a different theme, thoughtfully designed to build upon the one before it, creating a journey that comes full circle before you return home."
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
        src={imageAssets.inBetweenHero}
        alt="The In-Between at The Return Bali Edition"
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
          <p>Watching the morning mist lift from the valley.</p>
          <p>Barefoot walks through the gardens.</p>
          <p>A soul-touching conversation over tea.</p>
          <p>Listening to the river between sessions.</p>
          <p>Receiving a traditional Balinese massage.</p>
          <p>Falling asleep with the jungle as your soundtrack.</p>
        </div>
      </section>

      <section
        id="immersions"
        className="kurulu-bay-page__text-section kurulu-bay-page__text-section--compact"
      >
        <SectionLabel index="09">NATURE & CULTURAL IMMERSIONS</SectionLabel>
        <p className="kurulu-bay-page__lead">
          This retreat is built as much on what we do together as on where we do
          it. Over ten days the practices, the spaces and the experiences become
          one continuous story - one we write together. These carefully curated
          immersions are part of that story rather than an add-on. Each one of
          them is already included in the retreat journey.
        </p>
        <div className="kurulu-bay-page__immersion-grid">
          {immersionCards.map((item) => (
            <figure
              key={item.title}
              className="kurulu-bay-page__immersion-card"
            >
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="kurulu-bay-page__immersion-card-overlay">
                <strong>{item.overlayTitle}</strong>
                <p>{item.overlayText}</p>
              </div>
              <figcaption>{item.title}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section
        id="included"
        className="kurulu-bay-page__text-section kurulu-bay-page__text-section--compact"
      >
        <SectionLabel index="10">WHAT'S INCLUDED</SectionLabel>
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
      </section>

      <section
        id="optional"
        className="kurulu-bay-page__text-section kurulu-bay-page__text-section--compact"
      >
        <SectionLabel index="11">WHAT'S NOT INCLUDED</SectionLabel>
        <div className="kurulu-bay-page__stack">
          {optionalItems.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      <FullImage
        src={imageAssets.investmentHero}
        alt="Investment at The Return Bali Edition"
        overlayIndex="12"
        overlayLabel="INVESTMENT"
        overlayText="Choose your home"
      />

      <section
        id="investment"
        className="kurulu-bay-page__text-section kurulu-bay-page__text-section--compact"
      >
        <p className="kurulu-bay-page__lead">
          Dwa Chandra is, without question, my favourite place to stay in Bali.
          It's where I come to write, to create, to breathe, and to remember
          what really matters. Over the years it has become my sanctuary - a
          place that somehow always feels like coming home. Every room has its
          own personality, every view tells a different story, and I couldn't
          imagine a more beautiful place to share this journey with you.
        </p>
        <div className="kurulu-bay-page__investment-grid">
          <figure className="kurulu-bay-page__investment-image">
            <img
              src={placeholder("1000x1200", "All Rooms")}
              alt="Dwa Chandra rooms"
              loading="lazy"
            />
            <figcaption>All Rooms</figcaption>
          </figure>
        </div>
        <div className="kurulu-bay-page__pricing-summary">
          <div className="kurulu-bay-page__pricing-columns">
            <section
              className="kurulu-bay-page__pricing-group"
              aria-label="All rooms pricing"
            >
              <h3 className="kurulu-bay-page__pricing-heading">
                A L L R O O M S
              </h3>
              <div className="kurulu-bay-page__pricing-row">
                <span>Single Occupancy</span>
                <strong>4,700 USD</strong>
              </div>
              <div className="kurulu-bay-page__pricing-row">
                <span>Double Occupancy</span>
                <strong>3,700 USD</strong>
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
            The journey doesn't end when you leave Bali.
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
            src={imageAssets.closing}
            alt="The Return Bali Edition closing"
          />
        </div>
      </section>
      </div>
    </div>
  );
}
