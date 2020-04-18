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
