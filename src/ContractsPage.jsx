const contractSections = [
  {
    title: "Rights to use images and video",
    points: [
      "The organiser may photograph, film, and record Tereza during the event.",
      "That use should be limited to promotion, marketing, publicity, documentation, and future editions of the same event.",
      "Any standalone advertising campaign, third-party endorsement, or unrelated commercial use should need prior written consent.",
    ],
  },
  {
    title: "Access to event content",
    points: [
      "Tereza should receive access to all photos and video recordings featuring her at no additional cost.",
      "She should be free to reuse that material for personal, professional, promotional, and commercial purposes.",
      "That reuse should not falsely imply endorsement by the organiser, sponsors, or event partners.",
    ],
  },
  {
    title: "Intellectual property and approvals",
    points: [
      "Pre-existing materials belonging to Tereza should remain hers, including workshop formats, recordings, writing, brand assets, and original content.",
      "Any edited use of her material, image, or likeness outside agreed event promotion should need prior approval.",
      "Nothing published by the organiser should suggest endorsement beyond what has actually been agreed.",
    ],
  },
  {
    title: "Social media attribution",
    points: [
      "Where platform tools allow it, posts should tag @travelfeather and @travelfeatherwellness.",
      "Posts should mention her by name as Tereza Dos Santos.",
      "If tagging is not possible, the name and handles should appear clearly in the caption or post description.",
    ],
  },
  {
    title: "Cancellation by organiser",
    points: [
      "If the organiser cancels for any reason other than Tereza's material breach, the initial payment can remain non-refundable as a booking and commitment fee.",
      "If cancellation happens shortly before the event, the remaining balance can still become payable within a short deadline.",
      "This point should say clearly whether it also applies in low sales, venue issues, weather, force majeure, or other event disruption scenarios.",
    ],
  },
  {
    title: "Safety",
    points: [
      "Tereza should not be required to perform, use equipment, or take part in any activity or setup that she reasonably considers unsafe or not aligned with applicable safety standards and industry best practice.",
      "If a safety issue arises, she should be able to suspend or refuse the affected part of the services until the issue has been fixed.",
      "That refusal or suspension should not count as a breach and should not reduce her entitlement to the agreed fee.",
    ],
  },
  {
    title: "Insurance",
    points: [
      "The organiser should maintain appropriate public and general liability insurance for the event.",
      "On request, the organiser should provide reasonable evidence of that insurance.",
      "Where commercially available and allowed by the insurer, Tereza should be named as an additional insured for the duration of the event.",
    ],
  },
  {
    title: "Security and responsibility for equipment",
    points: [
      "The organiser should take all reasonable steps to protect Tereza, her team if any, and any equipment, instruments, or materials brought to the event.",
      "If equipment or materials are lost, stolen, or damaged while under the organiser's or venue's care, custody, or control, the organiser should reimburse the full repair or replacement value.",
      "This responsibility should apply to the organiser, its staff, contractors, agents, and the venue where relevant.",
    ],
  },
];

export default function ContractsPage() {
  return (
    <main className="page contracts-page">
      <div className="shell contracts-page__shell">
        <nav className="topbar" aria-label="Primary navigation">
          <a className="brand" href="/">
            T&amp;V
          </a>
          <span className="topbar__divider" aria-hidden="true" />
        </nav>

        <section className="intro contracts-page__intro" aria-labelledby="contracts-title">
          <div>
            <p className="section-label">Contracts</p>
            <h1 id="contracts-title">Key points to include in event agreements with Tereza</h1>
          </div>
          <p className="intro__copy">
            A simple checklist focused on media rights, attribution, content sharing, and cancellation terms.
          </p>
        </section>

        <section className="contracts-page__notice" aria-label="Important note">
          <p>
            Use this as a quick reference when reviewing or drafting agreements with Tereza.
          </p>
        </section>

        <section className="contracts-page__accordion" aria-label="Contract checklist sections">
          {contractSections.map((section) => (
            <details key={section.title} className="contracts-page__accordion-item">
              <summary className="contracts-page__accordion-summary">
                <h2>{section.title}</h2>
                <span className="contracts-page__accordion-icon" aria-hidden="true">
                  +
                </span>
              </summary>
              <div className="contracts-page__accordion-panel">
                <ul>
                  {section.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </details>
          ))}
        </section>

      </div>
    </main>
  );
}