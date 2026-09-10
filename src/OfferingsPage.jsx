import "./OfferingsPage.css";

const offerings = [
  {
    id: "sonic-breath",
    number: "01",
    title: "Sonic Breath™",
    eyebrow: "Breathwork · Sound Bath · Headphones",
    lead: "Tereza's signature session. Science-backed, designed for real life.",
    description:
      "A 90–120 minute transformational experience exploring breath, sound, and guided meditation with immersion headphones. Created for emotional release and nervous system regulation, we first activate the system through transformational breathwork, then guide it into deep rest with an immersive sound bath and somatic integration.",
    closing: "Leave remembering what it feels like to truly exhale.",
    image:
      "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-tereza/offerings/sonic_breath_cropped_tereza_during_session.webp",
    duration: "90–120 min",
    imagePosition: "center",
    reel: "https://www.instagram.com/reel/DLVV_WtNH2e/?stkn=bWdvc3FiZzRzZGt5",
    reelTitle: "Sonic Breath",
    details: [
      "Includes immersion headphones",
      "Maximum capacity: 45",
      "Suitable for all levels",
    ],
    startingPrice: "€2,850",
  },
  {
    id: "sound-temple",
    number: "02",
    title: "Sound Temple™",
    eyebrow: "Sound Bath · Guided Meditation · Live Instruments",
    lead: "Let yourself be held in harmony.",
    description:
      "A 60-minute immersive sound journey exploring deep rest, guided yoga nidra meditation, and the therapeutic power of vibration and frequency. Created for nervous system regulation and profound relaxation, participants are invited to simply receive as live sound from classical and sound healing instruments support restoration, inner balance, and deep presence.",
    closing: "An invitation to simply receive.",
    note: "Also available as an Aerial Sound Bath, experienced in suspended silk hammocks. For Aerial hammocks check for availability.",
    image:
      "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-tereza/offerings/sound_temple.webp",
    duration: "60 min",
    imagePosition: "center",
    reel: "https://www.instagram.com/reel/DNS9SWdsZ7I/?stkn=MXIweXY4eTlmcXNvNw==",
    reelTitle: "Sound Temple",
    details: ["Unlimited capacity", "Suitable for all levels"],
    startingPrice: "€1,990",
  },
  {
    id: "floating-temple",
    number: "03",
    title: "Floating Temple™",
    eyebrow: "Floating Breathwork · Sound Bath · Water · Headphones",
    lead: "Where transformation meets weightlessness.",
    description:
      "A 90–120 minute immersive experience exploring breath, sound, and somatic integration on water. Participants rest weightlessly on floating mattresses as the gentle movement of the water amplifies every breath and vibration. Created for nervous system regulation, emotional release, and deep restoration, this journey is one of the most cinematic expressions in modern wellness.",
    closing:
      "An experience that stays with you long after you leave the water.",
    note: "Limited number of floating mattresses available. Suitable for all levels.",
    image:
      "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-tereza/offerings/FLOATING+TEMPLE+2.webp",
    duration: "90–120 min",
    imagePosition: "center",
    reel: "https://www.instagram.com/reel/DX6W1NmKV95/?stkn=enM0dDk5bDI0cTRs",
    reelTitle: "Floating Temple",
    startingPrice: "€3,200",
    priceDivider: true,
  },
  {
    id: "suco",
    number: "04",
    title: "SUCO",
    eyebrow: "Active Meditation · Movement · Headphones",
    lead: "Where movement becomes meditation.",
    description:
      "A 60-minute guided active meditation journey combining movement, breathwork, visualization, and electronic music through immersion headphones. Part of a growing global movement, SUCO is designed for all experience levels, supporting nervous system regulation while fostering presence, joy, confidence, and authentic connection.",
    closing: "Return to your body. Feel fully.",
    image:
      "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-tereza/offerings/SUCO+cosmic.webp",
    duration: "60 min",
    reel: "https://www.instagram.com/reel/DZZ2MwMo77W/?stkn=Y3lvaWhvbHJxZGlw",
    imagePosition: "center",
    startingPrice: "€2,550",
    details: [
      "Includes immersion headphones",
      "Maximum capacity: 45",
      "Suitable for all adults",
    ],
  },
  {
    id: "akasha-project",
    number: "05",
    title: "Åkasha Project",
    eyebrow: "Live Music · Handpan Trio · World Instruments",
    lead: "An immersive live performance built around listening, feeling, and connection.",
    description:
      "ÅKASHA PROJECT blends handpans, world instruments, organic percussion, and contemporary soundscapes into a rich, cinematic performance that invites audiences to listen, feel, and connect.",
    closing:
      "Also available as a Solo Piano Candlelight Concert or bespoke live music performances tailored to your event.",
    image:
      "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-tereza/offerings/AKASHA.jpeg",
    duration: "Bespoke",
    imagePosition: "center",
    startingPrice: "€2,300",
    priceDivider: true,
  },
];

export default function OfferingsPage() {
  return (
    <div className="offer-page">
      <header className="offer-header">
        <a className="offer-brand" href="/" aria-label="Tereza Dos Santos home">
          Tereza Dos Santos
        </a>
        <nav aria-label="Offerings navigation">
          <a href="#experiences">Experiences</a>
        </nav>
        <a className="offer-header__cta" href="#contact">
          Enquire
        </a>
      </header>

      <main>
        <section className="offer-hero" aria-labelledby="offer-title">
          <img
            src="https://placehold.co/1800x1200/173b35/173b35?text=%20"
            alt="Placeholder for a Tereza Dos Santos signature experience"
            fetchPriority="high"
          />
          <div className="offer-hero__veil" />
          <div className="offer-hero__content">
            <p>Venue partnerships · Private events · Corporate Events</p>
            <h1 id="offer-title">
              Signature
              <br />
              Experiences
            </h1>
            <div className="offer-hero__footer">
              <span>Breath · Sound · Movement · Music</span>
              <a href="#experiences">
                Explore the collection <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </section>

        <section className="offer-trusted" aria-labelledby="trusted-title">
          <p id="trusted-title" className="offer-label">
            Trusted By
          </p>
          <div className="offer-trusted__logos">
            <img
              className="offer-trusted__logo--forbes"
              src="https://static.cdnlogo.com/logos/f/87/forbes.svg"
              alt="Forbes"
              loading="lazy"
            />
            <img
              className="offer-trusted__logo--color"
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f0d9e681-e324-435a-a219-599fbc57e57b/dil6ytz-825429bb-8bf0-4f3b-a644-89c635b56ef8.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi9mMGQ5ZTY4MS1lMzI0LTQzNWEtYTIxOS01OTlmYmM1N2U1N2IvZGlsNnl0ei04MjU0MjliYi04YmYwLTRmM2ItYTY0NC04OWM2MzViNTZlZjgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.xVpRhHx0TP37elQ3nkCWUvwBi2LvKI-N_dFLGfH5NKg"
              alt="Disney On Ice"
              loading="lazy"
            />
            <img
              className="offer-trusted__logo--color offer-trusted__logo--marriott"
              src="/corporate/marriott-white-wordmark.svg"
              alt="Marriott Hotels & Resorts"
              loading="lazy"
            />
            <img
              className="offer-trusted__logo--color"
              src="/corporate/hsbc-white-wordmark.svg"
              alt="HSBC"
              loading="lazy"
            />
            <img
              className="offer-trusted__logo--color"
              src="https://static.cdnlogo.com/logos/n/4/netflix.svg"
              alt="Netflix"
              loading="lazy"
            />
            <img
              className="offer-trusted__logo--ferrari"
              src="/corporate/ferrari-combined.svg"
              alt="Ferrari"
              loading="lazy"
            />
            <img
              src="https://static.cdnlogo.com/logos/i/95/imax.svg"
              alt="IMAX"
              loading="lazy"
            />
            <img src="/corporate/emaar.svg" alt="Emaar" loading="lazy" />
            <img
              className="offer-trusted__logo--color"
              src="https://www.orascomdh.com/_next/image?url=%2ForascomDevelopmentHorizontalLogo.png&w=384&q=75"
              alt="Orascom Development"
              loading="lazy"
            />
            <img
              src="https://fi.loropiana.com/on/demandware.static/Sites-loropiana-b2c-emea-Site/-/default/dw00a5e926/images/LoroPiana-logo.svg"
              alt="Loro Piana"
              loading="lazy"
            />
            <img
              src="/corporate/hassan-allam.svg"
              alt="Hassan Allam"
              loading="lazy"
            />
            <div className="offer-trusted__palm-hills" aria-label="Palm Hill">
              <img
                src="/corporate/palm-hills-white-wordmark.svg"
                alt=""
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section className="offer-manifesto" aria-labelledby="manifesto-title">
          <p className="offer-label offer-manifesto__label">Why Tereza</p>
          <div className="offer-manifesto__image">
            <img
              src="/corporate/tereza.jpg"
              alt="Tereza Dos Santos facilitating a session"
              loading="lazy"
            />
          </div>
          <div className="offer-manifesto__copy">
            <h2 id="manifesto-title">Tereza Dos Santos.</h2>
            <p>
              For more than two decades, Tereza has worked in environments where
              performance, adaptability, and resilience are essential.
            </p>
            <p>
              From international touring productions and live television to
              leadership retreats, corporate teams, and large-scale events, she
              has worked across the United States, Europe, the Middle East, and
              Southeast Asia, developing a deep understanding of what helps
              people perform sustainably under pressure.
            </p>
            <p>
              Today, she brings that experience into organisations through
              science-backed tools for recovery, resilience, and human
              connection, helping teams perform at their best from the inside
              out, without burning out.
            </p>
            <p>
              Beyond her own work, Tereza collaborates with a trusted
              international network of leading facilitators, artists, and
              speakers from the global wellness, performance, and leadership
              space, allowing programs to expand and adapt to each
              organisation's unique goals and needs.
            </p>
          </div>
        </section>

        <section
          id="experiences"
          className="offer-experiences"
          aria-label="Signature offerings"
        >
          {offerings.map((offering, index) => (
            <article
              className={`offer-experience${index % 2 === 0 ? " offer-experience--reverse" : ""}`}
              id={offering.id}
              key={offering.id}
            >
              <div className="offer-experience__image">
                <img
                  src={offering.image}
                  alt={`Placeholder for ${offering.title}`}
                  loading="lazy"
                  style={{ objectPosition: offering.imagePosition }}
                />
                <span>{offering.duration}</span>
              </div>
              <div className="offer-experience__copy">
                <span className="offer-experience__number">
                  {offering.number}
                </span>
                <p className="offer-label">{offering.eyebrow}</p>
                <h2>{offering.title}</h2>
                <p className="offer-experience__lead">{offering.lead}</p>
                <p>{offering.description}</p>
                <strong>{offering.closing}</strong>
                {offering.note && <small>{offering.note}</small>}
                {offering.reel && (
                  <a href={offering.reel} target="_blank" rel="noreferrer">
                    Watch the {offering.reelTitle ?? offering.title} reel{" "}
                    <span aria-hidden="true">↗</span>
                  </a>
                )}
                {offering.startingPrice && (
                  <div
                    className={`offer-experience__price${offering.priceDivider ? " offer-experience__price--divided" : ""}`}
                  >
                    <span>Starting From</span>
                    <strong>{offering.startingPrice}</strong>
                  </div>
                )}
                {offering.details && (
                  <div className="offer-experience__details">
                    {offering.details.map((detail) => (
                      <span key={detail}>{detail}</span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </section>

        <section
          id="contact"
          className="offer-contact"
          aria-labelledby="contact-title"
        >
          <div>
            <p className="offer-label">Start a conversation</p>
            <h2 id="contact-title">Bring an experience to your space.</h2>
          </div>
          <div className="offer-contact__actions">
            <p className="offer-contact__intro">
              Tell us about your venue, your audience, and your dates. We will
              shape the format around them.
            </p>
            <a
              className="offer-contact__primary"
              href="https://wa.me/201010001133"
              target="_blank"
              rel="noreferrer"
            >
              Enquire about an experience <span aria-hidden="true">→</span>
            </a>
            <div className="offer-contact__secondary">
              <div>
                <p>Want this for your team all year?</p>
                <a href="mailto:corporate@terezadossantos.com">
                  Explore corporate packages <span aria-hidden="true">→</span>
                </a>
              </div>
              <div>
                <p>Curious about the wider work?</p>
                <a
                  href="https://terezadossantos.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Terezadossantos.com <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="offer-footer">
        <a href="/">Tereza Dos Santos</a>
        <span>Signature Experiences</span>
      </footer>
    </div>
  );
}
