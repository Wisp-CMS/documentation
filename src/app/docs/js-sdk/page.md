---
title: Javascript SDK
nextjs:
  metadata:
    title: Javascript SDK
    description: Use wisp's Javascript SDK to quickly integrate wisp onto your website on popular Javascript frameworks like Next.js, Vite, Svelte, etc.
---

Use wisp's Javascript SDK to quickly integrate wisp onto your website on popular Javascript frameworks like Next.js, Vite, Svelte, etc. {% .lead %}

---

## Installing the SDK

```shell
npm i @wisp-cms/client
```

---

## Building wisp client

```typescript
import { buildWispClient } from '@wisp-cms/client'

export const wisp = buildWispClient({
  baseUrl: 'https://wisp.blog',
  blogId: BLOG_ID,
})
```

To configure the client, simply initialize it with your Blog ID (obtained on the [Setup Page](https://www.wisp.blog/app/setup)) and export it for other files. This allows you to use the client in different parts of your code later.

---

## Fetching content with the client

Now that your client has been set up, you can use it to fetch blog posts or tags from your wisp blog.

### Fetching a list of blog posts

```typescript
const blogPostResult = await wisp.getPosts({ limit: 'all' })
```

To fetch a list of all posts on your blog, you may use the `getPosts` function on the client. The client will fetch 20 latest blog posts by default. You may specify additional parameters to enable pagination:

| Property | Accepted Values | Remarks                                            |
| -------- | --------------- | -------------------------------------------------- |
| limit    | number or 'all' | Specifies the maximum number of blog post to fetch |
| page     | number          | Page number of the query, starts from 1            |
| tags     | string[]        | Array of tags to filter the blog post by           |

**Sample Response:**

```json
{
  "posts": [
    {
      "id": "clv9qc8h000032ljsujj254rq",
      "title": "When to Say No to Next.js: The Guide for Minimalist Web Developers",
      "image": "https://imagedelivery.net/lLmNeOP7HXG0OqaG97wimw/cluqyx1rl0000l5ds3f0vkfer/68b4d481-56c2-43ee-85d1-77d9c98bee3e.png/public",
      "description": "The appeal of Next.js is obvious - built-in server-side rendering, static site generation, file-based routing, and API routes promise a smooth, full-stack development experience. But at what cost?",
      "slug": "when-to-say-no-to-nextjs-the-guide-for-minimalist-web-developers",
      "authorId": "cluqywzs7000021a9m3aueeiq",
      "teamId": "cluqyx1rl0000l5ds3f0vkfer",
      "createdAt": "2024-04-21T16:15:34.885Z",
      "updatedAt": "2024-04-21T16:15:34.885Z",
      "published": true,
      "tags": [
        {
          "id": "clv9qc1ik00012ljs7wb9c85z",
          "name": "nextjs"
        }
      ]
    },
    {
      "id": "clv9mc47c0001scsnebq69abr",
      "title": "New Slash Command and Image Upload Upgrades",
      "image": "https://imagedelivery.net/lLmNeOP7HXG0OqaG97wimw/cluqyx1rl0000l5ds3f0vkfer/87dfe381-d340-46c8-b4c6-a9517c2ac143.png/public",
      "description": "We're excited to announce some slick new upgrades to the wisp editor experience! First up, we've added a handy slash command that gives you a Notion-like experience for quickly formatting content.",
      "slug": "new-slash-command-and-image-upload-upgrades",
      "authorId": "cluqywzs7000021a9m3aueeiq",
      "teamId": "cluqyx1rl0000l5ds3f0vkfer",
      "createdAt": "2024-04-21T14:23:30.887Z",
      "updatedAt": "2024-04-21T14:23:30.887Z",
      "published": true,
      "tags": [
        {
          "id": "clv5860ec0001qcy3k91unqvy",
          "name": "announcement"
        }
      ]
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "totalPages": 1,
    "totalPosts": 32,
    "nextPage": 1,
    "prevPage": null
  }
}
```

### Fetching a single blog post

```typescript
const blogPostResult = await wisp.getPost('blog-post-slug')
```

To fetch a single blog post with the full content, you may use the `getPost` function on the client.

**Sample Response:**

```json
{
  "post": {
    "id": "cluqzhjn70005ihniuhbpkxa8",
    "title": "Introducing wisp: A Headless CMS for Indie Hackers & Startups",
    "image": "https://imagedelivery.net/lLmNeOP7HXG0OqaG97wimw/cluqyx1rl0000l5ds3f0vkfer/a8ba0df1-942a-42d0-9150-976966459c4f.png/public",
    "content": "<img src=\"https://imagedelivery.net/lLmNeOP7HXG0OqaG97wimw/cluqyx1rl0000l5ds3f0vkfer/a8ba0df1-942a-42d0-9150-976966459c4f.png/public\"><h2>Blogs on Next.js SUCKS!!!</h2><p>Let's be real here, managing a blog on your Next.js website can be a total pain in the ass, especially if you're an indie hacker or a bootstrapped startup. I've been there, done that, and I've got the battle scars to prove it.</p><p>Working with MDX files was supposed to be a breeze, but it quickly turned into a nightmare. Generating sitemaps, creating blog lists, and handling image uploads and hosting became tasks that I dreaded.</p><p>And don't even get me started on the lack of a user-friendly interface for non-developers to create and edit blog posts. Unless you were fluent in markdown, contributing to the blog sucks big time. I can't tell you how many times I've had to waste precious developer hours pushing code changes just to fix a simple typo on a blog post. Talk about inefficient!</p><p>And let's not forget the nightmare of hosting images within the same repository as the codebase. Code and fixed assets in a single place? Let's talk about being disgusting.</p><h2>wisp = less frustration &amp; more content</h2><p>That's why I set out to build wisp. I realized that if I wanted to maintain my sanity, I needed to create a solution that would address these pain points once and for all. Enter wisp, a headless CMS designed specifically for indie hackers and startups who want to add a blog to their existing Next.js website without the hassle.</p><p>With wisp, I set out to create a solution that would make managing a blog easy. At its core, wisp offers a Medium-like editor, making it a breeze for non-developers to create and edit content without having to learn a single line of code. No more wrestling with MDX files or deciphering cryptic markdown syntax – just a clean, intuitive interface that even your grandma could use.</p><p>But that's just the tip of the iceberg. wisp also provides fine-grained controls for SEO optimization, ensuring that your blog posts are optimized for search engines and can be easily discovered by your target audience. Because let's face it, what's the point of creating amazing content if no one can find it?</p><p>And when it comes to images, wisp takes care of uploading and serving them via a CDN, eliminating the need to worry about hosting or remembering complex markdown syntax. No more headaches, no more frustration – just a seamless experience that'll make you wonder why you ever did it any other way.</p><h2>Try it out?</h2><p>After two weeks of dedicated work (and maybe a few extra cups of coffee), I'm thrilled to showcase the first blog post written and served from the wisp CMS. This very post you're reading is powered by wisp and served through a Next.js 14 app using the App Router.</p><p>If you've experienced similar frustrations with managing a blog on your Next.js website, I invite you to sign up for early access to wisp. In the coming week, we'll be opening the doors to a limited number of users who want to take wisp for a test drive and provide valuable feedback.</p><p>No more pulling your hair out, no more cursing at your computer screen, and no more wasting developer hours on trivial tasks – just a smooth, seamless experience that'll make you wonder why you ever did it any other way.</p><p>So, what are you waiting for?</p><p>Sign up for early access, and let's make content creation a whole lot less frustrating.</p><p></p>",
    "description": "Managing a blog on your Next.js website sucks. I've been there, done that, and I've got the battle scars to prove it. That's why I set out to build wisp. A headless CMS with kickass editor, image CDN and everything you need in a blog.",
    "slug": "introducing-wisp-a-headless-cms-for-indie-hackers-and-startups",
    "authorId": "cluqywzs7000021a9m3aueeiq",
    "teamId": "cluqyx1rl0000l5ds3f0vkfer",
    "createdAt": "2024-04-08T13:24:01.843Z",
    "updatedAt": "2024-04-18T12:35:49.778Z",
    "published": true,
    "tags": [{ "id": "clv5860ec0001qcy3k91unqvy", "name": "announcement" }]
  }
}
```

### Fetching a list of tags

```typescript
const tagResult = await wisp.getTags({ limit: 'all' })
```

To fetch a list of all tags on your blog, you may use the `getTags` function on the client. The client will fetch 100 latest tags by default. You may specify additional parameters to enable pagination:

| Property | Accepted Values | Remarks                                       |
| -------- | --------------- | --------------------------------------------- |
| limit    | number or 'all' | Specifies the maximum number of tags to fetch |
| page     | number          | Page number of the query, starts from 1       |


**Sample Response:**


```json
{
  "tags": [
    {
      "id": "clv5860ec0001qcy3k91unqvy",
      "name": "announcement",
      "description": null,
      "teamId": "cluqyx1rl0000l5ds3f0vkfer"
    },
    {
      "id": "clv588snu000fqcy3zyusi5ol",
      "name": "blogging",
      "description": null,
      "teamId": "cluqyx1rl0000l5ds3f0vkfer"
    },
    {
      "id": "clv586u4y0006qcy3k30yli5z",
      "name": "growth",
      "description": null,
      "teamId": "cluqyx1rl0000l5ds3f0vkfer"
    },
    {
      "id": "clv9qc1ik00012ljs7wb9c85z",
      "name": "nextjs",
      "description": null,
      "teamId": "cluqyx1rl0000l5ds3f0vkfer"
    },
    {
      "id": "clv586gv10004qcy3af1w8aj7",
      "name": "reddit",
      "description": null,
      "teamId": "cluqyx1rl0000l5ds3f0vkfer"
    },
    {
      "id": "clv588dvw000bqcy37fz9nu52",
      "name": "twitter",
      "description": null,
      "teamId": "cluqyx1rl0000l5ds3f0vkfer"
    }
  ],
  "pagination": {
    "page": 1,
    "totalPages": 1,
    "totalTags": 6,
    "nextPage": null,
    "prevPage": null
  }
}
```