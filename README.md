# De Inloop website

This repository contains the public website for the Social Walk-In Center **De Inloop** in Sint-Niklaas.

It is a lightweight static website. There is no build system, package manager, backend, or database: the browser loads `index.html`, `script.js`, the images in `assets/`, and Tailwind CSS from a CDN.

## Project structure

```text
.
├── index.html                 # Page content, layout, and styles
├── script.js                  # Theme detection and language switching
├── assets/
│   ├── logo.jpg
│   ├── flyer_en.jpg
│   └── flyer_nl.jpg
├── CNAME                      # Custom GitHub Pages domain
└── README.md                  # This guide
```

## Run the site locally

Because this is a static site, it can be opened directly by double-clicking `index.html`. A local web server is preferable because it behaves more like the deployed site:

```powershell
python -m http.server 8000
```

Then open <http://localhost:8000> in a browser. Stop the server with `Ctrl+C`.

There are no dependencies to install and no build command to run.

## How to modify the website

### Edit text and page sections

Most website content is in `index.html`. Update the headings, paragraphs, list items, contact details, and footer directly in that file. Keep the existing semantic structure (`header`, `main`, `section`, and `footer`) when adding content.

When adding a new section, copy the existing section pattern and give it a clear heading:

```html
<section class="mb-8">
    <h4 class="text-xl title-color mb-4">New section</h4>
    <p>Section content goes here.</p>
</section>
```

### Add or update translations

The language switcher is driven by `changeLanguage()` in `script.js`. An element is translated only when it has `data-lang`, `data-en`, and `data-nl` attributes:

```html
<h4
    data-lang
    data-en="Our Mission"
    data-nl="Onze missie"
>
    Our Mission
</h4>
```

Add these attributes to every piece of text that should change between English and Dutch. Use them on leaf elements such as headings, paragraphs, and buttons. The script uses `textContent`, so placing `data-lang` on an element containing nested HTML will replace its children.

If an image has different English and Dutch versions, update the image source when changing languages or add a small language-aware image handler in `script.js`. The existing `flyer_en.jpg` and `flyer_nl.jpg` files are available for this purpose, but the current script does not switch the flyer automatically.

### Change images

Place replacement images in `assets/` and update the corresponding `src` in `index.html`:

```html
<img src="assets/new-image.jpg" alt="A useful description of the image">
```

Always write meaningful `alt` text. Keep filenames lowercase, use simple names without spaces, and compress large images before committing them so the page remains fast.

### Change colors and layout

The page uses Tailwind CSS utility classes loaded from jsDelivr. Most layout changes can be made by editing the classes in `index.html`, for example `p-8`, `mb-8`, `text-center`, or `max-w-full`.

The custom orange text color is defined in the `<style>` block as `.title-color`. Update that rule if the brand color changes. For larger styling changes, consider moving the custom CSS into a dedicated stylesheet and referencing it from `index.html`.

### Update contact and legal information

Contact details, bank information, privacy links, and terms links are currently hard-coded in `index.html`. Check these carefully whenever organizational details change. Replace the placeholder `href="#"` legal links with real pages before presenting them as active links.

## Maintain and publish changes

1. Make the change in `index.html`, `script.js`, or `assets/`.
2. Run the local server and inspect the page at common desktop and mobile widths.
3. Test both `EN` and `NL` buttons, dark mode, images, links, and contact details.
4. Review the Git diff:

   ```powershell
   git diff
   git status
   ```

5. Commit and push the change to the branch used for deployment:

   ```powershell
   git add index.html script.js assets README.md
   git commit -m "Describe the website update"
   git push origin main
   ```

The `CNAME` file points GitHub Pages at `www.deinloop.eu`. Do not remove or rename it unless the domain configuration is being changed deliberately. If the hosting setup changes, update the repository deployment settings and DNS records as well as this file.

## Maintenance checklist

- Verify English and Dutch copy whenever content changes.
- Keep the bank account and email address current.
- Check that every image path works and every image has useful `alt` text.
- Check the page on a phone-sized viewport and in dark mode.
- Confirm that external CDN resources still load.
- Keep the custom domain file (`CNAME`) intact.
- Review links periodically; replace placeholder legal links.
- Avoid putting private or sensitive information in this public repository.

## Troubleshooting

**The page looks unstyled:** check that the browser has network access to the Tailwind CSS CDN and that the `<link>` in `index.html` is present.

**The language button does nothing:** confirm that the target element has the requested `data-en` or `data-nl` attribute. Also check the browser console for JavaScript errors.

**An image is missing:** verify the filename and capitalization in `index.html` exactly match the file under `assets/`.

**The custom domain is not working:** confirm that `CNAME` contains exactly `www.deinloop.eu`, GitHub Pages is enabled for the intended branch, and DNS points to GitHub Pages.

