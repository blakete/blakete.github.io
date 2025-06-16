---
layout: page
title: Secret Notes Views 📷
permalink: /secret-notes/views
---

{% if jekyll.environment == "development" %}
  <div class="view-navigation">
    <p><a href="/secret-notes">← Back to Notes</a></p>
    <p>Explore your notes by category:</p>
    <ul class="view-directory-list">
          <li><a href="/secret-notes/views/wiki" class="directory-link">📚 Wiki</a></li>
      <li><a href="/secret-notes/views/definitions" class="directory-link">📖 Definitions</a></li>
      <li><a href="/secret-notes/views/reading_notes" class="directory-link">📚 Reading Notes</a></li>
      <li><a href="/secret-notes/views/ideas" class="directory-link">💡 Ideas</a></li>
      <li><a href="/secret-notes/views/drafts" class="directory-link">✏️ Drafts</a></li>
    </ul>
  </div>

{% else %}
  <p>This content is only available in the local development environment.</p>
{% endif %}

<style>
.view-directory-list {
  list-style: none;
  padding-left: 0;
}

.view-directory-list li {
  margin: 0.8em 0;
}

.directory-link {
  display: inline-block;
  padding: 0.5em 1em;
  background-color: var(--brand-color-light, #f0f0f0);
  border-radius: 5px;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.2s ease;
}

.directory-link:hover {
  background-color: var(--brand-color, #ccc);
  text-decoration: none;
}
</style> 