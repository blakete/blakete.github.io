---
layout: page
title: Notes
permalink: /
---

An evolving digital garden of <a href="https://en.wikipedia.org/wiki/Hypertext">hyperartifact</a> notes, ideas, and artwork 🌱 <a href="/not-so-secret-notes" style="text-decoration: none;">✨</a>

<div class="wiki-list">
  <hr>
  {% assign sorted_wiki = site.wiki | sort: 'date' | reverse %}
  {% assign visible_count = 0 %}

  {% for wiki_page in sorted_wiki %}
    {% unless wiki_page.hidden_from_wiki %}
      {% assign visible_count = visible_count | plus: 1 %}
      <div class="wiki-entry">
        <h3 style="margin-bottom: 0px;">
          <a class="post-link" href="{{ wiki_page.url | relative_url }}">{{ wiki_page.title }}</a>
        </h3>

        <p style="margin-bottom: 10px;">
          {{ wiki_page.date | default: site.time | date: "%B %-d, %Y" }}
          
          {% assign date_str = wiki_page.date | date: "%Y-%m-%d" %}
          {% assign updated_str = wiki_page.last_updated | date: "%Y-%m-%d" %}
          
          {% if wiki_page.last_updated and date_str != updated_str %}
            • Last Update: {{ wiki_page.last_updated | date: "%B %-d, %Y" }}
          {% endif %}
        </p>
      
        <p>Tags: 
          {% if wiki_page.tags %}
            {% for tag in wiki_page.tags %}
              <span class="wiki-tag">{{ tag }}</span>
            {% endfor %}
          {% else %}
            <span>None</span>
          {% endif %}
        </p>
        
      </div>
      <hr>
    {% endunless %}
  {% endfor %}

  {% if visible_count == 0 %}
    <p><em>Coming soon ✍️</em></p>
  {% endif %}
</div>
