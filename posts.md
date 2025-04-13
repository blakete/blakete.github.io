---
layout: page
title: Posts
permalink: /posts/
---

# Blog Posts

Here you can find all my blog posts organized by date.

<div class="post-list">
  <hr>
  {% assign sorted_posts = site.posts | sort: 'date' | reverse %}
  {% for post in sorted_posts %}
    <div class="post-item">
      <h3>
        <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
      </h3>
      <p><strong>Published:</strong> {{ post.date | date: "%B %-d, %Y" }}</p>
      
      {% if post.last_updated %}
        <p><strong>Last Update:</strong> {{ post.last_updated | date: "%B %-d, %Y" }}</p>
      {% endif %}
      
      <p><strong>Tags:</strong> 
        {% if post.tags %}
          {% for tag in post.tags %}
            <span class="post-tag">{{ tag }}</span>
          {% endfor %}
        {% else %}
          <span>None</span>
        {% endif %}
      </p>
<!--       
      {% if post.excerpt %}
        <div class="post-excerpt">
          {{ post.excerpt | strip_html | truncatewords: 50 }}
        </div>
      {% endif %} -->
    </div>
    <hr>
  {% endfor %}
</div>
