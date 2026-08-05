export default function RetreatsPage() {
  const retreats = [
    {
      href: "/sri-lanka",
      eyebrow: "Sri Lanka",
      title: "Kurulu Bay",
      description:
        "Ayurveda, restoration, and immersive ritual by the lake across a ten-day private retreat.",
      image:
        "https://img.fitreisen.group/eyJidWNrZXQiOiJmaXRyZWlzZW4tY2RuLWltYWdlcyIsImtleSI6IjZEQjZFMzIyREU1MkFFNTlDQThCQkJCRTU3NjFEMDg2IiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxNjAwLCJoZWlnaHQiOjkwMCwiZml0IjoiY292ZXIiLCJwb3NpdGlvbiI6ImF0dGVudGlvbiJ9fX0=?signature=95da0fdc15dc80f60e1d8aeb14c35be56b56803999c229bbe68f306b1c677381",
      imageAlt: "Kurulu Bay retreat pool framed by tropical palms",
      highlights: ["10 days", "Ayurveda", "Sri Lanka"],
    },
    {
      href: "/bali",
      eyebrow: "Bali",
      title: "The Return Bali",
      description:
        "Breathwork, movement, ceremony, and nature immersion in a private Bali retreat setting.",
      image:
        "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/paddy-field-bali-women-standing.jpg",
      imageAlt: "Women standing in a Bali paddy field",
      highlights: ["10 days", "Movement", "Bali"],
    },
  ];

  return (
    <main className="retreats-page">
      <section className="retreats-page__hero">
        <div className="retreats-page__hero-copy">
          <p className="retreats-page__eyebrow">Retreats</p>
          <h1>Choose your return.</h1>
          <p className="retreats-page__lead">
            Two intimate retreat experiences, each designed around rest,
            ritual, and deep reconnection.
          </p>
        </div>
      </section>

      <section className="retreats-page__list" aria-label="Retreat options">
        {retreats.map((retreat) => (
          <a key={retreat.href} className="retreat-card" href={retreat.href}>
            <div className="retreat-card__image-wrap">
              <img
                className="retreat-card__image"
                src={retreat.image}
                alt={retreat.imageAlt}
                loading="lazy"
              />
              <div className="retreat-card__body">
                <p className="retreat-card__eyebrow">{retreat.eyebrow}</p>
                <h2>{retreat.title}</h2>
                <p className="retreat-card__description">{retreat.description}</p>
                <div className="retreat-card__meta" aria-label={`${retreat.title} highlights`}>
                  {retreat.highlights.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <span className="retreat-card__cta">View retreat</span>
              </div>
            </div>
          </a>
        ))}
      </section>
    </main>
  );
}
