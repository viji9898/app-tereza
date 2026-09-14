import "./BaliCreativeGetawayFlexPage.css";

const WHATSAPP_URL = `https://wa.me/201010001133?text=${encodeURIComponent(
  "Hi Tereza, I'd like to know more about the flexible Creative Getaway package in Bali between 3rd and 17th October.",
)}`;

export default function BaliCreativeGetawayFlexPage() {
  return (
    <main className="creative-flex-page">
      <img
        className="creative-flex-page__background"
        src="https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/dwa_chandra_home_hero.webp"
        alt="Dwa Chandra sanctuary surrounded by tropical greenery in Bali"
      />

      <header className="creative-flex-page__header">
        <a
          href="/bali-creative-getaway"
          aria-label="Back to The RESET Creative Getaway"
        >
          <span aria-hidden="true">←</span>
          The RESET · Creative Getaway
        </a>
        <span>Pejeng · Bali</span>
      </header>

      <section className="creative-flex-page__content">
        <p className="creative-flex-page__eyebrow">Stay your way</p>
        <h1>
          Flexible
          <br />
          Getaway
        </h1>
        <p className="creative-flex-page__intro">
          Arrive when it works for you. Choose any six days or stay longer, and
          settle into the rhythm of Dwa Chandra at your own pace.
        </p>

        <dl className="creative-flex-page__details">
          <div>
            <dt>Available dates</dt>
            <dd>3rd–17th October</dd>
          </div>
          <div>
            <dt>Daily rate</dt>
            <dd>
              <strong>$180</strong> USD per night
            </dd>
          </div>
          <div>
            <dt>Minimum stay</dt>
            <dd>6 nights</dd>
          </div>
          <div className="creative-flex-page__calculation">
            <dt>Your minimum stay</dt>
            <dd>
              Six days. One reset. <strong>$1,080 USD</strong>
            </dd>
          </div>
        </dl>

        <div className="creative-flex-page__actions">
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            Enquire about your dates <span aria-hidden="true">↗</span>
          </a>
          <a href="/bali-creative-getaway">
            View the full getaway <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>
    </main>
  );
}
