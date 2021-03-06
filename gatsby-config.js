require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Bryzol Catering`,
    description: `Bryzol Catering to firma oferująca usługi cateringu zarówno słonego, jak i słodkiego.
    Wszelkie oferty tworzone są pod potrzeby Klienta. Firmę stworzyli dwaj pasjonaci Andrzej
    Słociński i Adam Gembalczyk. Jeden lubuje się w gotowaniu i tworzeniu nowoczesnych w formie
    dań ze znanych nam klasyków, drugi za to wymyśla grzechu warte desery i torty.`,
    author: `Bryzol Catering`,
    keywords: `bryzol, mania gotowania, gotowanie, catering, bryzol catering,
    catering bryzol, catering bryzol żory, koryto, blachy biesiadne,
    koryto śląsk, koryto żory, koryto na imprezę, imprezy, imprezy
    okolicznościowe, andrzej słociński, słociński, adam gembalczyk,
    gembalczyk, słodkości, desery, torty, finger food, mini deserki,
    gotowanie na żywo, grillowanie, grill, catering żory, catering śląsk,
    jedzenie na dowóz, domowe obiady, domowe obiady żory, obiadki,
    dobre obiadki, chrzciny, urodziny, przyjęcia, przyjęcie urodzinowe,
    pierogi, ciasto ogniowe, sałatki, dania wegetariańskie, dania fit,
    dania na wynos, dobre obiady domowe, udziec pieczony, pieczeń,
    indyk faszerowany, coś na święta, dania na święta, potrawy
    świąteczne, okoliczność, wigilijki, spotkania świąteczne, spotkania
    urodzinowe, urodziny osiemnaste catering, mały catering, super
    ceny, obiady żory, dobre pierogi, podpłomyki`,
    image: 'static/logo/maskable_icon.png',
    url: `https://bryzol.pl`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-plugin-google-gtag`,
    //   options: {
    //     // You can add multiple tracking ids and a pageview event will be fired for all of them.
    //     trackingIds: ['G-1DPBS0MDK9'],
    //     // This object gets passed directly to the gtag config command
    //     // This config will be shared across all trackingIds
    //     gtagConfig: {
    //       optimize_id: 'OPT_CONTAINER_ID',
    //       anonymize_ip: true,
    //       cookie_expires: 0,
    //     },
    //     // This object is used for configuration specific to this plugin
    //     pluginConfig: {
    //       // Puts tracking script in the head instead of the body
    //       head: false,
    //       // Setting this parameter is also optional
    //       respectDNT: true,
    //       // Avoids sending pageview hits from custom paths
    //       exclude: ['/preview/**', '/do-not-track/me/too/'],
    //     },
    //   },
    // },
    'gatsby-plugin-eslint',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gallery`,
        path: `${__dirname}/src/images/gallery`,
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.GATSBY_DATOCMS_KEY,
        previewMode: false,
        disableLiveReload: false,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bryzol Catering`,
        short_name: `Bryzol`,
        start_url: `/`,
        lang: `pl`,
        background_color: `#52542C`,
        theme_color: `#52542C`,
        display: `standalone`,
        icon: `src/images/maskable_icon.png`,
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    `gatsby-plugin-remove-serviceworker`,
  ],
};
