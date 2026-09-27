---
layout: page
title: Software
description: Writing and discoveries in software.
permalink: /software/
---
<nav class="topic-tabs" aria-label="Browse topics"><a href="{{ '/blog/' | relative_url }}">All articles</a><a href="{{ '/physics/' | relative_url }}" {% if page.title == 'Physics' %}aria-current="page"{% endif %}>Physics</a><a href="{{ '/software/' | relative_url }}" {% if page.title == 'Software' %}aria-current="page"{% endif %}>Software</a><a href="{{ '/hardware/' | relative_url }}" {% if page.title == 'Hardware' %}aria-current="page"{% endif %}>Hardware</a></nav>
{% include article-list.html topic=page.title %}