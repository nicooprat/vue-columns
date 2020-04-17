<img src="../docs/src/.vuepress/public/vue-columns.svg" alt="logo" width="128">

# vue-columns

Vue renderless functional component to dispatch children items in columns

[Documentation](https://vue-columns.netlify.app/)

## Quick start

```vue
<template>
  <Columns :columns="3">
    <div v-for="item in items" :key="item" v-text="item" />
  </Columns>
</template>

<script>
import { Columns } from '../../vue-mention/src/Columns.vue'

export default {
  components: {
    Columns,
  },
  data () {
    return {
      items: Array.from(Array(12)).map((v, i) => i),
    }
  },
}
</script>
```
