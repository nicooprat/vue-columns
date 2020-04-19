module.exports = {
  head: [
    ['script', {
      src: 'https://polyfill.io/v3/polyfill.min.js?features=Object.assign%2CPromise%2CArray.from%2CEvent',
    }],
    ['script', {
      src: 'https://unpkg.com/shim-keyboard-event-key',
      async: true,
    }],
    ['link', { rel: 'icon', href: '/favicon/favicon.ico' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' }],
    ['link', { rel: 'manifest', href: '/favicon/site.webmanifest' }],
    ['link', { rel: 'mask-icon', href: '/favicon/safari-pinned-tab.svg', color: '#5bbad5' }],
    ['meta', { name: 'msapplication-TileColor', content: '#ffffff' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
  ],
  title: 'vue-columns',
  description: 'Vue renderless functional component to dispatch children items in columns',
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
