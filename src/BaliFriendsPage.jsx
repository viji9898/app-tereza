import { useMemo, useState } from "react";
import "./BaliRetreat.css";
import "./BaliFriendsPage.css";

const WHATSAPP_URL = `https://wa.me/201010001133?text=${encodeURIComponent(
  "Hello Tereza, I'd like to join The RESET Friends Edition in Bali.",
)}`;

const images = {
  cover:
    "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/ariel-view-dwa-chandra_optimised.webp",
  welcome:
    "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/view-from-room-of-ubud-resort.jpg",
  home: "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/dwa_chandra_home_hero.webp",
  villa:
    "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/chair-room-view.jpg",
  room: "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/twin-room-view.webp",
  glassShala:
    "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/glass_yoga_shala.webp",
  pavilion:
    "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/open_pavillion.webp",
  jam: "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/tezera-edge-inifity.webp",
  paddyField:
    "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/paddy-field-bali-women-standing.jpg",
  daily:
    "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/morning_ritual_shala.webp",
  inBetween:
    "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/terereza-seatitng-by-the-river_optimised.webp",
  melukat:
    "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/tereza-at-water-temple_optimised.webp",
  waterfall:
    "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/waterfall_tereza_jump.webp",
  investment:
    "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/dwa_chandra_villa_investment_page.webp",
  roomDetail:
    "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/room-overlooking-balcony.optimised.webp",
  closing:
    "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/Namaste+Raabta.webp",
};

const homeFrames = [
  {
    src: "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/chair-room-view.jpg",
    alt: "Chair and room view at Dwa Chandra",
  },
  {
    src: "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/twin-room-view.webp",
    alt: "Twin room view at Dwa Chandra",
  },
  {
    src: "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/firts-view-looking-into-room.jpg",
    alt: "View looking into a room at Dwa Chandra",
  },
  {
    src: "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/view_from_the_pool_looking_at_resort_house.webp",
    alt: "View from the pool looking at the resort house",
  },
];

const spaceCards = [
  {
    title: "The Glass Shala",
    overlayTitle: "THE GLASS SHALA",
    image:
      "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/glass_yoga_shala.webp",
  },
  {
    title: "The Open Pavilion",
    overlayTitle: "THE OPEN PAVILION",
    image:
      "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/open_pavillion.webp",
  },
  {
    title: "The Hanging Pool With Firepit",
    overlayTitle: "THE HANGING POOL WITH FIREPIT",
    image:
      "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/hanging_pool.webp",
  },
  {
    title: "The River Gorge",
    overlayTitle: "THE RIVER GORGE",
    image:
      "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/river_gorge.webp",
  },
];

const dayBlocks = [
  {
    title: "Morning",
    overlayTitle: "M O R N I N G",
    image:
      "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/morning_ritual_shala.webp",
    items: [
      "Homemade Jamu and herbal tea, whenever you surface",
      "Anti-inflammatory breakfast",
      "The valley with the mist still on it",
      "Someone will probably be moving in one of the shalas — join or don't",
    ],
  },
  {
    title: "Midday",
    overlayTitle: "M I D D A Y",
    image:
      "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/midday_massage.webp",
    items: [
      "Bodywork and treatments",
      "The pools",
      " Market strolls",
      "Work, if you're working",
      "Sleep, if you're sleeping",
    ],
  },
  {
    title: "Golden Hour",
    overlayTitle: "G O L D E N  H O U R",
    image:
      "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/tereza-bali-sunet-temple.webp",
    items: [
      "The river gorge, the caves, the rice fields, the temple carvings in our own cliffs",
      "Or further out — we'll tell you what's worth doing and get you there",
      "Or the deck, with a book",
    ],
  },
  {
    title: "Evening",
    overlayTitle: "E V E N I N G",
    image:
      "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/evening_ritual.webp",
    items: [
      "Whatever someone feels moved to offer",
      "The fire pit",
      "Dinner — together, or not",
      "The jungle as your sound bath",
    ],
  },
];

const immersionCards = [
  {
    title: "Melukat Water Blessing",
    image:
      "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/tereza-at-water-temple_optimised.webp",
    overlayTitle: "Balinese priest blessing",
    overlayText: "At the river gorge",
  },
  {
    title: "Hidden-Gem Waterfall",
    image:
      "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/waterfall_tereza_jump.webp",
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

const investmentRoomImages = [
  {
    src: "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/room-overlooking_pool_optimised.webp",
    alt: "Dwa Chandra room overlooking the pool",
  },
  {
    src: "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/room-overlooking-balcony.optimised.webp",
    alt: "Dwa Chandra room overlooking a balcony",
  },
  {
    src: "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/room-over-looking-trees_optmisied.webp",
    alt: "Dwa Chandra room overlooking the trees",
  },
  {
    src: "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/room-overlooking-bathtub-outdoors_optimised.webp",
    alt: "Dwa Chandra room with an outdoor bathtub view",
  },
];

const sections = [
  ["cover", "Cover"],
  ["letter", "Axé família"],
  ["home", "Your home"],
  ["spaces", "The spaces"],
  ["jam", "The jam"],
  ["day", "No typical day"],
  ["in-between", "The in-between"],
  ["culture", "Nature & culture"],
  ["included", "What's included"],
  ["investment", "Choose your home"],
  ["notes", "Honest notes"],
];

const included = [
  "6 nights accommodation at Dwa Chandra",
  "Round-trip airport transfers",
  "Daily chef-prepared anti-inflammatory vegetarian breakfast",
  "Free-flowing herbal tea, black coffee, fresh tropical fruit and water throughout the day",
  "Traditional Balinese welcome massage (60 min)",
  "Traditional Balinese Water Blessing (Melukat) at the river gorge",
  "A couple of nature and cultural immersions",
  "Full access to the entire sanctuary, fully staffed and serviced — river gorge, caves, ancient temple site, rice fields, pools, shalas, library, co-working spaces, fire pit",
  "Any offering that any of us feels moved to share with the others",
  "Not having to move a finger from the moment you land",
];

const notIncluded = [
  "International flights to and from Bali",
  "Travel insurance (required)",
  "Visa fees (if applicable)",
  "Lunches and dinners can be ordered a la carte",
  "Optional excursions and activities beyond what's included",
  "Personal purchases & pocket money",
  "Alcoholic beverages",
];

const SectionLabel = ({ children, index }) => (
  <p className="kurulu-bay-page__eyebrow">
    {index ? `${index} ` : ""}
    {children}
  </p>
);

const FullImage = ({ src, alt, label, index, children, className = "" }) => (
  <section
    className={`kurulu-bay-page__media kurulu-bay-page__media--with-overlay bali-friends__full-image ${className}`}
  >
    <img src={src} alt={alt} loading="lazy" />
    <div className="kurulu-bay-page__media-overlay bali-friends__image-copy">
      {label ? <SectionLabel index={index}>{label}</SectionLabel> : null}
      {children}
    </div>
  </section>
);

export default function BaliFriendsPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuItems = useMemo(
    () => sections.map(([id, label]) => ({ id, label })),
    [],
  );

  return (
    <div className="bali-retreat-page bali-friends-page">
      <main className="kurulu-bay-page">
        <section id="cover" className="kurulu-bay-page__hero">
          <div className="kurulu-bay-page__hero-image">
            <img src={images.cover} alt="Dwa Chandra among the Bali jungle" />
          </div>
          <div className="kurulu-bay-page__hero-copy bali-friends__hero-copy">
            <p className="kurulu-bay-page__brand">THE RESET</p>
            <p className="kurulu-bay-page__edition">
              Friends Edition · Dwa Chandra, Bali
            </p>
            <div className="kurulu-bay-page__rule" />

            <p className="kurulu-bay-page__meta kurulu-bay-page__meta--spaced">
              September 23 — September 29, 2026
            </p>
            <p className="kurulu-bay-page__meta kurulu-bay-page__meta--spaced">
              October 3 — October 13, 2026
            </p>
            <div className="kurulu-bay-page__hero-lines">
              <p>Less noise.</p>
              <p>More us.</p>
            </div>
          </div>
        </section>

        <button
          type="button"
          className={`kurulu-bay-page__contents-trigger${menuOpen ? " kurulu-bay-page__contents-trigger--open" : ""}`}
          onClick={() => setMenuOpen((current) => !current)}
          aria-expanded={menuOpen}
          aria-controls="bali-friends-contents"
          aria-label="Open contents menu"
        >
          <span className="kurulu-bay-page__contents-trigger-line" />
        </button>
        <div
          className={`kurulu-bay-page__contents-overlay${menuOpen ? " kurulu-bay-page__contents-overlay--open" : ""}`}
          onClick={() => setMenuOpen(false)}
          aria-hidden={!menuOpen}
        />
        <aside
          id="bali-friends-contents"
          className={`kurulu-bay-page__contents-panel${menuOpen ? " kurulu-bay-page__contents-panel--open" : ""}`}
          aria-hidden={!menuOpen}
        >
          <p className="kurulu-bay-page__contents-title">Jump to section</p>
          <nav
            className="kurulu-bay-page__contents-nav"
            aria-label="Bali Friends sections"
          >
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="kurulu-bay-page__contents-link"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </aside>

        <section
          id="letter"
          className="kurulu-bay-page__text-section bali-friends__letter"
        >
          <SectionLabel>AXÉ, MEUS AMORES 🤍</SectionLabel>
          <p className="kurulu-bay-page__lead">
            If you're reading this, you're one of about a handfull people I'm
            sending this to.
          </p>
          <p>Two days ago, I fainted.</p>
          <p>
            Not dramatically. I'd been running on very little for months —
            holding a lot, pushing hard to make these retreats happen — and my
            body finally did the thing bodies do when you stop listening to
            them. It put me on the floor.
          </p>
          <p>
            And the thought that arrived while I was down there wasn't{" "}
            <em>how do I fix this?</em> It was much simpler, and much louder:
          </p>
          <p>
            <strong>I'm the one who needs this.</strong>
          </p>
          <p>Here's what had already happened.</p>
          <p>
            Dwa Chandra — my favourite place in Bali, and probably in the world
            — is the sanctuary I keep returning to. It's where I go to write and
            compose, practice and breathe, and remember what actually matters.
          </p>
          <p>
            They had a last-minute cancellation. The owner is a dope and dear
            sister of mine, and she gave me a rate that makes absolutely no
            sense, on the one condition that I come and do my thing there.
          </p>
          <p>My first impulse, obviously, was to build a retreat.</p>
          <p>Design the programme. Sell the spots. Hold everyone.</p>
          <p>Then I fainted, and a second, quieter impulse arrived:</p>
          <p>
            <strong>What if I just went?</strong>
          </p>
          <p>
            What if instead of holding a room full of strangers, I invited the
            people I actually want to be around, and we simply had the week?
          </p>
          <p>
            Soul friends. Creatives. Healers. Artists. Childhood friends. People
            from completely different corners of my life who I have a feeling
            would really enjoy finding themselves in the same room.
          </p>
          <p>So that's what this is.</p>
        </section>

        <section className="bali-friends__letter-continuation">
          <div className="bali-friends__welcome-hero">
            <img
              src={images.welcome}
              alt="Dwa Chandra in the Bali landscape"
              loading="lazy"
            />
            <div className="bali-friends__welcome-copy">
              <SectionLabel index="02">THE RESET</SectionLabel>
              <p>
                <span>
                  Not a retreat. No programme. No schedule. Nothing to keep up
                </span>
                <span>
                  with and nobody performing anything — least of all me.
                </span>
              </p>
            </div>
          </div>
          <div className="kurulu-bay-page__text-section">
            <p className="kurulu-bay-page__lead">
              Just a handful of people I love, scattered around the world,
              off-grid together in an absurdly beautiful place for seven days.
            </p>
            <p>
              A spiritual jam session. Healing, co-working, swimming, eating,
              reflecting, conversing, practising, singing, doing absolutely
              nothing. All of it. Whatever the week turns out to want.
            </p>
            <p>
              You're on this list because you came to mind, and because I trust
              the frequency you carry.
            </p>
            <p className="bali-friends__invitation">
              Lets go disappear together.
            </p>
            <p className="kurulu-bay-page__signature">
              Com amor,
              <br />
              Tereza
            </p>
          </div>
        </section>

        <FullImage
          src={images.home}
          alt="Dwa Chandra retreat sanctuary"
          index="03"
          label="YOUR HOME"
        >
          <h2 className="kurulu-bay-page__media-overlay-title bali-friends__single-line">
            Dwa Chandra is a sanctuary where jungle, architecture and nature
            exist in perfect harmony.
          </h2>
        </FullImage>

        <section
          id="home"
          className="kurulu-bay-page__text-section kurulu-bay-page__text-section--compact"
        >
          <p className="kurulu-bay-page__lead">
            Just outside Ubud, tucked above a private river gorge in the ancient
            village of Pejeng, Dwa Chandra is a sanctuary where jungle,
            architecture and nature exist in perfect harmony. Two private
            villas, three open-air yoga shalas, a meditation deck suspended
            above the river, and ninth-century temple carvings hidden within the
            cliffs create a setting that feels both timeless and deeply
            connected to the land. Throughout your stay, this extraordinary
            sanctuary becomes as much a part of the journey as the practices
            themselves.
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
            Every practice has its own room here — and this week, all of them
            are open to us.
          </p>
          <p>
            Not one hall we return to each day, but a collection of spaces and
            platforms, each built for a different kind of attention, each
            opening onto the valley. The glass shala. The open pavilion. The
            meditation deck above the river. A library. Quiet corners with
            beautiful light and strong wifi, if you've got something you're in
            the middle of building.
          </p>
          <p>
            Use them however you want. Move through all of them, or claim one as
            yours for the week and never leave it. They're here. Nothing in them
            is scheduled.
          </p>
          <div className="kurulu-bay-page__day-grid">
            {spaceCards.map((item) => (
              <figure
                key={item.title}
                className="kurulu-bay-page__immersion-card"
              >
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="kurulu-bay-page__immersion-card-overlay">
                  <strong>{item.overlayTitle}</strong>
                </div>
              </figure>
            ))}
          </div>
        </section>

        <FullImage
          src={images.jam}
          alt="Movement above the clouds in Bali"
          index="05"
          label="THE JAM"
        >
          <h2 className="kurulu-bay-page__media-overlay-title">
            There's no programme. I want to be really clear about that, because
            I know how invitations like this usually read.
          </h2>
        </FullImage>

        <section id="jam">
          <div className="kurulu-bay-page__text-section">
            <p className="kurulu-bay-page__lead">
              <strong>
                Nobody is teaching. Nobody is being taught. What happens is
                whatever we bring.
              </strong>
            </p>
            <p>
              If you want to offer something, the space is yours and we'd love
              it — a sound bath, a breath session, a talk on how you built your
              business, a song, a workshop you've been wanting to test on kind
              people, a recipe, a long walk with whoever wants to come. If you
              want to offer nothing at all, that is equally and entirely the
              point.
            </p>
            <p>
              I'll be doing my thing too. Some SONIC BREATH™, probably a SOUND
              TEMPLE™ if the mood takes us. Not as a schedule — as an offering,
              when it feels right, for whoever's around.
            </p>
            <p>
              And if you're in the middle of building something: bring it. There
              are beautiful working and co-working spaces, a library, fast wifi,
              and the kind of energy and environment that makes work feel like a
              pleasure instead of a grind. Several of us will probably be doing
              exactly that.
            </p>
            <p>
              If what you need is to hermit for seven days and speak to no one —
              that's completely invited, and nobody will take it personally.
            </p>
            <p className="bali-friends__invitation">
              Everyone plays. Or doesn't.
            </p>
          </div>
          <FullImage
            src={images.paddyField}
            alt="Women standing in a Bali paddy field"
            index="06"
            label="THE SHAPE OF THE WEEK"
          >
            <h2 className="kurulu-bay-page__media-overlay-title">
              There's no arc. No theme for each day building on the one before
              it. The week will find its own shape and we'll co-create it
              together.
            </h2>
          </FullImage>
          <div className="kurulu-bay-page__text-section">
            <p> Though from experience, it tends to go something like:</p>
            <div className="bali-friends__week-shape">
              <p>You sleep more than you expected to.</p>
              <p>Your body stops bracing.</p>
              <p>The conversations get good.</p>
              <p>You stop reaching for your phone.</p>
              <p>You don't want to leave.</p>
            </div>
            <p>
              <strong>That's the entire itinerary.</strong>
            </p>
          </div>
        </section>

        <section
          id="day"
          className="kurulu-bay-page__text-section kurulu-bay-page__text-section--compact"
        >
          <SectionLabel index="07">A TYPICAL DAY</SectionLabel>
          <h2 className="kurulu-bay-page__headline bali-friends__day-intro">
            <span>There isn't one. But here's what's there every day,</span>
            <span>if and when you want it.</span>
          </h2>
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
          src={images.inBetween}
          alt="A quiet moment beside the river"
          label="08 It's all the in-between"
          className="bali-friends__in-between"
        >
          <h2 className="kurulu-bay-page__media-overlay-title">
            On a retreat, the best parts happen between the sessions.
          </h2>
        </FullImage>

        <section id="in-between" className="kurulu-bay-page__text-section">
          <p className="kurulu-bay-page__lead">This week is all in-between.</p>
          <p>
            Watching the morning mist lift from the valley. Barefoot walks
            through the gardens. A conversation over tea that was going to be
            twenty minutes and runs three hours. Listening to the river.
            Receiving a traditional Balinese massage. Someone picking up an
            instrument at exactly the right moment. Falling asleep with nature
            as your soundtrack.
          </p>
        </section>

        <section id="culture" className="kurulu-bay-page__text-section">
          <SectionLabel index="09">NATURE & CULTURAL IMMERSIONS</SectionLabel>
          <h2 className="kurulu-bay-page__headline bali-friends__hero-text-size">
            Bali is right there, and none of it is compulsory.
          </h2>
          <p>
            A couple of immersions are included, and we'll do those together if
            there's appetite — the Melukat water blessing at the river gorge is
            the one I'd genuinely love for you to experience.
          </p>
          <p>
            Beyond that: the hidden-gem jungle waterfall. Goa Gajah. The rice
            fields. Ecstatic dance at the Yoga Barn. Some of it is included,
            some of it isn't, all of it is available.
          </p>
          <p>
            Check what your capacity is on any given day and we'll point you at
            the right thing — or at the hammock. Both are correct answers.
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
          className="kurulu-bay-page__text-section bali-friends__included"
        >
          <div>
            <SectionLabel>What's included</SectionLabel>
            <ul>
              {included.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <SectionLabel>What's not included</SectionLabel>
            <ul>
              {notIncluded.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <FullImage
          src={images.investment}
          alt="Investment at The RESET Friends Edition"
          index="12"
          label="CONTRIBUTION"
        >
          {/* <h2 className="kurulu-bay-page__media-overlay-title">
            Choose your home
          </h2> */}
        </FullImage>

        <section id="investment" className="kurulu-bay-page__text-section">
          {/* <SectionLabel>Choose your home</SectionLabel> */}
          <p className="kurulu-bay-page__lead">
            Dwa Chandra is, without question, my favourite place to stay in
            Bali. It's where I come to write, to create, to breathe, and to
            remember what really matters. Over the years it has become my
            sanctuary — a place that somehow always feels like coming home.
            Every room has its own personality, every view tells a different
            story, and I couldn't imagine a more beautiful place to share this
            journey with you.
          </p>
          <div className="kurulu-bay-page__day-grid">
            {investmentRoomImages.map((room) => (
              <article
                key={room.src}
                className="kurulu-bay-page__day-card kurulu-bay-page__day-card--plain"
              >
                <img src={room.src} alt={room.alt} loading="lazy" />
              </article>
            ))}
          </div>
          <p>
            A detailed room menu with photographs and layouts is available on
            request, so we can find the room that suits you best. Rooms are
            allocated in the order that bookings are received.
          </p>
          <div className="bali-friends__price">
            <div className="bali-friends__price-option">
              <p>September 23 - 29</p>
              <span>$1,110 USD</span>
              <p>Per person · The whole week</p>
            </div>
            <div className="bali-friends__price-option">
              <p>October 3 - 13</p>
              <span>$1,990 USD</span>
              <p>Per person · Across 11 days</p>
            </div>
          </div>
          <p>
            <strong>
              That isn't a price. It's the cost of the place, divided between
              us.
            </strong>
          </p>
          <p>
            The owner gave us a wild 50% rate because she's a friend and because
            the week suddenly opened up. All I'm doing is passing it straight
            on. There's no margin in this for us — we're coming as one of you.
          </p>
        </section>

        <section
          id="notes"
          className="kurulu-bay-page__text-section bali-friends__notes"
        >
          <SectionLabel>A few honest notes</SectionLabel>
          <h2 className="kurulu-bay-page__headline">
            The more of us , the merrier.
          </h2>
          <div className="bali-friends__notes-list">
            <p>
              20 of us, maximum. Rooms allocate in the order people say yes. It
              is double occupancy.
            </p>
            <p>
              If you travel with a partner, a friend, a person — bring them.
              Just tell me who.
            </p>

            <p>Send this on to anyone you'd want beside you that week.</p>
            <p>
              Need confirmation by Sunday, September 6th, if you are on board —
              flights to Bali get silly close in.
            </p>
          </div>

          <p className="bali-friends__invitation">
            Let me know how this lands in the body.
          </p>
        </section>

        <FullImage
          src={images.closing}
          alt="Tereza in Bali at sunset"
          label="The RESET · Friends Edition"
          className="bali-friends__closing"
        >
          <div className="bali-friends__closing-action">
            <h2 className="kurulu-bay-page__media-overlay-title">
              SO… BALI?
              <br />
            </h2>
            <a
              className="bali-friends__closing-link"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Message Tereza about The RESET Friends Edition on WhatsApp"
            >
              Let's go
            </a>
          </div>
        </FullImage>
      </main>
    </div>
  );
}
