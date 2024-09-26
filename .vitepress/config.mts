import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "docs.mahinkumar.com",
  description: "Documentation for all projects at github.com/mahinkumar",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Axum_super_forms',
        items: [
          { text: 'Setup', link: '/' },
          { text: 'Usage', link: '/' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mahinkumar' }
    ]
  }
})
