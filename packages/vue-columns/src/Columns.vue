<script>
export default {
  functional: true,
  props: {
    columns: {
      type: Number,
      default: 1,
    },
    tags: {
      type: String,
      default: 'div>div',
    },
    width: {
      type: Function,
      default: ({ current, total }) => `${100 / total}%`,
    },
  },
  render (h, ctx) {
    const vnodes = ctx.scopedSlots.default && ctx.scopedSlots.default()
    if (!vnodes) {
      return
    }
    const [row = 'div', column = 'div'] = ctx.props.tags.split('>')
    // Render children columns and dispatch children in them from left to right
    return h(
      row,
      {
        ...ctx.data,
        style: 'display: flex;',
      },
      Array.from(Array(ctx.props.columns)).map((col, i) => {
        const width = ctx.props.width({ current: i, total: ctx.props.columns})
        debugger
        return h(
          column,
          {
            style: `flex: 0 0 ${width}; width: ${width};`,
          },
          vnodes.filter((vnode, j) => j % ctx.props.columns === i),
        )
      }),
    )
  },
}
</script>
