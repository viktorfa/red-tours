// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Røde reiser',
  siteDescription: 'Reisebyrå og din ledsager til revolusjonære Kina.',
  pathPrefix: process.env.PATH_PREFIX,
  titleTemplate: '%s',
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        // ...global plugins
      ],
    },
    json: {
      plugins: [
        // ...global plugins
      ],
    },
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'trips/**/*.md',
        typeName: 'Trip',
        remark: {
          plugins: [
            // ...local plugins
          ],
        },
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'data/testimonials.json',
        typeName: 'Testimonial',
      },
    },
  ],
};
