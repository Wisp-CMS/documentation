---
title: Publishing
nextjs:
  metadata:
    title: Publishing
    description: Publishing is made easier than ever with the wisp publishing interface. Create, edit and delete blog posts easily on the platform today.
---

Publishing is made easier than ever with the wisp publishing interface. Learn how to create, edit and delete blog posts easily on the platform. {% .lead %}

---

## Blog Posts Dashboard

```shell
https://www.wisp.blog/app
```

![Wisp Publishing App Dashboard](/images/docs/editor-interface.png)

Once you've logged in to wisp, you will be brought to the dashboard where you can see all the blog posts on your blog. Here, you can click into any previous blog post to edit it, change its publishing status or even delete it.

Of course, when you've first logged in, you will have to first create your first blog post to get started!

## Create Post Page

```shell
https://www.wisp.blog/app/write
```

To create a new blog post, simply click on `Write` in the navigation bar to get started.

![New Wisp Blog](/images/docs/editor-interface-new.png)

Here, you will be greeted with our editor interface where you can get started by creating the title of your blog post in the title section.

You may hit the `Enter` key when you are done to start writing the body of your blog post.

### wisp Editor

The editor for the blog post content is extremely powerful built for the best publishing experience with support for Hotkeys, Markdown & Slash Command.

### Hotkeys

Familiar hotkeys from popular text editors like Ms Words, Google Docs, etc are available on the editor:

| Element  | Hotkey (Mac/Window)          |
| -------- | ---------------------------- |
| Bold     | ⌘ + B / Ctrl + B             |
| Italic   | ⌘ + I / Ctrl + I             |
| Header 1 | ⌘ + Opt + 1 / Ctrl + Alt + 1 |
| Header 2 | ⌘ + Opt + 2 / Ctrl + Alt + 2 |
| Header 3 | ⌘ + Opt + 3 / Ctrl + Alt + 3 |
| Header 4 | ⌘ + Opt + 4 / Ctrl + Alt + 4 |

### Markdown Support

For those familiar with Markdown command, you may make use of familiar syntax to quickly modify your content. Below is a cheatsheet for some of the syntax you may use:

| Element         | Syntax                     |
| --------------- | -------------------------- |
| Heading         | \# H1, \#\# H2, \#\#\# H3  |
| Bold            | \*\*bold text\*\*          |
| Italic          | \*italicized text\*        |
| Strikethrough   | \~\~strikethrough text\~\~ |
| Highlight       | \=\=highlighted text\=\=   |
| Blockquote      | \> blockquote              |
| Ordered List    | 1. First Item              |
| Unordered List  | \- First Item              |
| Code            | \`code\`                   |
| Code Block      | \`\`\`                     |
| Horizontal Rule | \-\-\-                     |

### Slash Command

Slash command, inspired by Notion, is also available on the editor. Simply type `/` at the start of a new line to access the menu:

![Accessing Slash Command](/images/docs/editor-slash-command.png)

### Other Image Handling

Besides adding image through the slash command, you can also drag-and-drop images into the editor or copy-and-paste them from another page - no more fumbling with clunky "Media Library"!

All images uploaded onto the editor is automatically uploaded onto a CDN server to be served on edge nodes globally. This means shorter loading time for your users!

### Publishing Settings

Once you have populated the title and content of the blog post, click on the `Publish`/`Update` button to save and/or publish the post. This will open the publishing settings slide-out on the right.

![Publishing Settings](/images/docs/editor-publishing-settings.png)

#### Featured Image

If you've uploaded any images on the blog post, it will automatically be available for selection here. Select the image you would like to use as the featured image for this blog post. A blue border will highlight the selected image.

#### Slug

A slug will be automatically generated from the title of your blog post and it is used to reference and retrieve this blog post later. You may edit the slug if you like.

#### Description

A short description can be provided for the blog post. This is commonly used to display a subtitle or short synopsis of the article. This short description will be made available when listing blog post via the [Content API](/docs/content-api), unlike the full content. 

#### Tags

Tags can be added to the blog post to organize and categorize the posts. This is commonly used to allow users to discover similar articles.

You may select from existing tags on the blog. Selected tags will be highlighted blue.

To create a new tag, simply give the tag a name and click on `Create New` to add a new tag.

If you would like to delete tags that are created accidentally or are obsolete, you may head over to the Tags Manager page at [https://www.wisp.blog/app/manage-tags](https://www.wisp.blog/app/manage-tags)

#### Publish

Finally, you may choose if you would like to publish the blog post immediately or save it as draft post first. Toggle the publish setting by clicking on the toggle. Remember, blue means it will be published.