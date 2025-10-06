---
layout: page
title: Notes
permalink: /
---

<div class="wiki-intro">
  <p>Welcome to my evolving digital garden of hypermedia artifacts: notes, ideas, and artwork 🌱 <a href="/not-so-secret-notes" style="text-decoration: none;">✨</a></p>
</div>

<div class="wiki-cards">
  {% assign sorted_wiki = site.wiki | sort: 'date' | reverse %}
  {% assign visible_count = 0 %}

  {% for wiki_page in sorted_wiki %}
    {% unless wiki_page.hidden_from_wiki %}
      {% assign visible_count = visible_count | plus: 1 %}
      
      <article class="wiki-card" onclick="window.location='{{ wiki_page.url | relative_url }}';">
        <div class="wiki-card-content">
          <div class="wiki-card-header">
            {% if wiki_page.icon %}
              <span class="wiki-card-icon">{{ wiki_page.icon }}</span>
            {% endif %}
            <span class="wiki-card-label">Digital Garden</span>
            <span class="wiki-card-date">{{ wiki_page.date | date: "%b %-d" | upcase }}</span>
          </div>
          
          <h2 class="wiki-card-title">
            <a href="{{ wiki_page.url | relative_url }}">{{ wiki_page.title }}</a>
          </h2>
          
          {% if wiki_page.description %}
            <p class="wiki-card-description">{{ wiki_page.description }}</p>
          {% elsif wiki_page.excerpt %}
            <p class="wiki-card-description">{{ wiki_page.excerpt | strip_html | truncatewords: 25 }}</p>
          {% endif %}
          
          <div class="wiki-card-meta">
            <span>{{ wiki_page.date | date: "%B %-d, %Y" }}</span>
            {% if wiki_page.reading_time %}
              <span>{{ wiki_page.reading_time }} min read</span>
            {% endif %}
            {% if wiki_page.tags and wiki_page.tags.size > 0 %}
              <span>{{ wiki_page.tags | join: ", " }}</span>
            {% endif %}
          </div>
        </div>
        
        {% if wiki_page.thumbnail %}
          <div class="wiki-card-thumbnail">
            <img src="{{ wiki_page.thumbnail }}" alt="{{ wiki_page.title }}">
          </div>
        {% endif %}
      </article>
      
    {% endunless %}
  {% endfor %}

  {% if visible_count == 0 %}
    <p><em>Coming soon ✍️</em></p>
  {% endif %}
</div>