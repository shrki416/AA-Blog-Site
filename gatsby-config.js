module.exports = {
  siteMetadata: {
    title: `AA-Blog`,
    description: `A Simple Blog Site`,
    author: `Ahmed Abdelaal`,
    siteUrl: `https://priceless-raman-14819e.netlify.app`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `AA-Blog`,
        short_name: `blog site`,
        start_url: `/`,
        background_color: `#1a1d53`,
        theme_color: `#1a1d53`,
        display: `minimal-ui`,
        icon: `src/images/Favicon-Logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts/`,
        name: `posts`,
      },
    },
    `gatsby-plugin-netlify`,
  ],
}
