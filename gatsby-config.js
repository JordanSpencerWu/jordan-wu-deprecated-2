module.exports = {
  siteMetadata: {
    title: `Jordan Wu`,
    siteUrl: `https://jordanspencerwu.github.io/`,
    description: `Jordan Wu`,
    author: `Jordan Wu`,
  },
  plugins: [
    `gatsby-plugin-less`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jordan Wu`,
        short_name: `JordanWu`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    }
  ],
}
