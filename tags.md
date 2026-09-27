---
layout: page
title: Tags
description: Find a thread and follow it.
permalink: /tags/
---
{% assign tags_sorted = site.tags | sort %}
<div class="topic-tabs">{% for tag in tags_sorted %}<a href="#{{ tag[0] | slugify }}">{{ tag[0] | escape }} <span>({{ tag[1].size }})</span></a>{% endfor %}</div>
{% for tag in tags_sorted %}
<section class="tag-section"><h2 id="{{ tag[0] | slugify }}">{{ tag[0] | escape }}</h2><ul class="simple-list">{% for post in tag[1] %}<li><a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a><time>{{ post.date | date: "%b %d, %Y" }}</time></li>{% endfor %}</ul></section>
{% endfor %}