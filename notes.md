---
layout: page
title: Notes
permalink: /
---

Welcome to my digital garden of evolving hypermedia artifacts 🌱 <a href="/not-so-secret-notes" style="text-decoration: none;">✨</a>

<div class="post-list">
  {% assign sorted_wiki = site.wiki | sort: 'date' | reverse %}
  {% for wiki_page in sorted_wiki %}
    {% if wiki_page.show_on_wiki %}
      <a href="{{ wiki_page.url | relative_url }}" class="post-entry">
        <span class="post-date">{{ wiki_page.date | date: "%Y-%m-%d" }}</span>
        <span class="post-title">{{ wiki_page.title }}</span>
      </a>
    {% endif %}
  {% endfor %}
</div>
