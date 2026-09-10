import "./OfferingsPage.css";

const offerings = [
  {
    id: "sonic-breath",
    number: "01",
    title: "Sonic Breath™",
    eyebrow: "Breathwork · Sound Bath · Headphones",
    lead: "Tereza's signature journey. Science-backed, designed for real life.",
    description:
      "A 90–120 minute transformational experience exploring breath, sound, and guided meditation with immersion headphones. Created for emotional release and nervous system regulation, we first activate the system through transformational breathwork, then guide it into deep rest with an immersive sound bath and somatic integration.",
    closing: "Leave remembering what it feels like to truly exhale.",
    image:
      "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-tereza/offerings/sonic_breath_cropped_tereza_during_session.webp",
    duration: "90–120 min",
    imagePosition: "center",
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
    note: "Also available as an Aerial Sound Bath, experienced in suspended silk hammocks. Aerial hammocks are not provided.",
    image: "https://placehold.co/1200x900/a43f2d/fff8ed?text=SOUND+TEMPLE",
    duration: "60 min",
    imagePosition: "center",
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
    note: "Limited number of floating mattresses available.",
    image: "https://placehold.co/1200x900/d6a442/102c32?text=FLOATING+TEMPLE",
    duration: "90–120 min",
    imagePosition: "center",
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
    image: "https://placehold.co/1200x900/202c46/f6d976?text=SUCO",
    duration: "60 min",
    reel: "https://www.instagram.com/reel/DYFUsiooDmo/?igsh=b2Jjc2ZuN2hmOW9j",
    imagePosition: "center",
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
    image: "https://placehold.co/1200x900/8d3f33/f7efe3?text=AKASHA+PROJECT",
    duration: "Bespoke",
    imagePosition: "center",
  },
];

const rates = [
  {
    title: "Sound Temple",
    ticket: "2,250 EGP",
    buyout: "60,000 EGP",
    capacity: "Unlimited capacity",
    includes: "Live instruments and sound healing equipment",
    image: "https://placehold.co/800x520/a43f2d/fff8ed?text=SOUND+TEMPLE",
  },
  {
    title: "Sonic Breath",
    ticket: "3,100 EGP",
    buyout: "75,000 EGP",
    capacity: "Maximum capacity: 45",
    includes: "Includes immersion headphones",
    image: "https://placehold.co/800x520/1d4238/f4eee4?text=SONIC+BREATH",
  },
  {
    title: "Floating Temple",
    ticket: "3,600 EGP",
    buyout: "90,000 EGP",
    capacity: "Maximum capacity: 25",
    includes: "Includes immersion headphones and mattresses",
    image: "https://placehold.co/800x520/d6a442/102c32?text=FLOATING+TEMPLE",
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
          <a href="#rates">Rates</a>
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
          <img
            src="/corporate/clients.jpg"
            alt="Organisations that have worked with Tereza Dos Santos"
            loading="lazy"
          />
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
              className={`offer-experience${index % 2 ? " offer-experience--reverse" : ""}`}
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
                    Watch the SUCO reel <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </section>

        <section
          id="rates"
          className="offer-rates"
          aria-labelledby="rates-title"
        >
          <div className="offer-rates__heading">
            <p className="offer-label">Venue partnership pricing</p>
            <h2 id="rates-title">Choose how you gather.</h2>
            <p>Ticketed experiences or an exclusive private buyout.</p>
          </div>
          <div className="offer-rates__grid">
            {rates.map((rate) => (
              <article className="offer-rate" key={rate.title}>
                <img
                  src={rate.image}
                  alt={`Placeholder for ${rate.title}`}
                  loading="lazy"
                />
                <div className="offer-rate__body">
                  <h3>{rate.title}</h3>
                  <div className="offer-rate__price">
                    <p>
                      <span>Ticketed experience</span>
                      <strong>{rate.ticket}</strong>
                      <small>per participant</small>
                    </p>
                    <p>
                      <span>Private buyout</span>
                      <strong>{rate.buyout}</strong>
                      <small>exclusive experience</small>
                    </p>
                  </div>
                  <div className="offer-rate__details">
                    <p>{rate.includes}</p>
                    <p>{rate.capacity}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="offer-rates__notes">
            <p>Bookings and dates upon request</p>
            <p>Suitable for all levels</p>
            <p>All equipment provided</p>
            <p>Revenue sharing models available upon request</p>
          </div>
          <p className="offer-rates__bespoke">
            Corporate, festival, retreat, and bespoke event proposals are quoted
            individually.
          </p>
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
          <div>
            <p>
              Tell us about your venue, audience, location, and preferred dates.
              We will help you select the right format.
            </p>
            <a href="mailto:corporate@terezadossantos.com?subject=Signature%20experience%20enquiry">
              Enquire about an experience <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="offer-footer">
        <a href="/">Tereza Dos Santos</a>
        <span>Signature Experiences</span>
        <a href="/corporate">Corporate wellbeing</a>
      </footer>
    </div>
  );
}
