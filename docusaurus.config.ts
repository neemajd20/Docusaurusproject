import type { DocusaurusConfig } from '@docusaurus/types';

const config: DocusaurusConfig = {
  title: 'AFYA MSAFIRI Documentation',
  tagline: 'Electronic Screening of Travelers and Public Health Events',
  url: 'https://your-site-url.com', // Replace with your site URL
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'your-org', // Your GitHub org/user name
  projectName: 'afya-msaafiri', // Your repo name
  themeConfig: {
    navbar: {
      title: 'AFYA MSAFIRI',
      logo: {
        alt: 'AFYA MSAFIRI Logo',
        src: 'img/logo.svg',
      },
      items: [
        {to: 'docs/intro', label: 'Documentation', position: 'left'},
        {to: 'docs/intro', label: 'Getting Started', position: 'left'},
        {
          href: 'https://github.com/your-org/afya-msaafiri',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: 'docs/intro',
            },
            {
              label: 'System Requirements',
              to: 'docs/system-requirements',
            },
            {
              label: 'For Travelers',
              to: 'docs/afya-msaafiri/travelers',
            },
            {
              label: 'For Managers',
              to: 'docs/afya-msaafiri/managers',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/your-org/afya-msaafiri',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/your-org',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Your Organization. Built with Docusaurus.`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/dracula'),
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
          editUrl: 'https://github.com/your-org/afya-msaafiri/edit/main/',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  trailingSlash: false, // New property
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  future: {
    disableLegacyBundler: true,
  },
  noIndex: false,
};

export default config;
