module.exports = {
  pathPrefix: '/portfolio',
  siteMetadata: {
    title: "Meng-Hua Yu",
    titleTemplate: "%s · Front-end Developer",
    description:
      "a Designer & Front-end Developer, I make Application for better life.",
    url: "https://zoeaeen13.github.io/portfolio",
    image: "favicon-32x32.png",
    twitterUsername: "@zoeaeen13",
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Simplefolio`,
        short_name: `Simplefolio`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#02aab0`,
        display: `standalone`,
        icon: 'src/images/favicon.png',
      },
    },
  ],
};
