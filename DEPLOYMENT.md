# GitHub Pages Deployment Guide

This guide explains how to deploy the ABRO Cycles website to GitHub Pages.

## Prerequisites

- GitHub repository
- Node.js 18+ installed
- Git configured

## Deployment Methods

### Method 1: Automatic Deployment (Recommended)

1. **Enable GitHub Pages in Repository Settings:**
   - Go to your repository on GitHub
   - Navigate to Settings > Pages
   - Under "Source", select "GitHub Actions"

2. **Push to main branch:**
   ```bash
   git add .
   git commit -m "Configure for GitHub Pages deployment"
   git push origin main
   ```

3. **The GitHub Action will automatically:**
   - Build the Next.js application
   - Deploy to GitHub Pages
   - Update the gh-pages branch

### Method 2: Manual Deployment

1. **Build the application:**
   ```bash
   npm run build
   ```

2. **The build output will be in the `out/` directory**

3. **Deploy to gh-pages branch:**
   ```bash
   # Switch to gh-pages branch
   git checkout gh-pages
   
   # Remove all files except .git
   rm -rf *
   
   # Copy build files
   cp -r out/* .
   
   # Add .nojekyll file (important for GitHub Pages)
   touch .nojekyll
   
   # Commit and push
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin gh-pages
   ```

## Configuration

### Next.js Configuration

The `next.config.js` is configured for static export:

```javascript
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};
```

### GitHub Actions Workflow

The `.github/workflows/deploy.yml` file handles automatic deployment:

- Triggers on push to main branch
- Builds the application
- Deploys to GitHub Pages using the gh-pages branch

## Custom Domain (Optional)

If you want to use a custom domain:

1. Add a `CNAME` file to the `public/` directory with your domain
2. Update the GitHub Actions workflow to include the domain
3. Configure DNS settings in your domain provider

## Troubleshooting

### Common Issues:

1. **404 Errors:** Make sure `trailingSlash: true` is set in next.config.js
2. **Images not loading:** Ensure `images: { unoptimized: true }` is configured
3. **Build fails:** Check that all dependencies are installed with `npm ci`

### Build Commands:

```bash
# Install dependencies
npm ci

# Build for production
npm run build

# Check build output
ls -la out/
```

## Repository Settings

Make sure your GitHub repository has:

1. **Pages enabled** in Settings > Pages
2. **Source set to "GitHub Actions"** or "Deploy from a branch" (gh-pages)
3. **Actions enabled** in Settings > Actions

## URL Structure

After deployment, your site will be available at:
- `https://yourusername.github.io/abro-cycle/` (if repository name is abro-cycle)
- `https://yourusername.github.io/` (if repository name matches your username)

## Support

For issues with deployment, check:
1. GitHub Actions logs in the "Actions" tab
2. Repository settings for Pages configuration
3. Build output in the `out/` directory
