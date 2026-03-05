---

layout: page

title: Notes

permalink: /notes/

---



<ul>

{% assign notes\_sorted = site.notes | sort: "date" | reverse %}

{% for n in notes\_sorted %}

&nbsp; <li>

&nbsp;   <a href="{{ n.url | relative\_url }}">{{ n.title }}</a>

&nbsp;   {% if n.date %} — {{ n.date | date: "%Y-%m-%d" }}{% endif %}

&nbsp;   {% if n.tags %} • tags: {{ n.tags | join: ", " }}{% endif %}

&nbsp; </li>

{% endfor %}

</ul>

