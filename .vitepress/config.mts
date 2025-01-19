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

    sidebar: {
      // This sidebar gets displayed when a user
      // is on `guide` directory.
      '/relia/': [
        {
          text: 'Relia',
          items: [
            { text: 'Building from source', link: '/relia/build' },
            { text: 'Configuration' , link: '/relia/config'},
            { text: 'Usage', link: '/relia/usage' },
            { text: 'Github',link: 'https://github.com/Mahinkumar/Relia'}
          ]
        }
      ],
      '/osfromscratch/':[
        {
          text: 'OS from scratch',
          items: [
            { text: 'Introduction', link: '/osfromscratch/intro'},
            { text: 'Github', link: 'https://github.com/Mahinkumar/OSFromScratch'}
          ]
        }
      ],
      '/nanoimageserver/':[
        {
          text: 'Nano image server',
          items: [
            { text: 'usage' , link:'/nanoimageserver/usage'},
            { text: 'resizing' , link: '/nanoimageserver/resizing'},
            { text: 'Filters', link: '/nanoimageserver/filters'},
            { text: 'Github' , link:'https://github.com/Mahinkumar/Nano_image_server'}
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mahinkumar' },
      { icon: 'linkedin', link: 'https://linkedin.com/in/mahinkumar'},
    ]
  }
})
