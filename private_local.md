---
layout: private_page
title: Private Local Notes 🌱
permalink: /secret-notes
---

{% if jekyll.environment == "development" %}
  Welcome to my evolving digital garden of hypermedia artifacts: notes, ideas, and artwork 🌱 ✨
  
  <p><a href="/secret-notes/views" class="views-link">🗂️ Browse by View</a></p>
  
  <div class="private-list">
    <hr>
    {% assign sorted_private = site.private_local | where_exp: "item", "item.is_symlink != true" | sort: 'date' | reverse %}
    {% assign visible_count = 0 %}
  
    {% for private_page in sorted_private %}
      {% comment %}
      Only show files from the root of _private_local, not from subdirectories
      This excludes symlinks in views/ subdirectories
      {% endcomment %}
      {% assign path_parts = private_page.path | split: "/" %}
      {% assign is_root_file = true %}
      {% if path_parts.size > 2 %}
        {% assign is_root_file = false %}
      {% endif %}
      
      {% if is_root_file %}
        {% assign visible_count = visible_count | plus: 1 %}
        <div class="private-entry">
          <h3>
            <a class="post-link" href="{{ private_page.url | relative_url }}">{{ private_page.title }}</a>
          </h3>
    
          {% if private_page.date %}
            <p>
              <time>Published: {{ private_page.date | date: "%B %-d, %Y" }}</time>
              
              {% if private_page.last_updated and private_page.last_updated != private_page.date %}
                • <span>Last Update: {{ private_page.last_updated | date: "%B %-d, %Y" }}</span>
              {% endif %}
            </p>
          {% endif %}
          
          {% if private_page.tags %}
            <p class="tags">
              {% for tag in private_page.tags %}
                <span class="tag">{{ tag }}</span>
              {% endfor %}
            </p>
          {% endif %}
        </div>
        <hr>
      {% endif %}
    {% endfor %}
  
    {% if visible_count == 0 %}
      <p><em>No private notes available yet ✍️</em></p>
    {% endif %}
  </div>

{% else %}
  <p>This content is only available in the local development environment.</p>
{% endif %}

<style>
.tags {
  margin-top: 0.5em;
}

.tag {
  display: inline-block;
  background-color: var(--brand-color-light, #f0f0f0);
  padding: 0.2em 0.5em;
  margin-right: 0.3em;
  border-radius: 3px;
  font-size: 0.8em;
  color: var(--text-color, #333);
}
</style>
