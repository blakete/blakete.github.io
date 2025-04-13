---
layout: page
title: Notes
permalink: /
---

# Notes

My personal wiki ✨

<!-- ## Wiki Entries -->

<div class="wiki-list">
  <hr>
  {% assign sorted_wiki = site.wiki | sort: 'title' %}
  {% for wiki_page in sorted_wiki %}
    <div class="wiki-entry">
      <h3>
        <a class="post-link" href="{{ wiki_page.url | relative_url }}">{{ wiki_page.title }}</a>
      </h3>
      <p><strong>Published:</strong> {{ wiki_page.date | default: site.time | date: "%B %-d, %Y" }}</p>
      
      {% if wiki_page.last_updated %}
        <p><strong>Last Update:</strong> {{ wiki_page.last_updated | date: "%B %-d, %Y" }}</p>
      {% endif %}
      
      <p><strong>Tags:</strong> 
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
  {% endfor %}
</div>
