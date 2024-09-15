# Welcome to Blake's Notes

I research topics related to intelligent, autonomou, trustworthy robotic systems. Keep tabs on this page to stay up to date on my most recent work.

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