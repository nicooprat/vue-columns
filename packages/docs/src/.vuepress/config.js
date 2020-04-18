module.exports = {
  head: [
    ['script', {
      src: 'https://polyfill.io/v3/polyfill.min.js?features=Object.assign%2CPromise%2CArray.from%2CEvent',
    }],
    ['script', {
      src: 'https://unpkg.com/shim-keyboard-event-key',
      async: true,
    }],
  ],
  themeConfig: {
    search: false,
    logo: '/vue-columns.svg',
    repo: 'nicooprat/vue-columns',
    docsDir: 'packages/docs',
    locales: {
      '/': {
        lang: 'en-US',
        title: 'vue-columns',
        description: 'Vue renderless functional component to dispatch children items in columns',
      },
    },
    editLinks: true,
    lastUpdated: true,
    smoothScroll: true,
    sidebarDepth: 3,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        lastUpdated: 'Last Updated',
        editLinkText: 'Edit this page on GitHub',
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide/' },
        ],
        sidebar: {
          '/guide/': [
            {
              title: 'Guide',
              collapsable: false,
              children: [
                '/guide/',
              ],
            },
          ],
        },
      },
    },
  },
}
