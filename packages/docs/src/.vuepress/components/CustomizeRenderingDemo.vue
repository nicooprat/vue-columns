<template>
  <Columns :columns="3" tags="ol>li" :width="({ current, total }) => current === 1 ? '50%' : '25%'" class="parent">
    <div
      v-for="item in 12"
      :key="item" v-text="item"
      class="child"
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
}
</script>

<style scoped>
.parent {
  margin-left: -.25em;
  margin-right: -.25em;
  font-size: 2em;
}

.child {
  border: .25em solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  text-align: center;
  padding: 1em;
  border-radius: .5em;
}

.child.odd {
  background-color: #293849;
}

.child.even {
  background-color: #32a56d;
}

ol {
  padding-left: 0;
  list-style-position: inside;
}

li {
  font-weight: bold;
}
</style>
