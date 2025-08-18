
# Static Website Starter

A simple, fast static site you can deploy **for free**.

## 1) Edit locally
- Open this folder in VS Code.
- Change text in `index.html` (name, bio, projects).
- Tweak styles in `styles.css`.
- Replace the Formspree endpoint in the contact form (`index.html`). Create one at https://formspree.io/ or use Netlify Forms.

## 2) Choose free hosting

### Option A — GitHub Pages (free)
1. Create a new public repo and push this folder.
2. In GitHub, go to **Settings → Pages** and set:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` / `/ (root)`
3. Your site will appear at `https://<username>.github.io/<repo>/`.
4. **Custom domain**: point your domain’s DNS `A` or `CNAME` to GitHub Pages (see GitHub docs) and add a `CNAME` file with your domain to the repo root.

### Option B — Netlify (free)
1. Create a Netlify account.
2. Click **Add new site → Import an existing project**, connect your GitHub repo.
3. Build settings: none needed for a plain static site. Publish dir: `/`.
4. **Custom domain**: Add your domain in Netlify → Domain settings and follow DNS instructions.
5. **Forms**: Rename the form as desired and add `netlify` attribute to the `<form>` tag to enable Netlify Forms.

### Option C — Cloudflare Pages (free)
1. Create a Pages project and connect your GitHub repo.
2. Set build output directory to `/` (no build).
3. Add your custom domain in **Pages → Custom domains** and follow DNS steps.
4. Benefits: free CDN, SSL, caching.

## 3) Point your domain
At your domain registrar, set DNS records to your host:
- **GitHub Pages**: create a `CNAME` to `<username>.github.io` (or `A` records to GitHub’s IPs).
- **Netlify**: add the `CNAME` record they give you (or use Netlify DNS).
- **Cloudflare Pages**: add the `CNAME` they provide or move DNS to Cloudflare.

DNS changes can take up to a few hours to propagate.

## 4) HTTPS
All three hosts give **free SSL** automatically. Ensure “Enforce HTTPS” is enabled (GitHub Pages setting or host default).

## 5) Contact forms (static-friendly)
- **Formspree**: replace `https://formspree.io/f/your-form-id` in `index.html` with your endpoint.
- **Netlify Forms**: add `netlify` attribute: `<form name="contact" netlify>` and include a hidden input: `<input type="hidden" name="form-name" value="contact">`.

## 6) Tips
- Compress images; keep them under ~300–500 KB.
- Use semantic HTML for accessibility.
- Add a favicon (`assets/favicon.ico`) by linking it in `<head>`.

---

Happy shipping!
