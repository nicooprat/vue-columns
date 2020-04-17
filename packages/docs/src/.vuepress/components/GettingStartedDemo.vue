<template>
  <Columns :columns="3">
    <div
      v-for="item in items"
      :key="item" v-text="item"
      class="item"
      :class="item % 2 === 0 ? 'odd' : 'even'"
      :style="`height: ${1 + Math.random() * 2}em`"
    />
  </Columns>
</template>

<script>
import Columns from '../../../../../packages/vue-columns/src/Columns'

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

<style scoped>
.item {
  border: .25em solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 2em;
  text-align: center;
  padding: 1em;
  border-radius: .5em;
}

.item.odd {
  background-color: #293849;
}

.item.even {
  background-color: #32a56d;
}
</style>
