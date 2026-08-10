import { useDeferredValue, useState } from "react";
import { retreatDirectory } from "./retreatDirectory";

const overlaps = (retreat, otherRetreat) =>
  retreat.id !== otherRetreat.id &&
  retreat.startDate <= otherRetreat.endDate &&
  otherRetreat.startDate <= retreat.endDate;

export default function RetreatsDirectoryPage() {
  const [query, setQuery] = useState("");
  const [destination, setDestination] = useState("All");
  const [duration, setDuration] = useState("All");
  const [copiedRoute, setCopiedRoute] = useState("");
  const deferredQuery = useDeferredValue(query.trim().toLowerCase());

  const retreats = retreatDirectory.filter((retreat) => {
    const matchesQuery = [
      retreat.destination,
      retreat.edition,
      retreat.venue,
      retreat.dates,
      retreat.route,
    ].some((value) => value.toLowerCase().includes(deferredQuery));
    const matchesDestination =
      destination === "All" || retreat.destination === destination;
    const matchesDuration =
      duration === "All" || retreat.days === Number(duration);

    return matchesQuery && matchesDestination && matchesDuration;
  });

  const copyRoute = async (route) => {
    await navigator.clipboard.writeText(`${window.location.origin}${route}`);
    setCopiedRoute(route);
    window.setTimeout(() => setCopiedRoute(""), 1600);
  };

  return (
    <main className="retreat-directory">
      <header className="retreat-directory__header">
        <div>
          <p className="retreat-directory__eyebrow">Admin directory</p>
          <h1>Retreats</h1>
          <p className="retreat-directory__summary">
            {retreatDirectory.length} published retreats across 2 destinations.
          </p>
        </div>
        <a className="retreat-directory__home-link" href="/">
          View site
        </a>
      </header>

      <section className="retreat-directory__toolbar" aria-label="Directory filters">
        <label className="retreat-directory__search">
          <span>Search</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Name, venue, date, or route"
          />
        </label>

        <label>
          <span>Destination</span>
          <select
            value={destination}
            onChange={(event) => setDestination(event.target.value)}
          >
            <option>All</option>
            <option>Bali</option>
            <option>Sri Lanka</option>
          </select>
        </label>

        <label>
          <span>Duration</span>
          <select
            value={duration}
            onChange={(event) => setDuration(event.target.value)}
          >
            <option value="All">All</option>
            <option value="7">7 days</option>
            <option value="10">10 days</option>
          </select>
        </label>
      </section>

      <section className="retreat-directory__results" aria-live="polite">
        <div className="retreat-directory__results-header">
          <p>{retreats.length} results</p>
          <p>Sorted by start date</p>
        </div>

        <div className="retreat-directory__table-wrap">
          <table className="retreat-directory__table">
            <thead>
              <tr>
                <th scope="col">Retreat</th>
                <th scope="col">Dates</th>
                <th scope="col">Duration</th>
                <th scope="col">Status</th>
                <th scope="col">Route</th>
                <th scope="col"><span className="sr-only">Actions</span></th>
              </tr>
            </thead>
            <tbody>
              {retreats.map((retreat) => {
                const conflictingRetreat = retreatDirectory.find((otherRetreat) =>
                  overlaps(retreat, otherRetreat),
                );

                return (
                  <tr key={retreat.id}>
                    <td data-label="Retreat">
                      <strong>{retreat.edition}</strong>
                      <span>{retreat.venue}</span>
                      {conflictingRetreat ? (
                        <span className="retreat-directory__warning">
                          Overlaps {conflictingRetreat.edition}
                        </span>
                      ) : null}
                    </td>
                    <td data-label="Dates">{retreat.dates}</td>
                    <td data-label="Duration">
                      {retreat.days} days / {retreat.nights} nights
                    </td>
                    <td data-label="Status">
                      <span className="retreat-directory__status">
                        {retreat.status}
                      </span>
                      <span className="retreat-directory__meta-status">
                        Metadata {retreat.metadataComplete ? "complete" : "incomplete"}
                      </span>
                    </td>
                    <td data-label="Route">
                      <code>{retreat.route}</code>
                    </td>
                    <td className="retreat-directory__actions">
                      <a href={retreat.route}>Open</a>
                      <button type="button" onClick={() => copyRoute(retreat.route)}>
                        {copiedRoute === retreat.route ? "Copied" : "Copy URL"}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {retreats.length === 0 ? (
          <p className="retreat-directory__empty">No retreats match these filters.</p>
        ) : null}
      </section>
    </main>
  );
}