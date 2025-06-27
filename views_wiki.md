---
layout: private_page
title: Wiki 📚
permalink: /secret-notes/views/wiki
---

{% if jekyll.environment == "development" %}
  <div class="view-navigation">
    <p><a href="/secret-notes/views">← Back to Views</a></p>
    <!-- <h2>Wiki</h2> -->
    <p>Knowledge base and reference materials:</p>
    
    <div class="private-list">
      <hr>
      {% assign wiki_pages = site.private_local | where_exp: "item", "item.view_category == 'wiki'" | sort: 'title' %}
      {% assign visible_count = 0 %}
    
      {% for page in wiki_pages %}
        {% assign visible_count = visible_count | plus: 1 %}
        <div class="private-entry">
          <h3>
            <a class="post-link" href="{{ page.url | relative_url }}">{{ page.title }}</a>
          </h3>
    
          {% if page.date %}
            <p>
              <time>{{ page.date | date: "%B %-d, %Y" }}</time>
              
              {% if page.last_updated and page.last_updated != page.date %}
                • <span>Last Update: {{ page.last_updated | date: "%B %-d, %Y" }}</span>
              {% endif %}
            </p>
          {% endif %}
          
          {% if page.tags %}
            <p class="tags">
              {% for tag in page.tags %}
                <span class="tag">{{ tag }}</span>
              {% endfor %}
            </p>
          {% endif %}
        </div>
        <hr>
      {% endfor %}
    
      {% if visible_count == 0 %}
        <p><em>No wiki pages available yet ✍️</em></p>
      {% endif %}
    </div>
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