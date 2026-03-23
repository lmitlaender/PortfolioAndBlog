---
title: "How I 'created' this site"
date: 2022-11-27T14:53:59+01:00
draft: false
showEdit: false
---

## How it started
So as it currently stands I'm just going around, applying for internships here and there (fun little story how hard I'm making it for myself - France without french, we'll see how that works out), and I thought it would be kind of good to finally have a better looking personal website, potentially including a blog (See? That's what you're reading rn!)

So then after a little search.. here I am!

## Introducing Hugo
### What is Hugo?
Hugo is an open-source Static Site Generator (SSG) written in Go, created to make building websites fast, flexible and fun.

<img align="right" width="20%" src="./img/gopher-hero.svg" alt="Gopher in Hero Costume with Hugo logo" />

And for now I have to say, I completely agree with that. To be fair I haven't done anything special with it, just using a simple template and changing the settings to my needs, but it was absolutely fun and especially fast, except for a little DNS problem I had.

For example I'm just writing all of this little post in Markdown right now! With the help of a little HTML that is.

### How does it work?
So it really is stupid simple to use: 
1. [Install Hugo](https://gohugo.io/installation/)
2. Install Git
3. Choose a [Theme](https://themes.gohugo.io/) that's to your liking (I used [Blowfish](https://themes.gohugo.io/themes/blowfish/))
4. Follow their [Quickstart Guide](https://gohugo.io/getting-started/quick-start/) and customize your theme
5. ???
6. Deploy -> Profit

### How did I deploy it?
Deploying can be as easy or hard as you want to make it for yourself. They have a [extensive Overview of how to Host and Deploy Hugo](https://gohugo.io/hosting-and-deployment/) in a variety of popular ways right in their Documentation.

As to what I chose..

## GitHub & Netlify
So the first step I took after creating the general outline of my site is push it to a [GitHub Repository](https://github.com/fireworksmakeboom/Personal-Web), feel free to check that out if you're wondering how I configured some things.

Then Deploying it, including a global CDN, continuous deployment, one-click SSL and a custom Domain, was as easy it gets. I basically only followed their Guide on how to [Host on Netlify](https://gohugo.io/hosting-and-deployment/hosting-on-netlify/). In my case I had to set an Environment Variable for ```HUGO_VERSION = 0.107.0``` as Netlify (and Cloudflare where I tried too) both didn't use the newest version by default for some reason.

Let it build for ~20s and - Your website is now live!

### Adding a custom domain
Now this is where I had some problems, but I don't think I can blame them on Netlify (or Cloudflare where I tried too). Both of them give you very nice and simple to understand records you need to add to your domain DNS-Records. So far so good but..

When I first wanted to add my domain mitlaender.dev / www.mitlaender.dev it kept only giving me a self-signed certificate. This doesn't work considering I'm using .dev as my Top-Level-Domain (TLD).

#### So what was my Problem & Solution?
I had to change Domain Registrar for some reason. For whatever reason it is, IONOS blocks DNSSEC behind an "additional Service" and I wasnt really willing to pay for that, considering that I've only had clunky experiences with their system at best, I thought it was time to change registrar and see if that fixes it. And it did! I switched to Google Domains (which they hopefully wont kill any time soon), transfered my records, added the needed ones for Netlify (one CNAME for www and a A-Record to their load balancer something something), activated DNSSEC and:

It works! I don't know if the problem really was the missing DNSSEC, but as far as I'm concerned I'm happy that it works now.

## What to expect here?
So now to end I want to tell you what you can expect here.

I'll probably not be blogging much, maybe here and there if I really think I have something that I want to share with the world but mostly this is my personal "me" space. This means anything related to me, mostly professional, maybe private can appear here!

If you got here I'm happy you took the time to read all this, and I hope you got to know some new things or had an interesting read!