---

layout: page

title: Hardware

permalink: /hardware/

---



<ul>

{% for post in site.categories.hardware %}

&nbsp; <li>

&nbsp;   <a href="{{ post.url | relative\_url }}">{{ post.title }}</a> — {{ post.date | date: "%Y-%m-%d" }}

&nbsp; </li>

{% endfor %}

</ul>

