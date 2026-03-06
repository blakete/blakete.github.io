---
layout: page
title: Notes
permalink: /
---

Welcome to my digital garden of evolving hypermedia artifacts 🌱 <a href="/not-so-secret-notes" style="text-decoration: none;">✨</a>

{% assign sorted_wiki = site.wiki | sort: 'date' | reverse %}

<div class="post-list">
  {% for wiki_page in sorted_wiki %}
    {% if wiki_page.show_on_wiki and wiki_page.pinned %}
      <div class="post-entry-wrapper">
        <span class="pinned-label">📌 Pinned</span>
        <a href="{{ wiki_page.url | relative_url }}" class="post-entry">
          <span class="post-date">{{ wiki_page.date | date: "%Y-%m-%d" }}</span>
          <span class="post-title">{{ wiki_page.title }}</span>
        </a>
      </div>
    {% endif %}
  {% endfor %}
  {% for wiki_page in sorted_wiki %}
    {% if wiki_page.show_on_wiki and wiki_page.pinned != true %}
      <a href="{{ wiki_page.url | relative_url }}" class="post-entry">
        <span class="post-date">{{ wiki_page.date | date: "%Y-%m-%d" }}</span>
        <span class="post-title">{{ wiki_page.title }}</span>
      </a>
    {% endif %}
  {% endfor %}
</div>
