import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  title: "docs.mahinkumar.com",
  description: "Documentation for all projects at github.com/mahinkumar",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Portfolio', link: 'https://mahinkumar.com/' },
      { text: 'Blog' , link: 'https://internaut.mahinkumar.com/'},
    ],

    sidebar: [],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mahinkumar' }
    ]
  }
})
