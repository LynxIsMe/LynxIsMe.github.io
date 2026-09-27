---
layout: page
title: Notes
description: A home for shorter thoughts and work in progress.
permalink: /notes/
---
{% assign note_posts = site.posts | where: "section", "notes" %}
{% assign notes_sorted = site.notes | concat: note_posts | sort: "date" | reverse %}
{% if notes_sorted.size > 0 %}
<ul class="simple-list">{% for note in notes_sorted %}<li><a href="{{ note.url | relative_url }}">{{ note.title | escape }}</a>{% if note.date %}<time>{{ note.date | date: "%b %d, %Y" }}</time>{% endif %}</li>{% endfor %}</ul>
{% else %}
<div class="empty-state"><h2>A little space for new ideas.</h2><p>No notes published yet. In the meantime, take a look at what I’ve been writing.</p><a class="text-link" href="{{ '/blog/' | relative_url }}">Explore the articles →</a></div>
{% endif %}