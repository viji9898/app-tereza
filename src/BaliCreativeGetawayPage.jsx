import { useMemo, useState } from "react";
import "./BaliCreativeGetawayPage.css";

const WHATSAPP_URL = `https://wa.me/201010001133?text=${encodeURIComponent(
  "Hello Tereza, I'd like to join The RESET Creative Getaway in Bali.",
)}`;

const images = {
  cover:
    "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/ariel-view-dwa-chandra_optimised.webp",
  home: "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/dwa_chandra_home_hero.webp",
  villa:
    "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/chair-room-view.jpg",
  room: "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/twin-room-view.webp",
  glassShala:
    "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/glass_yoga_shala.webp",
  pavilion:
    "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/open_pavillion.webp",
  jam: "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/view-from-room-of-ubud-resort.jpg",
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
      "Deep work hours, for those who work",
      "The pools",
      "Bodywork and treatments",

      "Sleep, if you're sleeping",
    ],
  },
  {
    title: "Afternoon",
    overlayTitle: "A F T E R N O O N",
    image:
      "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/tereza-bali-sunet-temple.webp",
    items: [
      "The river gorge, the caves, the rice fields, the temple carvings in our own cliffs",
      "Or further out, and we'll tell you what's worth it",
      "Or the deck with a book",
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
      "Dinner, together or not",
      "The piano",
      "The jungle as your soundtrack",
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
  ["jam", "How it works"],
  ["day", "No typical day"],
  ["in-between", "The in-between"],
  ["culture", "Nature & culture"],
  ["included", "What's included"],
  ["investment", "Choose your home"],
  ["notes", "Honest notes"],
];

const included = [
  "6 or 10 nights accommodation at Dwa Chandra",
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
    className={`kurulu-bay-page__media kurulu-bay-page__media--with-overlay bali-creative-getaway__full-image ${className}`}
  >
    <img src={src} alt={alt} loading="lazy" />
    <div className="kurulu-bay-page__media-overlay bali-creative-getaway__image-copy">
      {label ? <SectionLabel index={index}>{label}</SectionLabel> : null}
      {children}
    </div>
  </section>
);

export default function BaliCreativeGetawayPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuItems = useMemo(
    () => sections.map(([id, label]) => ({ id, label })),
    [],
  );

  return (
    <div className="bali-creative-getaway-page">
      <main className="kurulu-bay-page">
        <section id="cover" className="kurulu-bay-page__hero">
          <div className="kurulu-bay-page__hero-image">
            <img src={images.cover} alt="Dwa Chandra among the Bali jungle" />
          </div>
          <div className="kurulu-bay-page__hero-copy bali-creative-getaway__hero-copy">
            <p className="kurulu-bay-page__brand">THE RESET</p>
            <p className="kurulu-bay-page__edition">
              Creative Getaway · Dwa Chandra, Bali
            </p>
            <div className="kurulu-bay-page__rule" />

            <p className="kurulu-bay-page__meta kurulu-bay-page__meta--spaced">
              September 23 — September 29, 2026
            </p>
            <p className="kurulu-bay-page__meta kurulu-bay-page__meta--spaced">
              October 3 — 12, 2026
            </p>
            <div className="kurulu-bay-page__hero-lines">
              <p>come work on something</p>
              <p>or come do nothing at all</p>
            </div>
            <p className="kurulu-bay-page__meta kurulu-bay-page__meta--spaced">
              Shared Living In A Private Jungle Setting
            </p>
          </div>
        </section>

        <button
          type="button"
          className={`kurulu-bay-page__contents-trigger${menuOpen ? " kurulu-bay-page__contents-trigger--open" : ""}`}
          onClick={() => setMenuOpen((current) => !current)}
          aria-expanded={menuOpen}
          aria-controls="bali-creative-getaway-contents"
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
          id="bali-creative-getaway-contents"
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
          className="kurulu-bay-page__text-section bali-creative-getaway__letter"
        >
          <SectionLabel>WHAT THIS IS? </SectionLabel>
          <p className="kurulu-bay-page__lead">
            We've booked a private sanctuary outside Ubud, and there are still a
            few rooms open.
          </p>
          <p>
            It's shared living for a while — a small group of artists,
            entrepreneurs and good humans in one extraordinary house,
            co-working, co-creating, co-existing, and mostly just enjoying the
            fact that we get to be here at all.
          </p>
          <p>
            The owner is a dear friend of mine. She had a last-minute opening
            and gave us the place at a rate that doesn't really exist. We're
            splitting that cost between us, with no margin added. I'm not
            running this as a business — I'm filling a house I already love with
            people worth being around.
          </p>
          <p>
            There's no programme and no schedule. Nobody is teaching, nobody is
            being taught. The wifi is strong and fast, so bring the thing you're
            building and build it from somewhere beautiful. Or bring nothing at
            all and finally stop.
          </p>
          <p>I'm bringing a piano and my favorite humans as well.</p>
        </section>

        <FullImage
          src="https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/tezera-edge-inifity.webp"
          alt="Tereza at the infinity pool overlooking the Bali landscape"
          label="MEET YOUR HOST"
        >
          <h2 className="kurulu-bay-page__media-overlay-title"></h2>
        </FullImage>

        <section className="kurulu-bay-page__text-section">
          <SectionLabel>WHO'S HOSTING</SectionLabel>
          <p className="kurulu-bay-page__lead">I'm Tereza.</p>
          <p>
            I've spent the last two decades somewhere between the stage and the
            studio — film producer, composer, concert pianist, and as a figure
            skater with Disney on Ice. These days I also work as a breathwork
            coach and sound therapist, which is more or less what happens when
            you spend twenty years learning what performance does to a nervous
            system.
          </p>
          <p>
            Which is a long way of saying: I know what it is to need to make
            something, and I know what it is to need to stop. These lux villas
            are good for both.
          </p>
          <p>
            I'll be there the whole time — bringing a piano, working on my own
            things, and potentially offering some breathwork or a sound bath to
            whoever wants it. Not on a schedule.
          </p>

          <div className="bali-creative-getaway__section-divider" />

          <SectionLabel>WHO IT'S FOR</SectionLabel>
          <p className="kurulu-bay-page__lead">You'll fit here if:</p>
          <ul className="bali-creative-getaway__fit-list">
            <li>
              You work from anywhere, and you're tired of doing it from a café
            </li>
            <li>
              You're mid-project and you need somewhere inspiring to actually
              finish it
            </li>
            <li>
              You make things, and you want other people who make things nearby
            </li>
            <li>
              You're flexible with where you are in the world, and you want the
              next stretch of it to be good
            </li>
            <li>
              You're running on empty and you already know a hotel won't fix it
            </li>
          </ul>

          <p className="kurulu-bay-page__lead">You won't if:</p>
          <ul className="bali-creative-getaway__fit-list">
            <li>You want a party or a big social scene</li>
            <li>
              You want a structured retreat with a teacher and a timetable
            </li>
            <li>
              You want a hotel where you never run into anyone — there are two
              shared Villas, and that's the point
            </li>
          </ul>
        </section>

        <FullImage
          src={images.home}
          alt="Dwa Chandra retreat sanctuary"
          index="03"
          label="YOUR HOME"
        >
          <h2 className="kurulu-bay-page__media-overlay-title bali-creative-getaway__single-line">
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
            connected to the land.
          </p>
          <p>
            Fully staffed, fully serviced. You won't have to move a finger from
            the moment you land.
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
            Every practice has its own room here — and this week, none of them
            are booked.
          </p>
          <p>
            Three open-air shalas. A meditation deck suspended above the river.
            A library. Two villas. Pools. A fire pit. Long tables and quiet
            corners with good light and fast, reliable wifi.
          </p>
          <p>
            Somewhere to work in the morning, and somewhere completely different
            to collapse in the afternoon.
          </p>
          <p>Use them however you want. Nothing in them is scheduled.</p>
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
          label="HOW IT WORKS"
        >
          <h2 className="kurulu-bay-page__media-overlay-title">
            No programme. No schedule. Nobody holding the room.
          </h2>
        </FullImage>

        <section id="jam">
          <div className="kurulu-bay-page__text-section">
            <p>
              If you want to offer something, offer it. A sound bath. A talk on
              how you built your company. A song. A screening of the thing you
              just cut. A workshop you've been wanting to test on kind people.
              Cooking one dinner. The space is yours and we'd love it.
            </p>
            <p>
              If you want to offer nothing, offer nothing. Several people will
              spend the whole week heads-down on their own work, and that's
              exactly as valid.
            </p>
            <p>
              If you want to disappear entirely, you can. You can socialise
              every evening or hermit for the full stretch, and nobody will take
              it personally.
            </p>
            <p>
              The staff handle the rest — rooms, breakfast, transfers, all of
              it. Your only job is to decide what you're doing with the day.
            </p>
          </div>
        </section>

        <section
          id="day"
          className="kurulu-bay-page__text-section kurulu-bay-page__text-section--compact"
        >
          <SectionLabel index="07">A TYPICAL DAY</SectionLabel>
          <h2 className="kurulu-bay-page__headline bali-creative-getaway__day-intro">
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
          label="08 BEYOND THE GATE
"
          className="bali-creative-getaway__in-between"
        >
          <h2 className="kurulu-bay-page__media-overlay-title">
            Bali is right there, and none of it is compulsory.
          </h2>
        </FullImage>

        <section id="in-between" className="kurulu-bay-page__text-section">
          <p>
            The Melukat water blessing at the river gorge. The hidden-gem jungle
            waterfall. Goa Gajah. The rice fields. Ecstatic dance at the Yoga
            Barn. Ubud, twenty minutes away, when you want a city again.
          </p>
          <p>
            Some of it is included, some isn't, all of it is arrangeable. Tell
            us what your capacity is on any given day and we'll point you at the
            right thing — or at the hammock.
          </p>
        </section>

        <section id="culture" className="kurulu-bay-page__text-section">
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

          <div className="bali-creative-getaway__price">
            <div className="bali-creative-getaway__price-option">
              <p>23 — 29 September · 6 nights</p>
              <span>$1,800 private room</span>
              <p>$1,110 per person if you share</p>
            </div>
            <div className="bali-creative-getaway__price-option">
              <p>3 — 12 October · 9 nights</p>
              <span>$2,990 private room</span>
              <p>$1,990 per person if you share</p>
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
          <p>
            Come for either. Come for both. Whichever suits where you happen to
            be in the world.
          </p>
          <p>
            A room menu with photographs and layouts is available on request, so
            we can find the one that suits you. Rooms go in the order people
            confirm.
          </p>
        </section>

        <section
          id="included"
          className="kurulu-bay-page__text-section bali-creative-getaway__included"
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

        <section
          id="notes"
          className="kurulu-bay-page__text-section bali-creative-getaway__notes"
        >
          <SectionLabel>A few honest notes</SectionLabel>
          <h2 className="kurulu-bay-page__headline bali-creative-getaway__notes-heading">
            The more of us , the merrier.
          </h2>
          <div className="bali-creative-getaway__notes-list">
            <p>Rooms allocate in the order people say yes.</p>
            <p>
              If you travel with a partner, a friend, a person — bring them.
              Just send them my way.
            </p>

            <p>Send this on to anyone you'd want beside you that week.</p>
            <p>Let me know as soon as possible if you're onboard.</p>
          </div>
        </section>

        <section id="closing">
          <div className="kurulu-bay-page__closing-image kurulu-bay-page__media kurulu-bay-page__media--with-overlay">
            <img src={images.closing} alt="The RESET Bali Edition closing" />
            <div className="kurulu-bay-page__media-overlay kurulu-bay-page__closing-overlay">
              <h2 className="kurulu-bay-page__media-overlay-title kurulu-bay-page__closing-overlay-title">
                T H E R E S E T
              </h2>
              <div className="kurulu-bay-page__media-overlay-text-group kurulu-bay-page__closing-overlay-text-group">
                <p className="kurulu-bay-page__media-overlay-text kurulu-bay-page__closing-overlay-text">
                  as creative getaway edition
                </p>
              </div>
              <div className="bali-creative-getaway__closing-action">
                <h2 className="kurulu-bay-page__media-overlay-title bali-creative-getaway__closing-prompt">
                  Are you joining?
                </h2>
                <a
                  className="bali-creative-getaway__closing-link"
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Message Tereza about The RESET Creative Getaway on WhatsApp"
                >
                  Let's go
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
