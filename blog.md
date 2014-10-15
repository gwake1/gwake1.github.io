---
layout: page
title: Blog
---
<div class="home">
<div class="blogposts">
<h1 class="page-heading">Posts</h1>
<ul class="post-list">
{% for post in site.posts %}
<li>
<span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
<h2>
<a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
</h2>
</li>
{% endfor %}
</ul>
</div>
<div class="twitter" id="widget" float:right>
<a class="twitter-timeline" href="https://twitter.com/gwake1" data-widget-id="522462385269788672">Tweets by @gwake1</a> <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
</div>
</div>
<div class="subscribe">
  <p class="rss-subscribe">subscribe <a href="{{ "/feed.xml" | prepend: site.baseurl }}">via RSS</a></p>
</div>
