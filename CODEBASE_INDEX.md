# Blake's Notes - Codebase Index

## Project Overview

**Project Type:** Personal Digital Garden / Academic Blog Website  
**Primary URL:** https://blakesnotes.io (or https://blakete.github.io)  
**Owner:** Blake Edwards  
**License:** MIT License (2024)  
**Current Status:** Active  

### Purpose
This is a personal knowledge management and blogging website built with Jekyll. It serves as a central hub for Blake Edwards' research work, thoughts, ideas, and evolving knowledge archive. The site functions as a "digital garden" for organizing notes, academic publications, research ideas, and personal reflections.

### Key Features
- Personal blogging platform with posts and wiki
- Academic publication tracking and bibliography management
- Private/secret notes section with access control (local staging)
- Multi-view system for organizing content (drafts, ideas, reading notes, definitions)
- Audio content integration (motivational speeches, quotes)
- Tags and categorization system
- Hidden content support (draft posts, private wiki pages)
- Last updated timestamps for content tracking

---

## Technology Stack

### Framework & Build Tools
- **Static Site Generator:** Jekyll 4.3
- **Ruby Version:** Ruby with Bundler package management
- **Theme:** Minima (dark skin variant)
- **Markdown Processor:** Kramdown with MathJax math engine
- **Deployment:** GitHub Pages via GitHub Actions

### Jekyll Plugins
1. **jekyll-feed** - RSS feed generation
2. **jekyll-seo-tag** - SEO metadata and sitemap generation
3. **jekyll-sitemap** - XML sitemap creation
4. **jekyll-scholar** - Bibliography/citation management with BibTeX

### Custom Plugins
- **ignore_symlinks.rb** - Custom Jekyll hook to handle symlinks in private_local collection
  - Prevents symlinks from generating duplicate output
  - Extracts view categories from symlink paths
  - Marks symlinks with metadata

### Frontend & Styling
- **CSS:** Custom SCSS and CSS modules
- **CSS Framework/Features:**
  - Dark theme (Minima dark skin)
  - Custom heading styles
  - Citations styling
  - Responsive design
- **CSS Files:**
  - style.scss (106 lines)
  - custom-heading-styles.css (63 lines)
  - citations.css (32 lines)

### Additional Technologies
- **Analytics:** Google Analytics (ID: G-JJKZZMF533)
- **Schema Markup:** Schema.org microdata (BlogPosting, Person, etc.)
- **h-entry/h-card:** Microformats for semantic web
- **Math Rendering:** MathJax for mathematical expressions
- **Audio:** HTML5 audio element for embedded audio files

---

## Directory Structure

### Root Level Configuration Files

```
/
├── _config.yml                    # Main Jekyll configuration
├── _config_local.yml              # Local override configuration (private content)
├── Gemfile                        # Ruby dependencies specification
├── Gemfile.lock                   # Locked dependency versions
├── .gitignore                     # Git ignore patterns
├── .markdownlint.json             # Markdown linting rules
├── CNAME                          # Custom domain (blakesnotes.io)
├── LICENSE                        # MIT License
├── 404.html                       # 404 error page
└── start.sh                       # Startup script for local dev
```

### Jekyll System Directories

#### _includes/ (12 files)
Reusable template components:
- **custom-head.html** - Custom head meta tags
- **head.html** - Main header element
- **header.html** - Site navigation header
- **footer.html** - Site footer
- **google-analytics.html** - Google Analytics integration
- **disqus_comments.html** - Disqus comment system (configured but not active)
- **social.html** / **social-item.html** - Social media links
- **svg_symbol.html** - SVG icon handling
- **social-icons/** (24 SVG files) - Icon library for various platforms
  - GitHub, LinkedIn, Google Scholar, Twitter, etc.

#### _layouts/ (9 files)
Page template layouts:
- **base.html** - Root layout wrapper
- **page.html** - Standard page layout (for static pages)
- **post.html** - Blog post layout with metadata and date handling
- **blog.html** - Blog listing layout
- **home.html** - Homepage layout
- **wiki_page.html** - Wiki page layout with URL redirection logic
- **private_base.html** - Base layout for private content
- **private_index.html** - Private content listing
- **private_page.html** - Private page layout

#### _sass/ (1 directory)
- **minima/** - Minima theme SCSS customizations

#### _plugins/ (1 file)
- **ignore_symlinks.rb** - Custom hook for handling symbolic links in private collections

#### _bibliography/ (1 file)
- **references.bib** - BibTeX bibliography file with academic citations
  - Used for jekyll-scholar plugin
  - APA style citation formatting

### Content Directories

#### _posts/ (4 blog posts + assets)
Location: `/Users/blake/repos/blakete.github.io/_posts/`

Blog posts written by Blake:
- 2025-01-22-Russo-Ukrainian-War.md
- 2025-01-28-DeepSeek-R1-Zero.md
- 2025-02-19-Quantum-Computing.md
- 2025-03-01-Needle-in-a-Haystack:-What-it-Does-and-Does-Not-Imply.md
- **assets/** - Images and media for posts
- **create_post.sh** - Script to generate new post template

#### _wiki/ (23+ wiki pages)
Location: `/Users/blake/repos/blakete.github.io/_wiki/`

Knowledge base entries on various topics:
- **Research Topics:**
  - conformal_vs_pac_methods.md
  - control_as_inference.md
  - frequentist_vs_bayesian_smc.md
  - P2P_offline_mesh_chat.md
  - nn-discovering-computational-reductions.md
  - irreducible_uncertainty.md

- **Concepts & Definitions:**
  - fundamental-ai-concepts.md
  - my_philosophy.md
  - curious_research_questions.md
  - favorite_quotes.md
  - meditations.md

- **Technical Topics:**
  - min_free_potential_energy.md
  - boltzmann_gibbs_distribution.md
  - How_to_Frame_Your_Relationship_with_LLMs_and_VLMs.md

- **Utilities:**
  - create_wiki_page.sh - Script for new wiki pages
  - create_dictionary_page.sh - Script for definition entries

- **Subdirectories:**
  - **mit_research_stuff/** - MIT-specific research materials

#### posts/ (8 markdown files)
Location: `/Users/blake/repos/blakete.github.io/posts/`

Simplified post content:
- 2024-09-16-bloom's-taxonomy.md
- 2024-09-17-fundamentals.md
- 2024-09-17-reasoning.md
- risk.md
- risk-criteria.md
- risk-based-systems-certification.md
- important-questions.md
- towards-safety-critical-perception-based-control-systems.md
- **assets/** - Post-related media

#### pages/ (5 pages)
Location: `/Users/blake/repos/blakete.github.io/pages/`

Quick reference pages:
- chain_rule.md
- product_rule.md
- integration_by_parts.md
- laplace_transform.md
- **research_index/** - Research categorization index

#### _private_local/ (40+ files)
Location: `/Users/blake/repos/blakete.github.io/_private_local/`

Private/staging content:
- Notes on courses (16_32_final_exam_prep.md, 16_32_final_project.md)
- Research notes (active_inference.md, freq_vs_bayes.md, etc.)
- Corporate/work notes (Boeing_Annual_Review_Prez.md, etc.)
- Derivations and technical notes (CKF_derivation.md, etc.)
- **assets/** - Media for private content
- **.git/** - Separate git repo for private content

### Assets Directory

#### assets/css/ (3 files - 201 lines total)
Styling:
- **style.scss** (106 lines) - Main stylesheet
- **custom-heading-styles.css** (63 lines) - Custom heading styling
- **citations.css** (32 lines) - Bibliography/citation styling

#### assets/images/
Organized image assets by topic:
- **How_to_Frame_Your_Relationship_with_LLMs_and_VLMs/** - Article images
- **P2P_offline_mesh_chat/** - Project photos and diagrams
- **posts/** - Blog post illustrations
  - Russo-Ukranian_War/
  - Needle-in-a-Haystack/
- **control-theory/** - Control theory diagrams
- **plasma_channels/** - Lightning and plasma research images
- **blooms_taxonomy.png** - Bloom's taxonomy visualization
- **fundamentals_viz.webp** - Fundamentals visualization
- **work_history_gantt.png** - Career timeline visualization

#### assets/audio/ (5 audio files)
Embedded audio content:
- khabib-discipline.mp3 - Motivational speech
- The Strangest Secret by Earl Nightingale.mp3 - Famous motivational audio
- Trust The Universe - Alan Watts On Finding Zen.mp3
- Why Spiritually Awake People Are Quietly Disappearing from Society - Alan Watts.mp3
- The Danger of Seeing What Others Dont - Alan Watts.mp3

#### assets/js/
JavaScript assets (minimal)

#### assets/social-icons/ (24 SVG icons)
Social media icons for links

### Top-Level Content Pages

```
Root level markdown pages:

├── notes.md                       # Homepage - wiki collection display
├── posts.md                       # Blog posts listing page
├── publications.md                # Academic publications & citations
├── about.md                       # About Blake Edwards page
├── contact.md                     # Contact information
├── curriculum_vitae.md            # CV/resume
└── wiki.md                        # Wiki collection page
```

### View Pages (Content Navigation)

Specialized view/filter pages for organizing content:
- **views.md** - Master views page
- **views_wiki.md** - Wiki entries view
- **views_drafts.md** - Draft content view
- **views_ideas.md** - Ideas collection
- **views_reading_notes.md** - Reading notes view
- **views_definitions.md** - Definition entries view
- **private_local.md** - Private notes documentation

### Utility Scripts

- **start.sh** - Starts Jekyll server with private_local config and opens to secret-notes
- **update_posts.sh** - Updates post front matter with last_updated field
- **_wiki/create_wiki_page.sh** - Creates new wiki page template
- **_wiki/create_dictionary_page.sh** - Creates new definition page template
- **_posts/create_post.sh** - Creates new blog post template

### GitHub Configuration

#### .github/workflows/
- **jekyll-gh-pages.yml** - Automated deployment workflow
  - Triggers on push to master branch
  - Builds site with Jekyll
  - Deploys to GitHub Pages
  - Uses ubuntu-latest runner

#### .github/ (also contains)
- Configuration and automation files

### Build & Development Files

- **.jekyll-cache/** - Jekyll build cache
- **vendor/** - Bundled Ruby gems directory
- **.bundle/** - Bundler configuration
- **_site/** - Generated static site (output directory)

### Special Directories

- **.claude/** - Claude Code configuration
- **.archive/** - Archive of old content
- **.git/** - Version control history

---

## Configuration Details

### Jekyll Configuration (_config.yml)

**Key Settings:**
- **Title:** Blake's Notes
- **Author:** Blake Edwards (blakete@mit.edu)
- **Timezone:** America/New_York
- **Theme:** minima (dark skin)
- **Markdown:** kramdown with MathJax for math rendering

**Collections:**
- **wiki** - Knowledge base articles with output enabled
  - Permalink pattern: `/:collection/:title/`

**Plugins:**
- jekyll-feed
- jekyll-seo-tag
- jekyll-sitemap
- jekyll-scholar (for citations)

**Scholar Configuration:**
- Style: APA
- Source: ./_bibliography/
- Bibliography file: references.bib

**Navigation:**
Header pages: notes.md, publications.md, about.md, contact.md

**Social Links:**
- GitHub: blakete
- LinkedIn: blakete
- Google Scholar: xiM0_6sAAAAJ

**Analytics:**
- Google Analytics ID: G-JJKZZMF533

### Local Configuration (_config_local.yml)

Used for local development with private content:
```yaml
include:
  - private_local

collections:
  private_local:
    output: true
    permalink: /secret-notes/:path/
```

Enables private_local collection at `/secret-notes/` URL path when using both config files.

### Ruby Dependencies (Gemfile)

```
jekyll ~> 4.3
jekyll-feed
jekyll-seo-tag
jekyll-sitemap
minima
jekyll-scholar
```

---

## Content Organization & Features

### Frontmatter Standards

**Standard Post Frontmatter:**
```yaml
---
layout: post
title: "Article Title"
author: [Author Name]
tags: [tag1, tag2]
date: YYYY-MM-DD
last_updated: YYYY-MM-DD
hidden_from_posts: false
---
```

**Wiki Page Frontmatter:**
```yaml
---
layout: post
title: "Page Title"
date: YYYY-MM-DD
last_updated: YYYY-MM-DD
author: [Author Name]
tags: [tag1, tag2]
permalink: /wiki/title-slug
show_on_wiki: true
show_on_secret_wiki: true
---
```

### Special Features

1. **Visibility Control:**
   - `hidden_from_posts: true` - Hides blog post from listings
   - `show_on_wiki: true/false` - Controls main wiki visibility
   - `show_on_secret_wiki: true/false` - Controls secret wiki visibility
   - Content still accessible via direct URL

2. **Last Updated Tracking:**
   - Separate `last_updated` field from publication `date`
   - Layouts display "Last Update" only if different from publication date
   - Enables showing content freshness/relevance

3. **URL Redirection:**
   - Wiki page layout includes JS redirect logic
   - Automatically redirects based on `show_on_wiki` and `show_on_secret_wiki` status
   - Maintains consistent URL structure

4. **Tags & Categorization:**
   - Posts and wiki pages support tags
   - Tags displayed in listings
   - Enables content discovery

5. **Audio Integration:**
   - HTML5 audio elements for embedded audio files
   - Used for motivational speeches and quotes

### Content Counts

- **Blog Posts (_posts/):** 4 posts
- **Wiki Pages (_wiki/):** 23 pages
- **Simplified Posts (posts/):** 8 pages
- **Pages (pages/):** 5 pages
- **Private Local Content (_private_local/):** 40+ files
- **Total Markdown/HTML Files:** 897

---

## Build & Deployment

### Local Development

**Setup:**
```bash
# Install dependencies
bundle install

# Build and serve (basic)
bundle exec jekyll serve

# Build and serve with private content
bundle exec jekyll serve --livereload --force_polling --config _config.yml,_config_local.yml

# Quick start script
./start.sh
```

**Features:**
- Live reload support with `--livereload`
- Force polling for file system watching with `--force_polling`
- Configurable on :4000 (localhost)
- Can be served to LAN with `--host 0.0.0.0`

### Automated Deployment

**GitHub Actions Workflow:**
- Trigger: Push to master branch
- Action: Build with Jekyll using GitHub Pages dependencies
- Output: Deploy to GitHub Pages
- URL: https://blakete.github.io (or custom domain via CNAME)

**Custom Domain:**
- CNAME file: blakesnotes.io
- Primary URL: https://blakesnotes.io

---

## Key Files & Entry Points

### Homepage & Main Navigation
- **notes.md** - Homepage (root `/`) displaying wiki collection
- **posts.md** - Blog posts listing page
- **publications.md** - Academic publications and bibliography

### Navigation Structure
- **Header Navigation:** Configured in _config.yml (notes, publications, about, contact)
- **Includes:** Modular template components in _includes/
- **Social Icons:** Footer with GitHub, LinkedIn, Google Scholar links

### Template Hierarchy
1. **base.html** - Root template (includes header, footer, social icons)
2. **page.html / post.html / wiki_page.html** - Content-specific templates
3. **Includes** - Modular components (head, header, footer, etc.)

### View System
- Master **views.md** page
- Specialized view pages for filtering content:
  - views_wiki.md
  - views_drafts.md
  - views_ideas.md
  - views_reading_notes.md
  - views_definitions.md

---

## Styling & Appearance

### Theme
- **Base Theme:** Minima (Jekyll default theme)
- **Skin:** Dark mode variant
- **Custom CSS:** Overrides and extensions for custom styling

### Custom Styles

**custom-heading-styles.css:**
- Custom styling for headings (h1, h2, h3, etc.)
- Enhanced typography for visual hierarchy

**style.scss:**
- Main stylesheet (106 lines)
- Dark theme implementation
- Layout and spacing
- Component styling

**citations.css:**
- Bibliography list styling
- Citation formatting
- Academic reference presentation

### Blockquote Styling
- **Custom class:** `.otro-blockquote` - Featured quote styling with author attribution
- Used in about.md for key quotes

### Responsive Design
- Mobile-first approach via Minima theme
- Adapts to various screen sizes
- Optimized for reading

---

## Documentation & References

### README
- Contains setup instructions
- Development commands
- Content management guidelines
- Hidden content feature documentation

### Special Notes Files
- **not_so_secret_notes.md** - Semi-public notes
- **notes.md** - Main notes/homepage
- **private_local.md** - Documentation for private content setup

### Comments & Information
- Inline comments in templates explaining functionality
- Inspirations credited in README (siboehm.com, dilithjay.com)

---

## Developer Information

### Author
- **Name:** Blake Edwards
- **Email:** blakete@mit.edu
- **GitHub:** blakete
- **LinkedIn:** blakete
- **Affiliation:** MIT AeroAstro (Graduate Student)
- **Research Focus:** Intelligent autonomous robotic systems, trustworthiness

### Research Interests
- AI and autonomous robotics
- Cybersecurity and OSINT
- Control theory
- Formal verification
- Active inference and Bayesian methods
- Plasma physics and control systems

### Copyright & License
- Copyright 2024 Blake Edwards
- MIT License
- Allows use, modification, and distribution with attribution

---

## Special Features & Advanced Capabilities

### Plugin: ignore_symlinks.rb
- Custom Jekyll hook for post_read lifecycle
- Handles symbolic links in private_local collection
- Prevents duplicate output generation
- Extracts and sets view_category metadata from symlink paths
- Marks documents with is_symlink flag for conditional processing

### Private Content System
- Dual config system (_config.yml + _config_local.yml)
- Separate collection for private content
- Custom URL prefix (/secret-notes/)
- Symlink support for organizing private content
- Allows content to remain unpublished until ready

### Bibliography Management
- jekyll-scholar integration
- BibTeX format support (.bib files)
- APA citation style
- Bibliography generation from references.bib
- Automatic citation formatting

### Metadata Features
- Created/updated date tracking
- Tag-based categorization
- Author attribution
- Schema.org microdata for SEO
- h-entry/h-card microformats
- Hidden content control per entry

---

## Current Development Status

**Latest Activity:**
- Master branch: Up to date
- Recent commits focused on styling (blockquote colors) and content updates (meditations post)
- Active content creation in wiki and blog sections
- Ongoing refinement of private local staging system

**Tools & Infrastructure:**
- GitHub for version control and deployment
- GitHub Pages for hosting
- Google Analytics for traffic tracking
- Minima theme for consistent styling
- Jekyll for static generation

---

## Access Points

### Public URLs
- Homepage: https://blakesnotes.io/
- Blog Posts: https://blakesnotes.io/posts/
- Wiki: https://blakesnotes.io/wiki/
- Publications: https://blakesnotes.io/publications/
- About: https://blakesnotes.io/about/
- Contact: https://blakesnotes.io/contact/

### Local Development
- Default: http://127.0.0.1:4000/
- Private Content: http://127.0.0.1:4000/secret-notes/

---

## Summary

This is a well-organized, feature-rich Jekyll-based personal knowledge management and blogging platform. The architecture supports multiple content types (blog posts, wiki pages, publications), private staging areas, flexible content organization through tags and views, and automated deployment via GitHub Pages. The site represents Blake Edwards' research interests, academic work, personal philosophy, and evolving knowledge base. The codebase demonstrates thoughtful attention to content management, privacy controls, and semantic web standards.

