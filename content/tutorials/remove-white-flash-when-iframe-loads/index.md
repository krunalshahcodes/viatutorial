---
title: Remove White Flash when iframe Loads
description: HTML Code snippet to remove white flash when iframe loads
date: 2019-04-30
draft: false
author: Krunal Shah
tags:
  - HTML
  - CSS
---

By using inline style `visibility:hidden` iframe won't show up and `onload="this.style.visibility = 'visible';"` will show iframe when rendering is complete.

```html
<iframe
  style="visibility:hidden;"
  onload="this.style.visibility = 'visible';"
  src="source.html"
></iframe>
```
