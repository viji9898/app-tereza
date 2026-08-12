import "./SriLankaInvestmentPage.css";

export default function SriLankaInvestmentPage() {
  return (
    <main className="sri-lanka-investment-page">
      <section className="sri-lanka-investment-page__section">
        <p className="sri-lanka-investment-page__eyebrow">
          The RESET · Sri Lanka
        </p>

        <h1 className="sri-lanka-investment-page__title">Investment</h1>
        <p className="sri-lanka-investment-page__meta">
          A 7-Day | 6-Night Retreat curated by Tereza Dos Santos
          <br />
          October 3 — October 9, 2026
        </p>
        <dl className="sri-lanka-investment-page__pricing">
          <div className="sri-lanka-investment-page__price">
            <dt>Single Occupancy</dt>
            <dd>1,900 USD</dd>
          </div>
          <div className="sri-lanka-investment-page__price">
            <dt>Double Occupancy</dt>
            <dd>1,700 USD</dd>
          </div>
        </dl>
        <p className="sri-lanka-investment-page__copy">
          A detailed room menu with photographs and layouts is available on
          request, so we can find the room that suits you best. Rooms are
          allocated in the order that bookings are received.
        </p>
        <p>
          <small>Bring - a - friend - and - save!</small>
        </p>
      </section>
    </main>
  );
}