---
title: This is the new draftish.xyz
description: An upgrade from the Ghost website.
coverImage: /posts/new-website/epiphany.png
date: "2021-09-27T21:27:13.118Z"
pinned: true
author:
    name: Narashini
    picture: https://github.com/leakyboi.png
---

I've been trying to make a website I like for a while now, and I think the search is over now. This website uses markdown for the posts and projects and next.js for the website itself. I dont know much about web development, so i forked it from [infi.sh](https://infi.sh) and i made sure to follow the license. I really like the purpleish design and how the pages fade in at just the right speed. The rest of this was written by infi in his [blog post](https://infi.sh/post/new-website), so enjoy some nice markdown showcases.
  
**The source code is available on [GitHub](https://github.com/leakyboi/narashini.xyz).**

## The Demonstration

As for the rest of the post, I will be demonstrating some Markdown features.

**Bold text**. Italic text does not look good with this typeface, which does not have [real italics](https://www.marksimonson.com/notebook/view/FakevsTrueItalics). There's ~~strikethrough~~, though.

# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

| City | Country |
| --- | --- |
| Helsinki | Finland |
| Belgrade | Serbia |
| 2009 | X |
| Oslo | Norway |
| Düsseldorf | Germany |
| Baku | Azerbaijan |
| Malmö | Sweden |
| Copenhagen | Denmark |
| Vienna | Austria |
| Stockholm | Sweden |
| Kyiv | Ukraine |

<!-- The table above is a mystery table of various cities and countries. However, upon closer inspection, we can see that the order stands for the cities and countries that hosted the Eurovision Song Contest, starting in 2007 until 2017. I was surprised how many people didn't know that. -->
<!-- I actually didnt, thank you Infi! -->

> A blockquote.

$$
\begin{align}
    \int_0^\infty x^2 dx &= \frac{d}{dx} \left( \int_0^\infty x^2 dx \right) \\
    &= \frac{d}{dx} \left( \int_0^\infty x^2 dx \right) \\
\end{align}
$$

Inline $\KaTeX$. A [link](https://github.com/infi). Big link without custom display text: https://github.com/infi/infi-minesweeper/tree/dev/src/assets/fonts.

 * A list item
    * Another list item
    * Yet another list item
 
A small code block: `This is a code block.`

A big, highlighted code block, full of yummy Rust code:
```rust
fn main() {
    println!("Hello, world!");
}
```

::::note{title="Admonition"}
This admonition in markdown:
```md
:::note{title="Admonition"}
This admonition in markdown:
[...]
:::
```
You're not going to see any recursion today. I'm sorry.
::::

:::note{title="PSA" type="danger"}
Please do not delete your root directory. Bad things will happen if you do. Or so I'm told.  
:::

:::note{title="Warning" type="warning"}
I am warning you (of something)
:::

:::note{title="Info" type="info"}
the uh  
thing happened
:::

:::note{title="Success" type="success"}
and it happened well, apparently
:::

Emoji codes automatically become their corresponding emoji, for example, `:+1:` becomes :+1:. :smiling_face_with_3_hearts: is also supported. :yum:!
