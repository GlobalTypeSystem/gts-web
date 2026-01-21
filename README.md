# gts-web
GTS Website source code

## Development & Publishing (GitHub Pages)

This website is a Vite/React static site deployed to **GitHub Pages**.

### Branching model

- Make changes in a **feature branch** (e.g. `feature/my-change`)
- Open a Pull Request into `main`
- After review, **merge to `main`**
- Every push/merge to `main` triggers the **GitHub Actions Pages deployment** automatically

### Local development

```bash
npm ci
npm run dev
```

### Production build (local verification)

```bash
npm run build
npm run preview
```

### Deployment

Deployment is automated via GitHub Actions:
- On push to main, the workflow builds the site and publishes the dist/ folder to GitHub Pages.
- The custom domain is globaltypesystem.org.


