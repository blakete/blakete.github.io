---
layout: home
title: Home
permalink: /
---
# Welcome to Blake's Notes

I research topics related to intelligent, autonomous, trustworthy robotic systems. I also occasionally write blog posts on many topics including AI, robotics, world events, and geopolitics. Keep tabs on this page to stay up to date on my most recent work.

Beyond my research, I am deeply curious about understanding the world and the universe. I am pro-humanity and believe in supporting ideas and efforts that advance our collective well-being.

This page is also a space for me to gather and organize important information on topics that pique my interest. By aggregating insights on world events and phenomena, I hope to create a central hub that fosters deeper understanding and reflection. While I’m still exploring the best way to communicate these ideas, this space will grow with my discoveries and evolving perspectives.

<hr>

# Statement of Values
Pursuing rigorous, innovative research to advance scientific knowledge and address real-world challenges. Committed to open science, collaboration, and ethical inquiry.

<hr>

# Recent Posts
<ul class="post-list">
    {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
    {%- for post in site.posts limit:3 -%}
        <li>
            <span class="post-meta">{{ post.date | date: date_format }}</span>
            <h3>
            <a class="post-link" href="{{ post.url | relative_url }}">
                {{ post.title | escape }}
            </a>
            </h3>
            {%- if site.show_excerpts -%}
            {{ post.excerpt }}
            {%- endif -%}
        </li>
    {%- endfor -%}
</ul>

<a href="/posts" class="older-posts-link">Older posts</a>
