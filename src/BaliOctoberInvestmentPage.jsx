import "./BaliInvestmentPage.css";

export default function BaliOctoberInvestmentPage() {
  return (
    <main className="bali-investment-page">
      <section className="bali-investment-page__section">
        <p className="bali-investment-page__eyebrow">The Return · Bali</p>

        <h1 className="bali-investment-page__title">Investment</h1>
        <p className="bali-investment-page__meta">
          A 10-Day | 9-Night Retreat curated by Tereza Dos Santos
          <br />
          <em>October 3–12, 2026</em>
        </p>
        <dl className="bali-investment-page__pricing">
          <div className="bali-investment-page__price">
            <dt>Shared Occupancy</dt>
            <dd>
              <del>$3,700 USD</del>
              <strong>$3,400 USD</strong>
            </dd>
          </div>
          <div className="bali-investment-page__price">
            <dt>Single Occupancy</dt>
            <dd>
              <del>$4,700 USD</del>
              <strong>$4,200 USD</strong>
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