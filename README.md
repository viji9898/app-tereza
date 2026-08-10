# App Tereza

A React/Vite site for Travel Feather with a full-viewport hero video and a playlist page.

## Development

Install dependencies:

```sh
npm install
```

Run locally:

```sh
npm run dev
```

Build for production:

```sh
npm run build
```

Deploy to Cloudflare Workers:

```sh
npm run deploy
```

GitHub Actions deploys on push to `main` via `.github/workflows/cloudflare-deploy.yml`.
The repository must define this GitHub Actions secret:

- `CLOUDFLARE_API_TOKEN`

Routes:

- `/` - hero video landing page
- `/content/` - video playlist
- `/sri-lanka` - mobile-first editorial retreat page
- `/bali-september-7-days` - seven-day Bali retreat page
- `/retreats-directory` - read-only administrative retreat directory

## Page Notes

- `KURULU_BAY_PAGE.md` - implementation notes and editing guidance for the Kurulu Bay page
