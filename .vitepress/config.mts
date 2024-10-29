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
      { text: 'Blog' , link: 'https://blog.mahinkumar.com/'},
      { text: 'Design' , link: 'https://design.mahinkumar.com/'}
      
    ],

    sidebar: [
      {
        text: 'Axum Super Forms',
        items: [
        //  { text: 'Setup', link: '/axum_super_forms/setup' },
        //  { text: 'Usage', link: '/axum_super_forms/usage' }
        ],
      },
      {
        text: 'Nano Image Server',
        items: [
        //  { text: 'Setup', link: '/axum_super_forms/setup' },
        //  { text: 'Usage', link: '/axum_super_forms/usage' }
        ],
      },
      {
        text: 'Svelte Ecomm',
        items: [
        //  { text: 'Setup', link: '/axum_super_forms/setup' },
        //  { text: 'Usage', link: '/axum_super_forms/usage' }
        ],
      },
      {
        text: 'Task Assistant',
        items: [
        //  { text: 'Setup', link: '/axum_super_forms/setup' },
        //  { text: 'Usage', link: '/axum_super_forms/usage' }
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mahinkumar' }
    ]
  }
})
