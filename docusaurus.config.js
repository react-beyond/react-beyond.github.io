// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'React Beyond',
  tagline: 'Supercharge React beyond component boundaries',
  favicon: 'img/logo.svg',

  // Set the production url of your site here
  url: 'https://react-beyond.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'react-beyond', // Usually your GitHub org/user name.
  projectName: 'react-beyond.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'React Beyond',
        logo: {
          alt: 'React Beyond',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'theSidebar',
            position: 'left',
            label: 'Guide',
            href: '/docs/guide/getting-started'
          },
          {
            type: 'docSidebar',
            sidebarId: 'theSidebar',
            position: 'left',
            label: 'Gallery',
            href: '/docs/category/gallery',
          },
          {
            type: 'docSidebar',
            sidebarId: 'theSidebar',
            position: 'left',
            label: 'API',
            href: '/docs/api'
          },
          {
            type: 'docSidebar',
            sidebarId: 'theSidebar',
            position: 'left',
            label: 'FAQ',
            href: '/docs/faq',
          },
          {href: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/react-beyond/react-beyond',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Marton Sari`,
      },
      prism: {
        // theme: require('prism-react-renderer/themes/dracula'),
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['javascript', 'tsx']
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
      },
    }),
};

module.exports = config;
