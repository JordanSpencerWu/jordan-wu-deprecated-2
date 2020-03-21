module.exports = {
  siteMetadata: {
    title: `Jordan Wu`,
    siteUrl: `https://jordanspencerwu.github.io/`,
    description: `Jordan Wu Website`
  },
  plugins: [
    `gatsby-plugin-less`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    }
  ],
}
