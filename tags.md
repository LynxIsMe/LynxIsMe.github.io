---

layout: page

title: Tags

permalink: /tags/

---



{% assign tags\_sorted = site.tags | sort %}

{% for tag in tags\_sorted %}

&nbsp; {% assign tag\_name = tag\[0] %}

\- \[{{ tag\_name }}](#{{ tag\_name | slugify }})

{% endfor %}



<hr>



{% for tag in tags\_sorted %}

&nbsp; {% assign tag\_name = tag\[0] %}

&nbsp; <h2 id="{{ tag\_name | slugify }}">{{ tag\_name }}</h2>

&nbsp; <ul>

&nbsp;   {% for post in site.tags\[tag\_name] %}

&nbsp;     <li>

&nbsp;       <a href="{{ post.url | relative\_url }}">{{ post.title }}</a>

&nbsp;       — {{ post.date | date: "%Y-%m-%d" }}

&nbsp;       {% if post.categories %} • {{ post.categories | join: ", " }}{% endif %}

&nbsp;     </li>

&nbsp;   {% endfor %}

&nbsp; </ul>

{% endfor %}

