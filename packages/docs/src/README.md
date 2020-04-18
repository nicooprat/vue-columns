---
home: true
heroImage: /vue-columns.svg
heroText: vue-columns
tagline: Vue renderless functional component to dispatch children items in columns
actionText: Get Started →
actionLink: /guide/
features:
- title: Lightweight
  details: Only a few lines of code in a single functional component
- title: Renderless
  details: Just wrap your items, set a column count and forget it
- title: Flexible
  details: Style with your own CSS and make it responsive as you want
footer: MIT Licensed | Copyright © 2020-present Nico Prat
---

This component makes it easy to get a **Masonry-like** layout. Its approach is **very basic**, as it just dispatches each item column by column **instead of relying on complex algorythms** that calculate each item height and display them with absolute positions.

### Pros

* As a functional component, its performance impact will be as low as possible
* There is no calculation involved so it will behave consistenly
* It does not depend on element heights so it doesn't have to wait for its children to be mounted
* As it doesn't rely on absolute positioning, any child height change works as expected

### Cons

* Tab key will follow column by column instead of row by row because it respects the HTML order
* It does not guarantee that the elements are positioned according to their real height
* It does not guarantee that all columns will have almost the same height

Use it if you have a simple use case where children element will likely have almost the same height or if the children visual order is not crucial.

## Demo

Just import the renderless component, wrap your items with it and set a columns count.

```vue
<template>
  <Columns :columns="3">
    <div v-for="item in 12" :key="item" v-text="item" />
  </Columns>
</template>

<script>
import { Columns } from 'vue-columns'

export default {
  components: {
    Columns,
  },
}
</script>
```

<GettingStartedDemo />

## Responsive

Use any solution you like, here's an example with [`vue-mq`](https://github.com/AlexandreBonaventure/vue-mq).

```vue
<template>
  <Columns :columns="$mq | mq({ sm: 1, md: 2, lg: 3 })">
    <div v-for="item in 12" :key="item" v-text="item" />
  </Columns>
</template>

<script>
import { Columns } from 'vue-columns'

export default {
  components: {
    Columns,
  },
}
</script>
```
<ResponsiveDemo />
