---

layout: page

title: Physics

permalink: /physics/

---



<ul>

{% for post in site.categories.physics %}

&nbsp; <li>

&nbsp;   <a href="{{ post.url | relative\_url }}">{{ post.title }}</a> — {{ post.date | date: "%Y-%m-%d" }}

&nbsp; </li>

{% endfor %}

</ul>

