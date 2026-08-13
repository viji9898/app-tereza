import "./BaliInvestmentPage.css";

export default function BaliInvestmentPage() {
  return (
    <main className="bali-investment-page">
      <section className="bali-investment-page__section">
        <p className="bali-investment-page__eyebrow">The RESET · Bali</p>

        <h1 className="bali-investment-page__title">Investment</h1>
        <p className="bali-investment-page__meta">
          A 7-Day | 6-Night Retreat curated by Tereza Dos Santos
          <br />
          September 23 — September 29, 2026
        </p>
        <dl className="bali-investment-page__pricing">
          <div className="bali-investment-page__price">
            <dt>Single Occupancy</dt>
            <dd>3,100 USD</dd>
          </div>
          <div className="bali-investment-page__price">
            <dt>Double Occupancy</dt>
            <dd>2,500 USD</dd>
          </div>
        </dl>
        <p className="bali-investment-page__copy">
          A detailed room menu with photographs and layouts is available on
          request, so we can find the room that suits you best. Rooms are
          allocated in the order that bookings are received.
        </p>
        <p>
          <small>Bring - a - friend & Save!</small>
        </p>
      </section>
    </main>
  );
}
