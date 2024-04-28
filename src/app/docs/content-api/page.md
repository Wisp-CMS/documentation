---
title: Content API
nextjs:
  metadata:
    title: Content API
    description: wisp RESTful Content API delivers published content to the world and can be accessed in a read-only manner by any client to render in a website, app, or other embedded media.
---

wisp's REST API delivers published content to the world and can be accessed in a read-only manner by any client to render in a website, app, or other embedded media.

---

## URL

```shell
https://www.wisp.blog/api/v1/{blogId}
```

All read request will be made to your blog-specific endpoint. To get your blog ID and blog's endpoint, log in to wisp and visit the [Setup Page](https://www.wisp.blog/app/setup).

---

## Working Example

Try out a live example below. The endpoint fetches the blog posts for the [wisp cms blog](https://www.wisp.blog/blog).

```shell
curl https://www.wisp.blog/api/v1/cluqyx1rl0000l5ds3f0vkfer/posts
```

---

## Endpoints

The Content API provides access to Posts & Tags. All endpoints return JSON and are considered stable.

| Verb | Path          | Method                         |
| ---- | ------------- | ------------------------------ |
| GET  | /posts/       | List blog posts                |
| GET  | /posts/{slug} | Get specific blog post by slug |
| GET  | /tags         | List tags for blog posts       |

---

## Blog Posts

Blog post are the primary content on a wisp blog.

### List Blog Posts

```shell
GET https://www.wisp.blog/api/v1/{blogId}/posts
```

Using the posts endpoint it is possible to get lists of posts filtered by various criteria. Blog posts are returned in reverse chronological order by published date.

#### Available Filters

| Query | Remarks                                                                          | Default |
| ----- | -------------------------------------------------------------------------------- | ------- |
| limit | Number of post to fetch, accepts numbers & 'all' to fetch all posts              | 20      |
| page  | Page number of blog post to fetch, starts from 1                                 | 1       |
| tag   | Return only blog posts with the at least one of the tags, accepts multiple value | null    |

#### Sample Requests

_List all latest blog post using default page size of 20:_

```shell
GET https://www.wisp.blog/api/v1/{blogId}/posts
```

_List the second page of blog post, with page size of 10, filtered by `announcement` tag:_

```shell
GET https://www.wisp.blog/api/v1/{blogId}/posts?page=2&limit=10&tag=announcement
```

_List all latest blog post with either `javascript` or `nextjs` tag:_

```shell
GET https://www.wisp.blog/api/v1/{blogId}/posts?tag=javascript&tag=nextjs
```

#### Sample Response

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

### Get Blog Post by Slug

```shell
GET https://www.wisp.blog/api/v1/{blogId}/posts/{slug}
```

Using the posts endpoint, you can get a single blog post by it's slug. This endpoint gives the full content of the blog post in HTML format, unlike the listing endpoint which only return a subset of the blog post object.

#### Sample Request

Get blog post with the slug `introducing-wisp`:

```shell
GET https://www.wisp.blog/api/v1/{blogId}/posts/introducing-wisp
```

#### Sample Response

```json
{
  "post": {
    "id": "cluqzhjn70005ihniuhbpkxa8",
    "title": "Introducing wisp: A Headless CMS for Indie Hackers & Startups",
    "image": "https://imagedelivery.net/lLmNeOP7HXG0OqaG97wimw/cluqyx1rl0000l5ds3f0vkfer/a8ba0df1-942a-42d0-9150-976966459c4f.png/public",
    "content": "<img src=\"https://imagedelivery.net/lLmNeOP7HXG0OqaG97wimw/cluqyx1rl0000l5ds3f0vkfer/a8ba0df1-942a-42d0-9150-976966459c4f.png/public\"><h2>Blogs on Next.js SUCKS!!!</h2><p>Let's be real here, managing a blog on your Next.js website can be a total pain in the ass, especially if you're an indie hacker or a bootstrapped startup. I've been there, done that, and I've got the battle scars to prove it.</p><p>Working with MDX files was supposed to be a breeze, but it quickly turned into a nightmare. Generating sitemaps, creating blog lists, and handling image uploads and hosting became tasks that I dreaded.</p>(truncated)",
    "description": "Managing a blog on your Next.js website sucks. I've been there, done that, and I've got the battle scars to prove it. That's why I set out to build wisp. A headless CMS with kickass editor, image CDN and everything you need in a blog.",
    "slug": "introducing-wisp-a-headless-cms-for-indie-hackers-and-startups",
    "authorId": "cluqywzs7000021a9m3aueeiq",
    "teamId": "cluqyx1rl0000l5ds3f0vkfer",
    "createdAt": "2024-04-08T13:24:01.843Z",
    "updatedAt": "2024-04-18T12:35:49.778Z",
    "published": true,
    "tags": [
      {
        "id": "clv5860ec0001qcy3k91unqvy",
        "name": "announcement"
      }
    ]
  }
}
```

---

## Tags

Tags are labels you can give to blog posts on wisp. You can use tags to categorize and filter blog post using the `filter` query on the list blog post endpoint.

### List Tags

```shell
GET https://www.wisp.blog/api/v1/{blogId}/tags
```

Using the tags endpoint, you can list all the tags available on your site. This can be useful if you are creating a sitemap or a taxonomy list for your user.

#### Available Filters

| Query | Remarks                                                            | Default |
| ----- | ------------------------------------------------------------------ | ------- |
| limit | Number of tags to fetch, accepts numbers & 'all' to fetch all tags | 20      |
| page  | Page number of tags to fetch, starts from 1                        | 1       |

#### Sample Request

Get all tags on the blog:

```shell
GET https://www.wisp.blog/api/v1/{blogId}/tags
```

#### Sample Response

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
