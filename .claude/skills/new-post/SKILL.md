---
name: new-post
description: Create a new wiki/blog post with proper frontmatter, images, and content. Use when the user wants to write a new post or add content to the site.
argument-hint: [title]
---

# Create a New Post

Create a new post titled "$ARGUMENTS" in the `_wiki/` directory.

## Steps

1. **Generate a slug** from the title (lowercase, hyphens instead of spaces, strip special characters)
2. **Create the file** at `_wiki/<slug>.md`
3. **Use this frontmatter format:**

```yaml
---
layout: post
title: "<title>"
date: <today YYYY-MM-DD>
last_updated: <today YYYY-MM-DD>
author:
- Blake Edwards
tags: [<relevant tags>]
permalink: /wiki/<slug>
show_on_wiki: true
show_on_secret_wiki: false
---
```

4. **Ask the user** what the post should be about if not obvious from the title
5. **Write the content** — keep it concise and direct. Use markdown sections (`##`) to organize
6. **If the user provides a URL**, fetch it and use the content to inform the post
7. **If there are images**, save them to `assets/images/<slug>/` and embed with markdown image syntax

## Style Guidelines

- Write in first person from Blake's perspective
- Keep it concise — say what needs to be said, no filler
- Use `##` for sections
- Only use h2 (`##`) and below for content headers — never use h1 (`#`), since the post title is already rendered as h1
- End with a `## References` section linking to sources when applicable

## Visibility

- `show_on_wiki: true` / `show_on_secret_wiki: false` — public post (default)
- `show_on_wiki: false` / `show_on_secret_wiki: true` — secret/private post
- Ask the user if unclear

## Example

Recent posts for reference style:
!`head -20 _wiki/open-co-pilot.md`
