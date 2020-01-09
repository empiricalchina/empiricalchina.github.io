require(`dotenv`).config({
  path: `.env${process.env.NODE_ENV}`
});

module.exports = {
  // https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-minimal-blog
  siteMetadata: {
    siteTitle: `Empirical China`,
    siteTitleAlt: `Empirical China`,
    siteHeadline: `Empirical China - Sharing China-focused empirical research in the social sciences`,
    siteUrl: `https://empiricalchina.github.io`,
    siteDescription: `We share China-focused empirical research in the social sciences on Twitter`,
    siteLanguage: `en`,
    siteImage: ``,
    author: `pnlng`,
    externalLinks: [
      {
        name: `github`,
        url: `https://github.com/empiricalchina`
      },
      {
        name: `twitter`,
        url: `https://twitter.com/empiricalchina`
      }
    ],
    navigation: [
      {
        title: `About`,
        slug: `/about`
      }
    ]
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        showLineNumbers: true
      }
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `minimal-blog - @lekoarts/gatsby-theme-minimal-blog`,
        short_name: `minimal-blog`,
        description: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and code highlighting.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`
          }
        ]
      }
    },
    `gatsby-plugin-offline`,
    // `gatsby-plugin-netlify`,
    // `gatsby-plugin-twitter`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-stripe`,
      options: {
        async: true
      }
    }
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
  ]
};
