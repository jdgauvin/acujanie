# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Jekyll-based website for an acupuncture clinic (Acupuncture Janie Couture) in Quebec City. Hosted on GitHub Pages.

## Commands

```bash
# Install dependencies
bundle install

# Run local development server
bundle exec jekyll serve

# Build for production
bundle exec jekyll build
```

## Architecture

### Layouts (`_layouts/`)
- `default.html` - Base HTML structure with head, header, footer. All pages extend this.
- `page.html` - Static pages (extends default)
- `post.html` - Blog articles (extends default)

### Includes (`_includes/`)
- `header.html` - Site navigation
- `footer.html` - Contact info and links

### Content
- `_posts/` - Blog articles in Markdown (format: `YYYY-MM-DD-slug.md`)
- Root HTML files - Static pages (index, contact, etc.)

### Styles (`_sass/`)
- `_variables.scss` - Colors, fonts, breakpoints
- `_base.scss` - Reset and typography
- `_layout.scss` - Grid and containers
- `_header.scss` / `_footer.scss` - Navigation components
- `_components.scss` - Buttons, cards, forms
- `_pages.scss` - Page-specific styles

Entry point: `assets/css/main.scss`

### Configuration (`_config.yml`)
- Site metadata and SEO settings
- Contact info (phone, email, address, hours)
- Booking URL for online reservations
- Permalink structure: `/articles/:title/` (date-less URLs)

## Key Plugins
- `jekyll-sitemap` - Auto-generates sitemap.xml
- `jekyll-seo-tag` - SEO meta tags via `{% seo %}`
- `jekyll-redirect-from` - 301 redirects for old URLs

## Notes
- Language: French Canadian (fr-CA)
- Uses `@import` for SCSS (not `@use`) for GitHub Pages compatibility
