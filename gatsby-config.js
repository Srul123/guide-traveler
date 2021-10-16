/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Pepe Tours Israel",
    description: "Pepe Tours - Certified Tourist Guide in Israel",
    keywords: "Pepe Tours, Certified Tourist Guide, Israel",
    url: "https://www.pepe-tours.com"
  },
  /* Your site config here  */
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Pepe Tours Logo",
        short_name: "Pepe Tours",
        start_url: "/",
        background_color: "#f7f0eb",
        theme_color: "#a2466c",
        display: "standalone",
        icon: "static/home/israeli_flag.jpg"
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`
      }
    },
    {
      resolve: `gatsby-plugin-sass`
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
        languages: [`en`, `es`],
        defaultLanguage: `es`,
        // if you are using Helmet, you must include siteUrl, and make sure you add http:https
        siteUrl: `https://www.pepe-tours.com`,
        // you can pass any i18next options
        // pass following options to allow message content as a key
        i18nextOptions: {
          interpolation: {
            escapeValue: false // not needed for react as it escapes by default
          },
          keySeparator: false,
          nsSeparator: false
        },
        pages: [
          {
            matchPath: "/:lang?/blog/:uid",
            getLanguageFromPath: true,
            excludeLanguages: ["es"]
          },
          {
            matchPath: "/preview",
            languages: ["es"]
          }
        ]
      }
    }
  ]
}
