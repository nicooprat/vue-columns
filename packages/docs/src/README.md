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

<Demo />

```vue
<template>
  <Columns :columns="3">
    <div v-for="item in items" :key="item" v-text="item" />
  </Columns>
</template>

<script>
import { Columns } from 'vue-columns'

export default {
  components: {
    Columns,
  },
  data () {
    return {
      items: [...Array(12)].map((v, i) => i + 1),
    }
  },
}
</script>
```
