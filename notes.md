---
layout: page
title: Notes
permalink: /
---

My personal wiki ✨

<div class="wiki-list">
  <hr>
  {% assign sorted_wiki = site.wiki | sort: 'date' | reverse %}
  {% assign visible_count = 0 %}

  {% for wiki_page in sorted_wiki %}
    {% unless wiki_page.hidden_from_wiki %}
      {% assign visible_count = visible_count | plus: 1 %}
      <div class="wiki-entry">
        <h3>
          <a class="post-link" href="{{ wiki_page.url | relative_url }}">{{ wiki_page.title }}</a>
        </h3>

        {% if wiki_page.last_updated %}
          <p><strong>Last Updated:</strong> {{ wiki_page.last_updated | date: "%B %-d, %Y" }}</p>
        {% endif %}

        <p><strong>Published:</strong> {{ wiki_page.date | default: site.time | date: "%B %-d, %Y" }}</p>
      
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
    {% endunless %}
  {% endfor %}

  {% if visible_count == 0 %}
    <p><em>Coming soon ✍️</em></p>
  {% endif %}
</div>
