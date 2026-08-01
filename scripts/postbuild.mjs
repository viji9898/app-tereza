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
		routePath: "/kurulu-bay",
		title: "The Return Sri Lanka Edition | Tereza Dos Santos",
		description:
			"Explore The Return, a 10-day private Sri Lanka retreat curated by Tereza Dos Santos with Ayurveda, movement, sound, and immersive restoration.",
		image:
			"https://img.fitreisen.group/eyJidWNrZXQiOiJmaXRyZWlzZW4tY2RuLWltYWdlcyIsImtleSI6IjZEQjZFMzIyREU1MkFFNTlDQThCQkJCRTU3NjFEMDg2IiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxNjAwLCJoZWlnaHQiOjkwMCwiZml0IjoiY292ZXIiLCJwb3NpdGlvbiI6ImF0dGVudGlvbiJ9fX0=?signature=95da0fdc15dc80f60e1d8aeb14c35be56b56803999c229bbe68f306b1c677381",
		imageAlt: "Kurulu Bay retreat pool framed by tropical palms",
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

	return html.replace(pattern, `<meta ${attribute}="${name}" content="${content}" />`);
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
	output = output.replace(/<title>[\s\S]*?<\/title>/, `<title>${metadata.title}</title>`);
	output = replaceMetaContent(output, "name", "description", metadata.description);
	output = replaceMetaContent(output, "property", "og:title", metadata.title);
	output = replaceMetaContent(output, "property", "og:description", metadata.description);
	output = replaceMetaContent(output, "property", "og:image", imageUrl);
	output = replaceMetaContent(output, "property", "og:image:alt", metadata.imageAlt);
	output = replaceMetaContent(output, "name", "twitter:title", metadata.title);
	output = replaceMetaContent(output, "name", "twitter:description", metadata.description);
	output = replaceMetaContent(output, "name", "twitter:image", imageUrl);
	output = upsertHeadTag(output, /<meta\s+property="og:url"[^>]*>/, `<meta property="og:url" content="${routeUrl}" />`);
	output = upsertHeadTag(output, /<link\s+rel="canonical"[^>]*>/, `<link rel="canonical" href="${routeUrl}" />`);

	return output;
}

const baseHtml = await readFile(distIndexPath, "utf8");
const homeImageMatch = baseHtml.match(/meta\s+property="og:image"\s+content="([^"]+)"/);

routeMetadata.home.image = toAbsoluteUrl(homeImageMatch?.[1] ?? "/ogImage-home-page.jpeg");

const homeHtml = buildHtml(baseHtml, routeMetadata.home);
await writeFile(distIndexPath, homeHtml);
await writeFile("dist/404.html", homeHtml);

for (const [directoryName, metadata] of [
	["content", routeMetadata.content],
	["kurulu-bay", routeMetadata.kuruluBay],
]) {
	await mkdir(`dist/${directoryName}`, { recursive: true });
	await writeFile(`dist/${directoryName}/index.html`, buildHtml(baseHtml, metadata));
}