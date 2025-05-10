---
layout: page
title: Posts
permalink: /posts/
---

# Posts

Emissions from my stream of consciousness 🪄

<div class="post-list">
  <hr>
  {% assign sorted_posts = site.posts | sort: 'date' | reverse %}
  {% assign visible_count = 0 %}
  
  {% for post in sorted_posts %}
    {% unless post.hidden_from_posts %}
      {% assign visible_count = visible_count | plus: 1 %}
      <div class="post-item">
        <h3 style="margin-bottom: 0px; margin-top: 0px;">
          <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
        </h3>
        <p>
          {% if post.date %}
            {{ post.date | date: "%B %-d, %Y" }}
          {% endif %}
          
          {% if post.last_updated and post.last_updated != post.date %}
            • Last Update: {{ post.last_updated | date: "%B %-d, %Y" }}
          {% endif %}
        </p>
        
        <p><strong>Tags:</strong> 
          {% if post.tags %}
            {% for tag in post.tags %}
              <span class="post-tag">{{ tag }}</span>
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
    <p><em>No posts available yet ✍️</em></p>
  {% endif %}
</div>
