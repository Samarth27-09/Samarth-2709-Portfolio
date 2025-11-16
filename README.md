diff --git a/README.md b/README.md
index f6b3f5f8e9f8d871b9b54d5522f31c4d26748e00..3f601536074e8f47e2b035f3928e5b960535de06 100644
--- a/README.md
+++ b/README.md
@@ -1 +1,54 @@
-ECHO is off.
+# Samarth Saxena Portfolio
+
+A Notion-inspired, terminal-flavored portfolio for Samarth Saxena showcasing data, product, and analytics projects. Built with plain HTML, CSS, and JavaScript plus a custom typewriter hero, responsive layout, and light/dark themes.
+
+## Features
+- Semantic, accessible markup with responsive sections for About, Projects, Skills, and Contact
+- Hero with looping typed statements and theme toggle persisted in `localStorage`
+- Mobile-ready navigation with hamburger control and smooth scrolling
+- Contact form styling ready for integration with any form backend
+- GitHub Pages workflow for automatic deployment from the `main` branch
+
+## Getting Started
+1. Clone the repository
+   ```bash
+   git clone https://github.com/<your-username>/Samarth-2709-Portfolio.git
+   cd Samarth-2709-Portfolio
+   ```
+2. Open `index.html` in any modern browser or use a simple HTTP server:
+   ```bash
+   python -m http.server
+   ```
+
+## Project Structure
+```
+├── assets/
+│   ├── icons/
+│   └── images/
+├── scripts/
+│   ├── cipher.js
+│   ├── nav.js
+│   └── script.js
+├── styles/
+│   └── styles.css
+├── index.html
+└── .github/workflows/deploy.yml
+```
+
+## Deployment (GitHub Pages)
+The included GitHub Actions workflow automatically publishes the site to GitHub Pages whenever you push to `main`.
+
+1. Push your repository to GitHub.
+2. In the repo settings, open **Pages** and set the source to **GitHub Actions**.
+3. Every push to `main` triggers the `Deploy static site to GitHub Pages` workflow.
+4. Once the workflow succeeds, the public URL (e.g., `https://<your-username>.github.io/Samarth-2709-Portfolio/`) is provided in the Actions run summary.
+
+You can also trigger deployments manually via **Actions → Deploy static site to GitHub Pages → Run workflow** if you need to redeploy without new commits.
+
+## Customization
+- Update text and project details directly in `index.html`.
+- Replace placeholder images in `assets/images/` and icons in `assets/icons/`.
+- Adjust the color palette or theme transitions in `styles/styles.css`.
+
+## License
+This project is provided as-is for portfolio purposes. Feel free to adapt it for your own use.
