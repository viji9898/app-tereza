import "./CorporateWellness.css";

const images = {
  hero: "/corporate/cover.jpg",
  movement: "/corporate/foundations.jpg",
  collage: "/corporate/experiences.png",
  portrait: "/corporate/tereza.jpg",
  clients: "/corporate/clients.jpg",
  flagship: "/corporate/case-study.jpg",
  facilitating: "/corporate/contact.jpg",
};

const experiences = [
  ["Floating Temple", "Immersive sound + meditation", images.flagship, "center"],
  ["Sound Journey", "Live instruments + guided meditation", images.facilitating, "center"],
  ["Breathwork", "Energy, focus + nervous-system reset", images.hero, "center 42%"],
  ["Movement", "Yoga + embodied movement", images.movement, "center 38%"],
  ["Executive Reset", "Private sessions for leadership teams", images.portrait, "center 30%"],
  ["Retreats & Offsites", "Bespoke half-day to multi-day programmes", images.collage, "center"],
];

const useCases = [
  ["Company Offsites", "Reset and reconnect away from the office."],
  ["Conferences & Events", "An experiential alternative to another keynote."],
  ["Leadership Retreats", "Smaller, deeper experiences for senior teams."],
  ["Employee Wellbeing Days", "Accessible experiences designed for larger organisations."],
  ["Brand & Hospitality Events", "Bespoke experiences created around a setting, brand or occasion."],
];

const proofPoints = [
  ["Worldwide", "Delivery across Europe, the Middle East and beyond"],
  ["Full service", "Equipment + production available"],
  ["Bespoke", "Programmes designed around each gathering"],
  ["International", "A trusted network of specialist facilitators"],
];

const programmeFormats = [
  [
    "Monthly",
    "Team workshops",
    "Individually tailored to your team's focus areas and needs, with a minimum three-month engagement.",
    "Ongoing · Scalable",
  ],
  [
    "Quarterly",
    "Half-day or full-day experiences",
    "Immersive workshops focused on connection, stress management, burnout and sustainable performance.",
    "Immersive · Team",
  ],
  [
    "Annual",
    "Leadership retreats & offsites",
    "Transformational journeys created to strengthen culture, vision and leadership capacity.",
    "Strategic · Leadership",
  ],
];

const researchOutcomes = [
  ["76%", "of employees report experiencing burnout at work."],
  ["63%", "higher absenteeism among employees experiencing frequent burnout."],
  ["72%", "lower burnout risk among employees who feel supported by their organisation."],
  ["5×", "higher engagement when employees believe their organisation genuinely cares about wellbeing."],
];

const testimonials = [
  ["The effects were felt long after the session ended. The response from our cast and crew was so positive that we're now expanding these programs across productions company-wide.", "Cory Obst", "Performance Director, Disney On Ice"],
  ["One of the most impactful sessions we've offered our team. It's definitely something we need to do more often.", "Youssef Fawzi", "Founder, SWAP"],
  ["A powerful combination of science, presence and practical tools. We can't wait for our next event together.", "Event Management", "Forbes Monaco"],
  ["Tereza creates a space that feels both deeply personal and professionally transformative. I keep coming back — and bringing others with me.", "Mona Zaki", "Actress & Producer"],
];

const ArrowLink = ({ children, href = "#enquire", light = false }) => (
  <a className={`corp-arrow${light ? " corp-arrow--light" : ""}`} href={href}>
    {children} <span aria-hidden="true">→</span>
  </a>
);

function handleEnquirySubmit(event) {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const body = [
    `Name: ${form.get("name")}`,
    `Company: ${form.get("company")}`,
    `Work email: ${form.get("email")}`,
    `Location: ${form.get("location")}`,
    `Event date: ${form.get("eventDate") || "Not confirmed"}`,
    `Number of guests: ${form.get("guests") || "Not confirmed"}`,
    `Planning: ${form.get("eventType")}`,
    "",
    form.get("details"),
  ].join("\n");
  window.location.href = `mailto:corporate@terezadossantos.com?subject=${encodeURIComponent(`Corporate enquiry — ${form.get("company")}`)}&body=${encodeURIComponent(body)}`;
}

export default function CorporateWellness() {
  return (
    <div className="corp-page">
      <header className="corp-header">
        <a className="corp-header__brand" href="/" aria-label="Tereza Dos Santos home">Tereza Dos Santos</a>
        <nav aria-label="Corporate page navigation">
          <a href="#experiences">Experiences</a>
          <a href="#floating-temple">Floating Temple</a>
          <a href="#about">About</a>
        </nav>
        <a className="corp-header__cta" href="#enquire">Make an enquiry</a>
      </header>

      <main>
        <section className="corp-hero" aria-labelledby="corp-hero-title">
          <img src={images.hero} alt="Participants immersed in a guided corporate wellbeing experience" fetchPriority="high" />
          <div className="corp-hero__copy">
            <p className="corp-kicker">Tereza Dos Santos</p>
            <h1 id="corp-hero-title">Experiences that change<br />the energy of a room.</h1>
            <p className="corp-hero__intro">Immersive wellbeing experiences for teams, companies and extraordinary gatherings.</p>
            <p className="corp-hero__places">London · Europe · Middle East · Worldwide</p>
            <div className="corp-actions">
              <a className="corp-button" href="#experiences">Explore experiences</a>
              <ArrowLink light>Make an enquiry</ArrowLink>
            </div>
          </div>
        </section>

        <section className="corp-trusted" aria-labelledby="trusted-title">
          <p id="trusted-title" className="corp-kicker">Trusted by</p>
          <img src={images.clients} alt="Clients including Forbes, HSBC, Netflix, Disney On Ice, Ferrari, IMAX, Marriott and Emaar" />
        </section>

        <section id="experiences" className="corp-section corp-signatures" aria-labelledby="experiences-title">
          <div className="corp-intro">
            <p className="corp-kicker">The work</p>
            <h2 id="experiences-title">Signature experiences</h2>
            <p>From intimate leadership sessions to large-scale immersive experiences, each programme is designed around the people, place and purpose of the gathering.</p>
          </div>
          <div className="corp-experiences">
            {experiences.map(([title, detail, image, position], index) => (
              <article className="corp-experience" key={title}>
                <img src={image} alt="" loading="lazy" style={{ objectPosition: position }} />
                <div className="corp-experience__copy">
                  <span>0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{detail}</p>
                  <ArrowLink light>Discover</ArrowLink>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="floating-temple" className="corp-floating" aria-labelledby="floating-title">
          <img src={images.flagship} alt="An immersive group experience staged with dramatic lighting" loading="lazy" />
          <div className="corp-floating__content">
            <p className="corp-kicker">The Floating Temple</p>
            <h2 id="floating-title">A shared journey<br />into stillness.</h2>
            <div className="corp-floating__body">
              <p>Wireless headphones. Guided meditation. Breathwork. Live sound.</p>
              <p>A room — or landscape — temporarily transformed into somewhere else entirely.</p>
            </div>
            <dl>
              <div><dt>Duration</dt><dd>45–90 minutes</dd></div>
              {/* TODO: Add a verified participant-capacity range. */}
              <div><dt>Capacity</dt><dd>Tailored to the event</dd></div>
              <div><dt>Setting</dt><dd>Indoor or outdoor</dd></div>
              <div><dt>Production</dt><dd>Full technical setup available</dd></div>
            </dl>
            <ArrowLink light>Discover Floating Temple</ArrowLink>
          </div>
        </section>

        <section className="corp-section corp-created" aria-labelledby="created-title">
          <div className="corp-created__heading">
            <p className="corp-kicker">Where it belongs</p>
            <h2 id="created-title">Created for</h2>
          </div>
          <div className="corp-created__list">
            {useCases.map(([title, text], index) => (
              <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </section>

        <section className="corp-programmes" aria-labelledby="programmes-title">
          <div className="corp-programmes__intro">
            <p className="corp-kicker">Ways to work together</p>
            <h2 id="programmes-title">Designed around your people.</h2>
            <p>
              In person, online or hybrid. As a standalone experience or part
              of a retreat, leadership offsite or company event.
            </p>
          </div>
          <div className="corp-programmes__grid">
            {programmeFormats.map(([cadence, title, text, tag], index) => (
              <article key={cadence}>
                <div><span>0{index + 1}</span><strong>{cadence}</strong></div>
                <h3>{title}</h3>
                <p>{text}</p>
                <small>{tag}</small>
              </article>
            ))}
          </div>
        </section>

        <section className="corp-process" aria-labelledby="process-title">
          <div><p className="corp-kicker">From brief to room</p><h2 id="process-title">How it works</h2></div>
          <ol>
            <li><span>01</span><p>Tell us about your event</p></li>
            <li><span>02</span><p>We design the experience</p></li>
            <li><span>03</span><p>Tereza + team deliver it</p></li>
          </ol>
        </section>

        <section className="corp-proof" aria-labelledby="proof-title">
          <div><p className="corp-kicker">Designed to travel</p><h2 id="proof-title">One vision.<br />Every detail.</h2></div>
          <div className="corp-proof__grid">
            {proofPoints.map(([title, text]) => <article key={title}><strong>{title}</strong><p>{text}</p></article>)}
          </div>
        </section>

        <section className="corp-impact" aria-labelledby="impact-title">
          <div className="corp-impact__heading">
            <p className="corp-kicker">The business case</p>
            <h2 id="impact-title">When people feel better, they work better.</h2>
            <p>
              Workplace wellbeing research consistently links supported teams
              with stronger engagement, resilience and retention.
            </p>
          </div>
          <div className="corp-impact__metrics">
            {researchOutcomes.map(([metric, text]) => (
              <article key={metric}><strong>{metric}</strong><p>{text}</p></article>
            ))}
          </div>
          <p className="corp-impact__sources">
            Sources: Gallup · Harvard Health Publishing · Stanford Medicine · NIH · WHO
          </p>
        </section>

        <section className="corp-case" aria-labelledby="case-title">
          <div className="corp-case__image">
            <img src={images.flagship} alt="Disney On Ice cast and production" loading="lazy" />
          </div>
          <div className="corp-case__copy">
            <p className="corp-kicker">Case study · Disney On Ice</p>
            <h2 id="case-title">Recovery and resilience on a global production.</h2>
            <div className="corp-case__details">
              <article>
                <h3>The challenge</h3>
                <p>Elite performers, cast, crew and management working through demanding schedules, constant travel and limited recovery time.</p>
              </article>
              <article>
                <h3>The experience</h3>
                <p>A tailored series of breathwork, recovery, nervous-system regulation and team-connection experiences integrated into tour life.</p>
              </article>
              <article>
                <h3>The outcome</h3>
                <p>High participation, positive feedback, improved recovery between performances and expansion of the programme company-wide.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="corp-section corp-testimonials" aria-labelledby="testimonials-title">
          <div className="corp-testimonials__heading"><p className="corp-kicker">In their words</p><h2 id="testimonials-title">The ripple effect</h2></div>
          <div className="corp-testimonials__track">
            {testimonials.map(([quote, name, role]) => (
              <blockquote key={name}><p>“{quote}”</p><footer><cite>{name}</cite><span>{role}</span></footer></blockquote>
            ))}
          </div>
        </section>

        <section id="about" className="corp-about" aria-labelledby="about-title">
          <div className="corp-about__image"><img src={images.portrait} alt="Tereza Dos Santos" loading="lazy" /></div>
          <div className="corp-about__copy">
            <p className="corp-kicker">About Tereza</p>
            <h2 id="about-title">Presence, performance and the art of gathering.</h2>
            <p>Tereza Dos Santos is an international facilitator and performance specialist with more than two decades of experience creating experiences in high-pressure, live environments.</p>
            <p>Her work brings together breath, movement, sound and human connection — delivered with a trusted international network and shaped around each organisation, audience and setting.</p>
            <ArrowLink href="/">Meet Tereza</ArrowLink>
          </div>
        </section>

        <section id="enquire" className="corp-enquiry" aria-labelledby="enquiry-title">
          <div className="corp-enquiry__intro">
            <p className="corp-kicker">Start a conversation</p>
            <h2 id="enquiry-title">Let's create<br />something together.</h2>
            <p>Tell us a little about your team or event and we'll recommend the right experience.</p>
            <a href="mailto:corporate@terezadossantos.com">corporate@terezadossantos.com</a>
          </div>
          <form className="corp-form" onSubmit={handleEnquirySubmit}>
            <div className="corp-form__grid">
              <label><span>Name</span><input type="text" name="name" autoComplete="name" required /></label>
              <label><span>Company</span><input type="text" name="company" autoComplete="organization" required /></label>
              <label><span>Work email</span><input type="email" name="email" autoComplete="email" required /></label>
              <label><span>Location</span><input type="text" name="location" autoComplete="address-level2" required /></label>
              <label><span>Event date</span><input type="date" name="eventDate" /></label>
              <label><span>Number of guests</span><input type="number" name="guests" min="1" inputMode="numeric" /></label>
            </div>
            <label><span>What are you planning?</span><select name="eventType" required defaultValue=""><option value="" disabled>Select one</option><option>Company Event</option><option>Offsite</option><option>Retreat</option><option>Conference</option><option>Wellness Day</option><option>Brand / Hospitality Event</option><option>Other</option></select></label>
            <label><span>Tell us about your event</span><textarea name="details" rows="5" required /></label>
            <button type="submit">Start planning <span aria-hidden="true">→</span></button>
            <p className="corp-form__note">Submitting opens your email app with the enquiry prepared for you.</p>
          </form>
        </section>
      </main>

      <footer className="corp-footer"><a href="/">Tereza Dos Santos</a><p>London · Europe · Middle East · Worldwide</p><a href="mailto:corporate@terezadossantos.com">Corporate enquiries</a></footer>
    </div>
  );
}
