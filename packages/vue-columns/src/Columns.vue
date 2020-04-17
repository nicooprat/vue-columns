<script>
export default {
  functional: true,
  props: {
    columns: {
      type: Number,
      default: 1,
    },
  },
  render (h, ctx) {
    const vnodes = ctx.scopedSlots.default && ctx.scopedSlots.default()
    if (!vnodes) {
      return
    }
    // Render children columns and dispatch children in them from left to right
    return h(
      'div',
      {
        ...ctx.data,
        style: 'display: flex; word-break: break-word;',
      },
      Array.from(Array(ctx.props.columns)).map((col, i) =>
        h(
          'div',
          {
            style: `flex: 0 0 ${100 / ctx.props.columns}%; width: ${100 / ctx.props.columns}%;`,
          },
          vnodes.filter((vnode, j) => j % ctx.props.columns === i),
        ),
      ),
    )
  },
}
</script>
