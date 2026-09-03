import { useMemo, useState } from "react";
import "./BaliRetreat.css";
import "./BaliFriendsPage.css";

const images = {
  cover:
    "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/ariel-view-dwa-chandra_optimised.webp",
  welcome:
    "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/view-from-room-of-ubud-resort.jpg",
  home:
    "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/dwa_chandra_home_hero.webp",
  villa:
    "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/chair-room-view.jpg",
  room:
    "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/twin-room-view.webp",
  glassShala:
    "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/glass_yoga_shala.webp",
  pavilion:
    "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/open_pavillion.webp",
  jam:
    "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/tezera-edge-inifity.webp",
  daily:
    "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/morning_ritual_shala.webp",
  inBetween:
    "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/terereza-seatitng-by-the-river_optimised.webp",
  melukat:
    "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/tereza-at-water-temple_optimised.webp",
  waterfall:
    "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/waterfall_tereza_jump.webp",
  roomDetail:
    "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/room-overlooking-balcony.optimised.webp",
  closing:
    "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/Namaste+Raabta.webp",
};

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
  "Lunches and dinners",
  "Additional food & beverages ordered a la carte",
  "Optional excursions and activities beyond what's included",
  "Personal purchases & pocket money",
  "Alcoholic beverages",
];

const SectionLabel = ({ children }) => (
  <p className="kurulu-bay-page__eyebrow">{children}</p>
);

const FullImage = ({ src, alt, label, children, className = "" }) => (
  <section
    className={`kurulu-bay-page__media kurulu-bay-page__media--with-overlay bali-friends__full-image ${className}`}
  >
    <img src={src} alt={alt} loading="lazy" />
    <div className="kurulu-bay-page__media-overlay bali-friends__image-copy">
      {label ? <SectionLabel>{label}</SectionLabel> : null}
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
            <p className="kurulu-bay-page__edition">Friends Edition</p>
            <div className="kurulu-bay-page__rule" />
            <p className="kurulu-bay-page__meta">
              Seven days off-grid with Tereza Dos Santos
              <br />
              and a handful of her favourite humans
            </p>
            <p className="kurulu-bay-page__meta kurulu-bay-page__meta--spaced">
              September 23 — September 29, 2026 · Dwa Chandra, Bali
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
          <nav className="kurulu-bay-page__contents-nav" aria-label="Bali Friends sections">
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

        <section id="letter" className="kurulu-bay-page__text-section bali-friends__letter">
          <SectionLabel>Axé família</SectionLabel>
          <p className="kurulu-bay-page__lead">
            If you're reading this, you're one of about a dozen people I'm sending it to.
          </p>
          <p>Two days ago I fainted.</p>
          <p>
            Not dramatically. I'd been running on very little for months — holding a lot,
            pushing hard to make these retreats happen — and my body finally did the thing
            bodies do when you stop listening to them. It put me on the floor.
          </p>
          <p>
            And the thought that arrived while I was down there wasn't <em>how do I fix this</em>.
            It was much simpler, and much louder: <strong>I'm the one who needs this.</strong>
          </p>
          <p>
            Here's what had already happened. Dwa Chandra — my favourite place in Bali, the
            sanctuary I keep returning to, where I go to write and breathe and remember what
            actually matters — had a last-minute cancellation. The owner is a dear friend of
            mine, and he gave me a rate that makes no sense, on the one condition that I come
            and do my thing there.
          </p>
          <p>
            My first impulse, obviously, was to build a retreat. Design the programme. Sell the
            spots. Hold everyone.
          </p>
          <p>
            Then I fainted, and a second, quieter impulse arrived: what if I just went? What if
            instead of holding a room full of strangers, I invited the people I actually want
            to be around, and we simply had the week?
          </p>
          <p>So that's what this is.</p>
        </section>

        <section className="bali-friends__letter-continuation">
          <img src={images.welcome} alt="Dwa Chandra in the Bali landscape" loading="lazy" />
          <div className="kurulu-bay-page__text-section">
            <p className="kurulu-bay-page__lead">
              Not a retreat. No programme. No schedule. Nothing to keep up with and nobody
              performing anything — least of all me. Just a handful of people I love,
              scattered around the world, off-grid together in an absurdly beautiful place
              for seven days.
            </p>
            <p>
              A spiritual jam session. Healing, co-working, swimming, eating, reflecting,
              conversing, practising, singing, doing absolutely nothing. All of it. Whatever
              the week turns out to want.
            </p>
            <p>You're on this list because you came to mind, and because I trust the frequency you carry.</p>
            <p className="bali-friends__invitation">Come disappear with me.</p>
            <p className="kurulu-bay-page__signature">Com amor,<br />Tereza</p>
          </div>
        </section>

        <FullImage src={images.home} alt="Aerial view of Dwa Chandra" label="Your home">
          <h2 className="kurulu-bay-page__media-overlay-title">
            Dwa Chandra is a sanctuary where jungle, architecture and nature exist in perfect harmony.
          </h2>
          <p className="bali-friends__location">Dwa Chandra · Pejeng</p>
        </FullImage>

        <section id="home" className="kurulu-bay-page__text-section">
          <SectionLabel>Your home</SectionLabel>
          <p className="kurulu-bay-page__lead">
            Just outside Ubud, tucked above a private river gorge in the ancient village of
            Pejeng, Dwa Chandra is a sanctuary where jungle, architecture and nature exist in
            perfect harmony. Two private villas, three open-air yoga shalas, a meditation deck
            suspended above the river, and ninth-century temple carvings hidden within the
            cliffs create a setting that feels both timeless and deeply connected to the land.
          </p>
          <p>Throughout your stay, this extraordinary sanctuary becomes as much a part of the week as the people in it.</p>
          <div className="bali-friends__photo-pair">
            <figure><img src={images.villa} alt="A Dwa Chandra villa" loading="lazy" /><figcaption>The villas</figcaption></figure>
            <figure><img src={images.room} alt="A bedroom at Dwa Chandra" loading="lazy" /><figcaption>Your room</figcaption></figure>
          </div>
        </section>

        <section id="spaces" className="kurulu-bay-page__text-section">
          <SectionLabel>The spaces</SectionLabel>
          <h2 className="kurulu-bay-page__headline">Every practice has its own room here — and this week, none of them are booked.</h2>
          <p>
            Not one hall we return to each day, but a collection of spaces and platforms, each
            built for a different kind of attention, each opening onto the valley. The glass
            shala. The open pavilion. The meditation deck above the river. A library. Quiet
            corners with good light and good wifi, if you've got something you're in the middle of building.
          </p>
          <p>Use them however you want. Move through all of them, or claim one as yours for the week and never leave it.</p>
          <p><strong>They're here. Nothing in them is scheduled.</strong></p>
          <div className="bali-friends__photo-pair">
            <figure><img src={images.glassShala} alt="The glass shala" loading="lazy" /><figcaption>The glass shala</figcaption></figure>
            <figure><img src={images.pavilion} alt="The open pavilion" loading="lazy" /><figcaption>The open pavilion</figcaption></figure>
          </div>
        </section>

        <section id="jam">
          <div className="bali-friends__wide-photo"><img src={images.jam} alt="Movement above the clouds in Bali" loading="lazy" /></div>
          <div className="kurulu-bay-page__text-section">
            <SectionLabel>The jam</SectionLabel>
            <p>
              There's no programme. I want to be really clear about that, because I know how invitations like this usually read.
            </p>
            <p className="kurulu-bay-page__lead"><strong>Nobody is teaching. Nobody is being taught. What happens is whatever we bring.</strong></p>
            <p>
              If you want to offer something, the space is yours and we'd love it — a sound
              bath, a breath session, a talk on how you built your business, a song, a workshop
              you've been wanting to test on kind people, a recipe, a long walk with whoever
              wants to come. If you want to offer nothing at all, that is equally and entirely the point.
            </p>
            <p>
              I'll be doing my thing too. Some SONIC BREATH™, probably a SOUND TEMPLE™, a
              FLOATING TEMPLE™ if the mood takes us. Not as a schedule — as an offering, when
              it feels right, for whoever's around.
            </p>
            <p>
              And if you're in the middle of building something: bring it. There are beautiful
              working and co-working spaces, a library, fast wifi, and the kind of environment
              that makes work feel like a pleasure instead of a grind. Several of us will probably be doing exactly that.
            </p>
            <p>If what you need is to hermit for seven days and speak to no one — that's completely allowed, and nobody will take it personally.</p>
            <p className="bali-friends__invitation">Everyone plays. Or doesn't.</p>
            <SectionLabel>The shape of the week</SectionLabel>
            <p>There's no arc. No theme for each day building on the one before it. The week will find its own shape and we'll find it together. Though from experience, it tends to go something like:</p>
            <div className="bali-friends__week-shape">
              <p>You sleep more than you expected to.</p><p>Your body stops bracing.</p>
              <p>The conversations get good.</p><p>You stop reaching for your phone.</p><p>You don't want to leave.</p>
            </div>
            <p><strong>That's the entire itinerary.</strong></p>
          </div>
        </section>

        <section id="day" className="kurulu-bay-page__text-section">
          <SectionLabel>No typical day</SectionLabel>
          <h2 className="kurulu-bay-page__headline">There isn't one. But here's what's there every day, if and when you want it.</h2>
          <div className="bali-friends__day-grid">
            <article><SectionLabel>Morning</SectionLabel><p>Homemade Jamu and herbal tea, whenever you surface<br />Anti-inflammatory breakfast<br />The valley with the mist still on it<br />Someone will probably be moving in one of the shalas — join or don't</p></article>
            <article><SectionLabel>Midday</SectionLabel><p>Bodywork and treatments<br />The pools<br />Work, if you're working<br />Sleep, if you're sleeping</p></article>
            <article><SectionLabel>Golden hour</SectionLabel><p>The river gorge, the caves, the rice fields, the temple carvings in our own cliffs<br />Or further out — we'll tell you what's worth doing and get you there<br />Or the deck, with a book</p></article>
            <article><SectionLabel>Evening</SectionLabel><p>Whatever someone feels moved to offer<br />The fire pit<br />Dinner — together, or not<br />The jungle as your soundtrack</p></article>
          </div>
          <div className="bali-friends__landscape"><img src={images.daily} alt="A shala looking over the Bali jungle" loading="lazy" /></div>
        </section>

        <FullImage src={images.inBetween} alt="A quiet moment beside the river" label="It's all the in-between" className="bali-friends__in-between">
          <div id="in-between" className="bali-friends__overlay-prose">
            <p>On a retreat, the best parts happen between the sessions.</p>
            <p className="kurulu-bay-page__media-overlay-title">This week is all in-between.</p>
            <p>
              Watching the morning mist lift from the valley. Barefoot walks through the
              gardens. A conversation over tea that was going to be twenty minutes and runs
              three hours. Listening to the river. Receiving a traditional Balinese massage.
              Someone picking up an instrument at exactly the right moment. Falling asleep
              with the jungle as your soundtrack.
            </p>
            <p className="kurulu-bay-page__media-overlay-title">That's not the space around the thing.<br /><strong>That is the thing.</strong></p>
          </div>
        </FullImage>

        <section id="culture" className="kurulu-bay-page__text-section">
          <SectionLabel>Nature & culture</SectionLabel>
          <h2 className="kurulu-bay-page__headline">Bali is right there, and none of it is compulsory.</h2>
          <p>A couple of immersions are included, and we'll do those together if there's appetite — the Melukat water blessing at the river gorge is the one I'd genuinely hate for you to miss.</p>
          <p>Beyond that: the hidden-gem jungle waterfall. Goa Gajah. The rice fields. Ecstatic dance at the Yoga Barn. Some of it is included, some of it isn't, all of it is available.</p>
          <p>Tell us what your capacity is on any given day and we'll point you at the right thing — or at the hammock. Both are correct answers.</p>
          <div className="bali-friends__photo-pair">
            <figure><img src={images.melukat} alt="Melukat water blessing" loading="lazy" /><figcaption>Melukat · The river gorge</figcaption></figure>
            <figure><img src={images.waterfall} alt="The jungle waterfall" loading="lazy" /><figcaption>The jungle waterfall</figcaption></figure>
          </div>
        </section>

        <section id="included" className="kurulu-bay-page__text-section bali-friends__included">
          <div>
            <SectionLabel>What's included</SectionLabel>
            <ul>{included.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
          <div>
            <SectionLabel>What's not included</SectionLabel>
            <ul>{notIncluded.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        </section>

        <section id="investment" className="kurulu-bay-page__text-section">
          <SectionLabel>Choose your home</SectionLabel>
          <p className="kurulu-bay-page__lead">
            Dwa Chandra is, without question, my favourite place to stay in Bali. It's where I
            come to write, to create, to breathe, and to remember what really matters. Over the
            years it has become my sanctuary — a place that somehow always feels like coming
            home. Every room has its own personality, every view tells a different story, and I
            couldn't imagine a more beautiful place to share this journey with you.
          </p>
          <p>A detailed room menu with photographs and layouts is available on request, so we can find the room that suits you best. Rooms are allocated in the order that bookings are received.</p>
          <div className="bali-friends__price"><span>$1,100 USD</span><small>Per person · The whole week</small></div>
          <p><strong>That isn't a price. It's the cost of the place, divided between us.</strong></p>
          <p>The owner gave me a rate that makes no sense because he's a friend and because the week suddenly opened up. All I'm doing is passing it straight on. There's no margin in this for me — I'm coming as one of you.</p>
          <div className="bali-friends__landscape"><img src={images.roomDetail} alt="A draped bedroom at Dwa Chandra" loading="lazy" /></div>
        </section>

        <section id="notes" className="kurulu-bay-page__text-section bali-friends__notes">
          <SectionLabel>A few honest notes</SectionLabel>
          <h2 className="kurulu-bay-page__headline">The more of us weirdos, the merrier.</h2>
          <div className="bali-friends__notes-list">
            <p>[ number ] of us, maximum. Rooms go in the order people say yes.</p>
            <p>If you travel with a partner, a friend, a person — bring them. Just tell me who.</p>
            <p>If money is the thing standing between you and yes, say that to me before you say no. We'll find a way.</p>
            <p>Send this on to anyone you'd want beside you that week. Sally, or whoever Sally is for you.</p>
            <p>Let me know by [ date ] if you can — flights to Bali get silly close in.</p>
          </div>
          <p className="bali-friends__date">23 — 29 September<br />Bali</p>
          <p className="bali-friends__invitation">Let me know how this lands in the body.</p>
          <p className="kurulu-bay-page__signature">Com amor,<br />Tereza</p>
        </section>

        <FullImage src={images.closing} alt="Tereza in Bali at sunset" label="The RESET · Friends Edition" className="bali-friends__closing">
          <h2 className="kurulu-bay-page__media-overlay-title">Less noise.<br />More us.</h2>
        </FullImage>
      </main>
    </div>
  );
}