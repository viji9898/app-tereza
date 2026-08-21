import { useMemo, useState } from "react";
import "./BaliRetreat.css";
import "./CorporateWellness.css";

const imageAssets = {
  cover: "/corporate/cover.jpg",
  foundations: "/corporate/foundations.jpg",
  foundationsTools: "/corporate/foundations-tools.png",
  experiences: "/corporate/experiences.png",
  tereza: "/corporate/tereza.jpg",
  clients: "/corporate/clients.jpg",
  caseStudy: "/corporate/case-study.jpg",
  contact: "/corporate/contact.jpg",
};

const challenges = [
  "Chronic stress and burnout",
  "Rising healthcare costs",
  "Increased sick leave and absenteeism",
  "Digital overload and cognitive fatigue",
  "Reduced engagement and motivation",
  "Workplace tension and conflict",
  "Performance pressure that doesn't let up",
  "Employee turnover and retention challenges",
];

const performanceCosts = [
  "Focus and decision-making decline",
  "Motivation and engagement decrease",
  "Team cohesion weakens",
  "Communication suffers",
  "Creativity is reduced",
  "Recovery becomes more difficult",
  "Performance becomes unsustainable",
  "Valued employees begin to leave",
];

const programFormats = [
  {
    cadence: "Monthly",
    title: "Team workshops",
    text: "Individually tailored to your team's focus areas and needs, with a minimum three-month engagement.",
    tag: "Ongoing · Scalable",
  },
  {
    cadence: "Quarterly",
    title: "Half-day or full-day team experiences",
    text: "Immersive workshops focused on team connection, stress management, burnout, and sustainable performance.",
    tag: "Immersive · Team",
  },
  {
    cadence: "Annual",
    title: "Leadership retreats, executive and team offsites",
    text: "Transformational journeys that strengthen culture, vision, and leadership capacity.",
    tag: "Strategic · Leadership",
  },
];

const signatureTools = [
  {
    category: "Breathwork",
    items: [
      ["Sonic Breath ◆", "A signature group reset combining breathwork, sound therapy, NSDR, and guided meditation."],
      ["Breath Lab", "Practical breathing protocols for fatigue, anxiety, and energy management that teams can use right away."],
    ],
  },
  {
    category: "Sound therapy",
    items: [
      ["Sound Bath", "Immersive sound frequencies supporting nervous system regulation, deep rest, and recovery."],
      ["Floating Reset", "A restorative air-hammock or water-mattress experience designed to counter cognitive overload and burnout."],
    ],
  },
  {
    category: "Movement",
    items: [
      ["SUCO ◆", "Active meditation with immersion headphones, movement, breathwork, visualization, and electronic music."],
      ["Office Yoga", "Customizable sessions supporting mobility, calm, and sustainable energy for any team or level."],
    ],
  },
  {
    category: "Connection",
    items: [
      ["Team Connection Experiences", "Collaborative practices that build trust, empathy, and team cohesion through shared challenges."],
      ["Women's Circles", "Dedicated spaces for authentic leadership, confidence, psychological safety, and resilience."],
    ],
  },
];

const outcomes = {
  individuals: [
    "Reduced stress",
    "Improved sleep quality",
    "Improved focus, attention and cognitive performance",
    "Reduced symptoms of burnout and emotional exhaustion",
    "Increased resilience under pressure",
  ],
  teams: [
    "Higher employee engagement",
    "Lower absenteeism and sick leave",
    "Stronger communication and collaboration",
    "Stronger workplace culture",
    "Higher employee retention",
  ],
};

const statistics = [
  ["76%", "of employees report experiencing burnout at work."],
  ["63%", "higher absenteeism among employees experiencing frequent burnout."],
  ["72%", "lower burnout risk among employees who feel supported by their organization."],
  ["49%", "less likely to seek a new job when wellbeing is being invested in."],
  ["5x", "higher engagement when employees believe their organization genuinely cares about their wellbeing."],
];

const testimonials = [
  [
    "The effects were felt long after the session ended. The response from our cast and crew was so positive that we're now expanding these programs across productions company-wide.",
    "Cory Obst · Performance Director, Disney On Ice",
  ],
  [
    "One of the most impactful sessions we've offered our team. It's definitely something we need to do more often.",
    "Youssef Fawzi · Founder, SWAP",
  ],
  [
    "A powerful combination of science, presence and practical tools. We can't wait for our next event together.",
    "Event Management · Forbes Monaco",
  ],
  [
    "Tereza creates a space that feels both deeply personal and professionally transformative. I keep coming back, and bringing others with me.",
    "Mona Zaki · Actress & Producer",
  ],
];

const sectionMenu = [
  ["cover", "Corporate Wellness"],
  ["challenge", "The Challenge"],
  ["solution", "The Solution"],
  ["program", "Program Structure"],
  ["tools", "Signature Tools"],
  ["impact", "Impact & Outcomes"],
  ["business-case", "The Business Case"],
  ["tereza", "Why Tereza"],
  ["case-study", "Case Study"],
  ["testimonials", "Testimonials"],
  ["contact", "Contact"],
];

const SectionLabel = ({ children, index }) => (
  <p className="kurulu-bay-page__eyebrow">
    {index ? `${index} · ` : ""}
    {children}
  </p>
);

const FullImage = ({ src, alt, index, label, title, text }) => (
  <div className="kurulu-bay-page__media kurulu-bay-page__media--with-overlay">
    <img src={src} alt={alt} />
    <div className="kurulu-bay-page__media-overlay">
      <SectionLabel index={index}>{label}</SectionLabel>
      <h2 className="kurulu-bay-page__media-overlay-title">{title}</h2>
      {text ? <p className="kurulu-bay-page__media-overlay-text">{text}</p> : null}
    </div>
  </div>
);

export default function CorporateWellness() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuItems = useMemo(
    () => sectionMenu.map(([id, label]) => ({ id, label })),
    [],
  );

  return (
    <div className="bali-retreat-page corporate-wellness-page">
      <main className="kurulu-bay-page">
        <section id="cover" className="kurulu-bay-page__hero">
          <div className="kurulu-bay-page__hero-image">
            <img src={imageAssets.cover} alt="Tereza facilitating a team wellness experience by the sea" loading="eager" />
          </div>
          <div className="kurulu-bay-page__hero-copy">
            <p className="kurulu-bay-page__edition">Corporate wellness</p>
            <h1 className="kurulu-bay-page__brand">Helping teams thrive.</h1>
            <div className="kurulu-bay-page__rule" />
            <p className="kurulu-bay-page__hero-lines">Science-backed tools for optimization, resilience, and human connection.</p>
            <p className="kurulu-bay-page__meta">With Tereza Dos Santos</p>
            <p className="kurulu-bay-page__meta kurulu-bay-page__meta--spaced">Corporate Wellness Facilitator · Performance & Recovery Specialist</p>
          </div>
        </section>

        <button
          type="button"
          className={`kurulu-bay-page__contents-trigger${menuOpen ? " kurulu-bay-page__contents-trigger--open" : ""}`}
          onClick={() => setMenuOpen((current) => !current)}
          aria-expanded={menuOpen}
          aria-controls="corporate-contents-menu"
          aria-label="Open contents menu"
        >
          <span className="kurulu-bay-page__contents-trigger-line" aria-hidden="true" />
        </button>
        <div
          className={`kurulu-bay-page__contents-overlay${menuOpen ? " kurulu-bay-page__contents-overlay--open" : ""}`}
          onClick={() => setMenuOpen(false)}
          aria-hidden={!menuOpen}
        />
        <aside
          id="corporate-contents-menu"
          className={`kurulu-bay-page__contents-panel${menuOpen ? " kurulu-bay-page__contents-panel--open" : ""}`}
          aria-hidden={!menuOpen}
        >
          <p className="kurulu-bay-page__contents-title">Jump to section</p>
          <nav className="kurulu-bay-page__contents-nav" aria-label="Corporate wellness sections">
            {menuItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="kurulu-bay-page__contents-link" onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
          </nav>
        </aside>

        <section id="challenge" className="kurulu-bay-page__text-section">
          <SectionLabel index="02">The challenge</SectionLabel>
          <h2 className="kurulu-bay-page__headline">The hidden costs of burnout.</h2>
          <p className="kurulu-bay-page__lead">Today's workforce is facing unprecedented pressure. The cost is felt not only by individuals, but by teams, culture, and business performance.</p>
          <div className="corporate-wellness-page__list-grid">
            {challenges.map((item) => <p key={item}>→ {item}</p>)}
          </div>
          <div className="corporate-wellness-page__impact-band">
            <div>
              <SectionLabel index="03">Why it matters</SectionLabel>
              <h3>When your team thrives, your business thrives.</h3>
            </div>
            <div className="corporate-wellness-page__cost-list">
              {performanceCosts.map((item) => <p key={item}>↓ {item}</p>)}
            </div>
          </div>
        </section>

        <FullImage
          src={imageAssets.foundations}
          alt="Team members connecting during a corporate wellness session"
          index="04"
          label="The solution"
          title="The foundations of high performance."
          text="Your team has everything it takes. Let's make sure they have everything they need."
        />

        <section id="solution" className="kurulu-bay-page__text-section kurulu-bay-page__text-section--compact">
          <p className="kurulu-bay-page__lead">A practical and accessible program designed to support sustainable performance, recovery, resilience, and meaningful human connection.</p>
          <img className="corporate-wellness-page__deck-graphic" src={imageAssets.foundationsTools} alt="Corporate wellness program foundations" />
        </section>

        <section id="program" className="kurulu-bay-page__text-section">
          <SectionLabel index="05">Program structure</SectionLabel>
          <h2 className="kurulu-bay-page__headline">Three ways to work together.</h2>
          <p className="kurulu-bay-page__lead">Programs are available in person, online, hybrid, or as part of retreats, leadership offsites and company events, either as standalone experiences or tailored packages.</p>
          <div className="corporate-wellness-page__format-grid">
            {programFormats.map((format) => (
              <article key={format.cadence} className="corporate-wellness-page__format">
                <span>{format.cadence}</span>
                <h3>{format.title}</h3>
                <p>{format.text}</p>
                <strong>{format.tag}</strong>
              </article>
            ))}
          </div>
        </section>

        <section id="tools" className="kurulu-bay-page__text-section">
          <SectionLabel index="06">What's inside</SectionLabel>
          <h2 className="kurulu-bay-page__headline">Signature tools & experiences.</h2>
          <div className="corporate-wellness-page__tools-grid">
            {signatureTools.map((group) => (
              <article key={group.category}>
                <h3>{group.category}</h3>
                {group.items.map(([title, text]) => (
                  <div key={title}>
                    <strong>{title}</strong>
                    <p>{text}</p>
                  </div>
                ))}
              </article>
            ))}
          </div>
        </section>

        <FullImage
          src={imageAssets.experiences}
          alt="Corporate wellness experiences in action"
          index="07"
          label="The work"
          title="Experiences in action."
        />

        <section id="impact" className="kurulu-bay-page__text-section">
          <SectionLabel index="08">Impact + outcomes</SectionLabel>
          <h2 className="kurulu-bay-page__headline">What the research shows.</h2>
          <div className="kurulu-bay-page__columns">
            {Object.entries(outcomes).map(([group, items]) => (
              <div key={group} className="corporate-wellness-page__outcomes">
                <h3>For {group}</h3>
                {items.map((item) => <p key={item}>↑ {item}</p>)}
              </div>
            ))}
          </div>
          <p className="corporate-wellness-page__statement">Stronger individuals create stronger teams.</p>
        </section>

        <section id="business-case" className="corporate-wellness-page__stats-section">
          <div className="corporate-wellness-page__stats-inner">
            <SectionLabel index="09">Validation</SectionLabel>
            <h2 className="kurulu-bay-page__headline">The business case.</h2>
            <div className="corporate-wellness-page__stats-grid">
              {statistics.map(([number, text]) => (
                <article key={number}>
                  <strong>{number}</strong>
                  <p>{text}</p>
                </article>
              ))}
            </div>
            <p className="corporate-wellness-page__sources">Sources: Gallup · Harvard Health Publishing · Stanford Medicine · NIH · WHO</p>
            <p className="corporate-wellness-page__statement">When people feel better, they work better.<br />When teams thrive, businesses thrive.</p>
          </div>
        </section>

        <section id="tereza" className="corporate-wellness-page__profile">
          <div className="corporate-wellness-page__profile-image">
            <img src={imageAssets.tereza} alt="Tereza Dos Santos" />
          </div>
          <div className="corporate-wellness-page__profile-copy">
            <SectionLabel index="10">Why Tereza</SectionLabel>
            <h2 className="kurulu-bay-page__headline">Tereza Dos Santos.</h2>
            <p>For more than two decades, Tereza has worked in environments where performance, adaptability, and resilience are essential.</p>
            <p>From international touring productions and live television to leadership retreats, corporate teams, and large-scale events, she has worked across the United States, Europe, the Middle East, and Southeast Asia.</p>
            <p>Today, she brings that experience into organisations through science-backed tools for recovery, resilience, and human connection, helping teams perform at their best from the inside out, without burning out.</p>
            <p>Her trusted international network of facilitators, artists, and speakers allows every program to expand around each organisation's unique goals.</p>
          </div>
        </section>

        <section className="kurulu-bay-page__text-section kurulu-bay-page__text-section--compact">
          <SectionLabel index="11">Partners + clients</SectionLabel>
          <h2 className="kurulu-bay-page__headline">Trusted by.</h2>
          <img className="corporate-wellness-page__clients" src={imageAssets.clients} alt="Organisations and clients who have worked with Tereza" />
        </section>

        <FullImage
          src={imageAssets.caseStudy}
          alt="Disney On Ice cast and production"
          index="12"
          label="Disney On Ice"
          title="The case study."
          text="Supporting performance, recovery, and resilience across a global touring production."
        />

        <section id="case-study" className="kurulu-bay-page__text-section">
          <div className="corporate-wellness-page__case-grid">
            <article><h3>The challenge</h3><p>Elite performers, cast, crew, and management operating under demanding schedules, constant travel, performance pressure, and limited recovery time.</p></article>
            <article><h3>The solution</h3><p>A customized series of breathwork, recovery, nervous system regulation, and team connection experiences integrated into tour life.</p></article>
            <article><h3>Observed outcomes</h3><p>High participation, positive feedback from performers and leadership, improved recovery between performances, and expansion of wellness programming company-wide.</p></article>
          </div>
        </section>

        <section id="testimonials" className="kurulu-bay-page__text-section">
          <SectionLabel index="13">Testimonials</SectionLabel>
          <h2 className="kurulu-bay-page__headline">The ripple effect.</h2>
          <div className="corporate-wellness-page__testimonial-grid">
            {testimonials.map(([quote, author]) => (
              <blockquote key={author}>
                <p>“{quote}”</p>
                <cite>{author}</cite>
              </blockquote>
            ))}
          </div>
        </section>

        <section id="contact" className="corporate-wellness-page__contact">
          <img src={imageAssets.contact} alt="Tereza supporting a participant during a wellness session" />
          <div className="corporate-wellness-page__contact-copy">
            <SectionLabel index="14">In contact</SectionLabel>
            <h2>Ready to see your team thrive?</h2>
            <p>Let's talk.</p>
            <a href="tel:+201010001133">+20 101 000 1133</a>
            <a href="mailto:contact@thetravelfeather.com">contact@thetravelfeather.com</a>
            <a href="https://www.thetravelfeather.com">www.thetravelfeather.com</a>
          </div>
        </section>
      </main>
    </div>
  );
}