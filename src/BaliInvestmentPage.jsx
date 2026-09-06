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
          <em>September 23–29, 2026</em>
        </p>
        <dl className="bali-investment-page__pricing">
          <div className="bali-investment-page__price">
            <dt>Double Occupancy</dt>
            <dd>
              <del>$2,800 USD</del>
              <strong>$2,300 USD</strong>
            </dd>
          </div>
          <div className="bali-investment-page__price">
            <dt>Single Occupancy</dt>
            <dd>
              <del>$3,400 USD</del>
              <strong>$2,900 USD</strong>
            </dd>
          </div>
        </dl>

        <div className="bali-investment-page__room-note">
          <h2>Every room is different.</h2>
          <p>
            A private room menu with photographs and layouts is available on
            request, so we can find the room that suits you best. Rooms are
            allocated in the order bookings are received.
          </p>
        </div>
      </section>
    </main>
  );
}
