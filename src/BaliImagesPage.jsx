import { useMemo, useState } from "react";

const terezaImageUrls = [
  "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/terereza-seatitng-by-the-river.webp",
  "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-bali/terereza-seatitng-by-the-river-unedited.webp",
];

const baliImageUrls = Array.from(
  new Set([
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/1724831548844-OO1ETH1UNT9VQL55D54I/dwa+chandra+yoga+shala.JPG",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/d04caceb-cfc0-4416-aa40-1f2d278b426d/dwa+chandra+villa+2.jpeg",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/f2145aa9-f018-4157-afd3-706aff465f4f/dwa+chandra+villa+2.jpg",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/bcec0099-1397-48e3-9028-23b042ca33b3/DSC00833-HDR.jpg",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/5c594ae0-139d-44bd-9fe9-fc5055c7623b/dwa+chandra+villa+1.JPG",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/88aeb966-82fc-48ab-80d4-179ac0a3d3d3/dwa+chandra+villa+1.jpeg",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/78c8faeb-2801-480a-902d-eff7e0683ab6/dwa+chandra+villa+1.jpeg",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/8e62810a-84fe-4678-b93a-bc0c2be71c54/dwa+chandra+villa+1.jpg",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/94c5628f-4842-4473-91f2-d5f3963a3d71/dwa+chandra+villa+1.jpg",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/b49194d6-68b6-4fb4-9907-30473349ddeb/background.png",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/1114667d-2228-4970-aedb-a9b80e1bfa91/ENG03010.jpg",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/159b7364-c8a5-4207-a51b-d754497af21c/ENG09113.jpg",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/1e9fbf4f-586d-4322-a80d-a5a22f923dfb/65d41b51-39ba-4f88-abd1-7b7deedb4b70+2.jpg",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/1f3fd67c-6bdc-4b7e-bd01-2b41944887fd/d63a0624-b2ef-4b7b-ac22-976e700ffd53.JPG",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/23ba1ff3-6c7c-4591-840b-ec3ae5bfeed0/DSC00251-HDR.jpg",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/2a7028a8-2dfb-410d-805c-7b820028c9d0/ENG02330.jpg",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/3633fc1f-8af6-4a69-bef1-5c3dd61a2ff4/yoga+shala+experience+dwa+chandra.jpeg",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/3641c094-9ce7-4c7d-a908-39817f93e989/ENG00624.jpg",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/3c48f26a-4764-44a9-a79a-6ded9b174ee2/DSC00592.jpeg",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/4057aa3c-bde7-47f2-b26c-8630c60f10d0/ENG02415.jpg",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/574752a6-fe6e-42ed-a1c2-f6960ef477e5/651A217F-11B2-47F0-9C91-978B55A84A3A.jpeg",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/58b922cb-589a-494d-af31-ae22867a45aa/icon.png",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/5951c2d3-ebe6-43b6-9b8d-1fa8f1f38d0a/IMG_8187.jpeg",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/5988733a-5e2b-4f92-9c03-c0f7416f87b8/dwa+chandra+villa+2.jpeg",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/5e656ab6-4c14-4b50-9cca-1a146c9f7461/DSC00142-HDR+%281%29.jpg",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/5fe18bc7-07de-46a3-8c3f-16cb54c2ded3/dwa+chandra+villa+2.jpeg",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/781c7509-dcf8-47b1-94ef-0643a931576f/DSC09600-HDR.jpg",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/7d6a89a1-3fab-4b8e-a2dd-b69995483efb/ENG08961.jpg",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/82c72a9f-02a0-426d-9731-272ad3cd6c3d/DSC00543+%281%29.jpg",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/89f6dfbf-9d2c-4244-94d1-916d65b1b65f/372eab54-f68b-4305-b722-2b466c081e0d.jpg",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/9b04ec16-ae0e-4abc-a71b-92c6bdefd79a/DSC09934.jpg",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/9eb13f14-2124-4dd3-b692-9da4dc1f1857/bd5f0051-2aba-4cee-94f9-920715a77eeb.jpg",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/b145e395-aad5-4d23-aef3-2a7d5d5cbaa8/1VQCOEfNeAOjM0rrMPPr1ZO4K0z36hYnTUBDFZOi6.jpg",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/bad29dcc-4c5a-407d-a8de-4d6b2a6aab3e/dwa+chandra+villa+1.jpg",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/bdc3cb09-5dc6-45ca-bed9-f06cdc4f5371/cf7f2564-ccf0-4266-b00b-53d0a3c3dea0.jpg",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/c07b8ff7-6e2a-48cd-999d-3f5b382f01f5/dwa+chandra+villa+1+event.jpg",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/c234d272-a808-4c82-83dc-9144a685d060/DSC01089.jpg",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/c374eab7-b80f-40cb-8273-c191997c2d08/BRAND+GUIDELINES+Kelebutan+Campus+%281%29.png",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/c664e476-dbec-4c7c-8239-9fc21f712989/DSC00378+%281%29.jpg",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/c6cb8710-21ff-436d-931d-7e35eab094d2/DSC00571.jpeg",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/c809d7b1-7db0-44be-939c-af3ea4704e36/IMG_9204+2.jpeg",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/c8b6fb99-e609-4dc9-a6ec-ad24f4302901/DSC09495.jpg",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/cbc08db0-b228-42f3-9af8-1ee1d09b62d9/ENG02505.jpg",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/da21c7eb-3fea-4931-a8ef-3f021bd6f2f6/DSC00895-HDR.jpg",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/db2d69e8-2adb-4743-9d7f-3b4ac1b78728/DSC01240.jpeg",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/df9f97df-bdc8-4454-b4d0-a57ec664ab3a/ENG03729.jpg",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/e8d9dc5f-b186-4885-94a2-1bd084c5d6fc/%23nomadEngFilms_00546.jpg",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/eb0f6a00-f145-4a7f-ac6e-76173af9c757/DSC00356.jpeg",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/ed5f095e-fe24-4316-b1b6-4a19b04db449/DSC00376.jpeg",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/f3ce0e8e-2847-49e4-bf84-a2265144c51a/background.jpg",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/f484807b-11ec-4509-b66d-d6515bef9468/favicon.ico",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/fcd890d2-bdd8-41d7-9125-f39d4a6896a0/dwa+chandra+villa+1.jpeg",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/53488ee0-9edb-4000-a498-af47243c7d21/WhatsApp+Image+2024-08-26+at+01.32.55.jpeg",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/08f9ea40-e072-4f70-9da3-9c45291f4784/icon.png",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/e1eb03f6-12fe-44e0-a840-c8e51944b3a1/DSC09956-HDR.jpeg",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/01001a72-e8b6-4a5d-9a02-8ebea85c0941/icon+bali.png",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/438d4804-2bad-4edd-a652-45f18a8453eb/Bali+Hai_UpperShala1.jpg",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/ef91b60f-02eb-491f-b83a-cfc7ca40424f/icon3.png",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/33660e25-70b8-4641-ac33-e339b1c7a160/IMG_20260102_204658.jpg",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/4f129f72-6dc9-4b8c-b0f4-a6e31777567a/ENG09062.jpg",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/5640310e-88a5-4396-99b3-43d850b57010/IMG_5148.jpeg",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/d2fcacb0-d623-4ba3-a0c2-cb72a6a968ad/dwa+chandra+villa+1+people.jpg",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/f6964967-f063-4020-8b86-42b65517ad63/dwa+chandra+villa+2.jpg",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/2068a1f4-b340-458c-ad06-1606841ecd64/IMG_7612.jpeg",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/d548061d-d63c-4b03-b6d1-2388c18648c5/9fd5d9da-a610-4e5d-a9ae-9f36dc2952c2.jpg",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/cf829e40-5b4b-4e06-86f8-4c7ff8b29912/cf7f2564-ccf0-4266-b00b-53d0a3c3dea0.jpg",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/dbaf478c-9e04-4d1d-9f4c-78f9a6fb04a8/IMG_2944.jpeg",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/dc987d70-c1b1-46ac-936c-1831e7bed900/basket+dwa+chandra.jpg",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/3fdc79ec-c57a-458a-a5a5-206b47f08e26/IMG_9458.JPG",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/d53212ec-d5f0-4443-ab30-1ab68ae96b10/DSC00843_Original.JPG",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/902eb0c7-70bf-49c4-95c9-50f5abb79e41/IMG_9204+2.jpeg",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/c2507cff-f701-4ead-a1f2-da2903d42e0a/43e72599-34c1-4997-8fd8-4198456f66a0.jpg",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/5e94dbf0-f0c9-4fc5-9c7e-0b084002afa6/Pohon+Jiwa_02270.jpg",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/2b57a456-7b3b-4a6e-b511-b19e8dbdae02/Pohon+Jiwa_173353.jpg",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/b16d29bb-c75e-4fd7-b3c7-47a003475666/ENG05302_Original.JPG",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/00d53f05-f81c-46d7-ac2e-331b489ad698/65d41b51-39ba-4f88-abd1-7b7deedb4b70+2.jpg",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/78d3eb2d-60e1-43ec-aae6-4c75c80eb160/dbfa9ecf-f077-4f72-a273-1ac614e47751.jpg",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/55f94947-6952-42af-8abe-945221556ad2/ENG03033.jpg",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/65d1ad37-08c7-406f-a48f-2b6e33bbade4/651A217F-11B2-47F0-9C91-978B55A84A3A.jpeg",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/6a80cf4d-341b-4ce1-9dfc-abea9c86751a/icon+food.png",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/bad29dcc-4c5a-407d-a8de-4d6b2a6aab3e/ENG02362.jpg",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/3e3933c6-bc6f-4164-8391-4e8df9bc9ad4/icon+butterfly.png",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/2e94d4d1-7cf3-42ca-b5ca-58d84e5093c1/kelebutan+river+shala+people.jpg",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/6cbef8fb-7697-4b94-939d-4f6fb5687262/background.png",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/c817bbff-4c8d-4987-ba1a-7cc44908a9b9/10.png",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/e8a3fce6-47a5-401a-9d90-3f98b1c966e8/dwa+chandra+villa+2+aerial.jpg",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/fd3c0f39-a938-46ea-b99b-1f64408a3ef6/icon.png",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/71c87f0c-14cb-4c13-b5bd-92a3da817c97/Dwa+Chandra+Spa+Menu.png",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/2b4f2e60-c848-4e91-bae6-d923d79940f8/DC+Transport+Menu.png",
    "https://images.squarespace-cdn.com/content/v1/63c64b7893ba491276a4defc/d7b70eff-992e-427e-83cd-b9b3a31ca15d/people+community+river.jpeg",
  ]),
);

function formatLabel(url) {
  const pathname = new URL(url).pathname;
  const fileName = pathname.split("/").pop() ?? url;
  return decodeURIComponent(fileName).replace(/\+/g, " ");
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

export default function BaliImagesPage() {
  const [copiedUrl, setCopiedUrl] = useState("");
  const terezaCards = useMemo(
    () =>
      terezaImageUrls.map((url) => ({
        url,
        label: formatLabel(url),
      })),
    [],
  );
  const imageCards = useMemo(
    () =>
      baliImageUrls.map((url) => ({
        url,
        label: formatLabel(url),
      })),
    [],
  );

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
    <main className="page bali-images-page">
      <div className="shell">
        <nav className="topbar" aria-label="Primary navigation">
          <a className="brand" href="/bali-october">
            Bali
          </a>
          <span className="topbar__divider" aria-hidden="true" />
        </nav>

        <section className="intro" aria-labelledby="bali-images-title">
          <h1 id="bali-images-title">Bali image collection</h1>
          <p className="intro__copy">
            Temporary image library for Dwa Chandra and Bali retreat asset
            selection.
          </p>
        </section>

        <section
          className="bali-images-page__section"
          aria-labelledby="tereza-images-title"
        >
          <div className="bali-images-page__section-header">
            <p className="section-label">Tereza</p>
            <h2 id="tereza-images-title">Tereza</h2>
          </div>
          <div className="bali-images-page__grid">
            {terezaCards.map((item) => (
              <article key={item.url} className="bali-images-page__card">
                <a
                  className="bali-images-page__image-link"
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={item.url} alt={item.label} loading="lazy" />
                </a>
                <div className="bali-images-page__card-body">
                  <p className="bali-images-page__label">{item.label}</p>
                  <div className="bali-images-page__actions">
                    <button type="button" onClick={() => handleCopy(item.url)}>
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

        <section
          className="bali-images-page__section"
          aria-labelledby="bali-library-title"
        >
          <div className="bali-images-page__section-header">
            <p className="section-label">Library</p>
            <h2 id="bali-library-title">General collection</h2>
          </div>
          <div className="bali-images-page__grid">
            {imageCards.map((item) => (
              <article key={item.url} className="bali-images-page__card">
                <a
                  className="bali-images-page__image-link"
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={item.url} alt={item.label} loading="lazy" />
                </a>
                <div className="bali-images-page__card-body">
                  <p className="bali-images-page__label">{item.label}</p>
                  <div className="bali-images-page__actions">
                    <button type="button" onClick={() => handleCopy(item.url)}>
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
      </div>
    </main>
  );
}
