// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'WSBTFC513 Portfolio',
  tagline: '山葵のポートフォリオとして作成したドキュメントWebサイト',
  url: 'https://wsbtfc513.github.io',
  baseUrl: '/portfolio_docusaurus',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'WSBTFC513', // Usually your GitHub org/user name.
  projectName: 'portfolio_docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'jp',
    locales: ['jp'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/WSBTFC513/portfolio_docusaurus/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/WSBTFC513/portfolio_docusaurus/tree/main/',
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
      navbar: {
        title: 'WSBTFC513 Portfolio',
        logo: {
          alt: 'WSBTFC513 Docusaurus Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'ドキュメント',
          },
          { to: '/blog', label: 'ブログ', position: 'left' },
          {
            href: 'https://github.com/WSBTFC513',
            label: 'WSBTFC513 GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Webサイト',
            items: [
              {
                label: 'Portfolio- Express メインWebサイト',
                href: 'https://twitter.com/wasabi_tfc',
              },
              {
                label: 'Portfolio - React 静的Webサイト',
                href: 'https://wsbtfc513.github.io/portfolio_react/',
              },
              {
                label: '個人ブログ - WordPress',
                href: 'https://tfca-wasabi.com/',
              },
            ],
          },
          {
            title: 'SNS',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/wasabi_tfc',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/tfca.wasabi',
              },
              {
                label: 'Instagram',
                href: 'https://t.co/8tXUEsCX9p',
              },
            ],
          },
          {
            title: 'GitHub Public',
            items: [
              {
                label: '静的Webサイト - React',
                href: 'https://github.com/WSBTFC513/portfolio_react',
              },
              {
                label: 'ドキュメントWebサイト - Docusaurus',
                href: 'https://github.com/WSBTFC513/portfolio_docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Portfolio Docusaurus, WSBTFC513. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
