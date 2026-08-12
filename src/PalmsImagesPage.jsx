import { useState } from "react";

const imageGroups = [
  {
    label: "Brand",
    title: "Logos and icons",
    images: [
      {
        url: "https://cdn.prod.website-files.com/66b20a037ea61b18663361be/66b47dfeb39c6d7939c44e63_Favicon.png",
        name: "Favicon.png",
        resolution: "32 × 32 px",
        bytes: 511,
      },
      {
        url: "https://cdn.prod.website-files.com/66b20a037ea61b18663361be/66b47e03e692f7d0093cb046_Webclip.png",
        name: "Webclip.png",
        resolution: "256 × 256 px",
        bytes: 3511,
      },
      {
        url: "https://cdn.prod.website-files.com/66f278307a717e3092522504/66f278307a717e309252255f_PALM%20Sri%20Lanka.svg",
        name: "PALM Sri Lanka.svg",
        resolution: "276.522 × 413.619 SVG",
        bytes: 2745,
      },
      {
        url: "https://cdn.prod.website-files.com/66f278307a717e3092522504/66f278307a717e309252253d_PALM.svg",
        name: "PALM.svg",
        resolution: "274.613 × 308.854 SVG",
        bytes: 1119,
      },
    ],
  },
  {
    label: "Venue",
    title: "The Palms collection",
    images: [
      {
        url: "https://cdn.prod.website-files.com/66f278307a717e3092522530/67206d03310cb0bd1be82de9_67206b280b7b2b4223a3e0b3_Cabana_C.webp",
        name: "Cabana C.webp",
        resolution: "2306 × 1537 px",
        bytes: 588360,
      },
      {
        url: "https://cdn.prod.website-files.com/66f278307a717e3092522530/67206d1467066b0d7a1b4d88_67206b417a66087aa5195e36_Main-image_C.webp",
        name: "Main image C.webp",
        resolution: "2515 × 1677 px",
        bytes: 343746,
      },
      {
        url: "https://cdn.prod.website-files.com/66f278307a717e3092522530/67206d235f5749f34be457c3_67206c2af41f7d26ba5ec807_MAXIMILIEN%20DE%20DYCKER%206.webp",
        name: "Maximilien de Dycker 6.webp",
        resolution: "5843 × 3895 px",
        bytes: 1959976,
      },
      {
        url: "https://cdn.prod.website-files.com/66f278307a717e3092522504/66f278307a717e30925225d1_Journal-SQ.webp",
        name: "Journal SQ.webp",
        resolution: "2000 × 2000 px",
        bytes: 712560,
      },
      {
        url: "https://cdn.prod.website-files.com/66f278307a717e3092522504/66f278307a717e30925225d2_Retreats.webp",
        name: "Retreats.webp",
        resolution: "1024 × 1535 px",
        bytes: 52520,
      },
      {
        url: "https://cdn.prod.website-files.com/66f278307a717e3092522504/66f278307a717e3092522575_03.webp",
        name: "03.webp",
        resolution: "800 × 530 px",
        bytes: 22286,
      },
      {
        url: "https://cdn.prod.website-files.com/66f278307a717e3092522504/66f278307a717e30925225d3_Foundation.webp",
        name: "Foundation.webp",
        resolution: "1066 × 1600 px",
        bytes: 138364,
      },
      {
        url: "https://cdn.prod.website-files.com/66f278307a717e3092522504/66f278307a717e3092522594_Screenshot%202024-08-27%20at%2012.04.02%20pm.webp",
        name: "Screenshot 2024-08-27 at 12.04.02 pm.webp",
        resolution: "800 × 800 px",
        bytes: 33154,
      },
      {
        url: "https://cdn.prod.website-files.com/66f278307a717e3092522504/66f278307a717e30925225d0_Eat-and-Drink_Web.webp",
        name: "Eat and Drink Web.webp",
        resolution: "2000 × 1334 px",
        bytes: 471270,
      },
    ],
  },
  {
    label: "Responsive set",
    title: "DSCF0064 sizes",
    images: [
      {
        url: "https://cdn.prod.website-files.com/66f278307a717e3092522504/6a3e2b796b5d551a820d380b_DSCF0064.jpg",
        name: "DSCF0064 original.jpg",
        resolution: "3400 × 2267 px",
        bytes: 4107307,
      },
      {
        url: "https://cdn.prod.website-files.com/66f278307a717e3092522504/6a3e2b796b5d551a820d380b_DSCF0064-p-500.jpg",
        name: "DSCF0064 500.jpg",
        resolution: "500 × 333 px",
        bytes: 51219,
      },
      {
        url: "https://cdn.prod.website-files.com/66f278307a717e3092522504/6a3e2b796b5d551a820d380b_DSCF0064-p-800.jpg",
        name: "DSCF0064 800.jpg",
        resolution: "800 × 533 px",
        bytes: 129898,
      },
      {
        url: "https://cdn.prod.website-files.com/66f278307a717e3092522504/6a3e2b796b5d551a820d380b_DSCF0064-p-1080.jpg",
        name: "DSCF0064 1080.jpg",
        resolution: "1080 × 720 px",
        bytes: 234052,
      },
      {
        url: "https://cdn.prod.website-files.com/66f278307a717e3092522504/6a3e2b796b5d551a820d380b_DSCF0064-p-1600.jpg",
        name: "DSCF0064 1600.jpg",
        resolution: "1600 × 1067 px",
        bytes: 524438,
      },
      {
        url: "https://cdn.prod.website-files.com/66f278307a717e3092522504/6a3e2b796b5d551a820d380b_DSCF0064-p-2000.jpg",
        name: "DSCF0064 2000.jpg",
        resolution: "2000 × 1334 px",
        bytes: 806658,
      },
      {
        url: "https://cdn.prod.website-files.com/66f278307a717e3092522504/6a3e2b796b5d551a820d380b_DSCF0064-p-2600.jpg",
        name: "DSCF0064 2600.jpg",
        resolution: "2600 × 1734 px",
        bytes: 1308308,
      },
      {
        url: "https://cdn.prod.website-files.com/66f278307a717e3092522504/6a3e2b796b5d551a820d380b_DSCF0064-p-3200.jpg",
        name: "DSCF0064 3200.jpg",
        resolution: "3200 × 2134 px",
        bytes: 1870534,
      },
    ],
  },
];

function formatSize(bytes) {
  if (bytes < 1024) {
    return `${bytes} B`;
  }

  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KiB`;
  }

  return `${(bytes / (1024 * 1024)).toFixed(2)} MiB`;
}

async function copyText(value) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "absolute";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

export default function PalmsImagesPage() {
  const [copiedUrl, setCopiedUrl] = useState("");

  async function handleCopy(url) {
    try {
      await copyText(url);
      setCopiedUrl(url);
      window.setTimeout(() => {
        setCopiedUrl((current) => (current === url ? "" : current));
      }, 1800);
    } catch {
      setCopiedUrl("");
    }
  }

  return (
    <main className="page bali-images-page palms-images-page">
      <div className="shell">
        <nav className="topbar" aria-label="Primary navigation">
          <a className="brand" href="/sri-lanka-october-7-days">
            The Palms
          </a>
          <span className="topbar__divider" aria-hidden="true" />
        </nav>

        <section className="intro" aria-labelledby="palms-images-title">
          <h1 id="palms-images-title">The Palms image collection</h1>
          <p className="intro__copy">
            Venue and brand assets with verified intrinsic resolution and file
            size.
          </p>
        </section>

        {imageGroups.map((group) => (
          <section
            key={group.title}
            className="bali-images-page__section"
            aria-labelledby={`palms-${group.label.toLowerCase().replaceAll(" ", "-")}`}
          >
            <div className="bali-images-page__section-header">
              <p className="section-label">{group.label}</p>
              <h2
                id={`palms-${group.label.toLowerCase().replaceAll(" ", "-")}`}
              >
                {group.title}
              </h2>
            </div>
            <div className="bali-images-page__grid">
              {group.images.map((item) => (
                <article key={item.url} className="bali-images-page__card">
                  <a
                    className="bali-images-page__image-link palms-images-page__image-link"
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={item.url} alt={item.name} loading="lazy" />
                  </a>
                  <div className="bali-images-page__card-body">
                    <p className="bali-images-page__label">{item.name}</p>
                    <dl className="palms-images-page__metadata">
                      <div>
                        <dt>Resolution</dt>
                        <dd>{item.resolution}</dd>
                      </div>
                      <div>
                        <dt>File size</dt>
                        <dd>{formatSize(item.bytes)}</dd>
                      </div>
                    </dl>
                    <div className="bali-images-page__actions">
                      <button
                        type="button"
                        onClick={() => handleCopy(item.url)}
                      >
                        {copiedUrl === item.url ? "Copied" : "Copy image link"}
                      </button>
                      <a href={item.url} target="_blank" rel="noreferrer">
                        Open image
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
