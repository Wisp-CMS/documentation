---
title: Core Concept Overview
nextjs:
  metadata:
    title: Overview
    description: Overview of the architecture of wisp and how everything fits to give your reader a first-class reading experience, your content creator a first-class editorial experience and your developer time to focus on things that are more important than pushing code to fix typos.
---

Overview of the architecture of wisp and how everything fits to give your reader a first-class reading experience, your content creator a first-class editorial experience and your developer time to focus on things that are more important than pushing code to fix typos. {% .lead %}

---

## Different components, one experience

A typical setup with wisp will consist of the following:

1. Wisp Admin & Publishing App
2. Wisp Content API
3. Your Frontend App

---

## Wisp Admin & Publishing App

![Wisp Publishing App](/images/docs/editor-interface.png)

The wisp admin & publishing app is the interface to manage your content. Content creators can make use of this interface to create, update or delete blog posts on the blog. It features an intuitive editing interfaces - no more learning markdown or Git just to publish a new post.

![Wisp Editor](/images/docs/editor-slash-command.png)

The app comes with a world-class editor for authoring posts, we will learn more about the editor in the [publishing section](/docs/publishing).

## Content API

Content on the wisp platform is served via the Content API. It delivers published content to the world and can be accessed in a read-only manner by any client to render in a website, app or other embedded media.

Any frontend app can leverage on the Content API to serve content from wisp onto their interface. We also additionally provide a [Javascript client](/docs/js-sdk) to easily fetch content from popular JS frameworks like Next.js, Vite, Svelte, etc.

You will learn more about the API in the [Content API section](/docs/content-api).

## Your Frontend App

wisp is a full headless CMS which is completely agnostic of any particular front end or static site framework. 

It's compatible with just about any front-end you can throw at it - it doesn’t even have to be a website!

We will be adding code examples and blog starter kits for you to quickly get started or draw inspiration from.