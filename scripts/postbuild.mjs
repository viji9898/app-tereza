import { mkdir, readFile, writeFile } from "node:fs/promises";

const siteUrl = "https://www.terezadossantos.com";
const distIndexPath = "dist/index.html";

const routeMetadata = {
  home: {
    routePath: "/",
    title: "Tereza Dos Santos | Travel Feather",
    description:
      "Music. Movement. Story. Human experience. Explore the work of Tereza Dos Santos across performance, film, education, immersive experiences, and wellness.",
    imageAlt: "Travel Feather by Tereza Dos Santos",
  },
  content: {
    routePath: "/content",
    title: "Tereza Reels | Travel Feather",
    description:
      "Watch Tereza Dos Santos performance reels, trailers, and curated video work in a compact playlist experience.",
    image: `${siteUrl}/og-content-page.png`,
    imageAlt: "Preview of the Tereza reels playlist page",
  },
  kuruluBay: {
    routePath: "/sri-lanka",
    title:
      "The Return Sri Lanka Edition | September 21-30, 2026 | 10 Days, 9 Nights | Tereza Dos Santos",
    description:
      "Explore The Return Sri Lanka Edition, a private retreat running September 21-30, 2026 with 10 days and 9 nights of Ayurveda, movement, sound, and immersive restoration curated by Tereza Dos Santos.",
    image:
      "https://img.fitreisen.group/eyJidWNrZXQiOiJmaXRyZWlzZW4tY2RuLWltYWdlcyIsImtleSI6IjZEQjZFMzIyREU1MkFFNTlDQThCQkJCRTU3NjFEMDg2IiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxNjAwLCJoZWlnaHQiOjkwMCwiZml0IjoiY292ZXIiLCJwb3NpdGlvbiI6ImF0dGVudGlvbiJ9fX0=?signature=95da0fdc15dc80f60e1d8aeb14c35be56b56803999c229bbe68f306b1c677381",
    imageAlt: "Kurulu Bay retreat pool framed by tropical palms",
  },
  bali: {
    routePath: "/bali-october",
    title:
      "The Return Bali Edition | October 3-12, 2026 | 10 Days, 9 Nights | Tereza Dos Santos",
    description:
      "Explore The Return Bali Edition, a private retreat running October 3-12, 2026 with 10 days and 9 nights of breathwork, movement, ritual, and immersive restoration curated by Tereza Dos Santos.",
    image:
      "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/paddy-field-bali-women-standing.jpg",
    imageAlt: "Women standing in a Bali paddy field",
  },
  baliSeptember: {
    routePath: "/bali-september",
    title:
      "The Return Bali Edition | September 23-29, 2026 | 7 Days, 6 Nights | Tereza Dos Santos",
    description:
      "Explore The Return Bali September Edition, a private retreat running September 23-29, 2026 with 7 days and 6 nights of breathwork, movement, ritual, and immersive restoration curated by Tereza Dos Santos.",
    image:
      "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/paddy-field-bali-women-standing.jpg",
    imageAlt: "Women standing in a Bali paddy field",
  },
  baliImages: {
    routePath: "/bali-images",
    title: "Bali Image Collection | Tereza Dos Santos",
    description:
      "Temporary Bali image library for selecting Dwa Chandra and retreat assets.",
    image:
      "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/paddy-field-bali-women-standing.jpg",
    imageAlt: "Preview of the Bali image collection",
  },
  contracts: {
    routePath: "/contracts",
    title: "Contracts | Tereza Dos Santos",
    description:
      "A working checklist of key commercial, media, cancellation, and attribution terms to include in event agreements involving Tereza Dos Santos.",
    image:
      "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/paddy-field-bali-women-standing.jpg",
    imageAlt: "Contracts checklist page for Tereza Dos Santos",
  },
};

function toAbsoluteUrl(url) {
  if (!url) {
    return url;
  }

  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }

  return `${siteUrl}${url.startsWith("/") ? url : `/${url}`}`;
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function replaceMetaContent(html, attribute, name, content) {
  const pattern = new RegExp(
    `<meta[^>]*${attribute}="${escapeRegExp(name)}"[^>]*content="[^"]*"[^>]*\\/>`,
  );

  return html.replace(
    pattern,
    `<meta ${attribute}="${name}" content="${content}" />`,
  );
}

function upsertHeadTag(html, existingPattern, tagMarkup) {
  if (existingPattern.test(html)) {
    return html.replace(existingPattern, tagMarkup);
  }

  return html.replace("</head>", `  ${tagMarkup}\n  </head>`);
}

function buildHtml(html, metadata) {
  const routeUrl = `${siteUrl}${metadata.routePath}`;
  const imageUrl = toAbsoluteUrl(metadata.image);

  let output = html;
  output = output.replace(
    /<title>[\s\S]*?<\/title>/,
    `<title>${metadata.title}</title>`,
  );
  output = replaceMetaContent(
    output,
    "name",
    "description",
    metadata.description,
  );
  output = replaceMetaContent(output, "property", "og:title", metadata.title);
  output = replaceMetaContent(
    output,
    "property",
    "og:description",
    metadata.description,
  );
  output = replaceMetaContent(output, "property", "og:image", imageUrl);
  output = replaceMetaContent(
    output,
    "property",
    "og:image:alt",
    metadata.imageAlt,
  );
  output = replaceMetaContent(output, "name", "twitter:title", metadata.title);
  output = replaceMetaContent(
    output,
    "name",
    "twitter:description",
    metadata.description,
  );
  output = replaceMetaContent(output, "name", "twitter:image", imageUrl);
  output = upsertHeadTag(
    output,
    /<meta\s+property="og:url"[^>]*>/,
    `<meta property="og:url" content="${routeUrl}" />`,
  );
  output = upsertHeadTag(
    output,
    /<link\s+rel="canonical"[^>]*>/,
    `<link rel="canonical" href="${routeUrl}" />`,
  );

  return output;
}

const baseHtml = await readFile(distIndexPath, "utf8");
const homeImageMatch = baseHtml.match(
  /meta\s+property="og:image"\s+content="([^"]+)"/,
);

routeMetadata.home.image = toAbsoluteUrl(
  homeImageMatch?.[1] ?? "/ogImage-home-page.jpeg",
);

const homeHtml = buildHtml(baseHtml, routeMetadata.home);
await writeFile(distIndexPath, homeHtml);
await writeFile("dist/404.html", homeHtml);

for (const [directoryName, metadata] of [
  ["content", routeMetadata.content],
  ["sri-lanka", routeMetadata.kuruluBay],
  ["kurulu-bay", routeMetadata.kuruluBay],
  ["bali", routeMetadata.bali],
  ["bali-october", routeMetadata.bali],
  ["bali-september", routeMetadata.baliSeptember],
  ["bali-images", routeMetadata.baliImages],
  ["contracts", routeMetadata.contracts],
]) {
  await mkdir(`dist/${directoryName}`, { recursive: true });
  await writeFile(
    `dist/${directoryName}/index.html`,
    buildHtml(baseHtml, metadata),
  );
}
