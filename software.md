---

layout: page

title: Software

permalink: /software/

---



<ul>

{% for post in site.categories.software %}

&nbsp; <li>

&nbsp;   <a href="{{ post.url | relative\_url }}">{{ post.title }}</a> — {{ post.date | date: "%Y-%m-%d" }}

&nbsp; </li>

{% endfor %}

</ul>

