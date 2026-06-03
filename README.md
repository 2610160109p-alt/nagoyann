# nagoyann landing page

Next.js App Router, TypeScript, Tailwind CSSで構成したnagoyannのランディングページです。

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Production build

```bash
npm run build
```

On Windows PowerShell, use `npm.cmd run build` if script execution is blocked.

## Deployment

Vercelに接続したリポジトリへpushすると再デプロイできます。

- Framework Preset: Next.js
- Build Command: `npm run build`
- Output Directory: Next.js default

Production secrets are managed in the Vercel project settings. Do not commit `.env.local`.
