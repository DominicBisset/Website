---
layout: post
title:  "Disecting Minima"
date:   2018-04-15 20:43:12 +0100
categories: blog status development
---

In my never-ending-quest for a blog that suits my needs I'm trying to get one thing working at a time.  I want a custom theme for this jekyll-generated site, but historically when I've tried to jump in at the deep and do things from scratch I end up getting distracted and ending up with an incomplete mess.  So this time round I'm pondering heavily rewroking the default theme.  This has advantanges in that I can build up incrementally, but it does mean I'll be pulling in all sorts of unneccesary cruft at the same time.

In an effort to avoid this, I'm going to dive deep in to the minima theme to try and understand how it fits together, what I want, and what I can get rid of.  Perhaps after this I'll be  

So I've followed the instructions on [https://jekyllrb.com/docs/themes/](jekyll theme) and run the following command.
```bash
$ bundle show minima
C:/Ruby24-x64/lib/ruby/gems/2.4.0/gems/minima-2.4.1
```

Unsurprisingly my minima folder structure is not dissimmilar to that presented on the [theme page](jekyll theme).

Focussing on the `_layouts` folder, we can see `default`, `home`, `page` and `post` `.html ` files.

`default.html` seems like a reasonable place to start digging.  Here's it's contents:
{% raw %}
```liquid
<!DOCTYPE html>
<html lang="{{ page.lang | default: site.lang | default: "en" }}">

  {%- include head.html -%}

  <body>

    {%- include header.html -%}

    <main class="page-content" aria-label="Content">
      <div class="wrapper">
        {{ content }}
      </div>
    </main>

    {%- include footer.html -%}

  </body>
</html>
```
{% endraw %}
This is the only file without front matter.  `home`, `page` and `post` all reference this default layout in their front matter:

```markdown
---
layout: default
---
```

 These three files form a heriarchy with the `default` file as the parent and the others as potential children.  `default` also directly references the `head.html`, `header.html` and `footer.html` files.  

So we can represent this website in a sort of tree
```
html
    header.html  --presumably provides the head tag and contents
    body
        header.html --presumably provides the headee tag and contents
        [home.html/page.html/post.html] --content depends on the file requested
        footer.html --presumably provides the footer tag and contents
```

 `post` and `page` are familiar enough - they are the layouts that we can use for our test posts and pages.
 
 `home` isn't a standard layout name and I had to look back at my main site's files to understand where it gets used: `index.md` is a practically-empty markdown file that exists solely to reference it:

 ```markdown
 ---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: home
---
```

I'm not just referencing the front matter here.  That's the entire file.  `index.md` gets generated using the `home` layout and then gets served as our `index.html` entrypoint as per any old website.  Looking more carefully at `home.html` we can see that there is indeed no {% raw %}
`{{ content }}`{% endraw %} outlet so regardless of what we enter into our `index.html` it won't get used.  It's a good separation of content and layout, but it does feel a little weird that we can't add any home page content as standard.  I think this is something I might tweak when I start moving things around.

[jekyll theme]: https://jekyllrb.com/docs/themes/
