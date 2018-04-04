---
layout: post
title:  "It's another attempt at a blog"
date:   2018-04-04 20:43:12 +0100
categories: blog status
---
![Header - Jekyll page of size zero bytes]({{ "/assets/2018-04-04-another-attempt-at-a-blog.header" | absolute_url }})
I'm doing a blog.  Again.

Looking at [my GitHub profile][my github], there's a clear periodicity to my urge to code.  There's a telltale green band on my submissions around every three months.  And it's that time of the year again. Once again I'm going to try and get my lapsed website up and running again.

I'm giving [Jekyll][jekyll] another try, but using [Netlify][netlify] rather than [GitHub][github] to generate and serve it.  GitHub is merely the medium through which my files float through the web.  Netlify has some nice dns features and one-click https through [LetsEncrypt][letsencrypt], plus some CMS functionality that I still need to look into.

Historically, I've always had problems with Jekyll.  My site would build correctly, filling up my local _site directory with beautifully generated files, yet when I try and serve it (either locally or via github pages) the home page would be blank.  Check the source: blank.  Search Google for answers: weirdly unhelpful.

And it happened again this time around.  I started with a clean slate, followed the getting started instructions and had exactly the same issue.  Blank.  I don't know how this isn't a problem people come across more often.  Now given you are reading this, my setup does apparently work with Netlify, so if you do come across this issue maybe that's your best way forward.

What this does mean is that in it's current setup I can't play around without the site before pushing it to production.  Expect things to get a bit ropey round here while I get settled in.

[my github]:https://github.com/dominicbisset
[jekyll]:https://jekyllrb.com/
[netlify]:https://www.netlify.com/
[github]:https://github.com/
[letsencrypt]:https://letsencrypt.org